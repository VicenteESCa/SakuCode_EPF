import React, { PropsWithChildren } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonCard, IonPopover,IonText, IonItem, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonButtons, IonMenuButton, IonList, IonLabel, IonMenuToggle } from '@ionic/react'
import { Children } from 'react';
import { home, person, settings } from 'ionicons/icons';

const Footer = ({children} : PropsWithChildren)=>{
    return(
        <div style={{height: "100px"}}> </div>
    )
}

export default Footer;