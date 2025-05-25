import { useQuery } from '@tanstack/react-query';
import {api} from "../axiosClient";

const getStreaks = async () => {
  const { data } = await api.get('/api/habits/streaks/');
  return data;
};

export const useGetStreaks = () => {
   return  useQuery({
        queryKey: ['streaks'],
        queryFn: () => getStreaks(),
        select: (data) => data,
    });
}

