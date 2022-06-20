import React from 'react'
import { FiFileText } from 'react-icons/fi'
import { FiBarChart } from 'react-icons/fi'
import { FiTrendingUp } from 'react-icons/fi'

import { BackgroundOn, BackgroundOff, TextOff, TextOn } from './styles'

export default function Card({ click, name, icon }) {
  if (click) {
    return (
      <BackgroundOn>
        {icon === 'chart' && <FiBarChart size={16} color={'#FF6C22'} />}
        {icon === 'document' && <FiFileText size={16} color={'#FF6C22'} />}
        {icon === 'trend' && <FiTrendingUp size={16} color={'#FF6C22'} />}

        <TextOn> {name} </TextOn>
      </BackgroundOn>
    )
  }

  return (
    <BackgroundOff>
      {icon === 'chart' && <FiBarChart size={16} color={'#fff'} />}
      {icon === 'document' && <FiFileText size={16} color={'#fff'} />}
      {icon === 'trend' && <FiTrendingUp size={16} color={'#fff'} />}
      <TextOff> {name} </TextOff>
    </BackgroundOff>
  )
}
