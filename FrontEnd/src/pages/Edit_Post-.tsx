import { IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import ExploreContainer from '../components/ExploreContainer';

import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import { useHistory, useLocation } from "react-router-dom";

import posts from '../assets/posts.json';

const Edit_Post: React.FC = () => {
  const history = useHistory();
  const [isTouched, setIsTouched] = useState(false);

  const location = useLocation();

  const [tags] = useState([
    "python", "c", "c++", "ruby"
  ]);

  const INVALID_ID = 0xffffffff;
  const [expandedID, setExpandedID] = useState<number>(INVALID_ID);

  const markTouched = () => {
    setIsTouched(true);
  };

  const Validate_Submit = () => {
    console.log("submiting post.");
    history.push("/home");
  }

  if ( typeof location.state == "number" ) {
    let post = posts.filter(p => p.id == location.state)[0];

    return (
      <IonPage>
        <My_Toolbar>Edit Post</My_Toolbar>
        <IonContent fullscreen style={{"padding-left": "10px", "padding-right": "10px"}}>
          
          <IonList>
              <IonItem>
                  <IonTextarea 
                  className={clsx('item-spacing', {
                      'ion-touched': isTouched,
                  })}
                  fill="solid"
                  label="Title"
                  labelPlacement="floating"
                  helperText="Ingresa el titulo del post."
                  errorText="Titulo invalido."
                  onIonBlur={() => markTouched()}
                  value = {post.title}
                  ></IonTextarea>
              </IonItem>
              <IonItem>
                  <IonTextarea 
                  className={clsx('item-spacing', {
                      'ion-touched': isTouched,
                  })}
                  fill="solid"
                  label="Descripción"
                  labelPlacement="floating"
                  helperText="Ingresa la descripción del post."
                  errorText="Descripción invalida."
                  onIonBlur={() => markTouched()}
                  value = {post.description}
                  ></IonTextarea>
              </IonItem>
              <IonItem>
                  <IonSelect
                  label="Tags"
                  fill="solid"
                  multiple={true}
                  labelPlacement="floating"
                  value={post.tags}
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
                  {/* onClick={() => Validate_Submit()} */}
                  <IonButton className="my-button" >Aceptar</IonButton>
                  </IonToolbar>
              </IonItem>
              </div>
          </IonList>
          <Footer/>
        </IonContent>
      </IonPage>
    );
  } else {
    console.error("the state given to the edit post page is not the original post id");
    history.goBack();
  }
};

export default Edit_Post;