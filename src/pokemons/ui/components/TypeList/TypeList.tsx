import useGetTypes from "@/pokemons/hooks/useGetTypes";
import { Link } from "react-router";
import TypeCard from "../TypeCard/TypeCard";
import { APP_ROUTES } from "@/shared/constants/routes";

const TypeList = () => {
  const { types, isLoading, typesError } = useGetTypes();

  return (
    <>
      {typesError && <p>{typesError}</p>}

      {isLoading && (
        <p>Nous chargeons les types du pokédex, un peu de patience...</p>
      )}

      {types?.map((type) => (
        <Link key={type.id} to={`${APP_ROUTES.POKEMONS_TYPES}#${type.name}`}>
          <TypeCard type={type} />
        </Link>
      ))}
    </>
  );
};

export default TypeList;
