import { IonLabel, IonIcon, IonCol, IonRow, IonGrid, IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import '../theme/Edit_Profile.css';

import regionsData from '../assets/regiones_y_comunas.json';

const Edit_Profile: React.FC = () => {
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

  const Update_Form = (name: string, value: any) => {
    setFromData({
      ...formData,
      [name]: value
    });
  }

  const markTouched = () => {
    setIsTouched(true);
  };

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
                      'ion-valid'  : formData.email.valid == Valid.VALID,
                      'ion-invalid': formData.email.valid == Valid.INVALID,
                      'ion-touched': isTouched,
                  })}
                  fill="solid"
                  label="Email"
                  labelPlacement="floating"
                  helperText="Ingresa tu email."
                  errorText="Email invalido."
                  onIonInput={(event) => Validate_Email(event)}
                  onIonBlur={() => markTouched()}
                  ></IonTextarea>
              </IonRow>
                  <IonTextarea 
                  className={clsx('item-spacing', {
                      'ion-touched': isTouched,
                  })}
                  fill="solid"
                  label="Direccion"
                  labelPlacement="floating"
                  helperText="Ingresa tu direccion."
                  onIonBlur={() => markTouched()}
                  ></IonTextarea>
            </IonCol>
            <IonCol>
                <div className="profile_img_box">
                  <img  src="src/assets/img_random.jpg"/>
                </div>
            </IonCol>
          </IonRow>
          <IonRow>
              <IonTextarea 
              className={clsx('item-spacing', {
                  'ion-touched': isTouched,
              })}
              fill="solid"
              label="Sobre mi"
              labelPlacement="floating"
              onIonInput={(event) => Validate_Email(event)}
              onIonBlur={() => markTouched()}
              ></IonTextarea>
          </IonRow>
          <IonRow>
          <IonCol>
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
            </IonCol>
            <IonCol>
              <IonList>
                <IonItem>
                  tag
                </IonItem>
                <IonItem>
                  tag
                </IonItem>
                <IonItem>
                  tag
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