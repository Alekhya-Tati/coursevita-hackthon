import React, { useState } from 'react';
import './ProfileCreationForm.css';  // Import the CSS file

const ProfileCreationForm = () => {
  // Initial state for the profile
  const [profile, setProfile] = useState({
    name: '',
    skills: '',
    interests: '',
    experienceLevel: ''
  });

  // State for form validation feedback
  const [errors, setErrors] = useState({});
  
  // Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Validate the form
  const validateForm = () => {
    let formErrors = {};
    if (!profile.name) formErrors.name = "Name is required";
    if (!profile.skills) formErrors.skills = "Skills are required";
    if (!profile.interests) formErrors.interests = "Interests are required";
    if (!profile.experienceLevel) formErrors.experienceLevel = "Experience level is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with profile creation (e.g., send data to backend)
      console.log('Profile Created:', profile);

      // Reset the form
      setProfile({
        name: '',
        skills: '',
        interests: '',
        experienceLevel: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="skills">Skills (comma-separated):</label>
        <input
          type="text"
          name="skills"
          value={profile.skills}
          onChange={handleChange}
          placeholder="E.g., JavaScript, React, Node.js"
        />
        {errors.skills && <p className="error">{errors.skills}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="interests">Interests:</label>
        <input
          type="text"
          name="interests"
          value={profile.interests}
          onChange={handleChange}
          placeholder="E.g., Web development, AI, Cloud computing"
        />
        {errors.interests && <p className="error">{errors.interests}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="experienceLevel">Experience Level:</label>
        <select
          name="experienceLevel"
          value={profile.experienceLevel}
          onChange={handleChange}
        >
          <option value="">Select experience level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        {errors.experienceLevel && <p className="error">{errors.experienceLevel}</p>}
      </div>

      <button type="submit" className="submit-button">Create Profile</button>
    </form>
  );
};

export default ProfileCreationForm;
