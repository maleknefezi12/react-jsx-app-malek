import logo from './logo.svg';
import './App.css';
import './style.css';
import imagesrc from './imageInsrc.jpg';

function App() {
  return (
    <>
      <div style={{border:"solid 1px black,maxWidth:100vw"}}>
        <h1 className='titre red'>malek</h1>
        <br />

        
        <img className='img' src={imagesrc} />
        <br />
        <img className='img' src="/imageInpublic.jpg" alt="myimage" />
      </div>
      <video className='vdd' controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
