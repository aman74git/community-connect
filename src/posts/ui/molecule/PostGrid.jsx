import { Grid, TextField } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../common/Loader';
import { getPosts } from '../../api/posts.api';
import PostItem from '../atoms/PostItem';

const PostGrid = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Fetch all posts
    const fetchPosts = async (userId) => {
      setLoading(true);
      try {
        const { data: postList } = await getPosts(userId);
        if (mounted) {
          console.log(postList);
          setPosts(postList);
        }
      } catch (error) {
        const status = error?.response?.status;
        if (status === 404 && mounted) {
          navigate('/404');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts(userId);

    return () => {
      mounted = false;
    };
  }, [userId, navigate]);

  // Filter posts based on search value
  const filteredPosts = useMemo(() => {
    if (!searchValue) return posts;
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [posts, searchValue]);

  return (
    <Grid container mt={4} width='100%'>
      <Grid item xs={12} md={10} marginX='auto'>
        <TextField
          fullWidth
          variant='outlined'
          placeholder='Search Post...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={10} marginX='auto'>
        <Grid container spacing={2} mt={4}>
          {loading ? (
            <Loader />
          ) : (
            filteredPosts.map((post) => (
              <Grid item xs={12} key={post.id}>
                <PostItem post={post} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PostGrid;
