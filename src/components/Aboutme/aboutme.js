import React from 'react';
import './aboutme.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <span className="text-animate-hover_aboutme">A</span>
      <span className="text-animate-hover_aboutme">b</span>
      <span className="text-animate-hover_aboutme">o</span>
      <span className="text-animate-hover_aboutme">u</span>
      <span className="text-animate-hover_aboutme">t</span>
      <span className="space"></span>
      <span className="text-animate-hover_aboutme">M</span>
      <span className="text-animate-hover_aboutme">e</span>

      <div className="about-description">
        <p>Hi, I am Prinsa, a Computer Engineering Undergrad at Tribhuvan University, Thapathali Campus. My expertise lies in <strong style={{ fontSize: '23px', color: 'rgb(57, 59, 62)' }}>Web Development</strong>, where I excel in creating visually stunning and responsive websites. Skilled in the MERN stack, I'm proficient in both front-end and back-end development. <br/><br />When I'm not coding or into academics, you'll often find me immersed in novels, music or relishing the tranquility of nature. I also enjoy watching movies and series. Feel free to reach out to talk about  music, movies or creating website!<span className='star'></span></p>
      </div>
      <a href="https://drive.google.com/file/d/10QnN9KSiNXvs5Ie1mITal357eveqnjob/view?usp=sharing" download="prinsacv.pdf" target="_blank" >  <button className='resume'></button>
</a>
    </div>
  );
};

export default AboutMe;
