import './profileSection.css';
import profilePic from "./assets/pic.png";
import sharebtn from "./assets/share.png";
import morebtn from "./assets/more.png";



const ProfileSection = () => {
    return(
        <>
            <div className='profileContainer'>
                <img src={profilePic} alt="profile pic" id="profile__img"></img>
                <img src={sharebtn} alt="sharebtn" id="sharebtn"/>
                <img src={morebtn} alt="morebtn" id="morebtn"></img>
            </div>
           

           
            <h2 id="twitter">OLOWOOKEREISAAC</h2>
            <p id="slack">_isaac_ </p>

        </>
    );
}

export default ProfileSection;