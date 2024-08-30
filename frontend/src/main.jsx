import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './ContextApi/AuthContext.jsx';

const theme = createTheme();

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
     </AuthProvider>
  </StrictMode>,
)
