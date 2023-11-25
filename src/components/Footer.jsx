import React from 'react'
export default function Footer() {
    return (
        <div className='container mt-5'>
            <div className="footer pt-5">
                <div className="row">
                    <div className="col-md mb-4 mb-md-0" >
                        <h2 >About</h2>
                        <p>
                        "Frontend developer proficient in HTML, CSS, JavaScript, Bootstrap, and React JS. Committed to creating attractive, user-friendly web interfaces."
                        </p>
                    </div>
                    <div className="col-md mb-4 mb-md-0" >
                        <h2>Links</h2>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-house-up me-2"></i><a href=''>Home</a></li>
                            <li><i className="bi bi-person-vcard me-2"></i><a href='#about'>About</a></li>
                            <li><i className="bi bi-boxes me-2"></i><a href='#service'>Service</a></li>
                            <li><i className="bi bi-stack me-2"></i><a href='#project'>Projects</a></li>
                        </ul>
                    </div>
                    <div className="col-md mb-4 mb-md-0" >
                        <h2>Services</h2>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-laptop me-2"></i>Web Design</li>
                            <li><i className="bi bi-laptop me-2"></i>Web Development</li>
                            <li><i className="bi bi-laptop me-2"></i>Frontend Development</li>
                            <li><i className="bi bi-laptop me-2"></i>SEO</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h2>Have a Question</h2>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-fill me-3"></i>Gujarat,India</li>
                            <li><i className="bi bi-telephone-fill me-3"></i>+91 9327283868</li>
                            <li className="d-flex"><i className="bi bi-envelope-fill me-3 "></i><span>tanmaybhunia996@gmail.com</span></li>
                        </ul>
                    </div>
                </div>
                <div className="social mt-4 mt-md-5" data-aos="fade-up" data-aos-duration="1000" >
                   <ul className="list-unstyled text-center text-md-start">
                        <li ><a href='https://twitter.com/tanmay_bhunia16' target="_blank"><span><i className="bi bi-twitter fs-4"></i></span></a></li>
                        <li><a href='https://www.facebook.com/tanmaybhuniatb' target="_blank" ><span><i className="bi bi-facebook fs-4"></i></span></a></li>
                        <li><a href='https://www.instagram.com/_tanmay.t/' target="_blank"><span><i className="bi bi-instagram fs-4"></i></span></a></li>
                        <li><a href='https://www.linkedin.com/in/tanmay-bhunia-481a1524b/' target="_blank" ><span><i className="bi bi-linkedin fs-4"></i></span></a></li>
                        <li><a href='https://github.com/tanmay996' target="_blank"><span><i className="bi bi-github fs-4"></i></span></a></li>

                   </ul>
                </div>
                <p className='text-center'>Copyright ©2023 All rights reserved | This template is made by Tanmay bhunia</p>
               
            </div>
        </div>
    )
}
