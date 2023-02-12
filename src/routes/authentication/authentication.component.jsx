

import "./authentication.styles.scss";
import Footer from "../../components/footer/footer.component";
import SignInForm from "../../components/login/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/login/sign-up-form/sign-up-form.component";
export const styleButton = {backgroundColor: "#088178", color: "white"}
const Authentication = () => {
  
  return (
    <div className="authentication-container">
      <SignInForm styleButton={styleButton}/>
      <SignUpForm styleButton={styleButton}/>
    </div>
  );
};

export default Authentication;
