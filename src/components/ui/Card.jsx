const Card = ({
  title,
  children,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-xl p-5 border border-gray-100  hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
