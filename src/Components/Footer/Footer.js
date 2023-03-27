import './Footer.css';
import logo1 from '../../Assets/InstagramLogo.png';
import logo2 from '../../Assets/LinkedinLogo.png';

function Footer(props) {
    return (
        <div className="Footer">
            <div className="Footer_list">
                <ul>
                    <li>{props.list1.point1}</li>
                    <li>{props.list1.point2}</li>
                    <li>{props.list1.point3}</li>
                    <li>{props.list1.point4}</li>
                    <li>{props.list1.point5}</li>
                </ul>
                <ul className="Footer_right">
                    <li>Dweep.io</li>
                    <li>Made with love in India</li>
                    <li className="logolist">
                        <img src={logo2} alt="Linkedin"/>{' '}
                        <img src={logo1} alt="Instagram"/>
                    </li>
                    <li>&nbsp;</li>
                    <li>hello@dweep.io</li>
                </ul>
            </div>
        </div>
            
    );
  }
  
  export default Footer;