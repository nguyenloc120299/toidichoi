import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiComment, BiShare } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { likeReview, unLikeReview } from '../../../redux/actions/reviewAction'

const ReviewAction = ({ item }) => {
    const [isLike, setIsLike] = useState(false)
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const likeAction = (auth, item) => {
        if (isLike) dispatch(unLikeReview(auth, item))
        else
            dispatch(likeReview(auth, item))
        setIsLike(!isLike)
    }
    useEffect(() => {
        if (auth.user) {
            if (item.likes.find(like => like === auth.user._id)) {

                setIsLike(true)
            } else {
                setIsLike(false)
            }
        }
    }, [item?.likes, auth, dispatch])

    return (
        <Box
            display={'flex'}
            justifyContent="space-around"
            padding="4px 0"
            marginTop="10px"
            borderTop="1px solid #eee"
            borderBottom="1px solid #eee"
        >
            <Button
                cursor="pointer"
                width="100%"
                fontSize="16px"
                padding="4px 0"
                outline="none"
                backgroundColor="transparent"
                _hover={{
                    background: 'unset'
                }}
                _active={{
                    border: "unset",
                    background: "transparent",
                    boxShadow: 'unset'
                }}
                _focus={{
                    border: "unset",
                    background: "transparent",
                    boxShadow: 'unset'
                }}
                onClick={() => likeAction(auth, item)}
            >
                {
                    isLike ? <AiFillHeart style={{ marginRight: '5px', color: 'red' }} />
                        : <AiOutlineHeart style={{ marginRight: '5px' }} />
                }
                <span> {item.likes.length} Th??ch</span>
            </Button>
            <Button
                cursor="pointer"
                width="100%"
                fontSize="16px"
                padding="4px 0"
                outline="none"
                backgroundColor="transparent"
                _hover={{
                    background: 'unset'
                }}
                _active={{
                    border: "unset",
                    background: "transparent",
                    boxShadow: 'unset'
                }}
                _focus={{
                    border: "unset",
                    background: "transparent",
                    boxShadow: 'unset'
                }}

            >
                <BiComment style={{
                    marginRight: '5px'
                }} />
                <span>{item.comments.length} B??nh lu???n</span>
            </Button>
            <Button
                cursor="pointer"
                width="100%"
                fontSize="16px"
                padding="4px 0"
                outline="none"
                backgroundColor="transparent"
                _hover={{
                    background: 'unset'
                }}
                _active={{
                    border: "unset",
                    background: "transparent",
                    boxShadow: 'unset'
                }}
                _focus={{
                    border: "unset",
                    background: "transparent",
                    boxShadow: 'unset'
                }}

            >
                <BiShare />
                <span>Chia s???</span>
            </Button>
        </Box>
    )
}

export default ReviewAction