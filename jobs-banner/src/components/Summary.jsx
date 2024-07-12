import React from 'react';

const Summary = () => {
  return (
    <div style={{borderBottom:"1px solid black"}}>
    <div style={styles.container}>
      <h1 style={styles.heading}>Job Summary</h1>
      
      <div style={{backgroundColor:""}}>
       <p style={styles.description}>
       We are seeking a skilled Cyber Security Analyst to join our team. In this role, you will be responsible for protecting our
 organization's information systems and data from cyber threats. You will monitor network traffic, analyze security incidents,
 and implement measures to safeguard our digital assets.
       </p>
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
    paddingBottom:"30px",

  },
  heading: {
    padding:"20px",
    paddingLeft:"40px",
    fontSize: '40px',
    marginBottom: '20px',
    textAlign:"left"
  },
  description: {
    padding:"20px",
    paddingLeft:"40px",
    fontSize: '20px',
    marginBottom: '30px',
    textAlign:"left"
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '45px',
    backgroundColor:'#D9D9D9',
    borderRadius: '30px',
    width: '200px',
    height:'135px'
  },
  icon: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  label: {
    fontSize: '14px',
  },
};

export default Summary;
