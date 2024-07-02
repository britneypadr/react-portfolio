import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <div className="container">
                <h2>Resume</h2>
                <p>Download my resume <a href="/path/to/resume.pdf" download>here</a>.</p>
                <h3>Proficiencies</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML/CSS</li>
                    <li>Node.js</li>
                    <li>SQL/NoSQL Databases</li>
                    {/* Add more proficiencies as needed */}
                </ul>
            </div>
        </section>
    );
}

export default Resume;
