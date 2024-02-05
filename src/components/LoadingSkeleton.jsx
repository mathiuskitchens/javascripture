import { Card, Skeleton } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Card className="m-2 h-60 p-4 bg-slate-800">
      <Skeleton className="rounded-lg" />
      <Skeleton width="60%" />
      <Skeleton width="75%" />
      <Skeleton width="40%" />
      <Skeleton />
      <Skeleton width="60%" />
      <Skeleton />
    </Card>
  );
};

export default LoadingSkeleton;
