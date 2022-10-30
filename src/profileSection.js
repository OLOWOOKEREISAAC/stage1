import './profileSection.css';
import profilePic from "./assets/pic.png";



const ProfileSection = () => {
    return(
        <>
            <img src={profilePic} alt="profile pic" id="profile__img"></img>
           
            <p id="twitter">twitter username</p>
            <p id="slack">isa_c </p>

        </>
    );
}

export default ProfileSection;