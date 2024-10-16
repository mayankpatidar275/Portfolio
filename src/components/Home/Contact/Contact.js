import React from 'react';
import Tilt from "react-parallax-tilt";
import Swal from 'sweetalert2';
import myImg from "../../../Assets/avatar.svg";
import './Contact.css';

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_CONTACT_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <Tilt>
                    <img src={myImg} className="img-fluid" alt="avatar" />
                    {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
                </Tilt>
                <h1>CONTACT ME</h1>
                <div className='input-box'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required className='field' />
                </div>
                <div className='input-box'>
                    <label>Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required className='field' />
                </div>
                <div className='input-box'>
                    <label>Message</label>
                    <textarea name='message' required placeholder='Enter your message' className='field mess'></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    )
}

export default Contact
