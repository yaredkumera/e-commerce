import { Link } from "react-router-dom"

function LinkPage({ items }) {
  return (
    <div className="w-full px-16 py-9 bg-bg-secondary">
      <p className="flex gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <span key={index} className="flex gap-2">
              {isLast ? (
                <span className="text-text-primary">{item.label}</span>
              ) : (
                <Link to={item.path} className="text-text-secondary">{item.label}</Link>
              )}
              {!isLast && <span className="text-gray-400">/</span>}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default LinkPage