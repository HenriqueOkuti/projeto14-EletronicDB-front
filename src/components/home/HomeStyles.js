import styled from 'styled-components';
import { CancelItem } from '../../shared/CartCheckoutStyles';

const TypeContainer = styled.div`
  margin: 30px 0 0 0;
  width: 80%;
  font-size: 22px;
  text-align: left;
`;

const CancelItemMod = styled(CancelItem)`
  margin: 0 30px 0 0;
`;

export { TypeContainer, CancelItemMod };
