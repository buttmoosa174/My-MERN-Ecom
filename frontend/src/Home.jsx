import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const Home = () => {
  const categories = [
    { title: 'Electronics', image: 'electronics.jpg' },
    { title: 'Fashion', image: 'fashion.jpg' },
    { title: 'Home Appliances', image: 'home-appliances.jpg' },
    // Add more categories as needed
  ];

  const featuredProducts = [
    { title: 'Smartphone', image: 'smartphone.jpg', price: '$299' },
    { title: 'Laptop', image: 'laptop.jpg', price: '$999' },
    { title: 'Headphones', image: 'headphones.jpg', price: '$199' },
    // Add more products as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Hero Banner */}
      <Box sx={{ 
        backgroundImage: 'url(https://example.com/your-new-hero-image.jpg)', // Update with your new image URL
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: { xs: 300, sm: 400 }, // Responsive height
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#000', // Change to white for better contrast
        textAlign: 'center',
        px: 2,
        borderRadius: 2
      }}>
        <Typography variant="h2" component="div" gutterBottom>
          Welcome to Bonoko
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Box>

      {/* Categories Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>Shop by Category</Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.title}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent>
                  <Typography variant="h6">{category.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>Featured Products</Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.title}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body1">{product.price}</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
