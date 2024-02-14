import React, { useState, useEffect, useRef } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import IconUser from '../../assets/images/icon-user.svg';

import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Nav from './nav/nav';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header = (props) => {

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenAccDropDown, setisOpenAccDropDown] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isopenSearch, setOpenSearch] = useState(false);
    const [isOpenNav, setIsOpenNav] = useState(false);

    const headerRef = useRef();
    const searchInput = useRef()

    const context = useContext(MyContext);
    const history = useNavigate();

    useEffect(() => {

    }, [context.cartItems])

    // along with the search bar all the catagories are display from here.
    const [categories, setcategories] = useState([
        'Mobile and Tablets',
        'Wines & Drinks',
        'Clothing & beauty',
        'Fresh Seafood',
        'Pet Foods & Toy',
        'Fast food',
        'Baking material',
        'Vegetables',
        'Fresh Fruit',
        'Bread and Juice',
        'Milks and Dairies',
        'Wines & Drinks',
        'Clothing & beauty',
        'Fresh Seafood'
    ]);

    // This Hook handles the animation of header when we scroll then header react on it.
    useEffect(() => {
        const handleScroll = () => {
            let position = window.pageYOffset;

            if (headerRef.current) {
                if (position > 100) {
                    headerRef.current.classList.add('fixed');
                } else {
                    headerRef.current.classList.remove('fixed');
                }
            }
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [headerRef]); // Include headerRef in the dependency array to avoid potential stale closure issues


// this will move the user to the home/welcome screen.
    const signOut = () => {
        context.signOut();
        history('/');
    }

// this is the styling when the user goes to the search then it will focus on the input element.
    const openSearch = () => {
        setOpenSearch(true);
        searchInput.current.focus();
        // console.log('input is clicked');
        // searchInput.current.value = "You Clicked me";

    }

    const closeSearch = () => {
        setOpenSearch(false);
        searchInput.current.blur();
        searchInput.current.value = "";
    }

    // this will react when navigation is reacted or clicked when screen is minimul.
    const openNav = () => {
        // console.log("oo my good!");
        setIsOpenNav(true);
        context.setIsopenNavigation(true)
    }

    const closeNav = () => {
        setIsOpenNav(false);
        setisOpenAccDropDown(false)
        context.setIsopenNavigation(false)
    }

    // move Handle whatever you want to perform when search icon is clicked!.
    const navigateToHome = () => {
        history('/');
        console.log("search icon is clicked!");
    };

    return (
        <>
            <div className='headerWrapper' ref={headerRef}>
                <header>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-2 part1 d-flex align-items-center'>
                                <Link to="/"><img src={Logo} className='logo' /></Link>
                                {
                                    windowWidth < 992 &&
                                    // this will happens when the screen size is less than 992 .
                                    <div className='ml-auto d-flex align-items-center'>


                                        <div className='navbarToggle mr-0' onClick={openSearch}><SearchIcon /></div>

                                        <div className='navbarToggle mr-2' onClick={openNav}><MenuIcon /></div>
                                        {
                                            context.isLogin === "true" &&
                                            <div className='myAccDrop' onClick={() => setisOpenAccDropDown(!isOpenAccDropDown)}><PersonOutlineOutlinedIcon /></div>
                                        }

                                    </div>
                                }

                            </div>

                            {/*headerSearch start here */}
                            <div className='col-sm-5 part2'>
                                <div className={`headerSearch d-flex align-items-center ${isopenSearch === true ? 'open' : ''}`}>

                                    {
                                        windowWidth < 992 && <div class="closeSearch" onClick={closeSearch}><ArrowBackIosIcon /></div>
                                    }
                                    {/* data of catagories are applied here i Select Tag. <Select> */}
                                    <Select data={categories} placeholder={'All Categories'} icon={false} />

                                    <div className='search'>
                                        <input type='text' placeholder='Search for items...' ref={searchInput} />
                                        <SearchIcon className="searchIcon cursor" onClick={navigateToHome} />

                                    </div>
                                </div>
                            </div>
                            {/*headerSearch start here and it will react when a user logged in*/}
                            <div className='col-sm-5 d-flex align-items-center part3 res-hide'>
                                <div className='ml-auto d-flex align-items-center'>

                                    <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                                        <ul className='list list-inline mb-0 headerTabs'>
                                            {
                                                context.isLogin === "true" ?

                                                    <li className='list-inline-item'>

                                                        <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                                                            <img src={IconUser} />
                                                            Account
                                                        </span>

                                                        {
                                                            isOpenDropDown !== false &&
                                                            <ul className='dropdownMenu'>
                                                                <li><Button className='align-items-center'><Person2OutlinedIcon /> My Account</Button></li>
                                                                <li><Button><SettingsOutlinedIcon /> Setting</Button></li>
                                                                <li><Button onClick={signOut}><LogoutOutlinedIcon /> Sign out</Button></li>
                                                            </ul>
                                                        }
                                                    </li>

                                                    :


                                                    <li className='list-inline-item'>
                                                        <Link to={'/signIn'}>
                                                            <Button className="btn btn-g">Sign In</Button>
                                                        </Link>
                                                    </li>


                                            }


                                        </ul>
                                    </ClickAwayListener>
                                </div>

                            </div>

                        </div>
                    </div>
                </header>


                <Nav data={props.data} openNav={isOpenNav} closeNav={closeNav} />
            </div>

            <div className='afterHeader'></div>

            {
                isOpenAccDropDown !== false &&
                <>
                    <div className='navbarOverlay' onClick={closeNav}></div>
                    <ul className='dropdownMenu dropdownMenuAcc' onClick={closeNav}>
                        <li><Button className='align-items-center'><Link to=""><Person2OutlinedIcon /> My Account</Link></Button></li>
                        <li><Button><Link to=""><SettingsOutlinedIcon /> Setting</Link></Button></li>
                        <li><Button onClick={signOut}><Link to=""><LogoutOutlinedIcon /> Sign out</Link></Button></li>
                    </ul>
                </>
            }




        </>
    )
}

export default Header;