import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Utkarsh Datta</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I am seeking an employer that values my talents and encourages initiative, while recognizing hard work and aligning corporate goals with personal and professional growth</p>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <ul>
            <li>
            <a href ="https://github.com/UDROCKS224/Todolist.git"
              target = "_blank">
              <img src="https://github.com/UDROCKS224/Todolist.git" alt="Project 1" />
              </a>
              <h3>Project 1</h3>
              <p>TODOLIST</p>
              
            </li>
            <li>
              <a  href = "https://github.com/UDROCKS224/QuoteGenerator.git"
              target = "_blank">
              <img src="https://github.com/UDROCKS224/Todolist.git"
              alt="Project 2" />
              </a>
              <h3>Project 2</h3>
              <p>Quote Converter</p>
            </li>
            <li>
            <a  href = "https://github.com/UDROCKS224/Stopwatch.git"
              target = "_blank">
              <img src="https://github.com/UDROCKS224/Stopwatch.git" alt="Project 3" />
              </a>
              <h3>Project 3</h3>
              <p>StopWatch</p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Utkarsh Datta. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


