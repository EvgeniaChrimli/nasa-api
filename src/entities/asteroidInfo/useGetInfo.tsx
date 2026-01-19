import { useQuery } from "@tanstack/react-query";
import { nasaClient } from "../../shared/api/client";
import type { NeoBrowseCurrent } from "../../shared/api/scema";

export const useGetInfo = (id: string) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  return useQuery<NeoBrowseCurrent>({
    queryKey: ["asteroidInfo", id],
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    enabled: !!id,
    queryFn: async () => {
      const res = await nasaClient.GET("/neo/rest/v1/neo/{id}", {
        params: {
          path: { id },
          query: {
            api_key: apiKey,
          },
        },
      });

      if (res.error) {
        throw new Error(res.error.message);
      }

      return res.data;
    },
  });
};
