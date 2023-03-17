import { TColProps } from "./types";

const Col = ({ label, children }: TColProps) => {
  return (
    <div className="flex flex-col items-start justify-start md:w-auto w-full">
      {label && <p className="text-sm font-light">{label}</p>}
      <div className="flex items-center justify-start gap-2">{children}</div>
    </div>
  );
};

export default Col;
