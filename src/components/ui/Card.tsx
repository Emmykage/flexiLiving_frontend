import type { ReactNode } from "react";

const Card = ({
  title,
  children,
  onClick,
}: {
  title: string;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-xl p-5 border border-gray-100"
    >
      {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
