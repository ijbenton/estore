import React from 'react';
import { connect } from 'react-redux';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { selectSignUpHidden } from '../../redux/user/user.selectors';

import { createStructuredSelector } from 'reselect';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = ({ signUpHidden }) => (
  <SignInAndSignUpContainer>
    {signUpHidden ? <SignIn /> : <SignUp />}
  </SignInAndSignUpContainer>
);

const mapStateToProps = createStructuredSelector({
  signUpHidden: selectSignUpHidden
});

export default connect(
  mapStateToProps,
  null
)(SignInAndSignUpPage);
