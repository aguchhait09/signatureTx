import styled from "@emotion/styled";

export const InfoSmallWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  .title-sec {
    padding: 6px 0;
    margin-bottom: 12px;
  }

  .info-card-btn {
    padding: 11px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colorBgMask};
    height: auto;
    width: auto;
    cursor: default;
    &.blue {
      background-color: ${({ theme }) => theme.colorE8EFFD};
    }
  }
`;
