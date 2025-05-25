import React, { useState } from 'react';
import AuthForm from '../../components/authForm';
import { useRegisterUser } from '../../apis/register';

const Register = () => {
  const { mutate, isSuccess } = useRegisterUser();
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
      title="Register"
      onSubmit={handleSubmit}
      isSuccess={isSuccess}
      errorMessages={errors}
      alternateRoute={{ label: 'Already have an account? Login', to: '/login' }}
      onSuccessNavigateRoute={'/login'}
    />
  );
};

export default Register;
