import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/login/form-input/form-input.component";
import { ImageContext } from "../../contexts/image.context";
import UploadWidget from "../../utils/cloudinary/UploadWidget";
import { addDocumentToExistingDocumentInFirebase } from "../../utils/firebase/firebase.utils";
import { styleButton } from "../authentication/authentication.component";

const addProductHandler = {
  productName: "",
  productImage: "",
  productPrice: "",
  groupName: "",
};

function Addfile() {
  const [addProduct, setAddProduct] = useState(addProductHandler);
  const { productName, productImage, productPrice, groupName } = addProduct;
  const {imageUrl} = useContext(ImageContext)
  const resetFormFields = () => {
    setAddProduct(addProductHandler);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddProduct((prev) => ({ ...prev, [name]: value }));
    console.log(addProduct);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setAddProduct((prev) => ({...prev, productImage: imageUrl}))
      console.log(addProduct, 'This means it actualy worked')
      await addDocumentToExistingDocumentInFirebase(groupName, addProduct);
      resetFormFields();
    } catch (error) {
      console.log("file creation in failed", error);
    }
  };
  // using the use effect hook to set the img url when a response is gotten from cloudinary
  useEffect(() => {
    setAddProduct((prev) => ({...prev, productImage: imageUrl}))
  },[imageUrl])

  return (
    <div className="add-product-to-cart">
      <h2>Add new product</h2>
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
          label="productImage"
          type="text"
          required
          onChange={handleChange}

          name="productImage"
          value={productImage}
        />
        <UploadWidget/>


        <FormInput
          label="productPrice"
          type="text"
          required
          onChange={handleChange}
          name="productPrice"
          value={productPrice}
        />

        <FormInput
          label="groupName"
          type="text"
          required
          onChange={handleChange}
          name="groupName"
          value={groupName}
        />

        <div className="buttons-container">
          <Button type="submit" style={styleButton} className="normal">
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Addfile;
