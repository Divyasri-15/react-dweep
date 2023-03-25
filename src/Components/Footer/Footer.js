import './Footer.css';
import PropTypes from 'prop-types';
import logo1 from './InstagramLogo.png';
import logo2 from './LinkedinLogo.png';

function Footer(props) {
    return (
        <div class="Footer_footerContainer">
            <div class="Footer_ftleft">
                <p>
                {props.list1.point1}<br/>
                {props.list1.point2}<br/>
                {props.list1.point3}<br/>
                {props.list1.point4}<br/>
                {props.list1.point5}
                </p>
            </div>
            <div class="Footer_ftright">
                <p>
                    Dweep.io<br/>
                    Made with love in India<br/>
                    <img src={logo2}/>{' '}
                    <img src={logo1}/><br/>
                    <br/>
                    hello@dweep.io
                </p>
            </div>
        </div>
            
    );
  }
  
  export default Footer;