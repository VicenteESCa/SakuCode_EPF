// Imports utilizados en el front end
import { IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar, IonText } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import ExploreContainer from '../components/ExploreContainer';
import { useHistory } from "react-router-dom";
//Import del API
import { User, registerRequest } from '../api/auth'
//Css utilizado
import '../theme/Sign_In.css';

import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import { useAuth } from "../context/AuthContext"

import regionsData from '../assets/regiones_y_comunas.json';

const Sign_In: React.FC = () => {
  const history = useHistory();

  const [regions] = useState(regionsData);
  const [error, setError] = useState<string>("");
  const [submitIsValid, setSubmitValid] = useState<boolean>();

  const { signup, isAuthenticated } = useAuth();

  useEffect(() => {
    if ( isAuthenticated ) {
      history.push("/home");
    }
  }, [isAuthenticated])

  const [isTouched, setIsTouched] = useState(false);
  enum Valid {
    UNDEFINED,
    VALID,
    INVALID,
  };

  const [formData, setFromData] = useState({
    userName: '', // Cambiar a string en lugar de boolean
    region: '',
    comuna: '',
    rut: { valid: Valid.UNDEFINED, value: '' },
    email: { valid: Valid.UNDEFINED, value: '' },
    password: { valid: Valid.UNDEFINED, value: '' },
    confirmPassword: { valid: Valid.UNDEFINED, value: '' },
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

  const Is_Rut = (rut: string) => {
    return rut.match(
      /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/
    );
  }

  const Validate_Rut = (event: Event) => {
    const rut = (event.target as HTMLTextAreaElement).value;

    const valid: Valid = ( rut == '' ) 
      ? Valid.UNDEFINED
      : ( Is_Rut(rut) !== null )
        ? Valid.VALID
        : Valid.INVALID;

    setFromData({
      ...formData,
      rut: { valid: valid, value: rut }
    });
  }

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

  const Validate_Submit = async () =>  {
    if ( !formData.userName || !formData.region || !formData.comuna || !formData.rut.value ||
          !formData.termsAndConds || !formData.email.value || !formData.password.value || !formData.confirmPassword.value  ) {
      setSubmitValid(false);
      setError("Rellena los campos faltantes.");
      error
    } else if (formData.rut.valid != Valid.VALID || formData.email.valid != Valid.VALID ||
                formData.password.valid != Valid.VALID || formData.confirmPassword.valid != Valid.VALID) {
      setSubmitValid(false);
      setError("algunos campos no son validos.");
    } else {
      setSubmitValid(true);

      try {
        // const user: User = {
        //   username: formData.userName,
        //   region: formData.region,
        //   comuna: formData.comuna,
        //   rut: formData.rut.value,
        //   email: formData.email.value,
        //   password: formData.password.value,
        // }
        const response = await signup({
          username: formData.userName,
          region: formData.region,
          comuna: formData.comuna,
          rut: formData.rut.value,
          email: formData.email.value,
          password: formData.password.value,
        });

        console.log("Registro exitoso: ", response);
      } catch(error) {
        console.log("Error de registro", error)
        setError("Hubo un error al registrar el usuario. Intente nuevamente")
        setSubmitValid(false)
      }
    }
  }

  return (
    <IonPage>
      <My_Toolbar>Sign In</My_Toolbar>
      <IonContent fullscreen>
        
        <IonList>
          <IonItem>
            <IonTextarea 
            className={clsx('item-spacing', {
                'ion-touched': isTouched,
            })}
            fill="solid"
            label="Nombre de usuario (obligatorio)"
            labelPlacement="floating"
            helperText="Ingresa tu nombre de usuario."
            onIonChange={e => Update_Form("userName", (e.target as HTMLIonTextareaElement).value)}
            onIonBlur={() => markTouched()}
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonTextarea 
            className={clsx('item-spacing', {
                'ion-valid'  : formData.rut.valid == Valid.VALID,
                'ion-invalid': formData.rut.valid == Valid.INVALID,
                'ion-touched': isTouched,
            })}
            fill="solid"
            label="Rut (obligatorio)"
            labelPlacement="floating"
            helperText="Ingresa tu rut. (00.000.000-0)"
            errorText="Rut invalido. El formato debe corresponder con (00.000.000-0)"
            onIonInput={(event) => Validate_Rut(event)}
            onIonBlur={() => markTouched()}
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonTextarea 
            className={clsx('item-spacing', {
                'ion-valid'  : formData.email.valid == Valid.VALID,
                'ion-invalid': formData.email.valid == Valid.INVALID,
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
            <IonSelect
            label="Region (obligatorio)"
            fill="solid"
            labelPlacement="floating"
            onIonChange={e => Update_Form("region", (e.target as HTMLIonSelectElement).value)}
            className={clsx('item-spacing', {
                'ion-touched': isTouched,
            })}
            >
              {regions.map(region => (
                <IonSelectOption value={region.region}>{region.region}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonSelect
            label="Comuna (obligatorio)"
            fill="solid"
            labelPlacement="floating"
            onIonChange={e => Update_Form("comuna", (e.target as HTMLIonSelectElement).value)}
            className={clsx('item-spacing', {
                'ion-touched': isTouched,
            })}
            >
              {regionsData.filter(r => r.region == formData.region).length !== 0 &&
               regionsData.filter(r => r.region == formData.region)[0].comunas.map(comuna => (
                <IonSelectOption value={comuna}>{comuna}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonInput
             className={clsx('item-spacing', {
                 'ion-valid'  : formData.password.valid == Valid.VALID,
                 'ion-invalid': formData.password.valid == Valid.INVALID,
                 'ion-touched': isTouched,
             })}
             type="password"
             label="Contraseña (obligatorio)"
             fill="solid"
             labelPlacement="floating"
             helperText="Ingresa tu contraseña"
             errorText="Contraseña invalida"
             onIonInput={(event) => Validate_Password(event)}
             onIonBlur={() => markTouched()}
            >
              <IonInputPasswordToggle aria-checked="true" slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              className={clsx('item-spacing', {
                  'ion-valid'  : formData.confirmPassword.valid == Valid.VALID,
                  'ion-invalid': formData.confirmPassword.valid == Valid.INVALID,
                  'ion-touched': isTouched,
              })}
              fill="solid"
              label="Confirmar contraseña (obligatorio)"
              labelPlacement="floating"
              helperText="Confirma tu contraseña"
              errorText="Confirmar contraseña no es igual a contraseña"
              onIonInput={(event) => Validate_Confirm_Password(event)}
              onIonBlur={() => markTouched()}
            >
              <IonInputPasswordToggle aria-checked="true" slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox onIonChange={e => Update_Form("termsAndConds", e.detail.checked)}>I agree to the terms and conditions</IonCheckbox>
          </IonItem>
        <div className="login-wrapper">
          <IonItem>
            <IonToolbar className="botones-container">
              <IonButton className="my-button" onClick={() => Validate_Submit()}>Registrate</IonButton>
            </IonToolbar>
          </IonItem>
        </div>
          { !submitIsValid && (
            <IonItem color="danger">
              <IonText>{error}</IonText>
            </IonItem>
          )}
        </IonList>
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Sign_In;