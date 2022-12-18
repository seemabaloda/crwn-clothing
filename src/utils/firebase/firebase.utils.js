import {initializeApp} from 'firebase/app'; 
import {    getAuth,    GoogleAuthProvider,    signInWithRedirect,   signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword
} from 'firebase/auth';
import{
getFirestore,
doc,
getDoc,
setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIBCzVxhUn0Jycvc5ol8DRlPCbSBI5vpk",
    authDomain: "crwnp-db.firebaseapp.com",
    projectId: "crwnp-db",
    storageBucket: "crwnp-db.appspot.com",
    messagingSenderId: "797962218957",
    appId: "1:797962218957:web:b9e17385e2ab509e0fe884"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleprovider = new GoogleAuthProvider();

  googleprovider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleprovider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleprovider);

  export const db =getFirestore();
  export const createUserDocumentFromAuth = async(userAuth)=>{
const userDocRef = doc(db,'users',userAuth.uid);
const userSnapshot = await getDoc(userDocRef);


if(!userSnapshot.exists()){
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt,
    
    });
  }catch(error){
    console.log('error creating the user',error.message);
  }
}
return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async(email,password) => {
   
    if(!email || !password) return password;
   return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signInAuthUserWithEmailAndPassword = async(email,password) => {
   
    if(!email || !password) return password;
   return await signInWithEmailAndPassword(auth,email,password);
  }