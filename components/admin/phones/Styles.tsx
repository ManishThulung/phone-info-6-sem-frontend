import { DatePicker } from "antd";
import { styled } from "styled-components";

export const FormWrapper = styled.div`
  form {
    max-width: 800px;
    margin: auto;
    > div {
      width: 600px;
      margin: 12px auto 0 auto;
      label {
        display: block;
        font-size: 16px;
        font-weight: 500;
        span {
          color: rgb(239 68 68);
        }
      }
      select,
      input,
      textarea {
        width: 100%;
        padding: 8px 16px;
        outline: none;
        border-radius: 8px;
        border-width: 1px;
        border-color: rgb(191 219 254);
        font-size: 16px;
      }

      p {
        text-size: 12px;
        font-style: italic;
        margin-top: 8px;
        color: rgb(239 68 68);
      }
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  cursor: pointer;
  width: 300px;
  padding: 8px 16px;
  .ant-picker-input{
    input{
      outline: none;
      border-radius: 8px;
      border-width: 1px;
      border-color: rgb(191 219 254);
      font-size: 16px;
      font-family: inter;
      cursor: pointer;
    }
    }
  }
`;
