import '../stylesheets/Navbar.css'
import React, {useState} from 'react'
import CustomButton from "./CustomButton";
import CustomLink from "./CustomLink";
import {BsCartFill, BsFillPersonFill, BsGearFill, BsPersonPlusFill} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

function Navbar() {
  const [dropdown, setDropDown] = useState(false)
  const openCloseDrop = () =>{
        setDropDown(!dropdown);
  }
  return (<header className='main_header'>
      <div className='hamburger_menu'>
        <input type='checkbox' className='hamburger_menu__input'></input>
        <label htmlFor='hamburger_menu__input' className='hamburger_menu__input_label'>
          <CustomButton
            variant='secondary'
            icon={FaBars}
            classname='hamburg_button'
          />
        </label>
      </div>
      <div className='system_logo_container'>
        <a className='system_logo__link' href='/'>
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
          <CustomButton
            variant='primary'
            icon={BsFillPersonFill}
            spanText='Login'
            classname='CustomButton'
          />
        </div>
        <div className='credentials_user__sing_up'>
          <CustomButton
            variant='success'
            icon={BsPersonPlusFill}
            spanText='Register'
            classname='CustomButton'
          />
        </div>
      </div>
      <div className='shopping_car'>
        <CustomLink to='/shopping_car' classname='none'>
          <CustomButton
            classname='CustomButton'
            variant='secondary'
            icon={BsCartFill}
          />
        </CustomLink>
      </div>
      <div className='settings'>
        <Dropdown isOpen={dropdown} toggle={openCloseDrop}>
          <DropdownToggle caret className='none' >
            <CustomButton
              variant='secondary'
              icon={BsGearFill}
              classname='CustomButton'
            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <CustomLink to='/vehicle_seller' classname='drop-item'>
                <span>Upload Vehicle</span>
              </CustomLink>
            </DropdownItem>
            <DropdownItem><span>Settings</span></DropdownItem>
            <DropdownItem><span>Help</span></DropdownItem>
            <DropdownItem><span>Log out</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>);
}

export default Navbar


