import React from 'react';
import {IonItem, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonButtons, IonMenuButton, IonList, IonLabel, IonMenuToggle } from '@ionic/react'
import '../theme/Login.css';

const Menu:React.FC=()=>{
    return(
        <IonMenu contentId="main-content">
        <IonHeader>
            <IonToolbar className="custom" id="main-content">
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>
            <IonContent  id="main-content">
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink='/home'> 
                                <IonLabel>Home</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink='/login'>
                                <IonLabel>Inicio de sesion</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink='/my_posts'>
                                <IonLabel>Mis posts</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink='/comment_post'>
                                <IonLabel>Comentar post</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink='/sign_in'>
                                <IonLabel>Registrarse</IonLabel>
                            </IonItem>
                            <IonItem routerLink='/create_post'>
                                <IonLabel>Crear Post</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink='/Busqueda_post'>
                                <IonLabel>Search Post</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default Menu;