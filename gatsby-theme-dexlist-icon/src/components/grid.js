import React from 'react'
import { Grid } from 'theme-ui'

const Icons = props =>
  <Grid
    gap={0}
    columns={[ 2,'repeat(auto-fit, minmax(192px, 1fr))' ]}
    {...props}
  />

export default Icons