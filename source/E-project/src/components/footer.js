export default function footer() {
    return (
        <>
            <div className="container-fluid bg-hotgreen text-white-50 footer">
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-white mb-3" href="/">Home</h4>
                                <a className="btn-link text-white" href="/shop">Home</a>
                                <a className="btn-link text-white" href="/shop">Shop</a>
                                <a className="btn-link text-white" href="/contact">Contact Us</a>
                                <a className="btn-link text-white" href="/help">Helping Communities</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-white mb-3">Follow Us</h4>
                            <div className="d-flex justify-content-center">
                                <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter text-white"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f text-white"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube text-white"></i></a>
                                <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in text-white"></i></a>
                            </div>
                            <div className="position-relative mt-5 mx-auto">
                                <input className="form-control border-1 border-white w-100 py-3 px-4 rounded-pill text-black" type="number" placeholder="Your Email" />
                                <button type="submit" className="btn btn-blue border-1 border-white py-3 px-4 position-absolute rounded-pill text-black" style={{ top: '0', right: '0' }}><i class="bi bi-chevron-right text-white"></i></button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-white mb-3">Contact</h4>
                                <p className="text-white">Address: HTC Building, 250 Hoang Quoc Viet, Co Nhue, Cau Giay, Hanoi, Vietnam</p>
                                <p className="text-white">Email: info@example.com</p>
                                <p className="text-white">Phone: (+012) 3456 7890</p>
                                <p className="text-white">Payment Accepted</p>
                                <img src="img/payment.png" className="img w-50" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}