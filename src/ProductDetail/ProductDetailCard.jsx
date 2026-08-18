import { useState, useEffect } from "react"

function ProductDetailCard({ data }) {
  const [url, setUrl] = useState(data[0]?.image || "")

  useEffect(() => {
    setUrl(data[0]?.image || "")
  }, [data])

  return (
    <div className="grid md:grid-cols-2 gap-7">
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => setUrl(item.image)}
              className={`p-4 rounded bg-[#F5F5F5] cursor-pointer transition-all ${
                url === item.image ? "ring-2 ring-[#DB4444]" : "hover:ring-1 hover:ring-gray-300"
              }`}
            >
              <img src={item.image} className="object-contain" alt="" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <img src={url} className="object-contain" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard