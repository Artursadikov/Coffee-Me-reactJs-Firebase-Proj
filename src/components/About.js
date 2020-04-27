import React, { Component } from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import artIMG from "../pic/artIMG.jpg";
import "./About.css";


export default class About extends Component {

    render() {

        return (
            <div className="container">
                <div className="aboutbox">
                    <h1 className="about-header">About me...</h1>
                    <h4 className="app-description">It's a simple React-based coffee capsule store app</h4>
                    <h6 className="creator">App Creator  <span className="craetorName"> Artur Sadikov</span></h6>
                    <div className="img-box">
                        <img alt="Artur sadikov img" className="image" src={artIMG}
                            width="205" height="154.5"></img>
                    </div>
                    <div className="contact">
                        <h4 className='visit'>Visit</h4>
                        <ul className="contact-ul">
                            <li><a className="contact-links email" href="mailto:artur.sadikov1@gmail.com"><FaRegEnvelope /></a></li>
                            <li><a className="contact-links linkdin" href="https://www.linkedin.com/in/artur-sadikov-88063717b/"><FaLinkedin /></a></li>
                            <li><a className="contact-links facebook" href="https://www.facebook.com/Artur.sadikov2"><FaFacebook /></a></li>
                            <li><a className="contact-links instagram" href="https://www.instagram.com/sadikov_artur/"><FaInstagram /></a></li>
                        </ul>
                    </div>
                    <div className="phone">
                        <h6 className="whatsapp"><FaWhatsapp className="icon" /> >>> Number  <span className="numphone">  0505073942</span></h6>
                    </div>
                </div>
            </div>
        )
    }
}; 