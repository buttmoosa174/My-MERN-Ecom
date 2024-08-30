import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { ShoppingCart } from '@mui/icons-material';

export const Header = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    E-Commerce Site
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit" startIcon={<ShoppingCart />}>Cart</Button>
            </Toolbar>
        </AppBar>
    )
}