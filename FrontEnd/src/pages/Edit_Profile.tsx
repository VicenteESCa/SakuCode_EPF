import { IonLabel, IonIcon, IonCol, IonRow, IonGrid, IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import '../theme/Edit_Profile.css';

const Edit_Profile: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>();

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

  const Is_Rut = (rut: string) => {
    return rut.match(
      /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/
    );
  }

  const [isRutValid, setIsRutValid] = useState<boolean>();
  const Validate_Rut = (event: Event) => {
    const rut = (event.target as HTMLTextAreaElement).value;

    setIsRutValid(true);

    if ( rut === '' ) return;

    Is_Rut(rut) !== null ? setIsRutValid(true) : setIsRutValid(false);
  }

  const Validate_Password = (event: Event) => {
  }

  const markTouched = () => {
    setIsTouched(true);
  };

  const Validate_Submit = () : Boolean =>  {
      console.log("hola perras");
      return true;
  }

  return (
    <IonPage>
      <My_Toolbar>Edit Profile</My_Toolbar>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonRow>
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
              </IonRow>
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
            </IonCol>
            <IonCol>
                <div className="profile_img_box">
                  <img src="src/assets/img_random.jpg"/>
                </div>
            </IonCol>
          </IonRow>
          <IonRow>
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
          </IonRow>
          <IonRow>
            <IonCol>
              <IonSelect
              label="Region (obligatorio)"
              fill="solid"
              labelPlacement="floating"
              className={clsx('item-spacing', {
                  'ion-valid'  : isEmailValid,
                  'ion-invalid': isEmailValid === false,
                  'ion-touched': isTouched,
              })}
              >
                <IonSelectOption value="chile">Chile</IonSelectOption>
                <IonSelectOption value="peru">Peru</IonSelectOption>
                <IonSelectOption value="bolivia">Bolivia</IonSelectOption>
              </IonSelect>
            </IonCol>
            <IonCol>
              <IonList>
                <IonItem>
                  2
                </IonItem>
                <IonItem>
                  2
                </IonItem>
              </IonList>
             </IonCol>
          </IonRow>
        </IonGrid>
          <IonTitle style={{"text-align": "center"}}>Links</IonTitle>
          <IonInput fill="solid">
            <img slot="start" style={{width: "40px"}} src="src/assets/logo-github.svg"/>
          </IonInput>
          <IonInput fill="solid">
            <img slot="start" style={{width: "40px"}} src="src/assets/logo-linkedin.svg"/>
          </IonInput>
          <IonInput fill="solid">
            <img slot="start" style={{width: "40px"}} src="src/assets/logo-twitter.svg"/>
          </IonInput>
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Edit_Profile;