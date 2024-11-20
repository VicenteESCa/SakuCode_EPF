import { IonInputPasswordToggle, IonInput, IonAvatar, IonIcon, IonCard, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import React, { useState } from 'react';
import '../theme/Login.css';
import { clsx } from 'clsx';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import regionsData from '../assets/regiones_y_comunas.json';

const Login: React.FC = () => {
  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [regions] = useState(regionsData);
  const [error, setError] = useState<string>("");
  const [submitIsValid, setSubmitValid] = useState<boolean>();

  const [isTouched, setIsTouched] = useState(false);
  enum Valid {
    UNDEFINED,
    VALID,
    INVALID,
  };

 const [formData, setFromData] = useState({
      userName: false,
      region: '',
      comuna: '',
      rut: {valid: Valid.UNDEFINED, value: ''},
      email: {valid: Valid.UNDEFINED, value: ''},
      password: {valid: Valid.UNDEFINED, value: ''},
      confirmPassword: {valid: Valid.UNDEFINED, value: ''},
      termsAndConds: false,
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

  const Validate_Confirm_Password = (event: any) => {
    const confirmPassword = (event.target as HTMLTextAreaElement).value;

    const valid: Valid = ( confirmPassword == '' ) 
      ? Valid.UNDEFINED
      : ( confirmPassword == formData.password.value )
        ? Valid.VALID
        : Valid.INVALID;

    setFromData({
      ...formData,
      confirmPassword: { valid: valid, value: confirmPassword }
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

  const onSubmit = handleSubmit((data) => {
    console.log(formData);
    history.push("/my_posts");
  })

  // const Validate_Submit = () =>  {
  //     console.log(formData);
  //     history.push("/my_posts");
  //     // if ( !formData.userName || !formData.region || !formData.comuna || !formData.rut.value ||
  //     //      !formData.termsAndConds || !formData.email.value || !formData.password.value || !formData.confirmPassword.value  ) {
  //     //   setSubmitValid(false);
  //     //   setError("Rellena los campos faltantes.");
  //     //   error
  //     // } else if (formData.rut.valid != Valid.VALID || formData.email.valid != Valid.VALID ||
  //     //            formData.password.valid != Valid.VALID || formData.confirmPassword.valid != Valid.VALID) {
  //     //   setSubmitValid(false);
  //     //   setError("algunos campos no son validos.");
  //     // } else {
  //     //   setSubmitValid(true);
  //     //   history.push("/home");
  //     // }
  // }

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
              <IonButton className="my-button" onClick={() => Validate_Submit()}>Registrate</IonButton>
              {/* <IonButton className="my-button" routerLink='/Home'>Iniciar</IonButton> */}
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