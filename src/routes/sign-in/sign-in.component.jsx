import {  signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.component";
const SignIn = () =>{
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }
    const logGoogleUserRedirect = async () => {
        const {user} = await signInWithGoogleRedirect();
        // const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={logGoogleUserRedirect}>Sign in with Google Redirect</button>
 <SignUpForm/>
 
        </div>
    );
};

export default SignIn;