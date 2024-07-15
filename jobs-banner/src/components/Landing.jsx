// Landing.jsx
import React from 'react';
import JobCard from './JobCard';

const Landing = () => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        Become a <span style={styles.highlightedText}>Data Scientist</span> with Ladder7
      </div>
      <div style={styles.inputContainer}>
        <input type="text" style={styles.input} placeholder="Enter your email" />
        <button style={styles.button}>Find Jobs</button>
      </div>
      {/* <div style={styles.cardsContainer}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div> */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '1rem',
  },
  highlightedText: {
    color: '#007bff',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '440px',
    height: '40px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#e0e0e0',
    padding: '0 20px',
    fontSize: '1rem',
  },
  button: {
    height: '40px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    padding: '0 20px',
    marginLeft: '10px',
    cursor: 'pointer',
    width: '98px',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
    backgroundColor:"white"
  },
};

export default Landing;
