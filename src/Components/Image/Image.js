import logo from '../../Assets/dweep io 1.png';
import './Image.css';

function Image()
{
    return(
        <div className="Image_img">
            <img src={logo} alt="dweep"/>
        </div>
    );
}

export default Image;