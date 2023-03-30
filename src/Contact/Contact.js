import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../Contact/Contact.css'
import { Container } from 'react-bootstrap';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqyzvrz");
  if (state.succeeded) {
      return <div className='main'><p>Thanks for joining!</p></div>;
  }
  return (
    
    <div className='main' id='contact'>
      
        <div className='Container-fluid'>
          

          <form className='contact-wrapper' onSubmit={handleSubmit}>
              <h2 id='title'>Contact<br></br> Quantin Photographe!</h2>
              <input id="email" type="email" name="email" placeholder='Enter your email'/>
              <ValidationError prefix="Email" field="email" errors={state.errors}/>

            
              
              <textarea id="message" name="message" placeholder='Ecrivez votre message'/>
              <ValidationError prefix="Message" field="message" errors={state.errors}/>

              <button className='boutton' type="submit" disabled={state.submitting}>
                  Submit
              </button>

          </form>
        </div>  
      
    </div>    
    
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;