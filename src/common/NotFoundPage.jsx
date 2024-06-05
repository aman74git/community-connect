import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      textAlign='center'
      p={3}
    >
      <Typography variant='h2' gutterBottom>
        404
      </Typography>
      <Typography variant='h5' gutterBottom>
        Content Not Found
      </Typography>
      <Typography variant='body1' gutterBottom>
        Sorry, the content you are looking for does not exist.
      </Typography>
      <Button color='primary' component={Link} to='/'>
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
