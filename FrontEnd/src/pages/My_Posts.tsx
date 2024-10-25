import { IonItemSliding, IonItemOptions, IonItemOption, IonText, IonLabel, IonIcon, IonCol, IonRow, IonGrid, IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { createOutline, chatboxEllipses, trash, chevronDown, chevronForward } from 'ionicons/icons';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';
import { useHistory } from "react-router-dom";

import '../theme/My_Posts.css';

import postsData from '../assets/posts.json';

const My_Posts: React.FC = () => {
  const history = useHistory();
  const INVALID_ID = 0xffffffff;

  const [posts] = useState(postsData);
  const [expandedID, setExpandedID] = useState<number>(INVALID_ID);

  const toggleExpand = (id: number) => {
    setExpandedID(id);
  };

  const editItem = (item: any) => {
    console.log('Edit:', item);
  };

  const Post_By_ID = (id: number) : number => {
    return posts.indexOf(posts.filter(p => p.id == id)[0], 0);
  } 

  const deleteItem = (id: number) => {
    const index = Post_By_ID(id);
    posts.splice(index, 1);
  };

  const Route_Comment = (id: number) => {
    history.push({
      pathname: '/comment_post',
      state: id
    })
  };

  const Route_Edit = (id: number) => {
    history.push({
      pathname: '/edit_post',
      state: id
    })
  };

  return (
    <IonPage>
      <My_Toolbar>Mis Post</My_Toolbar>
      <IonContent fullscreen>
        <IonLabel>
            <IonTitle style={{"margin-top": "30px", "margin-left": "30px"}}>Posts: {posts.length}</IonTitle>
        </IonLabel>

        {posts.map(item => (
          <IonItemSliding key={item.id}>
            <div className='post'>
              <IonItem className='post-box' button lines='none' style={{width: "70%"}} onClick={() => toggleExpand(item.id)}>
                <IonLabel>
                  <h2 style={{textWrap: "nowrap"}}>{item.title}</h2>
                </IonLabel>
                <IonItem className='hola' onClick={e => deleteItem(item.id)} button lines='none'>
                  <IonIcon slot="end" icon={trash}/>
                </IonItem>
                <IonItem className='hola' button onClick={e => Route_Comment(item.id)} lines='none'>
                  <IonIcon slot="end" icon={chatboxEllipses}/>
                </IonItem>
                <IonItem className='hola' button onClick={e => Route_Edit(item.id)} lines='none'>
                  <IonIcon slot="end" icon={createOutline}/>
                </IonItem>
                <IonIcon slot="end" icon={ ( item.id == expandedID ) ? chevronDown : chevronForward } />
              </IonItem>
            </div>

            { ( item.id == expandedID ) && <p style={{textAlign: "center"}}>{item.description}</p> }
          </IonItemSliding>
        ))}

      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default My_Posts;