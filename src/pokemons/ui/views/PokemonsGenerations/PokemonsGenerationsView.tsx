import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import PokemonGenerationList from "@/pokemons/ui/components/PokemonGenerationList/PokemonGenerationList";

const PokemonsGenerationsView = () => {
  return (
    <BaseLayout>
      <section className="presentation">
        <div className="presentation__container">
          <h1>Pokédex</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            libero molestias neque tenetur. Quisquam nostrum nemo maxime
            eligendi ex laboriosam.
          </p>
        </div>
      </section>
      <section className="pokemons">
        <div className="pokemons__container">
          <h2>Liste des pokémons par génération</h2>
          <div className="pokemons__generations">
            <PokemonGenerationList />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default PokemonsGenerationsView;
