import React from "react";
import { Form, FloatingLabel, Row, Col } from "react-bootstrap";
import "./create_trip.css";
export default function CreateTrip() {
  return (
    <>
      <link rel='stylesheet' href='create_trip.css'></link>
      <div class='container'>
        <div class='text-center card'>
          <div class='container form-signin bg-light'>
            <Form>
              <h1 class='h3 mb-3 fw-normal'>Create your next trip! </h1>

              <div class='form-floating'>
                <input
                  type='location'
                  class='form-control'
                  id='floatingLocation'
                  placeholder='Dream location'
                />
                <label class='text-secondary' for='floatingLocation'>
                  Location
                </label>
                <br></br>
              </div>
              <br></br>

              <div class='form-floating'>
                <label class='text-secondary' for='floatingDateAvailable'>
                  Dates available
                </label>
                <br></br>
                <p> First date available: </p>
                <Row>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Day'
                    className='mb-3'
                    as={Col}
                  >
                    <Form.Control type='number' placeholder='10' />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Month'
                    className='mb-3'
                    as={Col}
                  >
                    <Form.Control type='number' placeholder='02' />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Year'
                    className='mb-3 ml-2'
                    as={Col}
                  >
                    <Form.Control type='number' placeholder='2022' />
                  </FloatingLabel>
                </Row>
                
                <br></br>
                <p>Last Date Available: </p>
                <Row>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Day'
                    className='mb-3'
                    as={Col}
                  >
                    <Form.Control type='number' placeholder='10' />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Month'
                    className='mb-3'
                    as={Col}
                  >
                    <Form.Control type='number' placeholder='02' />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Year'
                    className='mb-3 ml-2'
                    as={Col}
                  >
                    <Form.Control type='number' placeholder='2022' />
                  </FloatingLabel>
                </Row>
              </div>
              <br></br>

              <div class=''>
                <label class='text-secondary' for='floatingPGenero'>
                  Gender Preference
                </label>
                <br></br>
                <div key='radio-gender'>
                  <Form.Check type='radio' name='gender' id='gender-men' label='Men' />
                  <Form.Check type='radio' name='gender' id='gender-women' label='Women' />
                  <Form.Check
                    type='radio' name='gender'
                    id='gender-nonbinary'
                    label='Non-binary'
                  />
                </div>
                <br></br>
              </div>
              <br></br>

              <div class='form-floating mt-3'>
                <input
                  type='number'
                  class='form-control'
                  id='eMin'
                  placeholder='Min'
                />
                <label class='text-secondary' for='floatingPAge'>
                  Age Preference
                </label>
                <br></br>

                <input
                  type='number'
                  class='form-control'
                  id='eMax'
                  placeholder='Max'
                />
              </div>
              <br></br>

              <div class=' mt-4'>
                <label class='mx-2 text-secondary' for='floatingPActivities'>
                  Activities Preference
                </label>
                <br></br>
                <div key='radio-activities'>
                  <Form.Check
                    type='checkbox'
                    name='activities-landmarks'
                    id='activities-landmarks'
                    label='Landmarks'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities-tours'
                    id='activities-tours'
                    label='Tours'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities-cultural'
                    id='activities-cultural'
                    label='Cultural'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities-party'
                    id='activities-party'
                    label='Party'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities-localCuisine'
                    id='activities-localCuisine'
                    label='Local Cuisine'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities-outdoors'
                    id='activities-outdoors'
                    label='Outdoors'
                  />
                </div>
              </div>
              <br></br>

              <button class='w-100 mt-4 btn btn-lg btn-primary' type='submit'>
                Create trip
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
