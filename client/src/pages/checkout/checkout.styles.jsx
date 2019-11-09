import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 10px auto;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 12%;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
    font-size: 18px;
  }
`;
