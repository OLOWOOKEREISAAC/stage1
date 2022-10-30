import React from 'react';
import './App.css';
import LinksSection from './LinksSection';
import ProfileSection from './profileSection';
import gitIcon from './assets/gitIcon.png';
import slackIcon from './assets/slack.png';
import Footer from './Footer';


function App() {
  return (
   <React.Fragment>
    <ProfileSection/>
    <LinksSection/>
    <img src={slackIcon} className= 'icons' />
    <img src={gitIcon}  className= 'icons'/>
    
    <Footer/>

   </React.Fragment>
  );
}

export default App;
