import React from "react";

export default function LogIn() {
  return (
    <>
      <div class='container'>
        <div class='text-center card'>
          <div class='container form-signin bg-light'>
            <form>
              <img class='mb-4' src='#' alt='' width='72' />
              <h1 class='h3 mb-3 fw-normal'>Please sign in</h1>

              <div class='form-floating'>
                <input
                  type='email'
                  class='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                <label for='floatingInput'>Email address</label>
              </div>
              <div class='form-floating'>
                <input
                  type='password'
                  class='form-control'
                  id='floatingPassword'
                  placeholder='Password'
                />
                <label for='floatingPassword'>Password</label>
              </div>

              <div class='checkbox mt-2 mb-3'>
                <label>
                  <input type='checkbox' value='remember-me' /> Remember me
                </label>
              </div>
              <button class='w-100 btn btn-lg btn-primary' type='submit'>
                Sign in
              </button>
            </form>
            <div class='container mt-3'>
              <p>
                Not registered?{" "}
                <a class='' href='#'>
                  Sign Up
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
