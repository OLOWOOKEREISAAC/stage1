import React from 'react';
import './App.css';
import LinksSection from './LinksSection';
import ProfileSection from './profileSection';
import gitIcon from './assets/gitIcon.png';
import slackIcon from './assets/slack.png';
import Footer from './Footer';
import ContactForm from './Contact';


function App() {
  return (
   <React.Fragment>
    <ProfileSection/>
    <LinksSection/>
    <img src={slackIcon} alt='slackIcon' className= 'icons' />
    <img src={gitIcon} alt='gitIcon' className= 'icons'/>
    <ContactForm/>
    
    <Footer/>

   </React.Fragment>
  );
}

export default App;
