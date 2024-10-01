import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
export default function CategoryShop() {
    const { categoryId } = useParams(); // Lấy categoryID từ URL
    const [sortOrder, setSortOrder] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch sản phẩm theo categoryID và sortOrder
                const res = await fetch(`http://localhost:3001/products?categoryId=${categoryId}&_sort=${sortOrder}`);
                const data = await res.json();
                console.log("Products Data:", data);
                setProducts(data);
                setFilteredProducts(data);
                setTotalProduct(Math.ceil(data.length / itemsPerPage));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [categoryId, sortOrder, itemsPerPage]);

    useEffect(() => {
        setTotalProduct(Math.ceil(filteredProducts.length / itemsPerPage));
        setCurrentPage(0);
    }, [filteredProducts, itemsPerPage]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const safeIndexOfLastItem = Math.min(indexOfLastItem, filteredProducts.length);
    const safeIndexOfFirstItem = Math.min(indexOfFirstItem, filteredProducts.length);

    const currentItem = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    console.log('current item:', currentItem)
    const generateRandomDiscount = () => {
        return Math.floor(Math.random() * 40) + 1; // Giá trị từ 1 đến 100
    };
    return (
        <>
            <div className="container">
                <h1>Category {categoryId}</h1>
                <div className="product-grid">
                {currentItem.map(item => (
            <div className="col-md-3" key={item.id}>
            <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
                <Link to={`/shop-detail/${item.id}`}>
                    <img src={item.img} className="img w-100 rounded-top" alt={item.name} style={{ height: "200px" }} />
                </Link>
            </div>
            <div className="text-white bg-danger px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>
                Sale {generateRandomDiscount()}%
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4 className="text-hotgreen">{item.name}</h4>
                <p className="text-hotgreen text-truncate">{item.description}</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-hotgreen fs-5 fw-bold mb-0">${item.price}</p>
                    <Link to={`/shop-detail/${item.id}`} className="btn bg-hotgreen px-3 text-white">
                        <i className="bi bi-eye-fill"></i> View Detail
                    </Link>
                </div>
            </div>
        </div>
    </div>
))}

                </div>

                <div className="d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={totalProduct}
                            previousLabel="<"
                            pageClassName="page-item"
                            pageLinkClassName="page-link bg-hotgreen border-white text-white"
                            previousClassName="page-item"
                            previousLinkClassName="page-link bg-hotgreen border-white text-white"
                            nextClassName="page-item"
                            nextLinkClassName="page-link bg-hotgreen border-white text-white"
                            breakClassName="page-item"
                            breakLinkClassName="page-link bg-hotgreen border-white text-white"
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </nav>
                </div>
            </div>
        </>
    );
}
