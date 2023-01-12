import styled from "styled-components";

const StyledBanner = styled.div`
  width:100%;
  height: 400px;
  background-size: cover;
  background-position: 50% 50%;
  background-image : url(
      ${
        ({imagemDeFundo})=> {
          return imagemDeFundo
        } 
      }
    );
`;

export default function Banner(props) {
  return (
    <StyledBanner imagemDeFundo={props.bg}>
    </StyledBanner>
  );
}