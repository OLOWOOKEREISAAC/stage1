import './profileSection.css';
import profilePic from "./assets/pic.png";



const ProfileSection = () => {
    return(
        <>
            <img src={profilePic} alt="profile pic" id="profile__img"></img>
           
            <p id="twitter">OLOWOOKEREISAAC</p>
            <p id="slack">_isaac_ </p>

        </>
    );
}

export default ProfileSection;