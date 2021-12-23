import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';


function HeaderNav() {
  const [style, setStyle] = useState(false);
    const menu_style = {
        display: 'flex',
        transform: style ? 'translateX(0px)' : 'translateX(100%)',
        transition: '0.5s',
        width: '100%',
        height: '100%',
        background: 'rgb(243, 130, 149)',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '45px 45px',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1',
        overflow: 'hidden',
    }

    const changeMenu = () => {
        setStyle(!style)
    }
  return (
    <div className='header'>
      <div style={menu_style}>
                <FaTimes className="close" onClick={changeMenu} />
                <li><a onClick={changeMenu} href="#!" className='text-decoration-none'>Login</a></li>
                <li><a onClick={changeMenu} href="#!" className='text-decoration-none'>SignUp</a></li>
                <li><a onClick={changeMenu} href="#!" className='text-decoration-none'>Home</a></li>
                <li><a onClick={changeMenu} href="#!" className='text-decoration-none'>Careers</a></li>
                <li><a onClick={changeMenu} href="#!" className='text-decoration-none'>Blog</a></li>
                <li><a onClick={changeMenu} href="#!" className='text-decoration-none'>About us</a></li>
            </div>
      <div className='container'>
        <div className='row d-flex justify-content-between align-items-center'>

          <div className='col-1 d-flex align-items-center'>
            <img src={logo} alt='sdsd' />
          </div>
          <div className='col-md-7 list-toogle '>
            <ul className='d-flex justify-content-around'>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>
                <a href='#!'>Careers</a>
              </li>
              <li>
                <a href='#!'>Blog</a>
              </li>
              <li>
                <a href='#!'>About us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 login-toogle">
              <button className='btn-login'>Login</button>
              <button className='btn-signup'>SignUp</button>
          </div>
          <div className='menu  col-sm-1 col-mm-2 col-3 '>
                            <BiMenuAltRight className='menu_button' onClick={changeMenu} />
                        </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
