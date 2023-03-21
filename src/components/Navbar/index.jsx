import { AppBar, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Logo } from './Logo'

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }} color='secondary'>
    <Container maxWidth="xl">
      <Toolbar
        disableGutters
        sx={{
          width: "100%",
          display: "inline-flex",
          justifyContent: "space-between",
        }}
      >
        <Logo/>
      </Toolbar>
    </Container>
  </AppBar>
  )
}
