

const ContactForm = () => {
    return(
        <form>
            <label for = 'first_name'>First Name</label>
            <input type='text' name='first_name' id='first_name' placeholder = 'Enter Your First Name'/>

            <label for='last_name'>Last Name</label>
            <input type='text' name='last_name' id='last_name' placeholder="Enter your last name"/>

            <label for = 'email'>Email</label>
            <input type='email' name = 'email' id='email' placeholder="yourname@email.com"/>

            <label for='message'>Message</label>
            <textarea rows='10' cols='20' name='message' id='message' placeholder="Send me a message and I'll reply you as soon as possible..."/>

        </form>
    )
        
};

export default ContactForm