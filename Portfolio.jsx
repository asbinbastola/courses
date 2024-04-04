// Portfolio.js
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.css";

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
              <br></br>
              <button className='btn btn-success' >ok Brother</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
