import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReviewAction from './ReviewAction'
import FormNewComment from './FormNewComment'
import ReviewBody from './ReviewBody'
import ReviewHeader from './ReviewHeader'
import ListReviewReply from './ListReviewReply'

const ReviewItem = ({ reviewItem }) => {

    return (
        <Box>
            <Box paddingBottom={'4px'}>
                <ReviewHeader item={reviewItem} />
                <ReviewBody item={reviewItem} />
                <ReviewAction
                    item={reviewItem}
                />
                <FormNewComment
                    item={reviewItem}
                />
                <ListReviewReply item={reviewItem} />
            </Box>
        </Box>
    )
}

export default ReviewItem