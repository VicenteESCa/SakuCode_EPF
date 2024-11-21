import { IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import ExploreContainer from '../components/ExploreContainer';

import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import { useHistory } from "react-router-dom";

const Create_Post: React.FC = () => {
  const history = useHistory();
  const [isTouched, setIsTouched] = useState(false);

  const [tags] = useState([
    "python", "c", "c++", "ruby"
  ]);

  const markTouched = () => {
    setIsTouched(true);
  };

  const Validate_Submit = () => {
    console.log("submiting post.");
    history.push("/home");
  }

  return (
    <IonPage>
      <My_Toolbar>Create Post</My_Toolbar>
      <IonContent fullscreen style={{"padding-left": "10px", "padding-right": "10px"}}>
        
        <IonList>
            <IonItem>
                <IonTextarea 
                className={clsx('item-spacing', {
                    'ion-touched': isTouched,
                })}
                fill="solid"
                label="Title (obligatorio)"
                labelPlacement="floating"
                helperText="Ingresa el titulo del post."
                errorText="Titulo invalido."
                onIonBlur={() => markTouched()}
                ></IonTextarea>
            </IonItem>
            <IonItem>
                <IonTextarea 
                className={clsx('item-spacing', {
                    'ion-touched': isTouched,
                })}
                fill="solid"
                label="Descripción (obligatorio)"
                labelPlacement="floating"
                helperText="Ingresa la descripción post."
                errorText="Descripción invalida."
                onIonBlur={() => markTouched()}
                ></IonTextarea>
            </IonItem>
            <IonItem>
                <IonSelect
                label="Tags (obligatorio)"
                fill="solid"
                labelPlacement="floating"
                className={clsx('item-spacing', {
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
                <IonButton className="my-button" onClick={() => Validate_Submit()}>Registrate</IonButton>
                </IonToolbar>
            </IonItem>
            </div>
        </IonList>
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Create_Post;