import styled from "@emotion/styled";

export const SidebarWrapper = styled("div")`
  max-width: 244px;
  flex-basis: 244px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colorWhite};
  transition: all ease 0.3s;
  &.slideMenu {
    max-width: 70px;
    flex-basis: 70px;
    transition: all ease 0.3s;
    .slideLogo {
      display: block;
    }
    .sideBarLogo {
      img {
        display: none;
      }
      button {
        svg {
          transform: rotate(180deg);
        }
      }
    }
    .ant-menu-item {
      width: auto !important;
      &:last-child {
        svg {
          margin-right: 0 !important;
        }
        .ant-menu-title-content {
          display: none;
        }
      }
    }
  }
  .slideLogo {
    display: none;
  }
  .sideBarLogo {
    padding: 16px 0px 16px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sideBarSlide {
      border-radius: 12px 0px 0px 12px;
      background-color: ${({ theme }) => theme.colorE8EFFD};
      border-radius: 12px 0px 0px 12px;
      padding: 20px 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      &:hover {
        border-color: transparent;
        color: #fff;
      }
    }
  }

  .sidebarMenu {
    margin-top: 16px;
    .ant-menu {
      border-inline-end: 0px solid rgba(5, 5, 5, 0.06);
      .ant-menu-item {
        margin: 0 12px;
        padding: 16px 12px !important;
        height: auto;
        width: 220px;
        border-radius: 12px;
        &:not(:last-child) {
          margin-bottom: 4px;
        }
        svg {
          margin-right: 8px;
        }
        .ant-menu-title-content {
          font-size: 14px;
          font-weight: 400;
          color: ${({ theme }) => theme.color475467};
          line-height: 1;
        }

        &:last-child {
          position: absolute;
          bottom: 24px;
        }
      }
      .ant-menu-item-selected,
      .ant-menu-item-active {
        background-color: ${({ theme }) => theme.colorE8EFFD};
        svg {
          path {
            stroke: ${({ theme }) => theme.color1148AE};
          }
        }
        .ant-menu-title-content {
          color: ${({ theme }) => theme.color1148AE};
          font-weight: 600;
        }
      }

      .ant-menu-item {
        &:focus-visible {
          outline: 0px solid #3366ff;
        }
      }
    }
  }
`;
