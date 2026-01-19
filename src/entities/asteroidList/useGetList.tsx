import { useInfiniteQuery } from "@tanstack/react-query";
import { nasaClient } from "../../shared/api/client";

const useGetList = () => {
  const key = import.meta.env.VITE_API_KEY;
  const query = useInfiniteQuery({
    queryKey: ["asteroidList"],
    staleTime: 1000 * 60 * 10,
    gcTime: 2000 * 60 * 10,
    queryFn: async ({ pageParam }: { pageParam?: number | undefined }) => {
      const res = await nasaClient.GET("/neo/rest/v1/neo/browse", {
        params: {
          query: {
            api_key: key,
            page: pageParam,
            size: 20,
          },
        },
      });
      if (res.error) {
        throw new Error(res.error.message);
      }
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page.number;
      const totalPages = lastPage.page.total_pages;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
  });
  return query;
};

export default useGetList;
