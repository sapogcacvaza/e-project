export default function Home_6() { //Fact 
    return (
        <>
            <div className="container-fluid mb-5  ">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <h1>Categories Products</h1>
                        <div className="col-md-12 col-lg-6">
                            <a href="/shop" style={{ position: 'relative' }} >
                                <h3 style={{ position: 'absolute', color: '#fff', left: '47%', top: '50%', fontWeight: 'bold' }}>Sofa</h3>
                                <img src="img/homeImage/sofa3.jpg" className="img-fluid w-100 h-150 bg-secondary rounded" />
                            </a>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="row g-3 py-5">
                                <div className="col-md-12 col-lg-6" style={{ position: 'relative' }}>
                                    <a href="/shop">
                                        <img src="img/homeImage/banner3.jpg" className="img w-100  bg-secondary rounded" height={'200px'} />
                                        <h3 style={{ position: 'absolute', color: '#fff', left: '25%', top: '45%', fontWeight: 'bold' }}>Living Room</h3>
                                    </a>
                                </div>
                                <div className="col-md-12 col-lg-6" style={{ position: 'relative' }} >
                                    <a href="/shop">
                                        <h3 style={{ position: 'absolute', color: '#fff', left: '40%', top: '49%', fontWeight: 'bold' }}>Chair</h3>
                                        <img src="https://kika.vn/wp-content/uploads/2022/08/ghe-thu-gian-hang-cao-cap-GT04-1.jpg" height={'200px'} className="img w-100  bg-secondary rounded" />
                                    </a>
                                </div>
                            </div>
                            <div className="row g-3 py-5">
                                <div className="col-md-12 col-lg-6" style={{ position: 'relative' }} >
                                    <a href="/shop">
                                        <h3 style={{ position: 'absolute', color: '#fff', left: '30%', top: '46%', fontWeight: 'bold' }}>Wardrobe</h3>
                                        <img src="https://noithatvanphonggiare.com/media/product/5809_tu_quan_ao_canh_kinh_cao_cap_hien_dai_tqa73.jpg" height={'200px'} className="img w-100  bg-secondary rounded" />
                                    </a>
                                </div>
                                <div className="col-md-12 col-lg-6" style={{ position: 'relative' }}>
                                    <a href="/shop">
                                        <h3 style={{ position: 'absolute', color: '#fff', left: '40%', top: '46%', fontWeight: 'bold' }}>Floor</h3>
                                        <img src="https://noithatphuchung.com.vn/wp-content/uploads/2021/02/TSB004.jpg" height={'200px'} className="img w-100  bg-secondary rounded" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}