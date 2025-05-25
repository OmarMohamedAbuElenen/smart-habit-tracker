import {FC } from 'react';
import { Navigate } from 'react-router';

const withAuth = (Component: FC): FC => {
  const AuthenticatedComponent: FC = (props) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
