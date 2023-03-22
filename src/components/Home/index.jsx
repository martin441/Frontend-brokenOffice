import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const Home = () => {
  return (
    <Box className='header-container home-text'> 
    <Box sx={{mt:4}}>
    <Typography  variant='h3' >Hey Glober!</Typography>
    <Typography  variant='h6' >Looks like you are not signed in...</Typography>
    <button className='btn-login '  >Sign In</button>
    </Box>
    </Box>
  )
}
