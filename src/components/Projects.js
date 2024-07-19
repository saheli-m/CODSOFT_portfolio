import React from 'react';
import LenskartGlimpse from './images/Lenskart_glimpse.png';
import SpotifyGlimpse from './images/Spotify_glimpse.png';
import TaskGlimpse from './images/Task_glimpse.png';
import SSGGlimpse from './images/SSG_glimpse.png';
import TTTGGlimpse from './images/TTTG_glimpse.png';
import WanderGlimpse from './images/Wander_glimpse.png';
import WeatherGlimpse from './images/Weather_glimpse.png';
import CatalogGlimpse from './images/Catalog_glimpse.png';
import BlogGlimpse from './images/Blog_glimpse.png';
import QuizGlimpse from './images/Quiz_glimpse.png';

const Projects = () => (
    <div id="projects"> 
        <h2>Projects</h2>
        <div className="cards text-center">
          
          <div className="card pro">
            <h3 className="card-header card-title text-center">Lenskart Homepage Clone</h3>
              <img src={LenskartGlimpse} className="card-img-top" alt="Lenskart"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> HTML & CSS</h5>
              <br/>
              <p className="card-text">Developed a clone of the Lenskart homepage to demonstrate proficiency in HTML and CSS. The project focused on creating a visually accurate and responsive layout that mimics the original site.</p>
              <a href="https://github.com/saheli-m/LenskartClone.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

          <div className="card pro">
            <h3 className="card-header card-title text-center">Spotify Homepage Clone</h3>
              <img src={SpotifyGlimpse} className="card-img-top" alt="Spotify"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> HTML, CSS & Bootstrap</h5>
              <br/>
              <p className="card-text">Created a replica of the Spotify homepage, utilizing Bootstrap to streamline the design process. This project showcased the ability to implement responsive web design and manage various UI components.</p>
              <a href="https://github.com/saheli-m/SpotifyClone.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>
          
          <div className="card pro">
            <h3 className="card-header card-title text-center">To Do App</h3>
              <img src={TaskGlimpse} className="card-img-top" alt="ToDo"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> React, CSS, Bootstrap</h5>
              <br/>
              <p className="card-text">Developed a To Do application to manage tasks. This project highlighted skills in JavaScript for dynamic functionality, allowing the users to manage their tasks by adding new items, marking them as completed, editing them, or removing them from the list.</p>
              <a href="https://github.com/saheli-m/CODSOFT_task-tracker-app.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

          <div className="card pro">
            <h3 className="card-header card-title text-center">Simon Says Game</h3>
              <img src={SSGGlimpse} className="card-img-top" alt="SSG"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> HTML, CSS & JavaScript</h5>
              <br/>
              <p className="card-text">Implemented an interactive Simon Says game, demonstrating proficiency in JavaScript for game logic and user interaction. The project also involved CSS for styling the game interface.</p>
              <a href="https://github.com/saheli-m/SimonSaysGame.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

          <div className="card pro">
            <h3 className="card-header card-title text-center">Tic-Tac-Toe Game</h3>
              <img src={TTTGGlimpse} className="card-img-top" alt="TTTG"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> HTML, CSS & JavaScript</h5>
              <br/>
              <p className="card-text">Created a classic Tic-Tac-Toe game that allows two players to play against each other. The game features a 3x3 grid where players take turns to place their marks (X or O). Implemented using JavaScript to handle game logic, including checking for win conditions and toggling between players. The interface was styled with CSS to provide a clean and intuitive user experience. This project demonstrates proficiency in creating interactive web applications and handling real-time user interactions.</p>
              <a href="https://github.com/saheli-m/Tic-Tac-Toe_Game.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

          <div className="card pro">
            <h3 className="card-header card-title text-center">Airbnb Clone</h3>
              <img src={WanderGlimpse} className="card-img-top" alt="Wander"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> EJS, CSS, JavaScript, Bootstrap, Node.js, Express.js, API, MongoDB, MVC</h5>
              <br/>
              <p className="card-text">Built a feature-rich Airbnb clone showcasing expertise in full-stack development. Implemented CRUD operations for property listings, allowing users to seamlessly create, read, update, and delete their data. Integrated a user authentication system and a ratings system for enhanced user trust. Leveraged Mapbox for interactive location displays, providing a user-friendly search experience. Utilized the MVC architectural pattern to ensure clean, maintainable code.</p>
              <a href="https://github.com/saheli-m/Project-Wanderlust.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

          <div className="card pro">
            <h3 className="card-header card-title text-center">Weather App</h3>
              <img src={WeatherGlimpse} className="card-img-top" alt="Weather"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> React, JavaScript, CSS, Bootstrap, API</h5>
              <br/>
              <p className="card-text">Created a weather application using React, which fetches real-time weather data from an API. This project showcased the use of React for building user interfaces and managing state, as well as integrating external APIs.</p>
              <a href="https://github.com/saheli-m/Weather-App.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

          <div className="card pro">
            <h3 className="card-header card-title text-center"> Product Catalog</h3>
              <img src={CatalogGlimpse} className="card-img-top" alt="Catalog"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> React, JavaScript, CSS, Bootstrap </h5>
              <br/>
              <p className="card-text">This React-based product catalog website delivers a seamless shopping experience with clear product displays, detailed information, and a functional shopping cart. Built using React, state management, CSS, and Bootstrap, it offers a robust e-commerce foundation with modular components and efficient state handling for a dynamic and user-friendly interface.</p>
              <a href="https://github.com/saheli-m/CODSOFT_product-catalog.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

          <div className="card pro">
            <h3 className="card-header card-title text-center">Blog Platform</h3>
              <img src={BlogGlimpse} className="card-img-top" alt="Blog"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> React, JavaScript, CSS, Bootstrap, Firebase </h5>
              <br/>
              <p className="card-text">This React-based blogging platform empowers users to effortlessly create, manage, and publish their content. Featuring a user-friendly interface, secure authentication, and robust CRUD functionalities, the platform offers a seamless experience for crafting and editing blog posts. Built with React Router for navigation, Firebase for authentication, and styled with CSS and Bootstrap, it provides a solid foundation for a dynamic and engaging blogging experience.</p>
              <a href="https://github.com/saheli-m/CODSOFT_blog-platform.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

          <div className="card pro">
            <h3 className="card-header card-title text-center">Quiz Platform</h3>
              <img src={QuizGlimpse} className="card-img-top" alt="Quiz"/>
            <div className="card-body">
              <br/>
              <h5><b>Technology :</b> React, JavaScript, CSS, Bootstrap, MongoDB, Node.js, Express.js</h5>
              <br/>
              <p className="card-text">This engaging quiz platform offers a dynamic experience for both creators and takers. Users can effortlessly craft quizzes with various question types and track scores automatically. A secure authentication system protects user data while an intuitive interface enhances the quiz-taking experience. With the ability to share results on social media, users can challenge friends and boost engagement.</p>
              <a href="https://github.com/saheli-m/CODSOFT_quiz-platform.git" 
              target="_blank" rel="noreferrer" className="btn btn-outline-primary">Explore it on GitHub</a>
            </div>
          </div>

        </div>
    </div>
);

export default Projects;
