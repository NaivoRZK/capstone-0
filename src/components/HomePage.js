import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup ,onAuthStateChanged} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signOut } from 'firebase/auth';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header  from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Signup from './Signup';


//  configuration Firebasesssssss
const firebaseConfig = {
    apiKey: "AIzaSyBXt3Z0aBboSEWeIDJc8apPnAHXb3REi9I",
    authDomain: "litlelemon-42baa.firebaseapp.com",
    projectId: "litlelemon-42baa",
    storageBucket: "litlelemon-42baa.appspot.com",
    messagingSenderId: "651385977",
    appId: "1:651385977:web:f85f21522b22c53e3d08a8",
    measurementId: "G-3L6HFK5WJQ"
};




// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Utiliser getAuth pour obtenir une instance de l'authentification

export default function HomePage() {
    // Fonction pour gérer la processus de connexion avec Google
    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider); // Utiliser signInWithPopup avec l'instance auth
            // Redirection ou mise à jour de l'état après la connexion
        } catch (error) {
            console.error(error);
        }
    };
//ftion pour gerer le deconnexion
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            // Mettre à jour l'état de l'utilisateur après la déconnexion
             setUser(null);
        } catch (error) {
            console.error(error);
        }
    };
    
    
    // Pour gérer le statut de l'utilisateur
    const [user, setUser] = useState(null);

    // Écoute le changement de statut de l'utilisateur 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <>
         {user ? (
                <>
                    <Header />
                    <div className='container-sign'>
                       <button id="btn-signout" onClick={handleSignOut} > Decoonexion  </button>
                       <FontAwesomeIcon className='icon-user' icon={faUser} size="2x" color="green" />
                    </div>
                    <Nav /> 
                    <Main />
                    <Footer />
                </>
            ) : (
                <>
                    <Header />
                    <Signup handleGoogleSignIn={handleGoogleSignIn}/>
                
                </>
            )}
    
 
        </>
    );
}
