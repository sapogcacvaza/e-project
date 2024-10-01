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


    // var numberElement = document.getElementById('number');
    // console.log(numberElement);

    // console.log(
    //     new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    //         numberElement,
    //     ),
    // );

    return (
        <>
            <div className="container-fluid mt-5">
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
                                                        <img src={selectID.img} className="img-fluid w-100 h-100" alt="Image" />
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-lg-6" style={{ marginTop: '100px' }}>
                                                <h4 className="fw-bold mb-3 mt-1 text-black d-flex justify-content-center">{selectID.name}</h4>
                                                <p className="mb-4 text-black d-flex justify-content-center" style={{ textAlign: 'center' }}>{selectID.description}</p>
                                                <h5 className="fw-bold d-flex justify-content-center text-black" id="number" value="">{selectID.price} $</h5>

                                                <div className="d-flex justify-content-between">
                                                    <div className="input-group quantity mb-5" style={{ width: '100px', margin: 'auto' }}>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-minus" id="btn-minus">
                                                                <i className="fa fa-minus text-black"></i>
                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control form-control-sm text-center border-0" id="input-button" value="1" min="1" />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-plus" id="btn-plus">
                                                                <i className="fa fa-plus text-black"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link className="btn btn-add" style={{ margin: 'auto' }}>Add to cart</Link>
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
                                            <p className="text-black">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                                Susp endisse ultricies nisi vel quam suscipit </p>
                                            <p className="text-black">Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic
                                                icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, vero iure temporibus voluptatum incidunt qui.</p>
                                            <div className="px-2">
                                                <div className="row g-4">
                                                    <div className="col-6">
                                                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0 text-black">Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0 text-black">0.5 kg</p>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0 text-black">Country of Origin</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0 text-black">China</p>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0 text-black">Quality</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0 text-black">Natural Woods</p>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0 text-black">Сheck</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0 text-black">Good</p>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                            <div className="d-flex">
                                                <img src="/img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: '100px', height: '100px' }} alt="" />
                                                <div className="">
                                                    <p className="mb-2 text-black" style={{ fontSize: '14px' }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5 className="text-black">Jason Smith</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-black">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <img src="/img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: '100px', height: '100px' }} alt="" />
                                                <div className="">
                                                    <p className="mb-2 text-black" style={{ fontSize: '14px' }}>June 24, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5 className="text-black">Sam Peters</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-black">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


