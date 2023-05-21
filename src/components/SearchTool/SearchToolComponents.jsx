import React from 'react';
import {
    ListGroup,
    Overlay,
    Form,
} from 'react-bootstrap';
import './SearchToolStyle.scss';
import { RiSearchLine } from 'react-icons/ri';

function SearchToolComponents(props) {
    const {
        className = '',
        isFocused,
        inputRef,
        handleFocus,
        options,
        handleOnChange
    } = props;

    return (
        <div className={`search-tool ${className}` /* + className ? className : '' */}>
            <Form style={{ position: 'relative' }}>
                <Form.Control
                    type="text"
                    ref={inputRef}
                    onFocus={handleFocus}
                    onChange={(event) => handleOnChange(event.target.value)}
                    placeholder="Buscar..."

                />
                <div>
                    <RiSearchLine className="search-icon" />
                </div>
            </Form>
            {isFocused && (
                <>
                    <Overlay
                        show={isFocused}
                        target={inputRef.current}
                        placement="bottom-start"
                    >
                        {(props) => (
                            <div
                                {...props}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    zIndex: 1,
                                    /* pointerEvents: 'none', */ //IF THIS OPTION IS ENABLED I CAN TOUCH THE CONTENT BEHIND OVERLAY
                                }}
                            />
                        )}
                    </Overlay>
                    <ListGroup className='list-group-search-tool' >
                        {isFocused && options?.map((option, index) => (
                            <>
                                <ListGroup.Item style={{ cursor: 'pointer' }} key={index}>{option.name}</ListGroup.Item>
                            </>
                        ))}
                    </ListGroup>
                </>
            )}
        </div>
    )
}

export default SearchToolComponents
