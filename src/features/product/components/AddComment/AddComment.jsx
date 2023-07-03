import React, { useState } from 'react';
import Button from '../../../../components/Button';
import useFormState from '../../../../hook/useFormState';
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, saveComment } from "../../../../redux/actions/productAction";
import { useParams } from "react-router-dom";
import { createAlert } from '../../../../redux/slices/alertSlice';

function AddComment() {
    const userState = useSelector(state => state.user.user);
    const [isLoading, setIsLoading] = useState(false);
    let { idProduct } = useParams();

    const initialState = {
        newComment: '',
    };
    const { formData: newComment, handleChange } = useFormState(initialState);
    const dispatch = useDispatch();

    async function handleOnSaveComment() {
        setIsLoading(true)
        if (newComment.newComment !== "") {
            const comment = {
                user: { id: userState.id },
                product: { id: idProduct },
                description: newComment.newComment
            }
            await dispatch(saveComment(comment))
            await fetchProduct();
        } else {
            dispatch(
                createAlert({
                    message: `El comentario no puede estar vacio`,
                    type: "error"
                })
            );
        }
        setIsLoading(false)
    }

    async function fetchProduct() {
        setIsLoading(true)
        await dispatch(fetchProductById(idProduct));
        setIsLoading(false)
    }

    return (
        <div className='add-comment'>
            <div className='single-comment-wrapper'>
                <div className='image-wrapper'>
                    <img src={`${process.env.PUBLIC_URL}/assets/commentImage.png`} alt='comment-icon' />
                </div>
                <textarea
                    value={newComment.newComment}
                    name='newComment'
                    className="add-input-comment"
                    placeholder="Agregar un comentario..."
                    onChange={handleChange}
                />
            </div>
            <Button
                className="add-button"
                handleOnClick={handleOnSaveComment}
                isLoading={isLoading}
                label='Agregar Comentario'
            />
        </div>
    )
}

export default AddComment
