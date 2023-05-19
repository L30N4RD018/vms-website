import React from 'react'
import '../stylesheets/Header.css'

function Header(){
    return(
        <header className='main_header'>
            <div className='hamburger_menu'>
                <input type='checkbox' className='hamburger_menu__input'></input>
                <label htmlFor='hamburger_menu__input' className='hamburger_menu__input_label'>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </label>
            </div>
            <div className='system_logo_container'>
                <a className='system_logo__link' href='../../public/index.html'>
                    <img
                        className='system_logo'
                        src={require('../img/icons/Favicon_VMS_64.png')}
                        alt='VMS - Vehicle Management System'/>
                </a>
            </div>
            <form className='search_form'>
                <div className='search_box'>
                    <div className='search_box_type'>
                        <input className='search_input' type="search" autoComplete="off" placeholder='Busqueda'/>
                    </div>
                    <div className='search_box_logo'>
                        <button className='search_button'/>
                    </div>
                </div>
            </form>
            <div className='credentials_user'>
                <div className='credentials_user__login'>

                </div>
                <div className='credentials_user__sing_up'>

                </div>
            </div>
            <div className='shopping_car'>

            </div>
            <div className='settings'>

            </div>
        </header>
    );
}
export default Header