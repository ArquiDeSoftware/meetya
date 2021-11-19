import React, { useState } from "react";
import { Form, FloatingLabel, Row, Col } from "react-bootstrap";
import "./create_trip.css";
export default function CreateTrip() {
  const [values, setValues] = useState({});
  const today = new Date();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, ["username"]: "Mock user" });
    const startDate = new Date(
      values["year-begin"] ?? today.getFullYear(),
      (values["month-begin"] - 1) ?? today.getMonth(),
      values["day-begin"] ?? today.getDate()
    );
    const endDate = new Date(
      values["year-end"] ?? today.getFullYear(),
      (values["month-end"] - 1) ?? today.getMonth(),
      values["day-end"] ?? today.getDate()
    );
    console.log(values);
    const submission = {
      destination: values["destination"],
      startDate: startDate,
      endDate: endDate,
      activities_preference: values["activities-preference"],
    };
    console.log(JSON.stringify(submission));
    await fetch("http://localhost:9000/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });
  };

  const handlePreferencesChange = (e) => {
    const target = e.target;
    const preferences = {
      ...values["activities-preference"],
      [target.value]: target.checked,
    };
    setValues({ ...values, ["activities-preference"]: preferences });
  };

  const handleChange = (e) => {
    const target = e.target;
    setValues({ ...values, [target.name]: target.value });
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
                  name='destination'
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
                      // defaultValue={today.getDate()}
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
                      // defaultValue={today.getMonth()}
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
                      // defaultValue={today.getFullYear()}
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
                      // defaultValue={today.getDate()}
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
                      // defaultValue={today.getMonth()}
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
                      // defaultValue={today.getFullYear()}
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
                    name='gender-preference'
                    id='gender-men'
                    label='Men'
                    value='Men'
                  />
                  <Form.Check
                    type='radio'
                    name='gender-preference'
                    id='gender-women'
                    label='Women'
                    value='Women'
                  />
                  <Form.Check
                    type='radio'
                    name='gender-preference'
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
                <div
                  key='radio-activities'
                  name='activities'
                  onChange={handlePreferencesChange}
                >
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
