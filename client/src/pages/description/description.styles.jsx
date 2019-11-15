import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';

export const DescriptionPageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    display: unset;
  }
`;

export const ItemDescriptionContainer = styled.div`
  width: 30%;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 800px) {
    width: 100%;
    flex-flow: unset;
    align-items: center;
  }
`;
export const ItemNameContainer = styled.h2`
  width: 100%;
  font-size: 50px;
  text-decoration: underline;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

export const ItemImageContainer = styled.div`
  margin-right: 30px;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const ItemPriceContainer = styled.span`
  width: 100%;
  font-style: italic;
  font-size: 34px;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`;
export const AddButton = styled(CustomButton)`
  width: 60%;
  opacity: 0.7;
`;

export const LineBreak = styled.div`
  width: 100%;
`;

export const QuantityContainer = styled.div`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;
