const Layout = ({ children }) => {
  return (
    <div className="relative">

      <div className="absolute top-0 bottom-0 -left-11 w-6 border-x border-[#e2d9ce94] bg-[repeating-linear-gradient(315deg,#e2d9ce94_0px,#e2d9ce94_1px,transparent_0px,transparent_50%)] bg-size-[8px_8px] dark:border-[rgb(42,38,35,0.72)] dark:bg-[repeating-linear-gradient(315deg,rgb(42,38,35,0.72)_0px,rgb(42,38,35,0.72)_1px,transparent_0px,transparent_50%)]"></div>

    

      <div className="absolute top-0 -right-11 bottom-0 w-6 border-x border-[#e2d9ce94] bg-[repeating-linear-gradient(315deg,#e2d9ce94_0px,#e2d9ce94_1px,transparent_0px,transparent_50%)] bg-size-[8px_8px] dark:border-[rgba(42,38,35,0.72)] dark:bg-[repeating-linear-gradient(315deg,rgb(42,38,35,0.72)_0px,rgb(42,38,35,0.72)_1px,transparent_0px,transparent_50%)]"></div>

 
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
