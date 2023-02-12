import { useState } from "react";
import FormInput from "../form-input/form-input.component";
// import Button from "../../button/button.component";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

import { useNavigate } from 'react-router-dom';

import Button from "@mui/material/Button";


const defaultFormFields = {
  email: "",
  password: "",
};



const SignInForm = ({ styleButton }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const res = await signInWithGooglePopup();
    resetFormFields();
    console.log(res.user.email, "this is the google res")
    if(res.user.email === "kinyichukwuose@gmail.com"){
      // checking if user is the admin 
      navigate('/xthjufrhdgcwi7gqchgyuwcfyhigy')
    }else{
      // routing other users to shop page
      navigate('/shop')
    }
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate('/shop')
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" style={styleButton} className="normal">
            Sign In
          </Button>
          <Button
            type="button"
            style={styleButton}
            className="normal"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
