import React, { useState } from "react";
import FormInput from "../../components/login/form-input/form-input.component";
import { styleButton } from "../authentication/authentication.component";
import { Button } from "@mui/material";
import { deleteDocumentToExistingDocumentInFirebase } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  productName: "",
  productCategory: "",
};

function DeleteFile() {
  const [formFeilds, setFormFeilds] = useState(defaultFormFields);
  const {productName, productCategory} = formFeilds;
  const handleChange = (e) => {
    const { name, value } = e.target;
    return setFormFeilds({ ...formFeilds, [name]: value });
  };
  console.log(formFeilds)
  const resetFormFields = () => {
    setFormFeilds(defaultFormFields);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await deleteDocumentToExistingDocumentInFirebase(productCategory, formFeilds);
      alert('product deleted')
      resetFormFields();
    } catch (error) {
      console.log("file deletion  was not successful", error);
    }
  };
  return (
    <div className="add-product-to-cart">
      <h2>Delete product</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="productName"
          type="text"
          required
          onChange={handleChange}
          name="productName"
          value={productName}
        />

        <FormInput
          label="productCategory"
          type="text"
          required
          onChange={handleChange}
          name="productCategory"
          value={productCategory}
        />

        <div className="buttons-container">
          <Button type="submit" style={styleButton} className="normal">
          delete Product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default DeleteFile;
