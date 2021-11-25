import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

import Observer from "react-intersection-observer";

const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <Observer threshold={0}>Test</Observer>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
      <Link activeClassName={style.active} href="/profile">
        Me
      </Link>
      <Link activeClassName={style.active} href="/profile/john">
        John
      </Link>
    </nav>
  </header>
);

export default Header;
