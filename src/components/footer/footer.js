import React from 'react';
import './footer.css';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Icon4 from '../../assets/images/icon-4.svg'
import Icon5 from '../../assets/images/icon-5.svg'
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import paymentImage from '../../assets/images/payment-method.png';

import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../../components/newsletter/index';
import NewsletterImg from '../../assets/images/newsletter.png';

const Footer = () => {
    return (
        <>

            <section className='newsLetterSection'>
                <div className='container-fluid'>
                    <div className='box d-flex align-items-center'>
                        <div className='info'>
                            <h2>Stay home & get your daily <br />needs from our shop</h2>
                            <p>Start You'r Daily Shopping with Nest Mart</p>
                            <br /><br className='res-hide' />
                            <Newsletter />
                        </div>

                        <div className='img'>
                            <img src={NewsletterImg} className='w-100' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon1} /></span>
                                    <div className='info'>
                                        <h4>Best prices</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon2} /></span>
                                    <div className='info'>
                                        <h4>Best Recommendation</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon3} /></span>
                                    <div className='info'>
                                        <h4>Major Platforms</h4>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon4} /></span>
                                    <div className='info'>
                                        <h4>Wide Variety</h4>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon5} /></span>
                                    <div className='info'>
                                        <h4>Best Brands</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                                <Link to='/'><img src={Logo} /></Link>
                                <br /><br />
                                <p>Awesome E-commerce Platform for smart Shopping</p>
                                <br />

                                <p><LocationOnOutlinedIcon /> <strong>Location</strong>: FCIT new campus Lahore, Pakistan</p>
                                <p><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+92) - 3XX-XXXXXXX </p>
                                <p><EmailOutlinedIcon /> <strong>Email:</strong> teamfyp@smartcart.com</p>
                                <p><WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

                            </div>


                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3>Company</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3'>
                                <h3>Install App</h3>
                                <br className='res-hide'/>
                                <p>From App Store or Google Play</p>

                                <div className='d-flex'>
                                    <Link to={''}><img src={appStore} width={150} /></Link>
                                    <Link to={''}><img src={googlePlay} className='mx-2' width={150} /></Link>
                                </div>

                                <br />

                                <p>Secured Payment Gateways</p>
                                <img src={paymentImage} />
                            </div>

                        </div>


                        <hr />

                    </div>
                </footer>


            </div>
        </>
    )
}

export default Footer;