import { IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar, IonSearchbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';

import My_Toolbar from '../components/My_Toolbar';
import Footer from '../components/Footer';
import { toBeVisible } from '@testing-library/jest-dom/matchers';

const Search: React.FC=() =>{
    const dataMomentanea=[
        "Ruby",
        "C",
        "python",
        "Machine learning",
        "IAs",
        "Data base",
        "c#",
        "c++"
    ];

    const [result,setResult] = useState(dataMomentanea);
    const [visible, setVisible]= useState(true);

    const handldeInput = (e:Event)=>{
        let query="";
        const target =e.target as HTMLIonSearchbarElement;
        if(target) query = target.value!.toLowerCase();

        setResult(dataMomentanea.filter((d)=>d.toLowerCase().indexOf(query)> -1))
    }

    return (
        <IonPage>
            <My_Toolbar>Search</My_Toolbar>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            <IonLabel>Sakucode te permite buscar los post con tus topicos favoritos</IonLabel>
                        </IonCardTitle>
                        <IonSearchbar placeholder='enter an topic' onIonInput={(ev)=>handldeInput(ev)}></IonSearchbar>
                        <IonList>
                            {result.map((result)=>(
                                <IonItem>{result}</IonItem>
                            ))}
                        </IonList>
                    </IonCardHeader>
                    <IonCard>

                    </IonCard>
                </IonCard>
                <IonCard>

                </IonCard>
               
            </IonContent>
        </IonPage>
    );
};

export default Search;