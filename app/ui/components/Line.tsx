const Line = ({ cssPosition }: { cssPosition: string }) => (
  <div
    className={`h-1 w-[50px] rounded-full bg-cioccolato md:w-[60px] ${cssPosition}`}
  ></div>
);

export default Line;
