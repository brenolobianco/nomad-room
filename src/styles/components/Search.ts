import styled from "styled-components";
import banner from "../../assets/img/banner.png";

export const StyledBannerSearch = styled.div`
  width: 100%;
  height: 370px;
  background-image: linear-gradient(
      to right,
      var(--color-bg-headline),
      var(--color-bg-headline)
    ),
    url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerSearch = styled.div`
  width: 90%;
  display: flex;
  gap: 26px;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--color-white);
    font-size: 2rem;
  }
`;

export const StyledFormSearch = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--color-white);
  width: 100%;
  height: 56px;
  border-radius: 10px;
  padding: 16px;
  position: relative;

  @media (min-width: 768px) {
    height: 70px;
    width: 700px;
  }

  .search {
    color: var(--color-gray2);
    width: 25px;
    height: 24.22px;
  }

  input {
    width: 65%;
    outline: none;
  }

  button {
    position: absolute;
    right: 15px;
    background-color: var(--color-primary);
    padding: 11px 16px;
    border-radius: 10px;

    span {
      display: none;
    }

    svg {
      color: var(--color-white);
      width: 20px;
      height: 14px;
    }

    @media (min-width: 768px) {
      svg {
        display: none;
      }

      span {
        display: flex;
        color: var(--color-white);
        font-weight: 700;
      }
    }
  }
`;

export const StyledSearchApi = styled.ul`
  max-height: 193px;
  overflow-y: auto;
  width: 90%;
  background-color: var(--color-white);
  position: absolute;
  z-index: 1;
  top: 322px;
  list-style: none;
  border-radius: 0 0 10px 10px;

  @media (min-width: 768px) {
    width: 700px;
    top: 329px;
  }

  li {
    padding: 14px 37px;
    cursor: pointer;

    :hover {
      background-color: var(--color-gray5);
    }
  }
`;
