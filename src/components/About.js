import React, { Component } from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import "./About.css";


export default class About extends Component {

    render() {

        return (
            <div className="container">
                <div className="aboutbox">
                    <h1 className="about-header">About me...</h1>
                    <h4 className="app-description">It's a simple React-based coffee capsule store app</h4>
                    <h6 className="creator">Creator:  <span> Artur sadikov</span></h6>
                    <div className="img-box">
                        <img alt="Artur sadikov img" className="image" src="https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/72661071_10221073998422879_3029534308416094208_o.jpg?_nc_cat=108&_nc_sid=dd7718&_nc_oc=AQk21kMog5eTA1vnPcdyc_Mu9-R65TM8_CZ8aLAaGhhZ9G6VCmVDZ8VHIxqirqUv4ELA6J8x9ZuIB-aIO4Nm62xX&_nc_ht=scontent.ftlv2-1.fna&oh=a36719d81a7c4e428fdf4c0e24261ace&oe=5E9F4568"
                            width="205.5" height="154.5"></img>
                    </div>
                    <div className="contact">
                        <ul className="contact-ul">
                            <li><a className="contact-links" email="artur.sadikov1@gmail.com" href={`mailto:${this.props.email}`}><FaRegEnvelope /></a></li>
                            <li><a className="contact-links" href="https://www.linkedin.com/in/artur-sadikov-88063717b/"><FaLinkedin /></a></li>
                            <li><a className="contact-links" href="https://www.facebook.com/Artur.sadikov2"><FaFacebook /></a></li>
                            <li><a className="contact-links" href="https://www.instagram.com/sadikov_artur/"><FaInstagram /></a></li>
                        </ul>
                    </div>
                    <div className="phone">
                        <h6 className="whatsapp"><FaWhatsapp className="icon" /> Number: <span>  0505073942</span></h6>
                    </div>
                </div>
            </div>
        )

    }

}; 