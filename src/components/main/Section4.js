import React, { useEffect, useState } from 'react';
import './Section4.css';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';



function Section4() {
    const [images, setImages] = useState([]);
    const [imagesLength, setImagesLength] = useState([]);
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        axios.get(`https://shohjahon-backend.herokuapp.com/pages?page=${page}`)
            .then((res) => {
                setImages(res.data.images);
                setImagesLength(res.data.imagesLength);
                setTimeout(() => {
                    setLoad(false);
                }, 500)
            })
            .catch((err) => {
                console.log('Xatoooo...')
            })
    }, [page])

    const simpleStyle = {
        width: '60px',
        height: '45px',
        margin: '0px',
        background: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
        fontWeight: '700',
        borderRadius: '3px',
        boxShadow: '1px 1px 1px 1px grey',
        border: '1px solid gray'
    }
    const currentStyle = {
        width: '60px',
        height: '45px',
        margin: '0px',
        background: 'blue',
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
        fontWeight: '700',
        borderRadius: '3px',
        border: '1px solid gray'
    }

    const getPage = (pages) => {

        setLoad(true)
        setPage(pages);

        axios.get(`https://shohjahon-backend.herokuapp.com/pages/?page=${pages}`)
            .then((res) => {
                setImages(res.data.images);
                setImagesLength(res.data.imagesLength);
                setTimeout(() => {
                    setLoad(false);
                }, 500)
            })
            .catch((err) => {
                console.log('Xatoooo...')
            })
    }


    return (
        <div className="section4">
            <div className="our_projects">
                <h3>ПОСЛЕДНИЕ ПРОЕКТЫ</h3>
            </div>

            <div className="row">
                {

                    images.map((val, key) => (
                        <a href="#!" key={key} >{load ? <Spinner /> : <img src={val} alt="qw" />}</a>
                    ))
                }
            </div>

            <ul >
                <button onClick={() => getPage(page - 1)} disabled={page === 1} style={simpleStyle}><AiOutlineArrowLeft className="direct_icon" /></button>
                {
                    imagesLength.map((val, key) => {
                        if (key % 2 === 0)
                            return (
                                <button key={key} onClick={() => getPage(key / 2 + 1)} style={page === key / 2 + 1 ? currentStyle : simpleStyle} >{key / 2 + 1}</button>
                            )
                            return ''
                    })
                }
                <button onClick={() => getPage(page + 1)} disabled={page === imagesLength.length / 2} style={simpleStyle}><AiOutlineArrowRight className="direct_icon" /> </button>
            </ul>

        </div>
    )
}

export default Section4
