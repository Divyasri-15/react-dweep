// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer.js';
import Navbar from './Components/Navbar/Navbar.js';
import Image from './Components/Image/Image.js';


function App() {
  const list = {
    point1 : "Prompt Generator",
    point2 : "Dweep Daily",
    point3 : "All Contributors",
    point4 : "Your data on Dweep.io",
    point5 : "Contribute to Dweep"
  };
  return (
    <>
      {/* <Footer list1={list}/> */}
      <div className="top">
        <Navbar />
        <Image />
      </div>
      <Footer list1={list}/>
    </>
  );
}

export default App;
