import { useState } from "react";
import { AiOutlineMail } from 'react-icons/ai';

function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    // Handle the input change and update its state
    const handleInputChange = (e) => {
        // Get the name and value of each input
        const { name, value } = e.target;

        // Update the state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        // Prevent the default behavior of the form submit
        e.preventDefault();

        // Alert to acknowledge request
        alert(`Thank you ${formData.firstName} for using our service and for your query 😁. A member of our team will get back to you as soon as possible 🏃!`);

        // Clear the inputs
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });

        // Close the modal
        setShowModal(false);
    };

    return (
        <div>
            {/* Button to trigger the modal */}
            <button className="flex items-center py-2 px-4 ml-3 mt-1 rounded" onClick={() => setShowModal(true)}>
                <AiOutlineMail className="mr-4" /> Contact Us
            </button>

            {/* Modal */}
            {showModal && (
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded shadow-lg w-96">
                        <div className="flex justify-end">
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal(false)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <form className="space-y-4">
                            {/* Input fields */}
                            <div className="flex flex-col space-y-2">
                                {/* First and last name */}
                                <div className="flex space-x-2">
                                    <input
                                        value={formData.firstName}
                                        name="firstName"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="First Name"
                                        className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none"
                                    />
                                    <input
                                        value={formData.lastName}
                                        name="lastName"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none"
                                    />
                                </div>
                                {/* Email */}
                                <input
                                    value={formData.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    type="email"
                                    placeholder="Email"
                                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none"
                                />
                                {/* Message */}
                                <textarea
                                    value={formData.message}
                                    name="message"
                                    onChange={handleInputChange}
                                    placeholder="Enter your message here"
                                    className="px-3 py-10 border border-gray-300 rounded focus:outline-none"
                                />
                            </div>
                            {/* Submit button */}
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleFormSubmit}
                                    className="mt-2 h-10 px-5 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded focus:outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
