import React from 'react';
import photo from '../../images/threety_02.jpg';
import './Section5.css'

function Section5() {
    return (
        <div className="section5">
            <div className="container">
                <div className="row space-between">
                <div className="be_first2">
                        <h3>АДАПТИВНОСТЬ</h3>
                        <p>Мы предлагаем услуги по SEO продвижению
                        сайтов в ведущих поисковых системах Yandex
                        и Google. Поисковое продвижение сайта в
                        нашей веб-студии — это гарантированное
                        присутствие на лидирующих позициях и привлечение необходимой аудитории.</p>
                    </div>
                    
                        <img src={photo} alt="qw" />
                </div>
            </div>
        </div>
    )
}

export default Section5
