import React from 'react'
import { Link } from 'rebass'

const Card = props =>
  <Link
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      textDecoration: 'none',
    }}
    {...props}
  />

export default Card