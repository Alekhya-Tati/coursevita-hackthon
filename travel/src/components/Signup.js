import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; 
import toast from 'react-hot-toast';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
  });

  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); 

    // Validation for password match
    // if (formData.password !== formData.confirmPassword) {
    //   setError("Passwords do not match.");
    //   toast.error("Passwords do not match", { position: "top-right" });
    //   return;
    // }

    try { 
      console.log("Submitting formdata:", formData); // Check the user data being sent 
      const response = await axios.post("http://localhost:2003/api/user", formData); 
      // console.log("User submitted successfully", response.data); 
      toast.success(response.data.message, { position: "top-right" }); 
      navigate("/"); 
    } 
    catch (error) { 
      if (error.response && error.response.data) { 
        console.log("Error submitting user", error.response.data); 
        setError(error.response.data.message); 
      } 
      else{
        console.log("Error submitting user",error.message);
      }

  
    } 
  };

  return (
    <div className='Signup-nn'>
      <section>
        <div className="signup">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            <div className="inputBox">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="inputBox">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="inputBox">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                required
              />
            </div>

            <div className="inputBox">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="inputBox">
              <label htmlFor="country">Country of Residency</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select your country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="INDIA">INDIA</option>
                <option value="Australia">AUSTRALIA</option>
                <option value="uk">UK</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;
