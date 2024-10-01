import { Image } from "react-bootstrap"

export default function Home_5() { //Fact 
    return (
        <>
            <div className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-black h1-newsletter">Subscribe to our newsletter</h1>
                            <p className="text-black d-flex justify-content-center mt-4 mb-4">Promotions, new products and sales. Directly to your inbox.</p>
                            <input className="input-newsletter border-2 border-black py-3 px-4 rounded-pill" type="text" placeholder="Your Email" />
                            <button type="submit" className="btn btn-secondary   border-1 border-white py-3 px-4 position-absolute rounded-pill text-black" style={{ top: '0', right: '0' }}><i class="bi bi-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}