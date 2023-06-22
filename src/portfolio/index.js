import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Axios from 'axios'

import Work from './work'
import AboutMe from './about'

import GithubIcon from '../assets/icon-png/github.png';
import LinkedinIcon from '../assets/icon-png/linkedin.png';
import ProfilePhoto from '../assets/images/dummy-profile-pic.jpg';

const IndexPage = () => {

  const [userData, setUserData] = useState({
    avatar: ProfilePhoto,
    loc: ''
  });

  const fetchProfile = () => {
    Axios.get('https://api.github.com/users/dalbirsrana')
    .then(res => {
        setUserData({
            avatar: res.data.avatar_url,
            loc: res.data.location
        })
        // console.log(res)
    })
    .catch(err => console.log(err))
}


useEffect(() => {
  
  document.title = window.location.hostname + ": Portfolio";

  let isUnMount = false;
  if (!isUnMount) {
      fetchProfile();
  }
  return () => {
      isUnMount = true;
  }
}, []);


  const greetings = () => {
    let d = new Date();
    let time = d.getHours();
    if (time < 4) return ("Hi!")
    if (time >= 4 && time < 12) return ("Good Morning!")
    if (time >= 12 && time < 17) return ("Good Afternoon!")
    if (time >= 17) return ("Good Evening!")
  }
  

  return (
    <div className="home-page">
        <section className="section-hero">

        <div className="hero-text">

          <div className="user-intro">
            <div className="user-avatar">
                <img src={userData.avatar} alt="Dalbir Singh" />
            </div>                 

            <ul className="user-social">
                <li>
                    <a href="https://github.com/dalbirsrana">
                        <img src={GithubIcon} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dalbirsrana/">
                        <img src={LinkedinIcon} alt="Linkedin" />
                    </a>
                </li>
            </ul>
          </div>

            <h1 className="hero-greetings">{greetings()}, My name is Dalbir.</h1>
            {/* <h2 className="hero-intro">.</h2>  */}
            <h2 className="hero-intro">I am a <span>&lt;</span>WEB<span>&#47;&gt;</span>  <span>{"{"}</span>Developer<span>{"}"}</span> living in {userData.loc}, CA.</h2>

            <div className="ms-slider">
              <ul className="ms-slider__words">
                <li className="ms-slider__word">HTML</li>
                <li className="ms-slider__word">CSS</li>
                <li className="ms-slider__word">JAVASCRIPT</li>
                <li className="ms-slider__word">REACT</li>
                <li className="ms-slider__word">PHP</li>
                <li className="ms-slider__word">HTML</li>
                <li className="ms-slider__word">CSS</li>
                <li className="ms-slider__word">JAVASCRIPT</li>
                <li className="ms-slider__word">REACT</li>
                <li className="ms-slider__word">PHP</li>
              </ul>
            </div>

            <h1 className="hero-welcome">Welcome to my portfolio!</h1>
          </div>
        </section>

        <AboutMe />

        <Work />  

        <section className="section-hire">

          <Button>
              <ButtonLink to="/contact"> Contact me </ButtonLink>
          </Button>
  
        </section>

      </div>
  )
}

export default IndexPage

const ButtonLink = styled(Link) `
  color: white;
  transition: all 300ms ease;
  &:visited {color: white;}
  &:hover, &:focus {color: white; text-decoration: underline; }
`;

const Button = styled.button`
  background-color: #FFAC41;
  color: white;
  font-size: 22px;
  padding: 12px 60px;
  border-radius: 5px;
  margin: 32px 0px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover, &:focus {background-color: #ee1149;}
`;
