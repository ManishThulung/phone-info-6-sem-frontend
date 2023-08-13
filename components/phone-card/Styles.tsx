import { styled } from "styled-components";

export const SpecificationWrapper = styled.div`
  > div {
    border-right-width: 2px;
    border-top-width: 2px;
    border-color: rgb(229 231 235);
    padding: 16px 24px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }
  > p {
    grid-column: span 5 / span 5;
    border-color: rgb(229 231 235);
    padding: 16px 24px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    border-top-width: 2px;
  }
`;
