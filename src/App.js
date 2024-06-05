import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './common/NotFoundPage';
import Posts from './posts/ui/pages';
import UsersHome from './users/ui/pages';

function App() {
  return (
    <Container
      maxWidth='lg'
      sx={{
        padding: {
          xs: 2, // theme.spacing(2) equivalent, for extra-small screens
          sm: 3, // theme.spacing(3) equivalent, for small screens
          md: 4, // theme.spacing(4) equivalent, for medium screens
        },
      }}
    >
      <Routes>
        <Route path='/' element={<UsersHome />} />
        <Route path='/posts/:userId' element={<Posts />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
