import React from 'react';
import {IonItem, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonButtons, IonMenuButton, IonList, IonLabel, IonMenuToggle } from '@ionic/react'

const Menu:React.FC=()=>{
    return(
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar className="custom">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink='/home'> 
                                <IonLabel>Home</IonLabel>
                            </IonItem>
                            <IonItem routerLink='/login'>
                                <IonLabel>Inicio de sesion</IonLabel>
                            </IonItem>
                            <IonItem routerLink='/my_posts'>
                                <IonLabel>Mis posts</IonLabel>
                            </IonItem>
                            <IonItem routerLink='/comment_post'>
                                <IonLabel>Comentar post</IonLabel>
                            </IonItem>
                            <IonItem routerLink='/sign_in'>
                                <IonLabel>Registrarse</IonLabel>
                            </IonItem>
                            <IonItem routerLink='/create_post'>
                                <IonLabel>Crear Post</IonLabel>
                            </IonItem>
                            <IonItem routerLink='/search'>
                                <IonLabel>Buscar</IonLabel>
                            </IonItem>
                            <IonItem routerLink='/edit_post'>
                                <IonLabel>Editar Post</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default Menu;