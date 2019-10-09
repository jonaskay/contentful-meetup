import React from "react"

const Product = ({ data }) => (
  <div className="my-4 p-4 border border-gray-900 rounded shadow bg-white">
    <header className="border-b-2 border-dotted border-gray-900 relative">
      <h1 className="text-4xl mb-1">{data.name}</h1>
      <p className="mb-1 text-xl">Price {data.price.toFixed(2)}€</p>
    </header>
    <div
      className="mt-4 leading-normal content"
      dangerouslySetInnerHTML={{
        __html: data.description.childMarkdownRemark.html,
      }}
    />
  </div>
)

export default Product
