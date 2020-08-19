import React from 'react';
import {Link} from 'react-router-dom';
import './contactpage.css'

const ContactUs = () => {
    return ( 
        <div className="backdrop">
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <div className="contact-form">
                    <form>
                        <label>
                            <h4>Name</h4>
                            <input type="text" placeholder="Enter your full name"/>
                        </label>
                        <label>
                            <h4>E-mail</h4>
                            <input type="email" placeholder="Enter your email address"/>
                        </label>
                        <label><h4>Dropdown</h4>
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </label>
                        <textarea className="form-textarea" placeholder="Enter your message here..."/>
                        <button>Submit</button>
                        <Link to="/">Back</Link>
                    </form>
                    <div className="contact-info">
                    <p>497 Evergreen Rd. Roseville, CA 95673<br/> +44 345 678 903 <br/> maynooth@mail.com</p>
                </div>
                
                </div>

            </div>
        </div>
     );
}
 
export default ContactUs;