import './profileSection.css';
import profilePic from "./assets/pic.png";
import sharebtn from "./assets/share.png";
import morebtn from "./assets/more.png";



const ProfileSection = () => {
    return(
        <>
            <div className='profileContainer'>
                <img src={profilePic} alt="profile pic" id="profile__img"></img>
                <img src={sharebtn} alt="" id="sharebtn"/>
                <img src={morebtn} alt="" id="morebtn"></img>
            </div>
           

           
            <p id="twitter">OLOWOOKEREISAAC</p>
            <p id="slack">_isaac_ </p>

        </>
    );
}

export default ProfileSection;