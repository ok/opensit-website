import React from "react"
import { Form, Button } from 'react-bootstrap';

import Layout from "../components/layout"
import Seo from "../components/seo"

const FeedbackPage = ({ data }) => {
  console.log(JSON.stringify(data));
  return (
  <Layout>
    <Seo title="OpenSIT: Feedback" />
    <div className="insideTrack-container">
      <h3>Feedback</h3>
      <p className="row g-0 col-lg-6 col-sm-12">We love to hear back from you. If there is anything on the site where we can improve, or information displayed wrong, please let us know!</p>
      <p className="row g-0 col-lg-6 col-sm-12">You can also connect with us on Twitter:&nbsp;<a href="https://twitter.com/opensitnet" target="_blank" rel="noreferrer">@opensitnet</a></p>
      <Form name="feedback" method="POST" action="/thanks/" data-netlify="true" netlify-honeypot="bot-field">
        <Form.Group controlId="formBasicEmail" className="row g-0 col-lg-8 col-sm-12">
          <Form.Label>Your Name: </Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" sm={4} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1" className="row g-0 col-lg-8 col-sm-12">
          <Form.Label>Your Email: </Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Only in case we should get back to you!
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1" className="row g-0 col-lg-8 col-sm-12">
          <Form.Label>Message: </Form.Label>
          <Form.Control as="textarea" name="feedback-text" rows={5} />
        </Form.Group>
        <Button type="submit">Send</Button>
        <p className="form-hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="feedback" />
      </Form>
    </div>
  </Layout>
)}

export default FeedbackPage
