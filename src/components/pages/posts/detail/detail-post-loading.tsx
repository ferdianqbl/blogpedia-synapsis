import { Skeleton } from "@/components/ui/skeleton";

const DetailPostLoading = () => {
  return (
    <>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-5 w-1/4 rounded-md" />
            <Skeleton className="h-5 w-1/2 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-5 w-1/4 rounded-md" />
            <Skeleton className="h-5 w-1/2 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-5 w-1/4 rounded-md" />
            <Skeleton className="h-5 w-1/2 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </>
  );
};

export default DetailPostLoading;
