import React, { useState, useEffect, FC } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
  Link
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';

type AuthFormProps = {
  title: string;
  onSubmit: (username: string, password: string) => void;
  isSuccess: boolean;
  onSuccessNavigateRoute: string;
  errorMessages?: Record<string, string[]>;
  alternateRoute?: {
    label: string;
    to: string;
  };
};

const AuthForm: FC<AuthFormProps> = ({
  title,
  onSubmit,
  isSuccess,
  errorMessages,
  alternateRoute,
  onSuccessNavigateRoute,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(onSuccessNavigateRoute);
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    if (!username || !password) {
      setLocalError('Please fill out both fields.');
      return;
    }
    setLocalError('');
    onSubmit(username, password);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, margin: 'auto', mt: 8, p: 4 }}>
      <Typography variant="h5" gutterBottom>{title}</Typography>

      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={!!errorMessages?.username}
        helperText={errorMessages?.username?.[0]}
      />

      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errorMessages?.password}
        helperText={errorMessages?.password?.[0]}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {(localError || errorMessages?.non_field_errors) && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {localError || errorMessages?.non_field_errors?.[0]}
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
          {title}
      </Button>

      {alternateRoute && (
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            {alternateRoute.label}{' '}
            <Link href={alternateRoute.to} underline="hover">
              here
            </Link>
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default AuthForm;
