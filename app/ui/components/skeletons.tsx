const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const ImageSkeleton = () => (
  <div className={`${shimmer} h-full w-full rounded-3xl bg-gray-300`} />
);

const TextSkeleton = ({ width }: { width: string }) => (
  <div
    className={`${shimmer} mb-4 h-4 rounded-full bg-gray-300`}
    style={{ width }}
  />
);

export const BreedSkeleton = () => {
  return (
    <>
      <div className="mt-10 flex flex-col xl:flex-row xl:gap-28">
        <div className="relative left-1/2 mt-5 h-[250px] w-[250px] -translate-x-1/2 md:h-[371px] md:w-[371px] xl:left-0 xl:mt-0 xl:translate-x-0">
          <ImageSkeleton />
        </div>
        <div className="mt-6 xl:mt-0 xl:w-1/2">
          <TextSkeleton width="60%" />
          <TextSkeleton width="90%" />
          <TextSkeleton width="80%" />
          <TextSkeleton width="70%" />
          <TextSkeleton width="50%" />
          <TextSkeleton width="40%" />
        </div>
      </div>
      <div>
        <h2 className="mt-5 text-3xl font-semibold text-cioccolato">
          Others photos
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="relative left-1/2 h-[278px] w-[278px] -translate-x-1/2 xl:left-0 xl:translate-x-0"
              >
                <ImageSkeleton />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export const MostResearchedSkeleton = () => {
  return (
    <>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            className="mt-12 flex flex-col md:flex-row md:gap-12"
            key={index}
          >
            <div className="relative left-1/2 h-[200px] w-[200px] -translate-x-1/2 md:left-0 md:-translate-x-0">
              <ImageSkeleton />
            </div>

            <div className="mt-5 md:mt-0 md:w-2/3 xl:w-4/5">
              <TextSkeleton width="60%" />
              <TextSkeleton width="90%" />
            </div>
          </div>
        ))}
    </>
  );
};
