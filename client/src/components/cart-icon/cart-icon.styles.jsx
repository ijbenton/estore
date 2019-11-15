import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  filter: invert(100%);
`;

export const ShoppingIconContainer = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  color: black;
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 12px;
`;
