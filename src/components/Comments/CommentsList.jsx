import React from 'react'
import { useSelector } from 'react-redux'
import Comment from './Comment'

const CommentsList = () => {
    const {comments} = useSelector(store => store.video)
    return (
        <div>
            {
                comments?.map((comment)=><Comment key={comment.commentId} commentData={comment}/>)
            }
        </div>
    )
}

export default CommentsList