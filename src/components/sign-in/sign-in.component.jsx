import { useState } from "react";
import {  createUserDocumentFromAuth ,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../Buttons/button.component";
import './sign-in-form.styles.scss';


const defaultFormFields = {
   
    email:'',
    password:'',
   
}


const SignInForm = () =>{
    const [ formFields,setFormFields ] = useState(defaultFormFields);
    const {  email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

const handleSubmit = async (event) =>{
    event.preventDefault();
console.log(email,password)
  
    try{
       const response = await signInAuthUserWithEmailAndPassword(email,password);
       console.log(response);
        resetFormFields();
  
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
            
            case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
                default:
                    console.log(error);
            }
           
        }
};
const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
}

    const handleChange = (event) => {

     const { name, value } = event.target;
     setFormFields({...formFields, [name]: value })
    
    }
    return(
     <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span> Sign In with your Email and Password</span>
        <form onSubmit={handleSubmit}>
          
       
        
          <FormInput label="Email" type="email" onChange={handleChange} name="email"  required/>  
         
          <FormInput label="Password" type="password" onChange={handleChange} name="password" required/>
          <div className="buttons-container">
          <Button type="submit">Sign In</Button>  
          <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
          </div>
        </form>
     </div>
    );
}
export default SignInForm;