
import { Box, Container, Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: 'background.paper' }}>
    <Container maxWidth="sm">
      <Typography variant="body1">E-Commerce Site</Typography>
      <Typography variant="body2" color="text.secondary">
        © 2024 E-Commerce Site
      </Typography>
    </Container>
  </Box>
  )
}

export default Footer;