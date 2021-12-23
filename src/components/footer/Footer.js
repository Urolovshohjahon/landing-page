import React from 'react'
import footer from '../../images/footer.PNG'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <a href="#!">
                            <img src={footer} alt="" />
                        </a>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <div className="footer-line"></div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <p className="text-start22">
                        Lorem ipsum dolor sit amet.
                    </p>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <p className="text-start10" >Subscribe to get our Newsletter</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="     Your Email" />
                        <button className="form">Subscribe</button>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <p className="text-start10">Careers | Privacy | Confedincial</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <p className="text-start10">2021 OKS technologies TNC.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
