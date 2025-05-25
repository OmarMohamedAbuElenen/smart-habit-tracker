import {useMutation} from '@tanstack/react-query';
import {api} from "../axiosClient";

const registerUser = async (payload: { username: string; password: string }) => {
  const { data } = await api.post('/api/register/',payload);
  return data;
};
export const useRegisterUser = () =>
    useMutation({
    mutationFn: registerUser,
    onError: (error: any) => {
      console.error('registration failed:', error);
    },
  });

