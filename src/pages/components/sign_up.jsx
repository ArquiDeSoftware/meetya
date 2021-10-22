import React from "react";

export default function SignUp() {
  return (
    <>
      <div class='container'>
        <div class='text-center card'>
          <div class='container form-signin bg-light'>
            <form>
              <img class='mb-4' src='#' alt='' width='72' />
              <h1 class='h3 mb-3 fw-normal'>Create new account</h1>

              <div class='form-floating'>
                <input
                  type='email'
                  class='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                <label class='text-secondary' for='floatingInput'>
                  Email address
                </label>
              </div>
              <div class='form-floating'>
                <input
                  type='password'
                  class='form-control'
                  id='floatingPassword'
                  placeholder='Password'
                />
                <label class='text-secondary' for='floatingPassword'>
                  Password
                </label>
              </div>
              <div class='form-floating'>
                <input
                  type='password'
                  class='form-control'
                  id='floatingPasswordConfirmation'
                  placeholder='Confirm password'
                />
                <label class='text-secondary' for='floatingPassword'>
                  Confirm password
                </label>
              </div>
              <div class='form-floating mt-3'>
                <input
                  type='text'
                  class='form-control'
                  id='genre'
                  placeholder='Genre'
                />
                <label class='text-secondary' for='floatingPassword'>
                  Genre
                </label>
              </div>
              <div class=' mt-4'>
                <div class='row'>
                  <div class='form-floating col'>
                    <input
                      type='text'
                      class='form-control'
                      id='contactPoint'
                      placeholder='Genre'
                    />
                    <label class='mx-2 text-secondary' for='contactPoint'>
                      Point of contact (Fb/Phone...)
                    </label>
                  </div>
                  <div class='form-floating col'>
                    <input
                      type='text'
                      class='form-control'
                      id='contactUser'
                      placeholder='Genre'
                    />
                    <label class='mx-2 text-secondary' for='contactUser'>
                      user/phone/token
                    </label>
                  </div>
                </div>
              </div>

              <button class='w-100 mt-4 btn btn-lg btn-primary' type='submit'>
                Sign up
              </button>
            </form>
            <div class='container mt-3'>
              <p>
                Already registered?{" "}
                <a class='' href='#'>
                  Log In
                </a>
              </p>
            </div>
            <p class='mt-5 mb-3 text-muted'>&copy; meetya 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}
