import { IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/Login.css';
import '../theme/Sign_In.css';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

const Sign_In: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>();

  const [tags] = useState([
    "python", "c", "c++", "ruby"
  ]);

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
      <My_Toolbar>Create Post</My_Toolbar>
      <IonContent fullscreen style={{"padding-left": "10px", "padding-right": "10px"}}>
        
        <IonList>
            <IonItem>
                <IonTextarea 
                className={clsx('item-spacing', {
                    'ion-valid'  : isEmailValid,
                    'ion-invalid': isEmailValid === false,
                    'ion-touched': isTouched,
                })}
                fill="solid"
                label="Title (obligatorio)"
                labelPlacement="floating"
                helperText="Ingresa el titulo del post."
                errorText="Titulo invalido."
                onIonInput={(event) => Validate_Email(event)}
                onIonBlur={() => markTouched()}
                ></IonTextarea>
            </IonItem>
            <IonItem>
                <IonTextarea 
                className={clsx('item-spacing', {
                    'ion-valid'  : isEmailValid,
                    'ion-invalid': isEmailValid === false,
                    'ion-touched': isTouched,
                })}
                fill="solid"
                label="Descripción (obligatorio)"
                labelPlacement="floating"
                helperText="Ingresa la descripción post."
                errorText="Descripción invalida."
                onIonInput={(event) => Validate_Email(event)}
                onIonBlur={() => markTouched()}
                ></IonTextarea>
            </IonItem>
            <IonItem>
                <IonSelect
                label="Tags (obligatorio)"
                fill="solid"
                labelPlacement="floating"
                className={clsx('item-spacing', {
                    'ion-valid'  : isEmailValid,
                    'ion-invalid': isEmailValid === false,
                    'ion-touched': isTouched,
                })}
                >
                  {tags.map(tag => (
                    <IonSelectOption value={tag}>{tag}</IonSelectOption>
                  ))}
                </IonSelect>
            </IonItem>
            <div className="login-wrapper">
            <IonItem>
                <IonToolbar className="botones-container">
                <IonButton className="my-button" onClick={() => Validate_Submit()} routerLink='/Home'>Registrate</IonButton>
                </IonToolbar>
            </IonItem>
            </div>
        </IonList>
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Sign_In;