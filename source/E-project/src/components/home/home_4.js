import { Image } from "react-bootstrap"

export default function Home_4() { //Banner Section
    return (
        <>
            <div className="two-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <a className="two-links opacity" href="/shop" style={{ position: 'relative' }}>
                                <a className="btn btn-view" style={{ position: 'absolute', color: '#fff', left: '30%', top: '40%' }}>Buy Now</a>
                                <Image src="img/banner/two1.webp" />
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="two-links opacity" href="/shop" style={{ position: 'relative' }}>
                                <a className="btn btn-view" style={{ position: 'absolute', color: '#fff', left: '30%', top: '40%' }}>Buy Now</a>
                                <Image src="img/banner/two2.webp" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}