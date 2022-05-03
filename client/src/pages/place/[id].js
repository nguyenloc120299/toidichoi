import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlaceSingle } from '../../redux/actions/placeAction'
import DetailTop from './components/DetailTop'
import ImagesPlace from './components/ImagesPlace'
import DetailInfo from './components/DetailInfo'
import UntitiesPlaceSingle from './components/UntitiesPlaceSingle'
import ImageSwipper from './components/ImageSwipper'
import RatePlace from './components/RatePlace'
import ReviewPlace from './components/ReviewPlace'
const Single = () => {
  const { id } = useParams()
  const [place, setPlace] = useState([])
  const { detail_place } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlaceSingle(id))
  }, [dispatch, id])
  return (
    <Container maxW={'1240px'}>

      <Box boxShadow='md' p='6' rounded='md' bg='white'>
        <DetailTop name={detail_place.name} intro={detail_place.intro} address={detail_place.address} />
        <ImagesPlace images={detail_place.images} />
        <ImageSwipper images={detail_place.images} />
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10} my={3}>
        <DetailInfo info={detail_place} />
        <Box boxShadow='md' rounded={'md'} p='6'>
          <Heading as={'h3'} size='md' mb={5}>Địa điểm cụ thể</Heading>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8264520999282!2d106.67570601474937!3d10.824589692288875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fd151d7171%3A0xe10718bde853c841!2zcDMsIDQyIE5ndXnhu4VuIFbEg24gQ8O0bmcsIFBoxrDhu51uZyAxNSwgR8OyIFbhuqVwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1651471479787!5m2!1svi!2s" width={'100%'} height={"200px"}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
      </SimpleGrid>
      <UntitiesPlaceSingle utities={detail_place.utities} />
      <SimpleGrid columns={[1, 2]} spacing={10} my={3}>
        <ReviewPlace />
        <RatePlace />
      </SimpleGrid>
    </Container >
  )
}

export default Single