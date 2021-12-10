import React, { useEffect, useState } from 'react';
import './Section.css';
import { IoMdRocket } from 'react-icons/io';
import { TiArrowRightThick } from 'react-icons/ti';
import { GiSmartphone } from 'react-icons/gi';
import { FaHeartbeat, FaSearch } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdGroupWork } from 'react-icons/md';
import { GiLaptop } from 'react-icons/gi';
import { connect } from 'react-redux';


function Section(props) {
    useEffect(() => {
        window.onscroll = handle;
    })

    const [opened, setOpened] = useState(false);
    const [nav, setNav] = useState(false);
    const handle = () => {
        if (window.scrollY > 100) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }
    const open_menu = () => {
        setOpened(!opened)
    }
    let menuStyle = {
        display: 'flex',
        transform: opened ? 'translateX(0px)' : 'translateX(-100%)',
        transition: '0.5s',
        width: '60%',
        height: '100%',
        background: 'rgb(12, 56, 92)',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '45px 45px',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: 1
    }
    let bigButton = {
        display: opened ? 'block' : 'none',
        width: '100%',
        height: '100%',
        background: 'rgb(0,0,0,0.5)',
        position: 'fixed',
        top: '0',
        zIndex: 1
    }
    let nav_style = {
        width: '100%',
        height: '75px',
        background: nav ? 'blue' : 'rgb(12, 56, 92)',
        transition: '1s',
        position: 'fixed',
        top: '0',
        zIndex: '1',
        boxShadow: '1px 1px 1px 1px rgb(12, 56, 92)',
        display: 'flex',
        alignItems: 'center'
    }
    return (
        <section>
            <nav style={nav_style}>
                <div className="container">
                    <div className="row space-between align-items-center">

                        <form>
                            <input type="search" placeholder="Search..." />
                            <FaSearch className="search_icon" />
                        </form>
                        <h1 className="rating">Rating: {props.initialState.RATING}/5</h1>
                        <ul>
                            <li><a href="!#">Главная</a></li>
                            <li><a href="!#">О нас</a></li>
                            <li><a href="!#">Услуги</a></li>
                            <li><a href="!#">Наши работы</a></li>
                            <li><a href="!#">Контакты</a></li>
                        </ul>
                        <button onClick={open_menu}><BiMenuAltRight className="fabars" /></button>
                    </div>
                </div>

            </nav>
            <button style={bigButton} onClick={open_menu}></button>
            <div className="section_nav">
                <div className="container menu2">
                    <div className="row">
                        <ul>
                            <li><a href="!#">Главная</a></li>
                            <li><a href="!#">О нас</a></li>
                            <li><a href="!#">Услуги</a></li>
                            <li><a href="!#">Наши работы</a></li>
                            <li><a href="!#">Контакты</a></li>
                        </ul>
                    </div>
                </div>
                <div style={menuStyle} className="menu">
                    <FaTimes className="close" onClick={open_menu} />
                    <a href="#!" onClick={open_menu}><FaHome className="menu_icons" />Главная</a>
                    <a href="#!" onClick={open_menu}><GiLaptop className="menu_icons" />Услуги</a>
                    <a href="#!" onClick={open_menu}><MdGroupWork className="menu_icons" />Наши работы</a>
                    <a href="#!" onClick={open_menu}><FaTelegramPlane className="menu_icons" />Контакты</a>
                    <a href="#!" onClick={open_menu}><FaInfoCircle className="menu_icons" />О нас</a>
                </div>

            </div>
            <div className="section_main">
                <div className="container">
                    <div className="row space-between">
                        <h2>Студия</h2>
                        <p>Основная специализация — проектирование сайов и landing page. Наша команда, состоящая из дизайнеров, маркетологов и программистов, поддерживает каждый проект на протяжении всей его жизни. Студия занимается разработкой индивидуального дизайна, оптимизацией скорости работы продукта, предоставляет услуги по продвижению сайтов.</p>
                    </div>
                    <div className="row space-between">
                        <div className="section_blok">
                            <IoMdRocket className="section_icon" />
                            <h3>Старт</h3>
                            <p>Вы хотите получать больше клиентов и прибыли из интернета?С нуля разработаем сайт любой сложности,учитывая индивидуальные особенности вашего бизнеса. Стоимость создания сайта в каждом конкретном случае индивидуальна и рассчитывается исходя из пожеланий и требований клиента</p>
                            <div className="bottom">
                                <div className="from1000">от 1000 руб</div>
                                <TiArrowRightThick className="typeicon" />
                            </div>
                        </div>
                        <div className="section_blok">
                            <GiSmartphone className="section_icon" />
                            <h3>Продвижение</h3>
                            <p>Вы хотите получать больше клиентов и прибыли из интернета?С нуля разработаем сайт любой сложности,учитывая индивидуальные особенности вашего бизнеса. Стоимость создания сайта в каждом конкретном случае индивидуальна и рассчитывается исходя из пожеланий и требований клиента</p>
                            <div className="bottom">
                                <div className="from1000">от 1000 руб</div>
                                <TiArrowRightThick className="typeicon" />
                            </div>
                        </div>
                        <div className="section_blok">
                            <FaHeartbeat className="section_icon" />
                            <h3>Поддержка</h3>
                            <p>Вы хотите получать больше клиентов и прибыли из интернета?С нуля разработаем сайт любой сложности,учитывая индивидуальные особенности вашего бизнеса. Стоимость создания сайта в каждом конкретном случае индивидуальна и рассчитывается исходя из пожеланий и требований клиента</p>
                            <div className="bottom">
                                <div className="from1000">от 1000 руб</div>
                                <TiArrowRightThick className="typeicon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapToStateProps = (state) => {
    return {
        initialState: state
    }
}

export default connect(mapToStateProps, null)(Section)
