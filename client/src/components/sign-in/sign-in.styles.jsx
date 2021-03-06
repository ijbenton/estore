import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SignInAndSignUpPage = styled.div`
  width: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;
