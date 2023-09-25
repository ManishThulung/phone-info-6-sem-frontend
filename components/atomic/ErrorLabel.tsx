import { memo } from "react";
import styled from "styled-components";

const ErrorLabel = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: red;
  &:first-letter {
    text-transform: capitalize;
  }
`;
export default memo(ErrorLabel);
