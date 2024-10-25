import { IonItemSliding, IonItemOptions, IonItemOption, IonText, IonLabel, IonIcon, IonCol, IonRow, IonGrid, IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import { chevronDown, chevronForward } from 'ionicons/icons';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import {useLocation} from 'react-router-dom';

import '../theme/Comment_Post.css';

import commentsData from '../assets/comments.json';

const Edit_Profile: React.FC = () => {
  const [comments] = useState(commentsData);

  const INVALID_ID = 0xffffffff;
  const [expandedID, setExpandedID] = useState<number>(INVALID_ID);

  const location = useLocation();
  let postID: number;

  if ( typeof location.state == "number" ) {
    postID = location.state;
  } else {
    console.error("the state given to the comments page is not the original post id");
  }

  const toggleExpand = (id: number) => {
    setExpandedID(id);
  };

  const editItem = (item: any) => {
    console.log('Edit:', item);
  };

  const deleteItem = (item: any) => {
    console.log('Delete:', item);
  };

  return (
    <IonPage>
      <My_Toolbar>Comment Post</My_Toolbar>
      <IonContent fullscreen>
        <IonLabel>
            <IonTitle style={{"margin-top": "30px", "margin-left": "30px"}}>Comentarios: { comments.filter(c => c.postID == postID ).length }</IonTitle>
        </IonLabel>

        {comments.map(item => ( ( item.postID == postID ) &&
          <IonItemSliding key={item.id}>
            <div className='comment'>
              <IonItem button lines='none' style={{width: "70%"}} onClick={() => toggleExpand(item.id)}>
                <img slot='start' src={item.imgSrc} alt="foto perfil"/>
                <IonLabel>
                  <h2 style={{textWrap: "nowrap"}}>{item.title}</h2>
                </IonLabel>
                <IonIcon slot="end" icon={ ( item.id == expandedID ) ? chevronDown : chevronForward } />
              </IonItem>
            </div>

            { ( item.id == expandedID ) && <p style={{textAlign: "center"}}>{item.description}</p>}

            <IonItemOptions side="end">
              <IonItemOption onClick={() => editItem(item)}>
                Edit
              </IonItemOption>
              <IonItemOption onClick={() => deleteItem(item)}>
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}

      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Edit_Profile;