import { useQuery } from '@tanstack/react-query';
import {api} from "../axiosClient";

const getHabits = async (params: { tag?: string }) => {
  const { data } = await api.get('/api/habits/', { params });
  return data;
};

export const useGetHabits = (tag?: string) => {
   return  useQuery({
        queryKey: ['habits', tag],
        queryFn: () => getHabits({ tag: tag === 'all' ? undefined : tag }),
        select: (data) => data,
    });
}

