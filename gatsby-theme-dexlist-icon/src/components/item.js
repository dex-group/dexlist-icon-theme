import React from 'react'
import { Card } from 'rebass'

const Item = props =>
  <Card
    sx={{
      p: 4,
      pb: 5,
      borderRadius: 16,
      height: '100%',
      position: 'relative',
      '&:hover': {
        backgroundColor: 'rgba(70, 79, 115, 0.4);',
        transition: 'all .4s ease-in',
        '& > h3': {
          visibility: 'visible',
          transition: 'all .4s ease-in',
        }
      }
    }}
    {...props}
  />

export default Item