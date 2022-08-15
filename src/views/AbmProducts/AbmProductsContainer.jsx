import React, { useState, useEffect } from 'react';
import AbmProductsComponent from "./AbmProductsComponent";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../redux/actions/productAction";

function AbmProductsContainer() {
  const [product, setProduct] = useState({
    userId: -1,
    name: "",
    price: 0,
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

  function handleOnSubmit() {
    let productWithUserId = { ... product, userId: userIdState}
    dispatch(saveProduct(productWithUserId));
  }

  return (
    <AbmProductsComponent
      handleOnChangeCategory={handleOnChangeCategory}
      categoryState={categoryState}
      handleOnSelect={handleOnSelect}
      handleOnSubmit={handleOnSubmit}
      product={product}
    />
  )
};

export default AbmProductsContainer;