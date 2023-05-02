import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import * as C from './styles';

export const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  let userEmail = location.state.email;

  console.log(userEmail)

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={()=> [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;