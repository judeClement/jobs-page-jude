import { Button, Typography } from '@mui/material'
import React from 'react'

const Responsibilities = () => {
  return (
    <div style={{borderBottom:"1px solid black",padding:"20px",paddingLeft:"45px"}}>
        <h1 style={styles.heading}>Key Responsibilities</h1>

<div style={{backgroundColor:""}}>
<ul style={styles.list}>
        <li>Monitor and analyze network traffic for security breaches.</li>
        <li>Respond to and investigate security incidents.</li>
        <li>Conduct vulnerability assessments and penetration tests.</li>
        <li>Stay updated on emerging threats and provide threat intelligence.</li>
        <li>Manage security tools and software.</li>
        <li>Generate reports on security incidents and recommend improvements.</li>
        <li>Ensure compliance with security policies and regulations</li>
      </ul></div>

    </div>
  )
}
const styles = {
    list: {
        fontWeight:"400",
      listStyleType: 'disc',
      marginLeft: '20px',
      marginTop: '10px',
      marginBottom:'25px',
      fontSize: '20px'
    },
    heading: {
        // padding:"20px",
        fontSize: '34px',
        marginBottom: '35px',
        textAlign:"left"
      },
  };


export default Responsibilities