import React from 'react';
// import "../svgicon";
export default function Contanct() {
   
    return (
        <div className='container' id='contact' data-aos="fade-up" data-aos-duration="1000" >
            <div className="contact p-3">
                <div className='heading text-center'>
                    <span className="heading-1">Contact Me</span>
                    <span className="heading-2 head-2">Contact</span>
                </div>
                <div className="row mt-3 mt-md-5 pt-4" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-section p-4 text-center">
                            <div className="contact-icon d-flex align-items-center justify-content-center mx-auto">
                            <i className="bi bi-pin-map-fill fs-3"></i>
                            </div>
                            <h3 className="mb-4">Address</h3>
                            <p>
                                Morbi
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                        <div className="contact-section p-4 text-center">
                            <div className="contact-icon d-flex align-items-center justify-content-center mx-auto">
                            <i className="bi bi-telephone-fill fs-3"></i>
                            </div>
                            <h3 className="mb-4">Contact number</h3>
                            <p>+91 9327283868</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                        <div className="contact-section p-4 text-center">
                            <div className="contact-icon d-flex align-items-center justify-content-center mx-auto">
                            <i className="bi bi-send-fill fs-3"></i>
                            </div>
                            <h3 className="mb-4">Email Addess</h3>
                            <p>tanmaybhunia16@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                        <div className="contact-section p-4 text-center">
                            <div className="contact-icon d-flex align-items-center justify-content-center mx-auto">
                            <i className="bi bi-linkedin fs-3"></i>
                            </div>
                            <h3 className="mb-4">Linkdin</h3>
                            <p>https://www.linkedin.com/in/tanmay-bhunia-481a1524b/</p>
                        </div>
                    </div>
                </div>
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-6 px-0">
                        <div className="contact-img">

                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <form action="#" className="p-4 p-md-5">
                            <div className="form-group ">
                                <input type="text" className='form-control' placeholder="Your Name"></input>
                                </div>
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder="Your Email">
                                    </input>
                                    </div>
                            <div className="form-group"><input type="text" className='form-control' placeholder="Subject">
                                </input>
                                </div>
                            <div className="form-group">
                                <textarea cols="30" rows="7" type="text" className='form-control' placeholder="Message"></textarea>
                                </div>
                            <div className="form-group">
                                <button className="btn btn-download py-3 px-5 ">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
