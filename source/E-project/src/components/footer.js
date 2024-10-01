export default function footer() {
    return (
        <>
            <div className="container-fluid bg-hotgreen text-white-50 footer">
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3" href="/">Home</h4>
                                <a className="btn-link" href="/shop">Home</a>
                                <a className="btn-link" href="/shop">Shop</a>
                                <a className="btn-link" href="/contact">Contact Us</a>
                                <a className="btn-link" href="/about">Helping Communities</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-light mb-3">Follow Us</h4>
                            <div className="d-flex justify-content-center">
                                <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <div className="position-relative mt-5 mx-auto">
                                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
                                <button type="submit" className="btn btn-hotgreen border-1 border-white py-3 px-4 position-absolute rounded-pill text-white" style={{ top: '0', right: '0' }}><i class="bi bi-chevron-right"></i></button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Contact</h4>
                                <p>Address: HTC Building, 250 Hoang Quoc Viet, Co Nhue, Cau Giay, Hanoi, Vietnam</p>
                                <p>Email: info@example.com</p>
                                <p>Phone: (+012) 3456 7890</p>
                                <p>Payment Accepted</p>
                                <img src="img/payment.png" className="img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}