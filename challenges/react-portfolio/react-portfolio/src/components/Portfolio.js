import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <h2>Portfolio</h2>
                <div className="projects">
                    <div className="project">
                        <img src="project1.jpg" alt="Project 1" />
                        <h3>Project 1</h3>
                        <p>Description of Project 1.</p>
                        <a href="https://project1.com" target="_blank" rel="noopener noreferrer">Visit Project</a>
                        <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                    <div className="project">
                        <img src="project2.jpg" alt="Project 2" />
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                        <a href="https://project2.com" target="_blank" rel="noopener noreferrer">Visit Project</a>
                        <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                    {/* Add more projects as needed */}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
