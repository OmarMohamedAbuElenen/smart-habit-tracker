import {useMutation} from '@tanstack/react-query';
import {api} from "../axiosClient";

const loginUser = async (credentials: { username: string; password: string }) => {
  const { data } = await api.post('/api/login/',credentials);
  return data;
};
export const useLogin = () =>
    useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem('token',data.access)
      localStorage.setItem('refreshToken',data.refresh);
    },
    onError: (error: any) => {
      console.error('Login failed:', error);
    },
  });

