import React, { PropsWithChildren, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonCard, IonPopover,IonText, IonItem, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonButtons, IonMenuButton, IonList, IonLabel, IonMenuToggle, IonIcon } from '@ionic/react'
import '../theme/My_Toolbar.css';
import { Children } from 'react';
import { home, person, settings } from 'ionicons/icons';
import Edit_Profile from '../pages/Edit_Profile';

const My_Toolbar = ({children} : PropsWithChildren)=>{
    const [showPopover, setShowPopover] = useState(false);
    const [popoverPosition, setPopoverPosition] = useState<{top: Number, right: number}>({top: 0, right: 0})

    const handleButtonClick = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) =>{
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setPopoverPosition({top:rect.bottom, right:rect.right});
        setShowPopover(true)
    }
    return(
      <IonHeader className="Radius-Box-Sizing-toolbar">
          <IonToolbar className="custom" >
          <IonTitle className="toolbar-title">{children}</IonTitle>
                <IonMenuButton slot="start" className='menu-button'/> {/* Este botón controla el menú lateral */}
                
                <IonButton slot="start" className='custom' 
                           style={{width:"5%"}}
                           routerLink='/home'>
                    <IonIcon icon={home} id="custom"></IonIcon>
                </IonButton>
                <IonButton color="none" 
                           slot="end" 
                           size="small" 
                           shape={'circle' as any}
                           onClick={handleButtonClick}>
                    <img className="profile_img" src="src/assets/img_random.jpg"/>
                </IonButton>

                <IonPopover isOpen={showPopover}
                            onDidDismiss={()=> setShowPopover(false)}
                            className='custom-popOver'
                            style={{top:`${popoverPosition.top}px`, right:`${popoverPosition.right}px`, position:'fixed'}}
                >
                    <IonCard style={{height:`${popoverPosition.top}px`, position:"relative"}}>
                        <IonList>
                            <IonButton color="none"
                                       onClick={()=>setShowPopover(false)}
                                       routerLink="/edit_profile">
                            <IonLabel style={{color: "white"}}> volviendome loco </IonLabel>
                            </IonButton>
                        </IonList>
                    </IonCard>    
                </IonPopover>

           
          </IonToolbar>
      </IonHeader>
    )
}

export default My_Toolbar;