import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  const username = localStorage.getItem('username');

  useEffect(() => {
    axios
      .get(`http://localhost:8080/login/getbyid/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Enable edit mode
  const enableEditMode = () => {
    setEditMode(true);
    setEditedUser(user);
  };

  const inputStyle = {
    marginRight: '1rem',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f2f2f2', // New background color
    color: '#333', // New text color
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // New box shadow
  };
  
  const inputStyleEditMode = {
    marginRight: '1rem',
    padding: '0.5rem',
    border: '2px solid blue',
    borderRadius: '4px',
    backgroundColor: '#fff', // New background color
    color: 'blue', // New text color
    boxShadow: '0 2px 6px rgba(0, 0, 255, 0.3)', // New box shadow
  };
  
  

  

  // Handle input changes during edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const deleteUser=()=>
  {
    axios
      .delete(`http://localhost:8080/login/delete/${user.id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }

  // Save changes
  const saveChanges = () => {
    axios
      .put(`http://localhost:8080/login/update`, editedUser)
      .then((response) => {
        // Update the user state with the editedUser object
        setUser(response.data);
        setEditMode(false);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
      const deleteUser = () => {
        axios
          .delete(`http://localhost:8080/login/delete/${username}`)
          .then(() => {
            // Perform any additional actions after successful deletion
            // For example, redirecting to another page
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      };
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>User Profile</h1>
      
      <div>
        <label style={labelStyle}>Name:</label>
        {editMode ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
        ) : (
          <p>{user && user.name}</p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Username:</label>
        {editMode ? (
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
          />
        ) : (
          <p>{user && user.username}</p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Age:</label>
        {editMode ? (
          <input
            type="text"
            name="age"
            value={editedUser.age}
            onChange={handleInputChange}
          />
        ) : (
          <p>{user && user.age}</p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Email:</label>
        {editMode ? (
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        ) : (
          <p>{user && user.email}</p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Password:</label>
        <div style={passwordContainerStyle}>
  {editMode ? (
    <input
      type={showPassword ? 'text' : 'password'}
      name="password"
      value={editedUser.password}
      onChange={handleInputChange}
      style={inputStyleEditMode} // Updated input style for edit mode
    />
  ) : (
    <input
      type="password"
      value="****"
      readOnly
      style={inputStyle} // Default input style
    />
  )}
  <button onClick={togglePasswordVisibility} style={buttonStyle}>
    {showPassword ? 'Hide Password' : 'Show Password'}
  </button>
</div>


        
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <button onClick={deleteUser} style={deleteButtonStyle}>
          Delete Account
        </button>
        {editMode ? (
          <button onClick={saveChanges} style={saveButtonStyle}>
            Save Changes
          </button>
        ) : (
          <button onClick={enableEditMode} style={editButtonStyle}>
            Edit Profile
          </button>
        )}
      </div>
      <div style={{ position: 'fixed', bottom: '1rem', left: '1rem' }}>
        <Link to="/page1" style={backButtonStyle}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default Profile;

// Styles
const labelStyle = {
  fontWeight: 'bold',
};

const passwordContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  marginRight: '1rem',
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '0.5rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const editButtonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const saveButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
const backButtonStyle = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  };
  const deleteButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '1rem',
  };