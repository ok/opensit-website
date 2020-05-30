import React from "react"
import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Speaker = ({ speaker }) => { 
  // console.log(speaker)
  return (
  <>
    {speaker.scnName !== null && <a href={`https://people.sap.com/`+speaker.scnName}>{speaker.firstName} {speaker.lastName}</a>}
    {speaker.scnName === null && <>{speaker.firstName} {speaker.lastName}</>}
    <IconContext.Provider value={{ size: "1.5em", className: "speaker-icon twitter-icon" }}>
    {speaker.twitterId !== null && <a href={`https://twitter.com/`+speaker.twitterId} aria-label="Link to Twitter"><FaTwitter/></a>}
    </IconContext.Provider>
  </>
)}

export default Speaker