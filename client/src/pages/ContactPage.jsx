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
        <section name='Contact Page' data-page-name="/contact" className="contact-page" id='5' ref={ref}>

            <div className="container mx-auto contact-pg-h flex flex-col justify-center items-center">

                {!succesMessage ?

                    <div className=" space-y-8">

                        <div className="text-center space-y-3">
                            <h4 className="lato-bold-italic text-4xl md:text-5xl">Send a message!</h4>
                            <p className="lato-light text-xl">Whether you want to ask me something or just say hello, you can do it.</p>
                        </div>

                        <form
                            onSubmit={submitEvent}
                            className="flex flex-col items-center gap-5 font-semibold text-lg">

                            <section className="flex flex-col md:flex-row w-full gap-4">

                                <div className="md:w-1/2 flex flex-col">
                                    <label className="">Your Name</label>
                                    <input
                                        onChange={handleChange}
                                        name='nume'
                                        value={formData.nume}
                                        type='text'
                                        className="bg-transparent border-2 border-gray-600 p-3 rounded-lg"
                                    ></input>
                                </div>

                                <div className="md:w-1/2 flex flex-col">
                                    <label className="">Email adress</label>
                                    <input
                                        onChange={handleChange}
                                        name='email'
                                        value={formData.email}
                                        type='text'
                                        className="bg-transparent border-2 border-gray-600 p-3 rounded-lg "
                                    ></input>

                                </div>

                            </section>

                            <div className="flex flex-col w-full ">
                                <label className="">Your Message</label>
                                <textarea
                                    onChange={handleChange}
                                    name='subiect'
                                    value={formData.subiect}
                                    className="bg-transparent border-2 border-gray-600 h-48 rounded-lg"></textarea>
                            </div>

                            <div className="bg-green-700 p-3 px-12 text-white rounded-lg">
                                <button type="submit" className="lato-bold text-lg">Send <i className="fa-solid px-2 fa-arrow-right"></i></button>
                            </div>


                        </form>

                    </div>

                    :

                    <div>

                        <div className="flex justify-center flex-col items-center space-y-8">

                            <i className="text-8xl text-green-700 fa-regular fa-circle-check"></i>
                            <p className="lato-light text-4xl text-center">The message was successfully sent!</p>

                            <button type="button" className=" border-2 border-green-700 p-2 px-8 rounded-lg lato-bold text-lg" onClick={() => setFunction()}>Ok</button>

                        </div>

                    </div>
                }

            </div>

        </section>
    )
})

export default Contact;