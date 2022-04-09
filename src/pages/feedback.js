import React from "react"
import { Form, Button } from 'react-bootstrap';

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data }) => {
  console.log(JSON.stringify(data));
  return (
  <Layout>
    <Seo title="OpenSIT: Feedback" />
    <div className="insideTrack-container">
      <h3>Feedback</h3>
      <p className="col-lg-6 col-sm-12">We love to hear back from you. If there is anything where we can improve, or information displayed wrong on the site, please let us know!</p>
      <Form name="feedback" method="POST" data-netlify="true">
        <Form.Group controlId="formBasicEmail" className="col-lg-8 col-sm-12">
          <Form.Label>Your Name: </Form.Label>
          <Form.Control type="text" placeholder="Enter name" sm={4} />
          
          <Form.Label>Your Email: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Only in case we should get back to you!
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1" className="col-lg-8 col-sm-12">
          <Form.Label>Message: </Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </div>
  </Layout>
)}

export default AboutPage
