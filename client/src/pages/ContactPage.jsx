import React, { forwardRef } from "react";
import './main.css';
import { useState, useEffect } from "react";

const Contact = forwardRef((props, ref) => {

    const [clean, setClean] = useState(false);
    const [succesMessage, setSuccesMessage] = useState(false);
    const [formData, setFormData] = useState({

        nume: ' ',
        email: '',
        subiect: ''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submitEvent = (e) => {
        e.preventDefault();

        fetch(`https://balanandrei.ro/api/send-email-site`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                setClean(true);
                setSuccesMessage(true);

            })
            .catch((error) => {

                console.error(error);
            });
    };

    useEffect(() => {

        const initialFormData = {
            nume: '',
            email: '',
            subiect: '',

        };

        setFormData(initialFormData);

        return () => {
            setClean(false);
        }
    }, [clean])

    function setFunction() {
        setSuccesMessage(false);
    }
 
    return (
        <section name='Contact Page' data-page-name="/contact" className="contact-page" id='4' ref={ref}>

            <div className="container contact-pg-h d-flex flex-column justify-content-center align-items-center">

                {!succesMessage ?

                    <div className="container-fluid contact-pad d-flex flex-column justify-content-center position-relative">

                        <div className="text-center px-md-5 mb-sm-4 main-font">
                            <h4 className="form-heading main-font font-size">Send a message!</h4>
                            <p className="form-text">Whether you want to ask me something or just say hello, you can do it.</p>
                        </div>

                        <div>
                            <form onSubmit={submitEvent}>
                                <div className="row m-0 main-font">
                                    <div className="input-section col-md-6  d-flex flex-column">
                                        <label className="mb-2">Your Name</label>
                                        <input
                                            onChange={handleChange}
                                            name='nume'
                                            value={formData.nume}
                                            type='text'
                                            className="input-frm py-sm-3"
                                        ></input>
                                    </div>
                                    <div className="input-section col-md-6  d-flex flex-column">
                                        <label className="mb-2">Email adress</label>
                                        <input
                                            onChange={handleChange}
                                            name='email'
                                            value={formData.email}
                                            type='text'
                                            className="input-frm py-sm-3" ></input>
                                    </div>
                                    <div className="input-section col-12 pt-2">
                                        <label className="mb-2">Your Message</label>
                                        <textarea
                                            onChange={handleChange}
                                            name='subiect'
                                            value={formData.subiect}
                                            className="input-frm pb-sm-5 w-100"></textarea>
                                    </div>

                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-warning">Send <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                    :
                    <div>

                        <div className="d-flex justify-content-center flex-column align-items-center">

                            <i className="succes fa-regular fa-circle-check"></i>
                            <p className="succes-text">The message was successfully sent!</p>
                            <button type="button" className="succes-btn btn btn-outline-success" onClick={() => setFunction()}>Ok</button>

                        </div>

                    </div>
                }
            </div>

        </section>
    )
})

export default Contact;