import { Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../atoms/Header';
import PostGrid from '../molecule/PostGrid';

const Posts = () => {
  const { userId } = useParams();

  return (
    <>
      <Typography variant='h4' fontWeight={800}>
        Community connect
      </Typography>
      <Header userId={userId} />
      <PostGrid userId={userId} />
    </>
  );
};

export default Posts;
