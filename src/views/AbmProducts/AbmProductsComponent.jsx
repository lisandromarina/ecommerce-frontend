import React from 'react';
import {
    Form,
    Button,
    Container,
    InputGroup
} from 'react-bootstrap';
import "./AbmProducts.scss";

function AbmProductsComponent(props) {
    const {
        categoryState,
        product,
        handleOnSelect,
        handleOnSubmit,
        handleOnChangeCategory,
        onFileChangeHandler
    } = props;
    return (
        <Container className="container-abmproducts">
            <h1> Agregar Tu Producto</h1>
            <Form className="abmproducts-form">
                <Form.Label className="abmproducts-label">Nombre
                    <Form.Control
                        className="abmproducts-input"
                        name="name"
                        value={product.name}
                        onChange={handleOnChangeCategory}
                        placeholder="Nombre del producto..."
                    /></Form.Label>
                <Form.Label className="abmproducts-label">Marca
                    <Form.Control
                        className="abmproducts-input"
                        name="marca"
                        onChange={handleOnChangeCategory}
                        placeholder="Marca del producto..."
                    /></Form.Label>
                <Form.Label className="abmproducts-label">Categoría
                    <Form.Select
                        className="abmproducts-input"
                        as="select"
                        value={product.categoryDTO.id}
                        onChange={handleOnSelect}
                    >
                        <option value={0}>Seleccionar categoría...</option>
                        {
                            categoryState.map(category => (
                                <option value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))
                        }
                    </Form.Select>
                </Form.Label>
                <Form.Label className="abmproducts-label">
                    Descripción
                    <Form.Control
                        className="abmproducts-input"
                        as="textarea"
                        name="description"
                        value={product.description}
                        onChange={handleOnChangeCategory}
                        placeholder="Ingresa una descripción..." />
                </Form.Label>

                <Form.Label className="abmproducts-label">
                    Imagen
                    <div className="abm-image-wrapper">
                        {product.file && (
                        <img
                            className="abm-image"
                            src={product.file}
                        />
                        )}
                    </div>
                    <Form.Control
                        className="abmproducts-input"
                        type="file"
                        name="file"
                        /*  */
                        onChange={onFileChangeHandler}
                        placeholder="Disabled input" />
                </Form.Label>
                <Form.Label className="abmproducts-label">
                    Precio
                    <InputGroup className="abmproducts-inputgroup">
                        <InputGroup.Text >$</InputGroup.Text>
                        <Form.Control
                            className='abmproducts-input'
                            name="price"
                            type="number"
                            value={product.price}
                            onChange={handleOnChangeCategory}
                            step="0.01"
                            pattern="^-?[0-9]\d*\.?\d*$"
                            aria-label="Dollar amount (with dot and two decimal places)"
                        />
                    </InputGroup>
                </Form.Label>
                <Button onClick={handleOnSubmit} className="button-add">
                    Añadir producto
                </Button>
            </Form>
        </Container >
    )
};

export default AbmProductsComponent;