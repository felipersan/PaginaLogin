import React from 'react'
import image from '../../assets/postImage.png'
import { FiCalendar } from 'react-icons/fi'

import {
  Background,
  Image,
  AreaTime,
  Time,
  AreaDescription,
  Title,
  Description
} from './style'

export default function Post() {
  return (
    <Background>
      <Image src={image}></Image>
      <AreaTime>
        <FiCalendar size={14} color={'#fff'} />
        <Time>2min atrás</Time>
      </AreaTime>
      <AreaDescription>
        <Title>Lorem Ipsum is simply dummy text of the printing</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Description>
      </AreaDescription>
    </Background>
  )
}
