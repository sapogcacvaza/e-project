import { Image } from "react-bootstrap"

export default function Home_2() { // carousel

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="section-header text-center">
                                <h2 className="text-black">Testimonials</h2>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="section-header text-center">
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">1</button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">2</button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">3</button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="3000">
                                            <div className="content text-center">
                                                <div className="icon-area animated zoomIn" style={{ animationDelay: "1s" }}>
                                                    <i className="fa fa-quote-right text-black"></i>
                                                </div>
                                                <div className="img-area animated zoomIn" style={{ animationDelay: "1s" }}>
                                                    <Image src="https://vn-test-11.slatic.net/p/be767db7a237c051ac4cb7b1b29d51cc.jpg" />
                                                </div>
                                                <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo perferendis corrupti aliquam ad. Perferendis nihil
                                                    delectus iste voluptate voluptatum vitae totam dolores rerum, aspernatur quidem explicabo vero eos architecto
                                                    maxime!
                                                    Tempore excepturi aspernatur dolorum neque saepe officia vel repellendus eligendi odit reprehenderit unde debitis
                                                    omnis, aperiam, cupiditate in eaque ipsa hic pariatur fugiat aliquam. Doloribus laboriosam maiores quo dolor vel!
                                                </p>
                                                <h5 className="text-black">Nguyen Van Dan</h5>
                                                <h6 className="text-black">- Customer -</h6>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="3000">
                                            <div className="content text-center">
                                                <div className="icon-area animated zoomIn" style={{ animationDelay: "1s" }}>
                                                    <i className="fa fa-quote-right text-black"></i>
                                                </div>
                                                <div className="img-area animated zoomIn" style={{ animationDelay: "2s" }}>
                                                    <Image src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474119oYU/hinh-anh-anime-girl-lanh-lung-ca-tinh-dep_100159130.jpg" />
                                                </div>
                                                <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo perferendis corrupti aliquam ad. Perferendis nihil
                                                    delectus iste voluptate voluptatum vitae totam dolores rerum, aspernatur quidem explicabo vero eos architecto
                                                    maxime!
                                                    Tempore excepturi aspernatur dolorum neque saepe officia vel repellendus eligendi odit reprehenderit unde debitis
                                                    omnis, aperiam, cupiditate in eaque ipsa hic pariatur fugiat aliquam. Doloribus laboriosam maiores quo dolor vel!
                                                </p>
                                                <h5 className="text-black">Hoang Thanh Hai</h5>
                                                <h6 className="text-black">- Customer -</h6>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="3000">
                                            <div className="content text-center">
                                                <div className="icon-area animated zoomIn" style={{ animationDelay: "1s" }}>
                                                    <i className="fa fa-quote-right text-black"></i>
                                                </div>
                                                <div className="img-area animated zoomIn" style={{ animationDelay: "2s" }}>
                                                    <Image src="https://mega.com.vn/media/news/2306_hinh-nen-anime-nu-cho-dien-thoai1.jpg" />
                                                </div>
                                                <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo perferendis corrupti aliquam ad. Perferendis nihil
                                                    delectus iste voluptate voluptatum vitae totam dolores rerum, aspernatur quidem explicabo vero eos architecto
                                                    maxime!
                                                    Tempore excepturi aspernatur dolorum neque saepe officia vel repellendus eligendi odit reprehenderit unde debitis
                                                    omnis, aperiam, cupiditate in eaque ipsa hic pariatur fugiat aliquam. Doloribus laboriosam maiores quo dolor vel!
                                                </p>
                                                <h5 className="text-black">Nguyen Duy Linh</h5>
                                                <h6 className="text-black">- Customer -</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}