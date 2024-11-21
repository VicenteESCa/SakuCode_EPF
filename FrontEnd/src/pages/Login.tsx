import { IonText, IonInputPasswordToggle, IonInput, IonAvatar, IonIcon, IonCard, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import '../theme/Login.css';
import { clsx } from 'clsx';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import regionsData from '../assets/regiones_y_comunas.json';

import { useAuth } from '../context/AuthContext'

const Login: React.FC = () => {
  const history = useHistory();

  const [ submiting, setSubmiting ] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const [submitIsValid, setSubmitValid] = useState<boolean>();
  const { signin, isAuthenticated, errors: signinErrors }  = useAuth();

  if(isAuthenticated){
    history.push("/home")
  }

  const [isTouched, setIsTouched] = useState(false);
  
  enum Valid {
    UNDEFINED,
    VALID,
    INVALID,
  };

 const [formData, setFromData] = useState({
      email: {valid: Valid.UNDEFINED, value: ''},
      password: {valid: Valid.UNDEFINED, value: ''}, 
  });

  const MIN_PASSWORD = 6;
  const Is_Email = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }
  const Validate_Email = (event: any) => {
    const email = (event.target as HTMLTextAreaElement).value;

    const valid: Valid = ( email == '' ) 
      ? Valid.UNDEFINED
      : ( Is_Email(email) !== null )
        ? Valid.VALID
        : Valid.INVALID;

    setFromData({
      ...formData,
      email: { valid: valid, value: email }
    });
  };

  const Validate_Password = (event: any) => {
    const password = (event.target as HTMLTextAreaElement).value;

    const valid: Valid = ( password == '' ) 
      ? Valid.UNDEFINED
      : ( password.length >= MIN_PASSWORD )
        ? Valid.VALID
        : Valid.INVALID;

    setFromData({
      ...formData,
      password: { valid: valid, value: password }
    });
  }
  const Update_Form = (name: string, value: any) => {
    setFromData({
      ...formData,
      [name]: value
    });
  }

  const markTouched = () => {
    setIsTouched(true);
  };

  useEffect(() => {
    if ( isAuthenticated ) {
      history.push("/home");
    }
  }, [isAuthenticated, submiting])

  const onSubmit = handleSubmit((data) => signin(data))
  return (
    <IonPage>
      <My_Toolbar>
        Login
      </My_Toolbar>
      <IonContent fullscreen>
          <form onSubmit={onSubmit}>
            <IonCard>
            <IonItem>
              <IonTextarea 
              className={clsx('item-spacing', {
                  'ion-valid'  : formData.email.valid == Valid.VALID,
                  'ion-invalid': formData.email.valid == Valid.INVALID,
                  'ion-touched': isTouched,
              })}
              { ... register("email", { required: true }) }
              fill="solid"
              label="Email (obligatorio)"
              labelPlacement="floating"
              helperText="Ingresa tu email."
              errorText={ ( errors.email ) ? "Email is required." : "" }
              onIonInput={(event) => Validate_Email(event)}
              onIonBlur={() => markTouched()}
              ></IonTextarea>
            </IonItem>
            <IonItem>
              <IonInput
              className={clsx('item-spacing', {
                  'ion-valid'  : formData.password.valid == Valid.VALID,
                  'ion-invalid': formData.password.valid == Valid.INVALID,
                  'ion-touched': isTouched,
              })}
              { ... register("password", { required: true }) }
              type="password"
              label="Contraseña (obligatorio)"
              fill="solid"
              labelPlacement="floating"
              helperText="Ingresa tu contraseña"
              // errorText="Contraseña invalida"
              errorText={ ( errors.password ) ? "Password is required." : "" }
              onIonInput={(event) => Validate_Password(event)}
              onIonBlur={() => markTouched()}
              >
                <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
              </IonInput>
            </IonItem>
            <div className="login-wrapper">
              <IonItem>
                <IonButton type="submit" className="my-button">Login</IonButton>
              </IonItem>
            </div>
            {signinErrors.map((error: string) => (
              <IonItem color="danger">
                <IonText>{ error }</IonText>
              </IonItem>
            ))}
            </IonCard>
          </form>
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Login;