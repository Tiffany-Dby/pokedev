import { APP_ROUTES } from "@/shared/constants/routes";
import BaseButton from "@/shared/ui/components/BaseButton/BaseButton";
import BaseInput from "@/shared/ui/components/BaseInput/BaseInput";
import { useNavigate } from "react-router";
import "./SearchPokemonForm.scss";

const SearchPokemonForm = () => {
  const navigate = useNavigate();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentTarget = e.target as HTMLFormElement;
    const query = currentTarget.search?.value || "";

    navigate(`${APP_ROUTES.SEARCH}?search=${query}`);
  };

  return (
    <form className="search-pokemon" method="GET" onSubmit={handleSubmitSearch}>
      <BaseInput
        id="search"
        type="search"
        ariaLabel="Rechercher un Pokémon par son nom"
        placeholder="Rattata, Psykokwak,.. "
      />
      <BaseButton type="submit" btnValue="Rechercher" />
    </form>
  );
};

export default SearchPokemonForm;
