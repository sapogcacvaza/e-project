import { Image } from "react-bootstrap"

export default function Home_4() { //Banner Section
    return (
        <>
            <div className="two-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Image src="img/banner/two1.webp" />
                            <a className="btn btn-view">Buy Now</a>
                        </div>
                        <div className="col-lg-6">
                            <Image src="img/banner/two2.webp" />
                            <a className="btn btn-view">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}