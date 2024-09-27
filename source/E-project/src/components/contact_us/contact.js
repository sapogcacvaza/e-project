import { Link } from "react-router-dom"
export default function Contact() {
    return (
        <>
            <br />
            <div class="container-fluid contact py-5">
                <div class="container py-5">
                    <div class="p-5 bg-light rounded">
                        <div class="row g-4">
                            <div class="col-12">

                                <div class="text-center mx-auto" style={{ maxWidth: '700px' }}>
                                    <h1 class="text-dark">Get in touch</h1>

                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="h-100 rounded">
                                    <iframe class="rounded w-100"
                                        style={{ height: '400px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9751.257857024753!2d105.77817635876555!3d21.048541560169262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3b4220c2bd%3A0x1c9e359e2a4f618c!2sB%C3%A1ch%20Khoa%20Aptech!5e0!3m2!1svi!2s!4v1726717850875!5m2!1svi!2s"
                                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <form action="" class="">
                                    <input type="text" class="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                                    <input type="email" class="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                                    <textarea class="w-100 form-control border-0 mb-4" rows="5" cols="10" placeholder="Your Message"></textarea>
                                    <button class="w-100 btn form-control border-secondary py-3 bg-white text-dark " type="submit">Submit</button>
                                </form>
                            </div>
                            <div class="col-lg-5">
                                <div class="d-flex p-4 rounded mb-4 bg-white">
                                    <i class="fas fa-map-marker-alt fa-2x text-dark me-4"></i>
                                    <div class="">
                                        <h4 class="d-flex justify-content-center">Address</h4>
                                        <p class="mb-2">HTC Building, 250 Hoang Quoc Viet, Co Nhue, Cau Giay, Hanoi, Vietnam</p>
                                    </div>
                                </div>
                                <div class="d-flex p-4 rounded mb-4 bg-white">
                                    <i class="fas fa-envelope fa-2x text-dark me-4"></i>
                                    <div>
                                        <h4 class="d-flex justify-content-center">Mail Us</h4>
                                        <p class="mb-2">info@example.com</p>
                                    </div>
                                </div>
                                <div class="d-flex p-4 rounded bg-white">
                                    <i class="fa fa-phone-alt fa-2x text-dark me-4"></i>
                                    <div>
                                        <h4 class="d-flex justify-content-center">Telephone</h4>
                                        <p class="mb-2">(+012) 3456 7890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}