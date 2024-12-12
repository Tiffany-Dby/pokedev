import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import TypeList from "../../components/TypeList/TypeList";
import "./TypesView.scss";

const TypesView = () => {
  return (
    <BaseLayout>
      <section className="presentation">
        <div className="presentation__container">
          <h1>Les Types</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            libero molestias neque tenetur. Quisquam nostrum nemo maxime
            eligendi ex laboriosam.
          </p>
        </div>
      </section>
      <section className="types">
        <div className="types__container">
          <h2>Liste des types</h2>
          <div className="types__types">
            <TypeList />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default TypesView;
