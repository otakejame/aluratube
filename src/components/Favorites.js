import styled from "styled-components";

const StyledFavorites = styled.div`
display: flex;
flex-direction: row;
img {
  border-radius: 50%;
  
}
`;

export default function Favorites(props) {
  return (
    <StyledFavorites>
      {props.favorites.map((favorites) => {
        return (
          <a key={favorites.url} href={favorites.url}>
            <img src={favorites.image} />
              {favorites.title}
          </a>
        )
      })}
    </StyledFavorites>
  );
}