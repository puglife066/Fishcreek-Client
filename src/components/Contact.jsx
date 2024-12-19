// Importing React and useState hook for managing component state
import React, { useState } from "react";
function Contact() {
    // State to manage the form data entered by the user
    const [formData, setFormData] = useState({
        myName: "", // Field for the user's name
        myEmail: "", // Field for the user's email
        myReason: "", // Field for the reason for contact
        myComments: "", // Field for additional comments
    });
    // State to store the server's response message
    const [responseMessage, setResponseMessage] = useState("");
    // Handler to update the formData state when user changes any input field
    const handleChange = (e) => {
        setFormData({
            ...formData, // Keep the existing form data
            [e.target.name]: e.target.value, // Update the field that triggered the change
        });
    };
    // Handler to process form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior (e.g., page reload)
        try {
            // Send a POST request to the server with the form data
            const response = await fetch("http://localhost:5000/submit-contact", {
                method: "POST", // HTTP method
                headers: {
                    "Content-Type": "application/json", // Specify JSON content type
                },
                body: JSON.stringify(formData), // Convert form data to JSON
            });
            // Parse the JSON response from the server
            const data = await response.json();
            if (response.ok) {
                // If the server responds with success, display the message and data
                setResponseMessage(`
                ${data.message}
                Here is the data you submitted:
                - Name: ${data.receivedData.name}
                - Email: ${data.receivedData.email}
                - Reason: ${data.receivedData.reason}
                - Comments: ${data.receivedData.comments}
                `);
                // Reset the form fields to empty values after submission
                setFormData({
                    myName: "",
                    myEmail: "",
                    myReason: "",
                    myComments: "",
                });
            }
            else {
                // If the server responds with an error, display the error message
                setResponseMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            // Handle any network or unexpected errors
            console.error("Error:", error);
            setResponseMessage("Failed to submit the form. Try again later.");
        }
    };
    // The JSX for rendering the contact form and server response message
    return (
        <main>
            <h2>Contact Fish Creek</h2>
            <p>Fill out the form below to contact Fish Creek. All information is
                required.</p>
            {/* Form to collect contact details */}
            <form onSubmit={handleSubmit}>
                {/* Name field */}
                <label htmlFor="myName">Name:</label>
                <input
                    type="text"
                    id="myName"
                    name="myName"
                    value={formData.myName}
                    onChange={handleChange} // Call handleChange on field change
                />
                {/* Email field */}
                <label htmlFor="myEmail">E-mail:</label>
                <input
                    type="text"
                    id="myEmail"
                    name="myEmail"
                    value={formData.myEmail}
                    onChange={handleChange} // Call handleChange on field change
                />
                {/* Explanation:
 - The `htmlFor` attribute in JSX is equivalent to the standard 
`for` attribute in HTML.
 - In JSX, `for` is a reserved keyword in JavaScript, so React 
uses `htmlFor` instead.
 - It connects the <label> tag to the input field with the 
matching `id`.
 - For example, `htmlFor="myName"` links the label to the input 
field with `id="myName"`.
 */}
                {/* Reason for contact with a dropdown list */}
                <label htmlFor="myReason">Reason for Contact:</label>
                <input
                    type="text"
                    id="myReason"
                    name="myReason"
                    list="reasons" // Connect to the datalist with id="reasons"
                    value={formData.myReason}
                    onChange={handleChange} // Call handleChange on field change
                    required // Make this field required
                />
                {/* Predefined options for the reason */}
                <datalist id="reasons">
                    <option value="New Patient">New Patient</option>
                    <option value="Appointment">Appointment</option>
                    <option value="House Call">House Call</option>
                    <option value="Information">Information</option>
                    <option value="Ask the Vet">Ask the Vet</option>
                </datalist>
                {/* Comments field */}
                <label htmlFor="myComments">Comments:</label>
                <textarea
                    rows="2"
                    cols="20"
                    id="myComments"
                    name="myComments"
                    value={formData.myComments}
                    onChange={handleChange} // Call handleChange on field change
                ></textarea>
                {/* Submit button */}
                <input type="submit" value="Send Now" id="mySubmit" name="mySubmit"
                />
            </form>
            {/* Display the server response message if it exists */}
            {responseMessage && <p>{responseMessage}</p>}
        </main>
    );
}
// Export the Contact component so it can be used in other parts of the application
export default Contact;