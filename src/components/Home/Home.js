import React from 'react';
import './Home.css';
import images from './images'; // Import the images object

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-side">



      <a href="https://www.facebook.com"><div class="facebook play-on"></div></a>

        <a  href="https://www.mail.com"><div class="mail play-on"></div></a>
        <a href="https://www.instagram.com"><div class="instagram play-on"></div></a>
        <a href="https://www.reddit.com"><div class="reddit play-on"></div></a>
        <a href="https://www.linkedin.com"><div class="linkedin play-on"></div></a>
        <a href="https://www.github.com"><div class="github play-on"></div></a>
        <a href="https://www.medium.com"><div class="medium play-on"></div></a>
        <a href="https://www.twitter.com"><div class="twitter play-on"></div></a>


        {/* Add more social media icons as needed */}

      </div>
      <div className="right-side">
        {/* Image */}
        <img src={images['my-profile.jpg']} alt="Profile" />

        {/* Text */}
        <div className="home_title">
        <h1 className="home_letter">
        <span className="text-animate-hover">H</span>
        <span className="text-animate-hover _12">i, </span> 
        <tab/> <tab/><tab/>
         <span className="text-animate-hover _13">I</span>
         <span className="text-animate-hover _14">'m</span><br/>
         <div className="logoP" ></div>
          <span className="text-animate-hover _15">r</span>
          <span className="text-animate-hover _16">i</span>
          <span className="text-animate-hover _17">n</span>
          <span className="text-animate-hover _18">s</span>
          <span className="text-animate-hover _19">a</span>
          <tab/> <tab/><tab/>
          <span className="text-animate-hover _20"> </span>
          <span className="text-animate-hover _21">J</span>
          <span className="text-animate-hover _22">o</span>
          <span className="text-animate-hover _23">s</span>
          <span className="text-animate-hover _24">h</span>
          <span className="text-animate-hover _25">i</span>
          </h1>
          <h2 className='line-before' >Computer Engineering Student</h2>
          <button className='say-hello'></button>

          <br/>
          </div>
        {/* Button */}


      </div>
    </div>
  );
};

export default Home;
