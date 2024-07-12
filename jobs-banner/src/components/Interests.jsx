import React, { useState } from 'react';
import arrowSvg from '../images/arrow.svg'; // Adjust the path if necessary

const Interests = () => {
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [showAdditionalRow, setShowAdditionalRow] = useState(false);

  const jobs = [
    'Finance', 'Engineering', 'Marketing', 'Sales', 'Human',
    'Operations', 'IT', 'Customer', 'Legal', 'Product',
    'Design', 'Business'
  ];

  const additionalJobs = [
    'HR', 'Admin', 'Support', 'Management'
  ];

  const toggleSelection = (job) => {
    setSelectedJobs((prevSelected) => 
      prevSelected.includes(job)
        ? prevSelected.filter((selectedJob) => selectedJob !== job)
        : [...prevSelected, job]
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        Select 3 or more interested <span style={styles.blueText}>Jobs</span>
      </h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="search"
          style={styles.searchInput}
        />
      </div>
      <div style={styles.jobsContainer}>
        {jobs.map((job, index) => (
          <button
            key={index}
            style={{
              ...styles.jobButton,
              backgroundColor: selectedJobs.includes(job) ? '#0056b3' : 'white',
              color: selectedJobs.includes(job) ? 'white' : '#007bff',
            }}
            onClick={() => toggleSelection(job)}
          >
            {job}
          </button>
        ))}
      </div>
      <div style={{
        ...styles.additionalJobsContainer,
        maxHeight: showAdditionalRow ? '200px' : '0',
        opacity: showAdditionalRow ? 1 : 0,
        transition: 'max-height 0.5s ease, opacity 0.5s ease',
      }}>
        {additionalJobs.map((job, index) => (
          <button
            key={index}
            style={{
              ...styles.jobButton,
              backgroundColor: selectedJobs.includes(job) ? '#0056b3' : 'white',
              color: selectedJobs.includes(job) ? 'white' : '#007bff',
            }}
            onClick={() => toggleSelection(job)}
          >
            {job}
          </button>
        ))}
      </div>
      <button
        style={{
          ...styles.arrowButton,
          transform: showAdditionalRow ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.5s ease',
        }}
        onClick={() => setShowAdditionalRow((prevShow) => !prevShow)}
      >
        <img src={arrowSvg} alt="arrow" style={styles.arrowImage} />
      </button>
    </div>
  );
};


const styles = {
    
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '40px 0px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0 35px 0',
    textAlign: 'center',
  },
  blueText: {
    color: '#007bff',
  },
  searchContainer: {
    position: 'relative',
    marginBottom: '35px',
  },
  searchInput: {
    width: '200px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '25px',
    border: '2px solid #007bff',
    paddingLeft: '30px',
    color: '#007bff',
    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23007bff\'%3E%3Cpath d=\'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\'/%3E%3C/svg%3E") no-repeat 10px center',
    backgroundSize: '16px',
  },
  jobsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
    rowGap: '30px',
    width: '100%',
    maxWidth: '600px',
  },
  additionalJobsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '10px',
    rowGap: '30px',
    width: '100%',
    maxWidth: '600px',
    overflow: 'hidden',
    marginTop: '30px',
  },
  jobButton: {
    padding: '5px 20px',
    borderRadius: '25px',
    border: '2px solid #007bff',
    backgroundColor: 'white',
    color: '#007bff',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    boxSizing: 'border-box', // Ensure the button fits within the container
  },
  arrowButton: {
    marginTop: '15px',
    padding: '5px 20px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '16px',
    transition: 'transform 0.5s ease',
  },
  arrowImage: {
    width: '24px',
    height: '24px',
  },
  
};


export default Interests;
