import { IonCardHeader, IonCardTitle, IonCardContent,IonCard,IonicSlides, IonButton, IonContent, IonHeader, IonItem, IonItemSliding, IonList, IonPage, IonTextarea, IonTitle, IonToolbar, IonNote, IonImg, IonSearchbar } from '@ionic/react';

import '../theme/Home.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css';

import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Importa Navigation desde SwiperCore
import SwiperCore from 'swiper'

import probarImage from '../theme/images/probar.jpg';
import python from '../theme/images/python.jpg';
import Database from '../theme/images/BaseDeDatos.jpg';
import C_Card from '../theme/images/C-CardTotal.jpg';
import csharp_card from '../theme/images/Csharp-CardTotal.jpg';
import Ia_Background from '../theme/images/IA- card.jpg'
import PC_Card from '../theme/images/PCBUILDNGCARD.jpg'
import RubyLogo from '../theme/images/RubyBackground.jpg'

import My_Toolbar from '../components/My_Toolbar';
import Footer from '../components/Footer';
SwiperCore.use([Navigation])

const cardDataProgram=[
  { id:1, title: 'JavaScript', content:'s', Link:"./Login", imgBackground:probarImage},
  { id:2, title: 'python', content:'Content for card 2',Link:"./Login", imgBackground:python}, 
  { id:3, title: 'C', content:'Content for card 3',Link:"",imgBackground:C_Card},   
  { id:4, title: 'C-Sharp', content:'Content for card 4',link:"",imgBackground: csharp_card },
  { id:5, title: 'RubyLogo', content:'Content for card 4', Link:"",imgBackground: RubyLogo },
];
const cardDataScience=[
  { id:1, title: 'DB', content:'s', Link:"./Login", imgBackground:Database},
  { id: 7, title: 'IA', content: 'Content for Data card 2', imgBackground:Ia_Background},
  { id: 8, title: 'PcBuildin', content: 'Content for Data card 3', imgBackground:PC_Card},
  { id:4, title: 'Pc vuildin', content:'Content for card 4'},
  { id:4, title: 'Card 4', content:'Content for card 4'},
  { id: 9, title: 'Data Card 4', content: 'Content for Data card 4',},
];
const swiperCaract0=
  {
  spaceBetween:10,
  slidesPerView:2,
  speed:400,
  initialSlide:0,
  navigation:true,
  grabCursor:true,
  modules:[Navigation],
};

const Home: React.FC = () =>{
  return(
    <IonPage>
      <My_Toolbar>Home</My_Toolbar>
      <IonContent fullscreen>
        <IonCard style={{boxShadow: "2px 2px 2px gray"}}>
          <IonCardContent>
            <IonItem style={{width:"100%"}}>
              <IonHeader style={{width:"100%"}}>
                <IonTitle className='roboto-slab-Headers-Font'
                          style={{fontSize:"80px", 
                                  display:"relative", 
                                  textAlign:"center",
                                  textShadow:"2px 2px gray"}}>Proposito</IonTitle>
                <IonTitle>
                  <p className="montserrat-Parrafos-font" 
                     style={{display:"relative", 
                             textAlign:"center", 
                             fontSize:"30px",
                            }}>
                    Sakucode es por y para programadores. <br/>
                    buscamos acercar a la comunidad de coders,<br/>
                    gente que desea ingresar al mundo de la programacion 
                  </p>
              </IonTitle> 
              </IonHeader>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard style={{boxShadow: "2px 2px 2px gray"}}>
        <IonItem>
          <IonContent style={{width:"100%", height:"100%"}}>
            <IonSearchbar showClearButton='focus' 
                          animated={true}
                          placeholder='Busqueda de preferencias'
                          style={{width:"100%", height:"100%"}}>
            </IonSearchbar>
          </IonContent>
        </IonItem>
        </IonCard>

        <IonCard style={{boxShadow: "2px 2px 2px gray"}}>

          <IonItem >
            <IonHeader className='montserrat-Parrafos-font'>Lenguajes de programacion</IonHeader>
          </IonItem>

        <IonItem>

        <IonToolbar style={{margin:"20px 0px 20px 0px"}}>

          <Swiper {...swiperCaract0}>
            {
              cardDataProgram.map((slide)=>(    
                  <SwiperSlide key={slide.id}>
                  <IonItem>
                  <IonCard className="cards"
                  routerLink={slide.Link}
                  >
                    <img src={slide.imgBackground} 
                    alt="Card background" 
                    style={{ width: '100%', height: '100%', 
                             objectFit: 'cover', zIndex:"2", position:"relative"}} />
                    <IonCardHeader>
                      <IonCardTitle style={{zIndex:"3", position:"relative", objectFit:"cover"
                      }}>{slide.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{slide.content}</IonCardContent>
                  </IonCard>
                  </IonItem>
                </SwiperSlide>           
              ))}
          </Swiper>

          </IonToolbar>

        </IonItem>

        <IonItem>
          <IonHeader className='montserrat-Parrafos-font'>
            Topicos de ciencias de la computacion
          </IonHeader>
        </IonItem
        >
        <IonItem>
              
        <IonToolbar style={{margin:"20px 0px 0px 0px"}}>
        <Swiper {...swiperCaract0}>
          {
            cardDataScience.map((slide)=>(    
                <SwiperSlide key={slide.id}>
                <IonItem>
                <IonCard className="cards"
                routerLink={slide.Link}
                >
                  <img src={slide.imgBackground} alt="Card background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <IonCardHeader>
                    <IonCardTitle>{slide.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{slide.content}</IonCardContent>
                </IonCard>
                </IonItem>
              </SwiperSlide>           
            ))}
          </Swiper>
        </IonToolbar>
        </IonItem>
        </IonCard>
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;