import React from 'react'
import { Spinner } from 'react-bootstrap'

function SpinnerContainer() {
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <Spinner
                animation="grow"
                variant="warning"
            />
        </div>
    )
}

export default SpinnerContainer
