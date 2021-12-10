import React, { useEffect, useState } from 'react'
import './Section6.css';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GiCutDiamond } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { store } from '../store';

function Section6(props) {
    useEffect(() => {
        axios.get("https://shohjahon-backend.herokuapp.com/grade")
            .then(res => {
                let RATING=0;
                res.data.forEach((val, key) => {
                    RATING += val.grade;
                });
                RATING = RATING / res.data.length;
                store.dispatch({
                    type: 'CHANGE_RATING',
                    RATING: RATING.toFixed(2)

                })
            })
            .catch(err => console.log(err));
        setGold(localStorage.getItem('myGrade'));
    }, [])
    const [gradeBlock, setGradeBlock] = useState(false);
    const [gold, setGold] = useState(0);


    const toGrade = () => {
        setGradeBlock(!gradeBlock);
    }
    const saveGrade = (grade) => {
        setGold(grade);

        localStorage.setItem('myGrade', grade);
        axios.post('https://shohjahon-backend.herokuapp.com/grade', { grade: grade })
            .then(res => {
                setGradeBlock(!gradeBlock);
            })
            .catch(err => {
                console.log(err)
            });

        axios.get("https://shohjahon-backend.herokuapp.com/grade")
            .then(res => {
                let RATING = 0;
                res.data.forEach((val, key) => {
                    RATING = RATING + val.grade;
                });
                RATING = RATING / res.data.length;
                store.dispatch({
                    type: 'CHANGE_RATING',
                    RATING: RATING.toFixed(2)
                })
            })
            .catch(err => console.log(err));
        /* setTimeout(() => {
            
        }, 1000) */
    }

    const gradeStyle = {
        display: gradeBlock ? 'flex' : 'none',
        width: '75%',
        height: "270px",
        border: '3px solid green',
        borderRadius: '5px',
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center",
        background: "white",
        position: "fixed",
        top: "25%",
        left: "12%",
        zIndex: '1'
    }
    const starGoldStyle = {
        color: 'gold',
        fontSize: '30px'
    }
    const starSimpleStyle = {
        color: 'black',
        fontSize: '30px'
    }

    return (
        <div className="section6">

            <div className="pinned3"></div>
            <div className="container">
                <div className="row">
                    <h1>TRADE-IN</h1>
                </div>
                <div className="row justify-content-around">
                    <div className="trade">

                        <span><HiOutlineDesktopComputer className="ikonka" /> ПРОГРАММА</span>
                        <p>
                            Если Вы решили обновить свой сайт или
                            интернет-магазин, то программа трейд-ин
                            именно то, что Вам нужно.Благодаря
                            данной программе, Вы сможете приобрести
                            новый сайт с минимальными вложениями,
                            при этом утилизировав старый. Вам лишь
                            нужно связаться с нашим отделом трейд-ин
                            по телефону 8 (499) 390 6083, отправить
                            письмо на адрес www@trofimov.org, либо
                            разместить заявку на сайте.
                        </p>
                    </div>
                    <div className="trade">

                        <span><AiOutlineFileSearch className="ikonka" /> ПРОЦЕСС РАБОТЫ</span>
                        <p>
                            Если Вы решили обновить свой сайт или
                            интернет-магазин, то программа трейд-ин
                            именно то, что Вам нужно.Благодаря
                            данной программе, Вы сможете приобрести
                            новый сайт с минимальными вложениями,
                            при этом утилизировав старый. Вам лишь
                            нужно связаться с нашим отделом трейд-ин
                            по телефону 8 (499) 390 6083, отправить
                            письмо на адрес www@trofimov.org, либо
                            разместить заявку на сайте.
                        </p>
                    </div>
                    <div className="trade">

                        <span><GiCutDiamond className="ikonka" /> УСЛОВИЯ</span>
                        <p>
                            Если Вы решили обновить свой сайт или
                            интернет-магазин, то программа трейд-ин
                            именно то, что Вам нужно.Благодаря
                            данной программе, Вы сможете приобрести
                            новый сайт с минимальными вложениями,
                            при этом утилизировав старый. Вам лишь
                            нужно связаться с нашим отделом трейд-ин
                            по телефону 8 (499) 390 6083, отправить
                            письмо на адрес www@trofimov.org, либо
                            разместить заявку на сайте.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <button onClick={toGrade}>ОЦЕНИТЬ МОЙ САЙТ</button>
                </div>
            </div>
            <div style={gradeStyle}>
                <h3>ОЦЕНИТЬ</h3>
                <div className="grade">
                    <FaStar style={gold >= 1 ? starGoldStyle : starSimpleStyle} onClick={() => saveGrade(1)} className="gradeStar" />
                    <FaStar style={gold >= 2 ? starGoldStyle : starSimpleStyle} onClick={() => saveGrade(2)} className="gradeStar" />
                    <FaStar style={gold >= 3 ? starGoldStyle : starSimpleStyle} onClick={() => saveGrade(3)} className="gradeStar" />
                    <FaStar style={gold >= 4 ? starGoldStyle : starSimpleStyle} onClick={() => saveGrade(4)} className="gradeStar" />
                    <FaStar style={gold >= 5 ? starGoldStyle : starSimpleStyle} onClick={() => saveGrade(5)} className="gradeStar" />
                </div>
            </div>
        </div>
    )
}

export default Section6
