import React from 'react'

function Comment({ comment }) {
    return (
        <div className='comment'>
            <div className='image-wrapper'>
                <img src={`${process.env.PUBLIC_URL}/assets/commentImage.png`} alt='comment-icon' />
            </div>
            <div className='comment-details'>
                <p>{comment.description}</p>
            </div>
        </div>
    )
}

export default Comment
