import { NavLink } from "react-router";

export function Nav() {
  return (
    <nav>
      <NavLink to='/kids'>Gyerekek</NavLink>
      <NavLink to='/gifts'>Ajándékok</NavLink>
      <NavLink to='/creategift'>Ajándék létrehozása</NavLink>
      <NavLink to='/gifttokid'>Ajándék kiválasztása</NavLink>
    </nav>
  );
}