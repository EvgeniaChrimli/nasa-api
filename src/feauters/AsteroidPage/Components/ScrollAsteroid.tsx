import React from "react";
import useGetList from "../../../entities/asteroidList/useGetList";
import AsteroidList from "./AsteroidList";
import Observer from "./Observer";
import styles from "../styles/scroll.module.css";

const ScrollAsteroid = () => {
  const { data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetList();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const list = data?.pages.flatMap((el) => el.near_earth_objects) ?? [];
  const handleLoadNextPage = React.useCallback(() => {
    if (hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, isFetchingNextPage, fetchNextPage]);
  return (
    <div ref={scrollRef} className={styles.scrollContainer}>
      <AsteroidList list={list} />
      <Observer
        root={scrollRef}
        onIntersect={handleLoadNextPage}
        isFetching={isFetching}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        rootMargin="200px"
      />
    </div>
  );
};

export default ScrollAsteroid;
