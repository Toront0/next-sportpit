import React from "react";

const ComparingItemsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="min-w-[50%]  px-1 lg:px-3 animate-pulse max-w-[50%]  lg:min-w-[20%] lg:max-w-[20%] h-full text-center flex flex-col items-center"
        >
          <div className="h-[60px] bg-opac-b-1 dark:bg-opac-w-1 w-full rounded"></div>
          <div className="h-[250px]  lg:min-h-[350px] bg-opac-b-1 dark:bg-opac-w-1 my-4 w-full rounded"></div>
          <div className="h-2/3 bg-opac-b-1 dark:bg-opac-w-1 w-full rounded"></div>
        </div>
      ))}
    </>
  );
};

export default ComparingItemsSkeleton;
