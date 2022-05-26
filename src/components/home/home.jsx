import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
        Self-taught MERN stack developer. For the past six months, I have completed 12-14 hours everyday in Brototype Kochi and gained most of the skills mentioned below with in this time.i am a quick learner who has always been interested in new technology and learning new things. completed a Node JS project which is an e-commerce application using Node JS, Express JS, Mongo DB, AJAX and Handle bars. Currently  learning React JS.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
