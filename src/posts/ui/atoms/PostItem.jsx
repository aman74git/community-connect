import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const PostItem = ({ post }) => {
  console.log('post item rerendered');
  return (
    <Card>
      <CardContent>
        <Typography
          variant='h6'
          fontWeight={700}
          color='primary.dark'
          gutterBottom
        >
          {post.title}
        </Typography>

        <Typography variant='body2' gutterBottom>
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

// It is memoized to prevent unnecessary re-renders
export default React.memo(PostItem);
