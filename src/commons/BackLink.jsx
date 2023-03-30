//import { Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { muiBackLink } from '../utils/styleMUI'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from 'react-router-dom';


export const BackLink = ({text, href}) => {
  return (
    <>
    <Box sx={muiBackLink}>
          <ArrowBackIosIcon />
        <Link underline="hover" to={href} style={{color: 'black', textDecoration:'none'}}>
          {text}
        </Link>
      </Box>
    </>
  )
}
