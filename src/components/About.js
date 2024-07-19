import React from 'react';

function About() {
  return (
    <div className="about-container">
      <p>
        I'm a dedicated and detail-oriented Full-Stack Web Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js).
        My passion lies in crafting user-centric web experiences, and I excel at building dynamic and responsive web applications. 
        With a background in Mathematics (B.Sc. from Vidyasagar University), I bring a logical and analytical approach to problem-solving and development.
        I'm always eager to learn new things and stay up-to-date with the latest web development trends.
      </p>

      <div className='skills'>
        <h4>Technical Skills</h4>
        <div id="skill">
          <p className='mt-2'><b>Front-End Development:</b> HTML, CSS, JavaScript, Bootstrap, React</p>
          <p><b>Back-End Development:</b> Node.js, Express.js</p>
          <p><b>Databases:</b> MongoDB, MySQL</p>
          <p><b>Other Development Tools:</b> Visual Studio Code, npm, Git & GitHub</p>
        </div>
        <h4>Professional Values</h4>
        <div id="skill">          
          <p className='mt-2'><b>Attention to Detail:</b> Ensuring every element of a project is polished and functional.</p>
          <p><b>Analytical Thinking:</b> Applying a logical approach to troubleshoot and solve problems.</p>
          <p><b>Continuous Learning:</b> Staying updated with the latest technologies and best practices in web development.</p>
        </div>
      </div>
      <div className="int">
        <h4>Personal Interests</h4>
        <p>
          When I'm not coding, I enjoy exploring new technologies, reading about advancements in AI, and solving mathematical problems. 
          In my leisure time, I love drawing, playing indoor games, watching movies, hiking, and learning about different languages, foods & cultures. 
          These hobbies help me stay creative and think outside the box.
        </p>
      </div>
    </div>
  );
}

export default About;

