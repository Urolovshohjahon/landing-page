import React from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import girl from '../../images/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.png'

function HeaderMain() {
    return (
        <div className="header_main" >
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 ">
                        <h1><span>Studying </span>Online is now much easier</h1>
                        <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
                        <div className="btns">
                            <div className="strel"> <button className="btn-signup">Join for free</button> <div className="soat"></div></div>
                            <BsPlayCircle  fontSize="60px" color="#23BDEE"/>
                           <a  href="#!">Watch how it works</a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-center">
                        <img style={{width: "100%"}} src={girl} alt="se" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain
