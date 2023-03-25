import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar_left">
            <h1>
                An inspiring design delivered to your inbox every morning
            </h1>
            <p>
                Our team scouts the internet for the best designs, illustrations and 
                art and delivers a truly inspiring one every day to your inbox
            </p>
            <b id="Navbar_show">
                Show me how it looks
            </b>
            <div className="Navbar_form">
                <input type="email" placeholder="Your e-mail address"/>
                <button>Register Now</button>
            </div>
            <b id="Navbar_spam">Free - No Spam - No Data Sharing</b>                    
        </div>
    );
  }
  
  export default Navbar;