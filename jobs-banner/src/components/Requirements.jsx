import { Button, Typography } from '@mui/material'
import React from 'react'

const Requirements = () => {
  return (
    <div style={{border:"",padding:"20px",paddingLeft:"45px",borderBottom:"1px solid black"}}>
        <h1 style={styles.heading}>Educational Qualifications required</h1>

<div style={{backgroundColor:""}}>
<Typography sx={{backgroundColor:"",fontWeight:"600" ,fontSize:"20px",paddingLeft:""}}>1. Bachelor’s Degree</Typography>
<ul style={styles.list}>
        <li>Computer Science</li>
        <li>Information Technology</li>
        <li>Cybersecurity</li>
        <li>Information Systems</li>
        <li>Network Security</li>
      </ul></div>

      <div style={{backgroundColor:""}}>
<Typography sx={{backgroundColor:"",fontWeight:"600",fontSize:"20px"}}>2. Master’s  Degrees (Optional)</Typography>
<ul style={styles.list}>
        <li>Cyber Security</li>
        <li>Information Security</li>
        <li>Cybersecurity</li>
        <li>Computer Science with a focus on security</li>
      </ul>
      <Button variant="contained" style={{margin:"10px", padding: '20px',marginLeft:"40px", fontSize: '14px', color: 'white', backgroundColor: 'black', border: 'none', borderRadius: '30px', cursor: 'pointer',width:"10%" }}>
              Apply Now
            </Button> 
      </div>

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


export default Requirements