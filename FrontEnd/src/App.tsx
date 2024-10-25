import { Redirect, Route } from 'react-router-dom';
import {IonTitle, IonMenuButton, IonButtons, IonToolbar,  IonHeader, IonPage, IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import Sign_In from './pages/Sign_In';
import Edit_Profile from './pages/Edit_Profile';
import My_Posts from './pages/My_Posts';
import Create_Post from './pages/Create_Post';
import Comment_Post from './pages/Comment_Post';
import Edit_Post from './pages/Edit_Post-';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* SplitPane para manejar el menú lateral */}
        <Menu/> {/* Aquí se coloca el menú lateral */}
        <IonPage id="main-content"> {/* Contenido principal de la página */}
          <IonRouterOutlet id='main-content'>
            {/* Definición de rutas */}
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/sign_in" component={Sign_In}></Route>
            <Route path="/create_post" component={Create_Post}></Route>
            <Route path="/edit_profile" component={Edit_Profile}></Route>
            <Route path="/my_posts" component={My_Posts}></Route>
            <Route path="/comment_post" component={Comment_Post}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/edit_post" component={Edit_Post}></Route>
            <Redirect from="/" to="/home" exact />
          </IonRouterOutlet>
        </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
