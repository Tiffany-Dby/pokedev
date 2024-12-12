import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import PokemonTypeList from "@/pokemons/ui/components/PokemonTypeList/PokemonTypeList";

const PokemonsTypesView = () => {
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
          <h2>Liste des pokémons par types</h2>
          <div className="pokemons__types">
            <PokemonTypeList />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default PokemonsTypesView;
