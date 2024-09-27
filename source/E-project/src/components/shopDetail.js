import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function ShopDetail() {
    var { id } = useParams()

    var [product, setProduct] = useState([])
    var [test, setTest] = useState(false)

    const [sortOrder, setSortOrder] = useState("");
    const [products, setProducts] = useState([]);
    const [cats, setCats] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [itemsPerPage] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openCategory, setOpenCategory] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch danh mục
                const categoriesRes = await fetch('http://localhost:3001/categories');
                const categoriesData = await categoriesRes.json();
                console.log("Categories Data:", categoriesData);

                // Chuyển đổi cấu trúc đối tượng danh mục thành mảng
                const transformedCategories = Object.keys(categoriesData).map(categoryKey => ({
                    name: categoryKey,
                    products: categoriesData[categoryKey]
                }));
                setCats(transformedCategories);



                // Fetch sản phẩm
                const res = await fetch(`http://localhost:3001/products?_sort=${sortOrder}`);
                const data = await res.json();
                console.log("Products Data:", data);

                // Nếu dữ liệu sản phẩm là một mảng chứa một mảng
                const productsArray = Array.isArray(data) && Array.isArray(data[0]) ? data[0] : data;
                console.log("Flattened Products Array:", productsArray);

                let filtered = [];

                if (selectedCategory === "All") {
                    // Hiển thị tất cả sản phẩm nếu "All" được chọn
                    filtered = productsArray;
                } else {
                    // Lọc sản phẩm theo danh mục nếu một danh mục cụ thể được chọn
                    const selectedCat = transformedCategories.find(cat =>
                        cat.products.some(product => product.name === selectedCategory)
                    );

                    if (selectedCat) {
                        filtered = productsArray.filter(product =>
                            selectedCat.products.some(p => p.name === selectedCategory && p.id === product.categoryId)
                        );
                    }
                }

                console.log("Filtered Products:", filtered);

                setProducts(filtered);
                setFilteredProducts(filtered);
                setTotalProduct(Math.ceil(filtered.length / itemsPerPage));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [sortOrder, selectedCategory, itemsPerPage]);

    useEffect(function () {
        if (!test) {
            fetchData()
        }
    }, [test])


    var fetchData = async function () {
        var res = await fetch('http://localhost:3001/products')
        var data = await res.json()
        setProduct(prevFruit => [...prevFruit, ...data])
        setTest(true)
    }

    var selectID = product.find(item => {
        return item.id == id
    })

    const handleSubCategoryClick = (subCategory) => {
        setSelectedCategory(subCategory);
        setOpenCategory(null); // Đóng danh mục khi chọn một danh mục con
    };

    const handleCategoryClick = (category) => {
        if (category === "All") {
            // Khi nhấn vào "All", đặt lại selectedCategory và mở tất cả danh mục
            setSelectedCategory("All");
            setOpenCategory(null); // Đóng tất cả danh mục
        } else {
            // Xử lý nhấn vào danh mục lớn
            setOpenCategory(openCategory === category ? null : category);
            setSelectedCategory("All"); // Đặt lại khi mở danh mục lớn
        }
    };

    return (
        <>
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                {
                                    selectID && (
                                        <>
                                            <div className="col-lg-6" style={{ marginTop: '100px' }}>
                                                <div className="border rounded">
                                                    <Link>
                                                        <img src={selectID.img} className="img-fluid rounded" alt="Image" />
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 py-6" style={{ marginTop: '100px' }}>
                                                <h4 className="fw-bold mb-3">{selectID.name}</h4>
                                                <p className="mb-4" style={{ textAlign: 'center' }}>{selectID.description}</p>
                                                <div className="d-flex justify-content-between py-6" >
                                                    <h5 className="fw-bold mb-3">${selectID.price}</h5>
                                                    <div className="d-flex mb-4 justify-content-center">
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="input-group quantity mb-5" style={{ width: '100px' }}>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" >
                                                                <i className="fa fa-minus text-dark"></i>
                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control form-control-sm text-center border-0" value="1" />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                                <i className="fa fa-plus text-dark"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <Link className="btn btn-dark border border-secondary rounded-pill mb-5 text-white" style={{ marginLeft: '-310px' }}><i className="fa fa-shopping-bag me-2 text-white"></i> Add to cart</Link>
                                                </div>

                                            </div>
                                        </>
                                    )
                                }

                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                                id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                                aria-controls="nav-about" aria-selected="true">Description</button>
                                            <button className="nav-link border-white border-bottom-0" type="button" role="tab"
                                                id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission"
                                                aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                                Susp endisse ultricies nisi vel quam suscipit </p>
                                            <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic
                                                icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                                            <div className="px-2">
                                                <div className="row g-4">
                                                    <div className="col-6">
                                                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">15 kg</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Country of Origin</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">China</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Quality</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">Natural Woods</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Сheck</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">Good</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Min Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">500 Kg</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                            <div className="d-flex">
                                                <img src="/img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: '100px', height: '100px' }} alt="" />
                                                <div className="">
                                                    <p className="mb-2" style={{ fontSize: '14px' }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Jason Smith</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <img src="/img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: '100px', height: '100px' }} alt="" />
                                                <div className="">
                                                    <p className="mb-2" style={{ fontSize: '14px' }}>June 24, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Sam Peters</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-vision" role="tabpanel">
                                            <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                                amet diam et eos labore. 3</p>
                                            <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                                Clita erat ipsum et lorem et sit</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="#">
                                    <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="text" className="form-control border-1 me-4" placeholder="Your Name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="email" className="form-control border-1" placeholder="Your Email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-bottom rounded my-4">
                                                <textarea name="" id="" className="form-control border-1" cols="30" rows="8" placeholder="Your Review *" spellcheck="false"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-flex justify-content-between py-3 mb-5">
                                                <div className="d-flex align-items-center">
                                                    <p className="mb-0 me-3">Please rate:</p>
                                                    <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                                                        <i className="fa fa-star text-muted"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn btn-dark border border-secondary text-white rounded-pill px-4 py-3"> Post Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 py-6">
                            <div className="row g-4 fruite">
                                <div className="col-lg-12">
                                    <div className="mb-4">
                                        <h4>Categories</h4>
                                        <ul className="list-unstyled fruite-categorie">
                                            <li>
                                                <div onClick={() => handleCategoryClick("All")} className="d-flex justify-content-between fruite-name">
                                                    <Link onClick={() => handleCategoryClick("All")} className="text-dark tw-bold">All</Link>
                                                </div>
                                            </li>
                                            {cats.map((item, index) => (
                                                <li key={index}>
                                                    <div
                                                        onClick={() => handleCategoryClick(item.name)}
                                                        className="d-flex justify-content-between fruite-name"
                                                    >
                                                        <Link onClick={() => handleCategoryClick(item.name)} className="text-dark">{item.name}</Link>
                                                        <i className="bi bi-caret-down-fill"></i>
                                                    </div>
                                                    {openCategory === item.name && (
                                                        <ul className="list-unstyled ps-4">
                                                            {item.products.map(product => (
                                                                <li className="d-flex justify-content-start" key={product.id}>
                                                                    <Link to={"/shop"} onClick={() => handleSubCategoryClick(product.name)} className="text-dark">{product.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}


