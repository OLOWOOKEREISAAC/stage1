import I4G from './assets/I4G.png'
import './Footer.css';

function Footer (){
    return(
        <div className='footer'>
            <h2> Zuri <span id='zurisDot'></span> Internship </h2>
            <p > HNG Internship 9 Frontend Task</p>
            <figure>
                <img src={I4G} id='i4g' />
            </figure>
            
         
        
        
        </div>
    );
};

export default Footer;