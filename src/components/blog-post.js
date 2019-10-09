import React from "react"

const BlogPost = ({ data }) => (
  <div className="my-4 p-4 border border-gray-900 rounded shadow bg-white">
    <header className="border-b-2 border-dotted border-gray-900 relative">
      <h1 className="text-4xl mb-1">{data.heading}</h1>
      {data.leadParagraph && (
        <p className="mb-1 text-xl">{data.leadParagraph.leadParagraph}</p>
      )}
      {data.author && (
        <p className="mb-1 text-gray-700 absolute top-0 right-0">
          By {data.author}
        </p>
      )}
    </header>
    <div
      className="mt-4 leading-normal content"
      dangerouslySetInnerHTML={{ __html: data.body.childMarkdownRemark.html }}
    />
  </div>
)

export default BlogPost
