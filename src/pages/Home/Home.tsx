import { IonButton, useIonRouter } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";
import Layout from "../../components/Layout/Layout";

const Home: React.FC = () => {
  const router = useIonRouter();

  const onClickVolver = () => {
    router.push("/login", "back", "replace");
  };

  return (
    <Layout
      children={
        <IonButton onClick={onClickVolver} expand="block">
          Volver
        </IonButton>
      }
      title="Home"
    />
  );
};

export default Home;
