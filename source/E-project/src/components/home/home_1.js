export default function Home_1() { // carousel

    return (
        <>
            <div className="home-carousel">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="img/banner/banner2.webp" className="img-fluid w-100 h-150 bg-secondary" alt="First slide" />
                                        <div class="carousel-caption top-0 mt-5 d-none d-md-block">
                                            <h1 className="text-white mt-5 text-uppercase">Flowers Collection</h1>
                                            <button className="btn btn-carousel px-4 py-2 fs-5 mt-5 text-white">Buy Now</button>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="img/banner/banner1.webp" className="img-fluid w-100 h-150" alt="Second slide" />
                                        <div class="carousel-caption top-0 mt-5 d-none d-md-block">
                                            <h1 className="text-white mt-5 text-uppercase">Miles - Campbell Collection</h1>
                                            <button className="btn btn-carousel px-4 py-2 fs-5 mt-5 text-white">Buy Now</button>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="img/banner/banner3.webp" className="img-fluid w-100 h-150" alt="Third slide" />
                                        <div class="carousel-caption top-0 mt-5 d-none d-md-block">
                                            <h1 className="text-white mt-5 text-uppercase">Military Calendars</h1>
                                            <button className="btn btn-carousel px-4 py-2 fs-5 mt-5 text-white">Buy Now</button>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="img/banner/banner1.webp" className="img-fluid w-100 h-150" alt="Fourth slide" />
                                        <div class="carousel-caption top-0 mt-5 d-none d-md-block">
                                            <h1 className="text-white mt-5 text-uppercase">Miles - Campbell Collection</h1>
                                            <button className="btn btn-carousel px-4 py-2 fs-5 mt-5 text-white">Buy Now</button>
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
                    </div>
                </div>

            </div>
        </>
    )
}
