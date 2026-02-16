import Container from "../layouts/Container";

const BorderContainer = ({ children, className }) => {
  return (
    <Container>
      <div
        className={`inset-shadow relative flex  items-center justify-center border border-neutral-300/70 dark:border-neutral-800/80 border-dashed bg-neutral-50/80 dark:bg-neutral-900/25 ${className}`}
      >
        <div className="absolute -top-1.5 -left-1.5 h-3 w-3 bg-neutral-200/80 dark:bg-neutral-700/70"></div>
        <div className="absolute -top-1.5 -right-1.5 h-3 w-3 bg-neutral-200/80 dark:bg-neutral-700/70"></div>
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-neutral-200/80 dark:bg-neutral-700/70"></div>
        <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-neutral-200/80 dark:bg-neutral-700/70"></div>
        {children}
      </div>
    </Container>
  );
};

export default BorderContainer;
