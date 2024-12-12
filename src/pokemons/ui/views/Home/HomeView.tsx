import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import PokemonList from "@/pokemons/ui/components/RandomTeamList/RandomTeamList";
import RandomTypeList from "@/pokemons/ui/components/RandomTypeList/RandomTypeList";
import "./HomeView.scss";
import { Link } from "react-router";
import { APP_ROUTES } from "@/shared/constants/routes";

const Home = () => {
  return (
    <BaseLayout>
      <section className="presentation">
        <div className="presentation__container">
          <h1>Pokédev</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            quasi numquam nobis soluta in! Dicta officiis repellendus amet porro
            sed, temporibus delectus incidunt ipsam quas. Tenetur illo ipsa
            voluptatum, laudantium eum sit facere nemo distinctio alias
            laboriosam recusandae quia veniam fuga vitae excepturi laborum
            fugiat totam dolore! Cum, nulla ut!
          </p>
        </div>
      </section>
      <section className="random-team">
        <div className="random-team__container">
          <h2>
            <Link to={APP_ROUTES.POKEMONS_GENERATIONS}>
              Découvrez la team aléatoire qui les attrappera tous !
            </Link>
          </h2>
          <div className="random-team__pokemons">
            <PokemonList />
          </div>
        </div>
      </section>
      <section className="random-type">
        <div className="random-type__container">
          <h2>
            <Link to={APP_ROUTES.TYPES}>Des types</Link>
          </h2>
          <div className="random-type__types">
            <RandomTypeList />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Home;
