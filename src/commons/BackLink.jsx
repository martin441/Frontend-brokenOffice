import { Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { muiBackLink } from '../utils/styleMUI'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const BackLink = ({text}) => {
  return (
    <>
    <Box sx={muiBackLink}>
          <ArrowBackIosIcon />
        <Link underline="hover" href='/admin/offices' sx={{color: 'secondary.dark'}}>
          {text}
        </Link>
      </Box>
    </>
  )
}
