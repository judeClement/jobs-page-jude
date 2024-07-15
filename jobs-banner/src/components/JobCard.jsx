import React from 'react';

const JobCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.imagePlaceholder}></div>
      <div style={styles.label}>Experience: Beginner</div>
      <div style={styles.title}>
        Data Analyst <span style={styles.arrow}>&#8594;</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '200px',
    border: '1px solid #e0e0e0',
    height: '290px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px',
    margin: '30px 2px',
    textAlign: 'left',
  },
  imagePlaceholder: {
    width: '100%',
    height: '190px',
    // backgroundColor: '#d3d3d3',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    marginBottom: '10px',
  },
  label: {
    backgroundColor: '#f6b648',
    color: '#000',
    borderRadius: '25px',
    padding: '5px 15px',
    fontSize: '0.88rem',
    alignSelf: 'flex-start',
    margin: '4px'
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%',
  },
  arrow: {
    display: 'inline-block',
    transform: 'rotate(330deg)',
    marginLeft: '10px',
    margin: '5px',
    position: 'relative',
    top: '-3px' 
  },
  '@media (max-width: 768px)': {
    card: {
      width: '100%',
    },
  },
};

export default JobCard;
