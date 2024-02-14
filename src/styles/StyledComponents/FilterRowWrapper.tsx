import styled from "@emotion/styled";

export const FilterRowWrapper = styled("div")`
  margin-bottom: 24px;
  .searchbar {
    min-width: 320px;
    border-radius: 50px;
    margin-right: 12px;
    border-color: transparent;
  }

  .filter {
    display: flex;
    align-items: center;
    height: auto;
    padding: 4px;
    padding-left: 16px;
    border-radius: 50px;
    border-color: transparent;
    &:hover {
      border: 1px solid;
    }
    span {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.colorPrimary};
    }

    i {
      margin-left: 6px;
      width: 44px;
      height: 44px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0;
      background-color: ${({ theme }) => theme.colorE8EFFD};
    }
  }
`;
