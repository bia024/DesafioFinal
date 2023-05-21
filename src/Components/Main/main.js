import * as S from "./styleMain.js";
import React from "react";
// import Lupa from "./Components/Assets/lupa.svg";
import { Link } from "react-router-dom";
export default function Main() {
  // const []
  return (
    <S.Main>
      <div>
        <ul>
          <li>
            <Link>Popular</Link>
          </li>
          <li>
            <Link>Drama</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Comédia</Link>
          </li>
          <li>
            <Link>Crime</Link>
          </li>
          <li>
            <Link>Fantasia</Link>
          </li>
          <li>
            <Link>Família</Link>
          </li>
          {/* <img src={Lupa} alt="photo" /> */}
        </ul>
      </div>
      <div>
        <h1>Últimos Lançamentos</h1>
        {/*aq vem o map*/}
      </div>
      {/* <img src="" alt="" /> */}
    </S.Main>
  );
}
