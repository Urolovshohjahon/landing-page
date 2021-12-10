import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Comment.css'

function Comments() {
    const [comments, setComments] = useState([]);
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        axios.get("https://shohjahon-backend.herokuapp.com/comments")
            .then(res => {
                setComments(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const keyHandler = () => {
        /* if (e.charCode == 13) { */
        axios.post("https://shohjahon-backend.herokuapp.com/comments", { nickname: nickname, message: message })
            .then(res => {
                console.log('ok');
            })
            .catch(err => {
                console.log(err)
            })
        axios.get("https://shohjahon-backend.herokuapp.com/comments")
            .then(res => {
                setComments(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    }


    return (
        <div className="comments">
            <div className="comment_list">
                {
                    comments.map((val, key) => (
                        <div className="comment">
                            <h1>{val.nickname}:</h1>
                            <h3>{val.message}</h3>
                        </div>
                    ))
                }
            </div>
            <form onSubmit={keyHandler} className="input_block ">
                <input onChange={e => setNickname(e.target.value)} className="input_name" placeholder="Nickname" required />
                <input onChange={e => setMessage(e.target.value)} className="input_message" placeholder="Message" required />
                <button type="hidden" style={{display:'none'}}>yu</button>
            </form>
        </div>
    )
}

export default Comments