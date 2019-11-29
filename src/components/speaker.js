import React from "react"
import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Speaker = ({ speaker }) => { 
  console.log(speaker)
  return (
  <>
    <a href={`https://people.sap.com/`+speaker.scnName}>{speaker.firstName} {speaker.lastName}</a> (
    <IconContext.Provider value={{ size: "1.0em" }}>
    {speaker.twitterId !== null && (<a href={`https://twitter.com/`+speaker.twitterId}><FaTwitter className="speaker-icon"/></a>)}
    </IconContext.Provider>)
  </>
)}

export default Speaker