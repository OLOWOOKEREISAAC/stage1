import './Contact.css';

const ContactForm = () => {
    return(
        <div className="contactFormContainer">
            <h1> Contact Me </h1>
            <p> Hi there, contact me about anything you have in mind</p>
            <form className="contactForm">
                <div >
                  <label for = 'first_name'>First Name</label><br/>
                  <input type='text' name='first_name' id='first_name' placeholder = 'Enter Your First Name'/>  
                </div>
                
                <div>
                    <label for='last_name'>Last Name</label><br/>
                    <input type='text' name='last_name' id='last_name' placeholder="Enter your last name"/>
                </div>

                
                <div>
                    <label for = 'email'>Email</label><br/>
                    <input type='email' name = 'email' id='email' placeholder="yourname@email.com"/>
                </div>
                
                <div>
                    <label for='message'>Message</label><br/>
                    <textarea rows='10' cols='30' name='message' id='message' required placeholder="Send me a message and I'll reply you as soon as possible..."/>
                </div>
                
                <input type="radio" id='radioBtn' name='radioBtn' value='#'/>
                <label for= 'radioBtn'>You agree to providing your data to HN9 who may contact you.</label>

                <button type= 'submit' id='btn__submit'>Send Message</button>
            </form>
        </div>
    )
        
};

export default ContactForm