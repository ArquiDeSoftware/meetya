import React, {useState} from "react";
import { Form, FloatingLabel, Row, Col } from "react-bootstrap";
import "./create_trip.css";
export default function CreateTrip() {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.type ==='checkbox' ? target.value : target.name;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <link rel='stylesheet' href='create_trip.css'></link>
      <div class='container'>
        <div class='text-center card'>
          <div class='container form-signin bg-light'>
            <Form onSubmit={handleSubmit}>
              <h1 class='h3 mb-3 fw-normal'>Create your next trip! </h1>

              <div class='form-floating'>
                <input
                  type='location'
                  class='form-control'
                  id='floatingLocation'
                  placeholder='Dream location'
                  name='location'
                  onChange={handleChange}
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
                    <Form.Control
                      type='number'
                      placeholder='10'
                      name='day-begin'
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Month'
                    className='mb-3'
                    as={Col}
                  >
                    <Form.Control
                      type='number'
                      placeholder='02'
                      name='month-begin'
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Year'
                    className='mb-3 ml-2'
                    as={Col}
                  >
                    <Form.Control
                      type='number'
                      placeholder='2022'
                      name='year-begin'
                      onChange={handleChange}
                    />
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
                    <Form.Control
                      type='number'
                      placeholder='10'
                      name='day-end'
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Month'
                    className='mb-3'
                    as={Col}
                  >
                    <Form.Control
                      type='number'
                      placeholder='02'
                      name='month-end'
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Year'
                    className='mb-3 ml-2'
                    as={Col}
                  >
                    <Form.Control
                      type='number'
                      placeholder='2022'
                      name='year-end'
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Row>
              </div>

              <div class='mt-4'>
                <label class='text-secondary' for='floatingPGenero'>
                  Gender Preference
                </label>
                <br></br>
                <div key='radio-gender' onChange={handleChange}>
                  <Form.Check
                    type='radio'
                    name='gender'
                    id='gender-men'
                    label='Men'
                    value='Men'
                    />
                  <Form.Check
                    type='radio'
                    name='gender'
                    id='gender-women'
                    label='Women'
                    value='Women'
                  />
                  <Form.Check
                    type='radio'
                    name='gender'
                    id='gender-nonbinary'
                    label='Non-binary'
                    value='Non-binary'
                  />
                </div>
              </div>

                <label class='mt-4 text-secondary' for='floatingPAge'>
                  Age Preference
              </label>
              <Row>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='From'
                    className='mb-3'
                    as={Col}
                  >
                    <Form.Control
                      type='number'
                      placeholder='20'
                      name='age-min'
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='To'
                    className='mb-3'
                    as={Col}
                  >
                    <Form.Control
                      type='number'
                      placeholder='30'
                      name='age-max'
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                  </Row>              

              <div class=' mt-4'>
                <label class='mx-2 text-secondary' for='floatingPActivities'>
                  Activities Preference
                </label>
                <br></br>
                <div key='radio-activities' name='activities' onChange={handleChange}>
                  <Form.Check
                    type='checkbox'
                    name='activities'
                    id='activities-landmarks'
                    label='Landmarks'
                    value='Landmarks'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities'
                    id='activities-tours'
                    label='Tours'
                    value='Tours'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities'
                    id='activities-cultural'
                    label='Cultural'
                    value='Cultural'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities'
                    id='activities-party'
                    label='Party'
                    value='Party'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities'
                    id='activities-localCuisine'
                    label='Local Cuisine'
                    value='Local Cuisine'
                  />
                  <Form.Check
                    type='checkbox'
                    name='activities'
                    id='activities-outdoors'
                    label='Outdoors'
                    value='Outdoors'
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
