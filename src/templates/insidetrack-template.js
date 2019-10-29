import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default ({ pageContext: { insideTrack } }) => {
  insideTrack.events.forEach(event => {
    var eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })

  return (
    <Layout>
      <SEO title="Inside Track Event" />
      <h1>{insideTrack.name}</h1>
      <section>
        <ul className="list-group list-group-flush">
          {insideTrack.events.map(event => (
            <li className="list-group-item" key={event.id}>
              <p></p>
              <p>{event.location}</p>
              <Link to={`/${insideTrack.hashtag}/${event.year}`}>{event.date}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}