import { Link } from "react-router-dom";

function LinkPage({ items }) {
  return (
    <div className="w-full py-4 bg-bg-secondary">
      <p className="flex flex-wrap gap-2 text-xs sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={index} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-text-primary font-medium">{item.label}</span>
              ) : (
                <Link to={item.path} className="text-text-secondary hover:text-red-500 transition-colors">
                  {item.label}
                </Link>
              )}
              {!isLast && <span className="text-gray-400">/</span>}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default LinkPage;