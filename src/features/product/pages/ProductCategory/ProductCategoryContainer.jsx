import React, { useEffect, useState } from 'react';
import { fetchAllProductsByCategory } from "../../../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Spinner} from "react-bootstrap";
import ListProducts from "../../../../components/ListProducts"

function ProductListContainer() {
    let { categoryName, idCategory } = useParams();
    const allProducts = useSelector(state => state.products.allProducts);
    const [isLoading, setIsLoading] = useState(true)


    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleOnClick(productId) {
        navigate(`/product/${productId}`)
    }

    async function fetchProduct() {
        setIsLoading(true)
        await dispatch(fetchAllProductsByCategory(idCategory))
        setIsLoading(false)
    }

    useEffect(() => {
        fetchProduct();
    }, [idCategory, categoryName])

    if(isLoading){
        return(
            <Container className='container-loading'>
                <Spinner animation="border" variant="warning"/>
            </Container>
        ) 
    }

    return (
        <ListProducts
            itemsQuantity={32}
            title={categoryName}
            arrayProducts={allProducts}
            handleOnClick={handleOnClick}
        />
    )
};

export default ProductListContainer;