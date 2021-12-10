import React from 'react';
import photo from '../../images/laptop+phone_03.jpg';
import './Section7.css';

function Section7() {
    return (
        <div className="section7">
            <div className="container">
                <div className="row space-between">
                <div className="be_first3">
                <h3>АДАПТИВНОСТЬ</h3>
                <p>Мы предлагаем услуги по SEO продвижению
                сайтов в ведущих поисковых системах Yandex
                и Google. Поисковое продвижение сайта в
                нашей веб-студии — это гарантированное
                        присутствие на лидирующих позициях и привлечение необходимой аудитории.</p>
            </div>

            <img src={photo} alt="qwe" />
                </div>
            </div>
        </div>
    )
}

export default Section7
