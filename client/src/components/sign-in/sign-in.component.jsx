import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';
import { selectError } from '../../redux/user/user.selectors';

import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
  SignInAndSignUpPage
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart, error }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <SignInAndSignUpPage>
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              {' '}
              Sign In With Google{' '}
            </CustomButton>
            <Link to="/signup">
              <CustomButton> SIGN UP </CustomButton>
            </Link>{' '}
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    </SignInAndSignUpPage>
  );
};
const mapStateToProps = createStructuredSelector({
  error: selectError
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
