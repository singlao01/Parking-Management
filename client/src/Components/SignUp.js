import React, { useState } from 'react';
import '../Styles/SignUp.css'; // Import the CSS file for styling

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        contact: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { username, email, password, contact } = formData;

        // Basic validation
        if (!username || !email || !password || !contact) {
            setMessage('Please fill in all fields.');
            return;
        }

        // Show success message (you would typically send data to the server here)
        setMessage(`Signup successful! Welcome, ${username}!`);
        setFormData({ username: '', email: '', password: '', contact: '' }); // Reset form
    };

    return (
        <div className="container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact Number</label>
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
};

export default Signup;