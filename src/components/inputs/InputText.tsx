/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { InputText, InputTextProps } from "primereact/inputtext";
import type { FC } from "react";

export type TextInputProps = InputTextProps;

const StyledInputText = styled(InputText)`
  //   width: 100%;
  //   padding: 0.5rem 0.75rem;

  //   border-radius: 4px;
  //   border: 1px solid ${({ theme }) => theme.colors.border};

  //   font-family: ${({ theme }) => theme.typography.body.font};
  //   font-size: 0.875rem;

  //   &:hover {
  //     border-color: ${({ theme }) => theme.colors.primary};
  //   }

  //   &:focus {
  //     outline: none;
  //     box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  //   }

  //   &.p-invalid {
  //     border-color: ${({ theme }) => theme.colors.error};
  //   }
`;

export const TextInput: FC<TextInputProps> = (props) => {
  return <StyledInputText {...props} />;
};
