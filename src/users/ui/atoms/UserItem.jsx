import { EmailOutlined, LanguageOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  console.log('user item rerendered');
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' fontWeight={700}>
          {user.name}
        </Typography>

        <Typography variant='body2' color='primary.dark' gutterBottom>
          @{user.username}
        </Typography>
        <Typography
          variant='body2'
          display='flex'
          alignItems='center'
          gap={0.5}
          mt={2}
          component='a'
          href={`https://${user.website}`}
          target='_blank'
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <LanguageOutlined
            fontSize='inherit'
            sx={{ color: 'text.secondary' }}
          />{' '}
          {user.website}
        </Typography>
        <Typography
          variant='body2'
          display='flex'
          alignItems='center'
          gap={0.5}
        >
          <EmailOutlined fontSize='inherit' sx={{ color: 'text.secondary' }} />{' '}
          {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Box px={1} width='100%'>
          <Link to={`/posts/${user.id}`}>
            <Button size='small' disableElevation fullWidth>
              Visit Posts
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
};

// It is memoized to prevent unnecessary re-renders
export default React.memo(UserItem);
