import { useNavigate } from 'react-router-dom';
export default function Home_1() { // carousel

    const navigate = useNavigate();
    var onSearch = (event) => {
        event.preventDefault()
        var keyword = event.target.keyword.value
        navigate(`/search/?query=${keyword}`, { replace: true });
    }

    return (
        <>
            <div className="home-carousel">
                <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="img/banner/banner2.webp" className="img-fluid w-100 h-150 bg-secondary" alt="First slide" />
                            <div class="carousel-caption top-0 mt-5 d-none d-md-block">
                                <h1 className="text-white mt-5 text-uppercase">First slide label</h1>
                                <button className="btn btn-carousel px-4 py-2 fs-5 mt-5 text-white">Buy Now</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="img/banner/banner1.webp" className="img-fluid w-100 h-150" alt="Second slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>First slide label</h1>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="img/banner/banner2.webp" className="img-fluid w-100 h-150" alt="Third slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>First slide label</h1>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="img/banner/banner1.webp" className="img-fluid w-100 h-150" alt="Fourth slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>First slide label</h1>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
