/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">Full Stack <br /> Web Developer <br /> Intern</h3>
                </div>

                <div>
                    <span className="exp__comp">Edureka</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Full Stack Web Developer Intern <br /> Jan'24 - Apr'24</h3>
                        <p className="exp__modal-description">Worked as a Full Stack Web Developer Intern at Edureka for 4 months, building and optimizing web applications.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Developed MERN stack applications.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Implemented authentication & authorization using JWT.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Enhanced UI/UX components for better user experience.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content specialCard">
                <div>
                    <i className="uil uil-graduation-cap exp__icon"></i>
                    <h3 className="exp__title">Campus Placement Training</h3>
                </div>

                <div>
                    <span className="exp__comp">SAI CRT Coaching Bhopal</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Campus Placement Training <br /> Duration: 4 Months</h3>
                        <p className="exp__modal-description">Completed training in campus placement with a focus on data structures, Python, aptitude, and communication skills.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Data Structures in Python.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Aptitude and Logical Reasoning.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Communication and Problem-Solving Practice.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Practicing coding questions on various platforms.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-graduation-cap exp__icon"></i>
                    <h3 className="exp__title">Software Development <br /> Training Courses</h3>
                </div>

                <div>
                    <span className="exp__comp">Shreyansh Coding School, Bhopal</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Development Training <br /> Jun'24 - Sep'24</h3>
                        <p className="exp__modal-description">Completed 4 advanced courses at Shreyansh Coding School, Bhopal, focusing on software development.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Advanced MERN Stack Development.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Data Structures and Algorithms in JavaScript.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Backend Optimization & Performance Tuning.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">System Design and Scalable Architectures.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience;