import { IonInputPasswordToggle, IonInput, IonAvatar, IonIcon, IonCard, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import React, { useState } from 'react';
import '../theme/Login.css';
import { clsx } from 'clsx';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

const Login: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>();

  const markTouched = () => {
    setIsTouched(true);
  };

  const Is_Email = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }

  const Validate_Email = (event: Event) => {
    const email = (event.target as HTMLTextAreaElement).value;

    setIsEmailValid(undefined);

    if ( email === '' ) return;

    Is_Email(email) !== null ? setIsEmailValid(true) : setIsEmailValid(false);
  };

  return (
    <IonPage>
      <My_Toolbar>
        Login
      </My_Toolbar>
      <IonContent fullscreen>
          <IonCard>
          <IonItem>
            <IonTextarea 
            className={clsx('item-spacing', {
                'ion-valid'  : isEmailValid,
                'ion-invalid': isEmailValid === false,
                'ion-touched': isTouched,
            })}
            fill="solid"
            label="Email (obligatorio)"
            labelPlacement="floating"
            helperText="Ingresa tu email."
            errorText="Email invalido."
            onIonInput={(event) => Validate_Email(event)}
            onIonBlur={() => markTouched()}
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonInput
             className={clsx('item-spacing', {
                 'ion-valid'  : isEmailValid,
                 'ion-invalid': isEmailValid === false,
                 'ion-touched': isTouched,
             })}
             type="password"
             label="Contraseña (obligatorio)"
             fill="solid"
             labelPlacement="floating"
             helperText="Ingresa tu contraseña"
             errorText="Contraseña invalida"
             onIonInput={(event) => Validate_Email(event)}
             onIonBlur={() => markTouched()}
            >
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonItem>
          <div className="login-wrapper">
            <IonItem>
              <IonButton className="my-button" routerLink='/Home'>Iniciar</IonButton>
              <IonButton className="my-button" routerLink='/Sign_In'>Crear cuenta</IonButton>
            </IonItem>
          </div>
          </IonCard>
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Login;