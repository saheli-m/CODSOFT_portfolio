import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="foot1">
        <p id="connectP">Connect With Me</p>
        <div className="foot-icon">
          <a href="https://www.linkedin.com/in/saheli-maity-381802238" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/saheli-m?tab=repositories" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="mailto:sahelimaity501@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a>
        </div> 
      </div>
      <div className='foot2'>
        <a href="https://drive.google.com/file/d/1juBPMZDSYXskf9HQa2HqDx9PBcN7kuF3/view?usp=sharing" target="_blank" rel="noreferrer" download="Saheli_Maity_WebDeveloper_Resume.pdf" className="btn btn-outline-light">
          Download Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
