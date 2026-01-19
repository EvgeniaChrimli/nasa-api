import { motion } from "framer-motion";
import React from "react";
interface ObserverProps {
  onIntersect: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  rootMargin: string;
  root: React.RefObject<Element | null>;
}
const Observer = ({
  onIntersect,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  rootMargin,
  root,
}: ObserverProps) => {
  const observerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          onIntersect();
          console.log("observer");
        }
      },
      {
        root: root.current,
        threshold: 0.1,
        rootMargin: rootMargin,
      },
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onIntersect, hasNextPage, rootMargin]);

  if (!hasNextPage && !isFetching && !isFetchingNextPage) return null;

  return (
    <>
      <div ref={observerRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isFetching ? 1 : 0,
            scale: isFetching ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {isFetchingNextPage && <div className="text-white">loading...</div>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: !isFetching && !hasNextPage ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {!hasNextPage && <div>no more data</div>}
        </motion.div>
      </div>
    </>
  );
};

export default Observer;
