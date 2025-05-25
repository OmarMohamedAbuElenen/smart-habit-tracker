import React, { useState } from 'react';
import AuthForm from '../../components/authForm';
import { useLogin } from '../../apis/login';

const Login = () => {
  const { mutate, isSuccess } = useLogin();
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = (username: string, password: string) => {
    mutate(
      { username, password },
      {
        onError: (error: any) => {
          setErrors(error?.response?.data || {});
        },
      }
    );
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
      isSuccess={isSuccess}
      errorMessages={errors}
      alternateRoute={{ label: 'Don’t have an account? Register', to: '/register' }}
      onSuccessNavigateRoute={'/'}
    />
  );
};

export default Login;
