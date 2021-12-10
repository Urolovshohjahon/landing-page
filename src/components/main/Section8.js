import React, { useState } from 'react';
import './Section8.css';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

function Section8() {

    const [ism, setIsm] = useState("");
    const [familiya, setFamiliya] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [load, setLoad] = useState(false)

    const sendComment = () => {
        setLoad(true)
        axios.post("https://shohjahon-backend.herokuapp.com/feedbacks", { ism: ism, familiya: familiya, email: email, message: message })
            .then((res) => {
                setTimeout(() => {
                    setLoad(false);
                }, 500)
            })
            .catch((err) => {
                console.log('Xatoooo...')
            })
    }



    return (
        <div className="section8">
            <div className="pinned3"></div>
            <div className="container">
                {load ? <Spinner /> : <div className="row space-between">
                    <div className="ending">
                        <h1>СВЯЖИТЕСЬ С НАМИ</h1>
                        <p>Готовы начать работу? Отправьте
                        сообщение и свои контакты, мы
                        ответим вам в течении 2-ух дней.
                        Схема работы с каждым клиентом
                        будет разработана индивидуально в зависимости от поставленных задач.</p>
                    </div>
                    <form onSubmit={sendComment}>
                        <div className="inputing">
                            <input onChange={e => setIsm(e.target.value)} required type="text" className="input50" placeholder="Ваше имя" />
                            <input onChange={e => setFamiliya(e.target.value)} required type="text" className="input50" placeholder="Ваша фамилия" />
                            <input onChange={e => setEmail(e.target.value)} required type="email" className="input100" placeholder="E-mail" />
                            <input className='textarea' onChange={e => setMessage(e.target.value)} required placeholder="Введите ваше сообщение"></input>
                        </div>
                        <div className="sending">
                            <p><a href="/comments">See all comments</a></p>
                            <button onSubmit={sendComment}>ОТПРАВИТЬ</button>
                        </div>
                    </form>
                </div>}
            </div>
        </div>
    )
}

export default Section8
