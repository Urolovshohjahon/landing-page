import React, { useEffect, useState } from 'react';
import './myStyle.css';
import '../fonts/font-awesome.min.css';
let timeArr = [];
function ToDoList() {
    const like = {
        color: "red"
    };
    const unLike = {
        color: "yellow"
    }
    const [info, setInfo] = useState('');
    const [arr, setArr] = useState([]);
    const [select, setSelect] = useState('all')



    useEffect(() => {
        const Data = JSON.parse(localStorage.getItem('data'));
        if (Data) {
            setArr(Data)
        }
    }, [])

    const changeInput = (e) => {
        setInfo(e.target.value)
    }
    const Adding = () => {
        if (info === '') { alert("Bo'sh joy...") }
        else {
            setArr([...arr, {
                name: info,
                like: false
            }])
            setInfo('');
        }
    }
    const deleteHandler = (e) => {
        setArr(arr.filter((val, key) => key != e.target.id));
    }
    const likeHandler = (e) => {
        timeArr = JSON.parse(localStorage.getItem('data'));
        timeArr.forEach((user, key) => {
            if (parseInt(e.target.id) == key) {
                const isLiked = user.like;
                user.like = !isLiked;
            }
        });
        setArr(timeArr);
        localStorage.setItem('data', JSON.stringify(arr))
    }


    const changeSelect = (e) => {
        setSelect(e.target.value);
    }



    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(arr))
    })



    return (
        <div className="base">
            <div className="inputing">
                <input className='input' type="text" value={info} onChange={changeInput} />
                <button className="add" onClick={Adding}>ADD</button>
                <select name='yoqdi' onChange={changeSelect} className='select'>
                    <option value='all'  selected>All</option>
                    <option value='liked' >Liked</option>
                    <option value='unliked' >UnLiked</option>
                </select>

            </div>

            {
                arr.map((user, index) => {
                    if (select == 'liked' && user.like) {
                        return (
                            <div className="item" >
                                <p className="text">{user.name}</p>
                                <i id={index.toString()} style={user.like ? like : unLike} className="fa fa-heart" onClick={likeHandler}></i>
                                <button id={index} onClick={deleteHandler} className="btn">Delete-{index}</button>
                            </div>
                        )
                    }
                    else if (select == 'unliked' && !user.like) {
                        return (
                            <div className="item" >
                                <p className="text">{user.name}</p>
                                <i id={index.toString()} style={user.like ? like : unLike} className="fa fa-heart" onClick={likeHandler}></i>
                                <button id={index} onClick={deleteHandler} className="btn">Delete-{index}</button>
                            </div>
                        )
                    }
                    else if (select == 'all') {
                        return (
                            <div className="item" >
                                <p className="text">{user.name}</p>
                                <i id={index.toString()} style={user.like ? like : unLike} className="fa fa-heart" onClick={likeHandler}></i>
                                <button id={index} onClick={deleteHandler} className="btn">Delete-{index}</button>
                            </div>
                        )
                    }
                }
                )
            }

        </div>
    )
}
export default ToDoList
