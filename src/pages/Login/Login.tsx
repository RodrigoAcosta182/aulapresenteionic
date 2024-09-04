import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
} from "@ionic/react";
import Layout from "../../components/Layout/Layout";
import { LoginCardContainer, LoginContainer } from "./LocalStyled";
import Input from "../../components/Input/Input";

const Login: React.FC = () => {
  return (
    <Layout
      children={
        <LoginContainer>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Ingresa tus datos</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <LoginCardContainer>
                <Input title="Usuario" />
                <Input title="Contraseña" type="password" />
              </LoginCardContainer>
            </IonCardContent>
            <IonCardContent>
              <IonButton expand="block">Ingresar</IonButton>
            </IonCardContent>
          </IonCard>
        </LoginContainer>
      }
    />
  );
};

export default Login;
