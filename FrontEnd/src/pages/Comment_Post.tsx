import { IonItemSliding, IonItemOptions, IonItemOption, IonText, IonLabel, IonIcon, IonCol, IonRow, IonGrid, IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import { chevronDown, chevronForward } from 'ionicons/icons';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import '../theme/Comment_Post.css';

const Edit_Profile: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'I think you should try', imgSrc: 'src/assets/img_random.jpg', description: 'detalle comentario 1', expanded: false },
    { id: 2, title: 'I think you should try', imgSrc: 'src/assets/img_random.jpg', description: 'detalle comentario 2', expanded: false },
    { id: 3, title: 'I think you should try', imgSrc: 'src/assets/img_random.jpg', description: 'detalle comentario 3', expanded: false },
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
      <My_Toolbar>Comment Post</My_Toolbar>
      <IonContent fullscreen>
        <IonLabel>
            <IonTitle style={{"margin-top": "30px", "margin-left": "30px"}}>Comentarios: 69</IonTitle>
        </IonLabel>

        {items.map(item => (
          <IonItemSliding key={item.id}>
            <div className='comment'>
              <IonItem button lines='none' style={{width: "70%"}} onClick={() => toggleExpand(item.id)}>
                <img slot='start' src={item.imgSrc} alt="foto perfil"/>
                <IonLabel>
                  <h2 style={{textWrap: "nowrap"}}>{item.title}</h2>
                </IonLabel>
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

export default Edit_Profile;