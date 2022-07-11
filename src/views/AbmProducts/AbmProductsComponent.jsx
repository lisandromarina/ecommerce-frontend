import React from 'react';
import {
    Form,
    Button,
    Container,
    InputGroup
} from 'react-bootstrap';

function AbmProductsComponent(props) {
    const {
        categoryState,
        product,
        handleOnSelect,
        handleOnSubmit,
        handleOnChangeCategory
    } = props;
    return (
        <Container>
            <h1 className="text-center text-white fw-semibold">Agregar Tu Producto</h1>
            <div className="d-flex justify-content-center">
                <Form className="row w-50">
                    <Form.Group className="mb-3 text-white">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            value={product.name}
                            onChange={handleOnChangeCategory}
                            placeholder="Disabled input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 text-white">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            as="select"
                            value={product.categoryDTO.id}
                            onChange={handleOnSelect}
                        >
                            <option value={0}>select category...</option>
                            {
                                categoryState.map(category => (
                                    <option value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 text-white">
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={product.description}
                            onChange={handleOnChangeCategory}
                            placeholder="Disabled input" />
                    </Form.Group>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <InputGroup.Text>0.00</InputGroup.Text>
                        <Form.Control
                            name="price"
                            type="number"
                            value={product.price}
                            onChange={handleOnChangeCategory}
                            step="0.01"
                            pattern="^-?[0-9]\d*\.?\d*$"
                            aria-label="Dollar amount (with dot and two decimal places)"
                        />
                    </InputGroup>
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <Button onClick={handleOnSubmit} className="d-flex justify-content-center w-50" style={{ marginTop: "30px" }}>
                                Add product
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </Container>
    )
};

export default AbmProductsComponent;