import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../Buttons/button.component";
import './sign-up-form.styles.scss';
const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}


const SignUpForm = () =>{
    const [ formFields,setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

const handleSubmit = async (event) =>{
    event.preventDefault();

    if(password !== confirmPassword){
        alert("passwords do not match");
        return;
    }
    try{
        const {user} = await createAuthUserWithEmailAndPassword(email,password);
        console.log('response',user);
        resetFormFields();
        await createUserDocumentFromAuth(user, {displayName});
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user,emai already in use');
            }else{
          console.log('user creation encountered an error',error)
            }
        }
};

    const handleChange = (event) => {

     const { name, value } = event.target;
     setFormFields({...formFields, [name]: value })
    
    }
    return(
     <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span> Sign Up with your Email and Password</span>
        <form onSubmit={handleSubmit}>
          
          <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required/>  
        
          <FormInput label="Email" type="email" onChange={handleChange} name="email"  required/>  
         
          <FormInput label="Password" type="password" onChange={handleChange} name="password" required/>
         
          <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" required/>  
          <Button type="submit">Sign Up</Button>  
        </form>
     </div>
    );
}
export default SignUpForm;