import { IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';

import My_Toolbar from '../components/My_Toolbar';
import Footer from '../components/Footer';

const post_search: React.FC=() =>{
    return(
        <IonPage>
            <My_Toolbar>Search</My_Toolbar>
            <IonContent fullscreen>
                <ExploreContainer/>
            </IonContent>
        </IonPage>
    );
};

export default post_search;