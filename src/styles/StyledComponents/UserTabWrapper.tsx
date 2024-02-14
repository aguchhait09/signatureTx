import styled from "@emotion/styled";

export const UserTabWrapper = styled.div`
  .branches-button {
    width: 100%;
    color: ${({ theme }) => theme.colorPrimary};
    font-weight: 500;
    justify-content: flex-end;
    &:hover {
      background: none !important;
    }
  }

  .user-name {
    p {
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.colorSecondaryText};
    }
    button {
      padding: 0;
      margin: 0;
      min-height: auto;
      span {
        color: ${({ theme }) => theme.colorPrimary} !important;
      }

      &:hover {
        background: none !important;
        span {
          color: ${({ theme }) => theme.colorPrimary} !important;
        }
        opacity: 0.7;
      }
    }
  }
`;
