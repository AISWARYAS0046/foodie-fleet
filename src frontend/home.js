import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    backgroundImage: "url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    fontFamily: 'Arial, sans-serif',
  };

  const contentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const containerStyles = {
    padding: '40px',
    textAlign: 'center',
  };

  const logoStyles = {
    marginBottom: '20px',
    width: '200px',
  };

  const headingStyles = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333333',
  };

  const descriptionStyles = {
    fontSize: '18px',
    marginBottom: '40px',
    color: '#666666',
  };

  const buttonStyles = {
    padding: '12px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    backgroundColor: 'skyblue',
    color: 'grey',
  };

  const handleOrderNow = () => {
    navigate('/page1'); // Replace '/order' with the path to your order page
  };

  return (
    <div style={styles}>
      <div style={contentStyles}>
        <div style={containerStyles}>
         
         
          <button
            style={buttonStyles}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = buttonStyles.backgroundColor)
            }
            onClick={handleOrderNow}
          >
            Get It Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;