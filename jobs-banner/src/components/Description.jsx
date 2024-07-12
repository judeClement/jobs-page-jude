import React from 'react';
import emailIcon from '../images/Vector (2).png';
import locationIcon from '../images/Vector.png';
import rupeesIcon from '../images/Vector (1).png';

const Description = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Job Description</h1>
      <div>
        <p style={styles.description}>
          We are seeking a skilled and detail-oriented Cyber Security Analyst to join our team. The Cyber Security Analyst will be responsible for protecting our organization's information systems by identifying and mitigating security threats. This role involves continuous monitoring, analysis, and improvement of security measures to ensure the confidentiality, integrity, and availability of our data.
        </p>
      </div>
      <div>
        <div style={styles.infoContainer}>
          <div style={styles.infoBox}>
            <img src={emailIcon} alt="Email Icon" style={styles.icon1} />
            <div style={styles.label}>Full Time</div>
          </div>
          <div style={styles.infoBox}>
            <img src={locationIcon} alt="Location Icon" style={styles.icon2} />
            <div style={styles.label}>Location</div>
          </div>
          <div style={styles.infoBox}>
            <img src={rupeesIcon} alt="Rupees Icon" style={styles.icon3} />
            <div style={styles.label}>20k–60k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    paddingBottom: '30px',
    borderBottom: '1px solid black',
  },
  heading: {
    padding: '20px',
    paddingLeft: '40px',
    fontSize: '40px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  description: {
    padding: '20px',
    paddingLeft: '40px',
    fontSize: '20px',
    marginBottom: '30px',
    textAlign: 'left',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '28px',
    marginBottom: '55px',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#F5F5F5',
    borderRadius: '15px',
    width: '150px',
    height: '100px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '10px', // Add margin to separate items when wrapped
  },
  icon1: {
    width: '38px',
    height: '28px',
    marginBottom: '15px',
  },
  icon2: {
    width: '30px',
    height: '35px',
    marginBottom: '10px',
  },
  icon3: {
    width: '25px',
    height: '30px',
    marginBottom: '10px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Description;
