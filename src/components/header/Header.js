import React, { useEffect, useState } from 'react'
import './Header.css';
import { FaStar, FaArrowCircleUp } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { GiCutDiamond } from 'react-icons/gi';
import axios from 'axios';
import CountUp from 'react-countup'


function Header(props) {
    const [services, setServices] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    const [nav, setNav] = useState(false);
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get("https://shohjahon-backend.herokuapp.com/projects")
            .then((res) => {
                setData(res.data);
                setServices(res.data.services)
                setProjects(res.data.projects)
                setClients(res.data.clients)
                console.log(res.data)
            })
            .catch(() => {
                console.log('O\'xshamadi')
            })

        window.addEventListener('scroll', handle2)






    }, [])


    const handle2 = () => {
        if (window.scrollY > 100) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }



    const gototop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



    const gototopStyle = {
        display: nav ? 'block' : 'none',
        width: '50px',
        height: '50px',
        position: 'fixed',
        bottom: '15px',
        borderRadius: '25px',
        right: '15px',
        zIndex: '1',
        background: 'white',
        color: 'rgb(12, 56, 92)',
        cursor: 'pointer'
    }
    return (
        <header>
            <div className="pinned"></div>
            <div className="pinned2"></div>
            <div className="container">

                <div className="row">
                    <h1>НАШИ САЙТЫ ЗАСТАВЛЯЮТ РАБОТАТЬ ВАШ БИЗНЕС.</h1>
                    <p>Большинство веб-студий считают окончанием работы загрузку сайта в интернет. Но почти никто не умеет делать проекты, которые работают и приносят прибыль.</p>
                    <div className="header_blog">
                        <div className="miniblog">
                            <FaStar className="icon" />
                            <h2  ><CountUp start={0} end={services} duration={2.5} /></h2>
                            <p>оказанных услуг</p>
                        </div>
                        <div className="miniblog">
                            <CgNotes className="icon" />
                            <h2 ><CountUp start={0} end={projects} duration={2.5} /></h2>
                            <p>проектов</p>
                        </div>
                        <div className="miniblog">
                            <GiCutDiamond className="icon" />
                            <h2 ><CountUp start={0} end={clients} duration={2.5} /></h2>
                            <p>постоянных клиентов</p>
                        </div>
                    </div>
                </div>
            </div>
            <FaArrowCircleUp style={gototopStyle} className="gototop" onClick={gototop} />
        </header>
    )
}

export default Header
