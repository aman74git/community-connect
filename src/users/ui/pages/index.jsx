import { Box, Typography } from '@mui/material';
import React from 'react';
import UserGrid from '../molecules/UserGrid';

const UsersHome = () => {
  return (
    <Box component='header'>
      <Typography variant='h4' fontWeight={800}>
        Community connect
      </Typography>
      <Typography variant='h6' fontWeight={700} color='primary'>
        Explore our users
      </Typography>
      <UserGrid />
    </Box>
  );
};

export default UsersHome;
