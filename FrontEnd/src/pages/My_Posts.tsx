import { IonItemSliding, IonItemOptions, IonItemOption, IonText, IonLabel, IonIcon, IonCol, IonRow, IonGrid, IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import { chatboxEllipses, trash, chevronDown, chevronForward } from 'ionicons/icons';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import '../theme/My_Posts.css';

const My_Posts: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'i have a question', description: 'detalle comentario 1', expanded: false },
    { id: 2, title: 'i have a question', description: 'detalle comentario 2', expanded: false },
    { id: 3, title: 'i have a question', description: 'detalle comentario 3', expanded: false },
  ]);

  const toggleExpand = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, expanded: !item.expanded } : item
    ));
  };

  const editItem = (item: any) => {
    console.log('Edit:', item);
  };

  const deleteItem = (item: any) => {
    console.log('Delete:', item);
  };

  return (
    <IonPage>
      <My_Toolbar>Mis Post</My_Toolbar>
      <IonContent fullscreen>
        <IonLabel>
            <IonTitle style={{"margin-top": "30px", "margin-left": "30px"}}>Posts: 69</IonTitle>
        </IonLabel>

        {items.map(item => (
          <IonItemSliding key={item.id}>
            <div className='post'>
              <IonItem className='post-box' button lines='none' style={{width: "70%"}} onClick={() => toggleExpand(item.id)}>
                <IonLabel>
                  <h2 style={{textWrap: "nowrap"}}>{item.title}</h2>
                </IonLabel>
                <IonItem className='hola' button lines='none'>
                  <IonIcon slot="end" icon={trash}/>
                </IonItem>
                <IonItem className='hola' button lines='none' routerLink='/comment_post'>
                  <IonIcon slot="end" icon={chatboxEllipses}/>
                </IonItem>
                <IonIcon slot="end" icon={item.expanded ? chevronDown : chevronForward} />
              </IonItem>
            </div>

            {item.expanded && <p style={{textAlign: "center"}}>{item.description}</p>}

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

export default My_Posts;