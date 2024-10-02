import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Home_6() { //Fact 
    return (
        <>
            <div className="show-product">
                <div className="container-fluid mb-5  ">
                    <div className="container">
                        <h1 className="show-name text-white">Miles - Campbell Collection</h1>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-12">
                                <div className="row g-5 align-items-center">

                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh1.jpg" />
                                            <p className="text-black text-center mt-3">British Bird 2025</p>
                                            <p className="text-black text-center">Calendar by Laurie Campbell</p>
                                            <p className="text-black text-center">50.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh2.jpg" />
                                            <p className="text-black text-center mt-3">British Sunrises 2025</p>
                                            <p className="text-black text-center">Calendar by Archie Miles</p>
                                            <p className="text-black text-center">45.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh3.jpg" />
                                            <p className="text-black text-center mt-3">British Rivers 2025</p>
                                            <p className="text-black text-center">Calendar by Archie Miles</p>
                                            <p className="text-black text-center">45.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh4.jpg" />
                                            <p className="text-black text-center mt-3">British Natural  2025</p>
                                            <p className="text-black text-center">Calendar by Archie Miles</p>
                                            <p className="text-black text-center">55.00$</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh5.jpg" />
                                            <p className="text-black text-center mt-3">British Butterflies 2025</p>
                                            <p className="text-black text-center">Calendar by Laurie Campbell</p>
                                            <p className="text-black text-center">50.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh6.jpg" />
                                            <p className="text-black text-center mt-3">British Coastline 2025</p>
                                            <p className="text-black text-center">Calendar by Archie Miles</p>
                                            <p className="text-black text-center">45.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh7.jpg" />
                                            <p className="text-black text-center mt-3">British Woodlands 2025</p>
                                            <p className="text-black text-center">Calendar by Laurie Campbell</p>
                                            <p className="text-black text-center">45.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh11.jpg" />
                                            <p className="text-black text-center mt-3">British Birds of Prey  2025</p>
                                            <p className="text-black text-center">Calendar by Archie Miles</p>
                                            <p className="text-black text-center">55.00$</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh8.jpg" />
                                            <p className="text-black text-center mt-3">British Wild Flowers 2025</p>
                                            <p className="text-black text-center">Calendar by Laurie Campbell</p>
                                            <p className="text-black text-center">50.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh9.jpg" />
                                            <p className="text-black text-center mt-3">British Heritage Trees 2025</p>
                                            <p className="text-black text-center">Calendar by Archie Miles</p>
                                            <p className="text-black text-center">45.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh10.jpg" />
                                            <p className="text-black text-center mt-3">British Heritage Trees 2024</p>
                                            <p className="text-black text-center">Calendar by Laurie Campbell</p>
                                            <p className="text-black text-center">20.00$</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 product-hover">
                                        <Link to={"/shop"}>
                                            <Image className="mt-5" src="img/calendar/anh12.jpg" />
                                            <p className="text-black text-center mt-3">British Wild Animals 2025</p>
                                            <p className="text-black text-center">Calendar by Laurie Campbell</p>
                                            <p className="text-black text-center">55.00$</p>
                                        </Link>
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