import { ReactNode } from "react";
import { Link, NavLink } from "react-router";
import { APP_ROUTES } from "@/shared/constants/routes";
import logo from "/pokemons/images/logo.svg";
import "./BaseLayout.scss";
import SearchPokemonForm from "@/pokemons/ui/components/SearchPokemonForm/SearchPokemonForm";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to={APP_ROUTES.HOME} className="header__img">
            <img src={logo} alt="Pokéball Logo" />
          </Link>
          <nav className="header__nav">
            <ul>
              <li>
                <NavLink to={APP_ROUTES.HOME} className="header__link">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={APP_ROUTES.POKEMONS_GENERATIONS}
                  className="header__link"
                >
                  Poké'Gens
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={APP_ROUTES.POKEMONS_TYPES}
                  className="header__link"
                >
                  Poké'Types
                </NavLink>
              </li>
              <li>
                <NavLink to={APP_ROUTES.TYPES} className="header__link">
                  Types
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={APP_ROUTES.RANDOM_POKEMON}
                  className="header__link"
                >
                  Poke'roll
                </NavLink>
              </li>
              <li>
                <NavLink to={APP_ROUTES.PLAY} className="header__link">
                  Jouer
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <SearchPokemonForm />
          </div>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="footer__container">
          <p>
            <a
              href="https://github.com/Tiffany-Dby"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; Tiffany Dby {year}
            </a>{" "}
            - All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default BaseLayout;
