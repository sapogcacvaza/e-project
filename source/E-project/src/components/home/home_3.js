import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Home_3() { // Featurs
    return (
        <>
            <div className="lonely-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5" style={{ position: 'relative' }} >
                            <Image src="img/banner/lonely.webp" className="" />
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <a className="lonely-name text-white" href="">British Nature in Close Up 2025 Calendar by Archie Miles & Laurie Campbell</a><br />
                            <span className="lonely-price text-black">500.000đ</span>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div className="input-group quantity mb-5" style={{ width: '100px', margin: 'auto' }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-minus">
                                            <i className="fa fa-minus text-black"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm text-center border-0" value="1" min="1" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-plus">
                                            <i className="fa fa-plus text-black"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Link className="btn btn-add" style={{ margin: 'auto' }}>Add to cart</Link>
                            <br />
                            <Link className="lonely-view">More payment options</Link>
                            <br />
                            <Link className="d-flex justify-content-right lonely-view">Full details <i class="bi bi-arrow-right"></i></Link>
                            <div className="d-flex justify-content-between lonely-links">
                                <h6>Share</h6>
                                <div className="d-flex justify-content-between">
                                    <Link className="lonely-icons text-body"><i class="bi bi-facebook"></i></Link>
                                    <Link className="lonely-icons text-body"><i class="bi bi-twitter"></i></Link>
                                    <Link className="lonely-icons text-body"><i class="bi bi-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}