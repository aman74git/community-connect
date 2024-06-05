import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api/posts.api';

const Header = ({ userId }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        const response = await getUser(userId);
        if (isMounted) setUser(response.data);
      } catch (error) {
        const status = error?.response?.status;
        if (status === 404 && isMounted) {
          navigate('/404');
        }
      }
    };

    fetchUser();
    return () => {
      isMounted = false;
    };
  }, [userId, navigate]);

  return (
    <Typography variant='h6' fontWeight={700} color='primary'>
      {user ? `Posts by ${user.name}` : ''}
    </Typography>
  );
};

export default Header;
