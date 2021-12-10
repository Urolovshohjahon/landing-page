import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { TiArrowRightThick } from 'react-icons/ti';
import './Section3.css';
import google from '../../images/google_03.jpg';
import yandex from '../../images/yandex_03.jpg';
function Section3() {
    return (
        <div className="section3">
            <div className="settings">
                <IoMdSettings className="setting_icon1" />
                <IoMdSettings className="setting_icon2" />
                <IoMdSettings className="setting_icon3" />
                <h2>Разработка</h2>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="magazin">
                        {/* <img src={shop1} /> */}
                        <div className="black_screen"></div>
                        <a href="#!"> </a>
                        <h1>LANDING PAGE</h1>
                        <hr />
                        <div className="bottom2">
                            <div className="from100021">от 1000 руб</div>
                            <TiArrowRightThick className="typeicon2" />
                        </div>
                    </div>
                    <div className="magazin">
                        {/* <img src={shop2} /> */}
                        <div className="black_screen"></div>
                        <a href="#!"> </a>
                        <h1>WEB SITE</h1>
                        <hr />
                        <div className="bottom2">
                            <div className="from100022">от 1000 руб</div>
                            <TiArrowRightThick className="typeicon2" />
                        </div>
                    </div>
                    <div className="magazin">
                        {/*  <img src={shop3} /> */}
                        <div className="black_screen"></div>
                        <a href="#!"> </a>
                        <h1>ONLINE SHOPPING</h1>
                        <hr />
                        <div className="bottom2">
                            <div className="from100023">от 1000 руб</div>
                            <TiArrowRightThick className="typeicon2" />
                        </div>
                    </div>
                </div>
                <div className="row space-between">
                    <div className="be_first">
                        <h3>ПРЕВЫЕ В ПОИСКЕ</h3>
                        <p>Мы предлагаем услуги по SEO продвижению
                        сайтов в ведущих поисковых системах Yandex
                        и Google. Поисковое продвижение сайта в
                        нашей веб-студии — это гарантированное
                        присутствие на лидирующих позициях и привлечение необходимой аудитории.</p>
                    </div>
                    <div className="search_system">
                        <img src={google} alt="qw" />
                        <img src={yandex} alt="qw" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Section3
