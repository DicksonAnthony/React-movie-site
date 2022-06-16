import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  border: 1px solid magenta;
`;
export const Content = styled.div`
  display: flex;
  align-items: Center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  border: 1px solid magenta;
`;
export const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
export const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500) {
    width: 80px;
  }
`;