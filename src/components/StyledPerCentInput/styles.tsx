import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const MaskStyledInputPercent = styled(NumberFormat)`
  width: 100%;
  padding: 0px 15px;
  border-radius: 4px;
  border: none;
  color: #000000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
  &::-webkit-input-placeholder {
    color: #000;
  }
`;

export const FieldSet = styled.fieldset`
  height: 60px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  margin-bottom: 20px;
`;

export const Legend = styled.legend`
  width: auto;
  margin-left: 16px;
  padding: 0 4px 0;
  color: #828282;
  font-size: 12px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0px 15px;
  border-radius: 4px;
  border: none;
  color: #000000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
`;
