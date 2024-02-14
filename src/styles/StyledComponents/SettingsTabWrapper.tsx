import styled from "@emotion/styled";

export const SettingsTabWrapper = styled("div")`
  width: 100%;
  max-width: 568px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colorBorderSecondary};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colorWhite};

  .com-inner {
    padding: 20px;

    h4 {
      padding-bottom: 24px;
    }
  }

  .commission-grp {
    .row-bg {
      &:not(:last-child) {
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid ${({ theme }) => theme.colorBorderSecondary};
      }
    }
  }

  .grp-bind {
    label {
      color: ${({ theme }) => theme.colorSecondaryText};
      font-size: 12px;
      font-weight: 500;
      display: block;
      margin-bottom: 4px;
    }

    p {
      color: ${({ theme }) => theme.colorPrimaryText};
      font-size: 14px;
      font-weight: 400;
    }
  }

  .edit-btn {
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colorBorderSecondary};
    padding: 16px 20px;

    button {
      padding: 0;
      min-width: 108px;
      min-height: 40px;

      &:not(:last-child) {
        margin-right: 12px;
      }

      span {
        font-size: 14px;
        font-weight: 500;
        text-transform: capitalize;
      }

      .ant-btn-icon {
        margin-bottom: 0;
      }
    }

    .btnEdit {
      span {
        color: ${({ theme }) => theme.colorPrimary} !important;
      }
    }

    .btnCancel {
      border: 1px solid ${({ theme }) => theme.colorPrimaryText};

      span {
        color: ${({ theme }) => theme.colorPrimaryText} !important;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colorPrimaryText} !important;

        span {
          color: ${({ theme }) => theme.colorWhite} !important;
        }
      }
    }
  }

  .edit-commission {
    max-height: calc(100vh - 580px);
    overflow: auto;
    .row-bg {
      background-color: ${({ theme }) => theme.colorF9FAFB};
      border: 1px solid ${({ theme }) => theme.colorBgMask} !important;
      padding: 12px !important;
      border-radius: 12px;
      position: relative;
    }
  }

  .add-range {
    text-align: center;
    button {
      padding: 0;
      min-width: 214px;
      min-height: 40px;
      span {
        color: ${({ theme }) => theme.colorPrimary} !important;
        font-size: 14px;
        font-weight: 500;
      }

      .ant-btn-icon {
        margin-bottom: 0;
      }
    }
  }

  .cmn_gap {
    margin-bottom: 9px;
  }

  .ant-row {
    align-items: center;
  }

  .btmGap {
    margin-bottom: 16px;
  }

  .dltBtn {
    border: none;
    border-radius: 0;
    background-color: transparent;
    position: absolute;
    right: 12px;
    top: 12px;
    padding: 0;
    z-index: 1;

    .ant-wave {
      display: none;
    }
  }
`;
