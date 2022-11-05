import LinksSection from "./LinksSection";
import ProfileSection from "./profileSection";

import gitIcon from './assets/gitIcon.png';
import slackIcon from './assets/slack.png';


function Home(){
    return(
        <>
            <ProfileSection/>
            <LinksSection/>
            <img src={slackIcon} alt='slackIcon' className= 'icons' />
            <img src={gitIcon} alt='gitIcon' className= 'icons'/>
        </>
    )
};

export default Home;