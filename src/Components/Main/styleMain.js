import styled from "styled-components";

// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
export const Main = styled.main`
  background-color: black;

  color: white;
  ul {
    display: flex;
    justify-content: space-evenly;
  }

  li {
    font-size: 1rem;
    list-style: none;
    text-decoration: none;
  }
  h1 {
    font-size: 1.5rem;
  }
`;
