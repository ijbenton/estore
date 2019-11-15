import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart, resetSignUpError } from '../../redux/user/user.actions';
import { selectSignUpError } from '../../redux/user/user.selectors';

import {
  SignUpContainer,
  SignUpTitle,
  ButtonsBarContainer
} from './sign-up.styles';

import { SignInAndSignUpPage } from '../sign-in/sign-in.styles';

const SignUp = ({ signUpStart, signUpError, resetSignUpError }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
      resetSignUpError();
    }
  }, [signUpError]);

  return (
    <SignInAndSignUpPage>
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">SIGN UP</CustomButton>
            <Link to="/signin">
              <CustomButton> SIGN IN </CustomButton>
            </Link>
          </ButtonsBarContainer>
        </form>
      </SignUpContainer>
    </SignInAndSignUpPage>
  );
};

const mapStateToProps = createStructuredSelector({
  signUpError: selectSignUpError
});

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
  resetSignUpError: () => dispatch(resetSignUpError())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
