const StripedContainer = () => {
  return (
    <div className="relative mx-auto h-full max-w-3xl">
      {/* Left stripe */}
      <div className="`bg-size-[8px_8px] absolute top-0 bottom-0 -left-10 w-4 border-l border-[#e2d9ce] bg-[repeating-linear-gradient(315deg,#e2d9ce_0_1px,transparent_1px_50%)]"></div>

      {/* Right stripe */}
      <div className="`bg-size-[8px_8px] absolute top-0 -right-10 bottom-0 w-4 border-r border-[#e2d9ce] bg-[repeating-linear-gradient(315deg,#e2d9ce_0_1px,transparent_1px_50%)]"></div>
    </div>
  );
};

export default StripedContainer;
