import './App.css'
import { Container, CssBaseline, Typography } from '@mui/material'
import { Header } from './Header'

function App() {

  return (
    <>
    <CssBaseline/>
    <Header/>
    <Container>
      <Typography variant='h4' gutterBottom>
        Featured Products
      </Typography>
    </Container>
    </>
    )
}

export default App
