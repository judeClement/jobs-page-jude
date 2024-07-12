import React from 'react';
import banner from '../images/banner.jpeg';

const Banner = () => {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={{ padding: "100px", marginBottom: "80px" }}>
          <h1 style={styles.heading}>Cyber Security<br />Analyst</h1>
          <p style={styles.description}>
            Data science involves extracting insights and knowledge from data using various analytical and computational techniques.
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.button}>
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div style={styles.right}>
        <img src={banner} alt="Team working on cyber security" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
  },
  left: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#F4F4F4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    paddingBottom: '10px',
  },
  description: {
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: '10px',
    paddingBottom: '16px',
    fontWeight: '400',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    maxWidth: '200px', // Use max-width instead of width
    width: '100%', // Make the button take full available width
    padding: '15px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    boxSizing: 'border-box', // Include padding in width calculations
    textAlign: 'center', // Center the text
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  // Add media queries for responsiveness
  '@media (max-width: 600px)': {
    heading: {
      fontSize: '36px',
    },
    description: {
      fontSize: '18px',
    },
    button: {
      padding: '10px',
      fontSize: '14px',
    },
  },
};

export default Banner;
