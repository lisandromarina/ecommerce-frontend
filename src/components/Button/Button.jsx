import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'

function ButtonCustom({ label, isLoading, handleOnClick, className }) {
    return (
        <Button
            className={className}
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleOnClick : null}
        >
            {isLoading ? <Spinner animation="border" variant="warning" style={{width:'1rem', height:'1rem'}} /> :  label }
        </Button>
    )
}

export default ButtonCustom
