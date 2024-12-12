import { Link } from "react-router";
import TypeCard from "@/pokemons/ui/components/TypeCard/TypeCard";
import useGetRantomTypes from "@/pokemons/hooks/useGetRandomTypes";
import { APP_ROUTES } from "@/shared/constants/routes";

const RandomTypeList = () => {
  const { randomTypes, isLoading, typesError } = useGetRantomTypes();
  return (
    <>
      {typesError && <p>{typesError}</p>}

      {isLoading && (
        <p>Nous chargeons les types du pokédex, un peu de patience...</p>
      )}

      {randomTypes?.map((type) => (
        <Link key={type.id} to={APP_ROUTES.POKEMONS_TYPES}>
          <TypeCard type={type} />
        </Link>
      ))}
    </>
  );
};

export default RandomTypeList;
