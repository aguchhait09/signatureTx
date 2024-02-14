import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colorGrayLightest};
  background-color: ${({ theme }) => theme.colorBgMask};
  .main-body-wrap {
    padding: 24px 20px;
    max-width: calc(100% - 244px);
    flex-basis: calc(100% - 244px);

    &.sidebarClosed {
      max-width: calc(100% - 70px);
      flex-basis: calc(100% - 70px);
    }
  }
  .header-wrap {
    margin-bottom: 24px;
    display: flex;
    align-items: center;

    &.backbtn {
      h5 {
        font-size: 20px;
        font-weight: 600;
        color: ${({ theme }) => theme.colorPrimaryText};
      }
    }
    h1 {
      font-size: 32px;
      font-weight: 700;
      color: ${({ theme }) => theme.colorPrimaryText};
      margin-bottom: 0;
    }
    p {
      padding-left: 8px;
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) => theme.colorPrimary};
    }
  }

  .common-white-box {
    background-color: ${({ theme }) => theme.colorWhite};
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colorBorderSecondary};
    padding: 16px;

    &.sm {
      padding: 12px;
    }
    .ant-card-body {
      padding: 0;
    }
  }

  .grey-text {
    color: ${({ theme }) => theme.colorSecondaryText};
  }
`;
