import { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-screen h-screen bg-secondary text-primary justify-center">
      <div className="container mx-auto px-6">{children}</div>
    </div>
  );
};

export default Template;
