import { Grid, TextField } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import Loader from '../../../common/Loader';
import { fetchAllUsers } from '../../api/users.api';
import UserItem from '../atoms/UserItem';

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Fetch all users
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const { data: userList } = await fetchAllUsers();
        if (mounted) {
          setUsers(userList);
        }
      } catch (error) {
        console.log('Error fetching users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      mounted = false;
    };
  }, []);

  // Filter users based on search value
  const filteredUsers = useMemo(() => {
    if (!searchValue) return users;
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [users, searchValue]);

  return (
    <Grid container mt={4} width='100%'>
      <Grid item xs={12} md={10} marginX='auto'>
        <TextField
          fullWidth
          variant='outlined'
          placeholder='Search User...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={10} marginX='auto'>
        <Grid container spacing={2} mt={4}>
          {loading ? (
            <Loader />
          ) : (
            filteredUsers.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <UserItem user={user} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserGrid;
