import React, { useState, useEffect } from 'react';
import AbmProductsComponent from "./AbmProductsComponent";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../redux/actions/productAction";

function AbmProductsContainer() {
  const [product, setProduct] = useState({
    userId: -1,
    name: "",
    price: 0,
    file: undefined,
    description: "",
    categoryDTO: { id: 0 }
  });
  const categoryState = useSelector(state => state.category.allCategory);
  const userIdState = useSelector(state => state.user.user.id);
  const dispatch = useDispatch();

  const handleOnChangeCategory = (e) => {
    const { name, value } = e.target;
    let valueToSave = value;
    if (name === "price") {
      valueToSave = parseFloat(value)
    }
    setProduct((prevState) => ({ ...prevState, [name]: valueToSave }));
  };


  function handleOnSelect(event) {
    const { value } = event.target;
    setProduct({ ...product, categoryDTO: { id: parseInt(value) } });
  }

  function onFileChangeHandler(event){
    console.log(event.target.files[0])
    setProduct({ ...product, file: event.target.files[0] });;
  }

  function handleOnSubmit() {
    let formData = new FormData()
    formData.append('userId', userIdState)
    formData.append('name', product.name)
    formData.append('price', product.price)
    formData.append('description', product.description)
    formData.append('file', product.file)
    formData.append('categoryId', product.categoryDTO.id)
    dispatch(saveProduct(formData));
  }

  return (
    <AbmProductsComponent
      handleOnChangeCategory={handleOnChangeCategory}
      onFileChangeHandler={onFileChangeHandler}
      categoryState={categoryState}
      handleOnSelect={handleOnSelect}
      handleOnSubmit={handleOnSubmit}
      product={product}
    />
  )
};

export default AbmProductsContainer;