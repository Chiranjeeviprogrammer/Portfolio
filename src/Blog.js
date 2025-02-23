import React from "react";

// Blog Data with Your Context
const blogPosts = [
  {
    id: 1,
    image: "https://source.unsplash.com/400x300/?mobile,development",
    date: "15 January, 2025",
    title: "Building Cross-Platform Apps with React Native",
    excerpt: "Exploring the power of React Native for seamless iOS and Android development.",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/400x300/?api,code",
    date: "20 January, 2025",
    title: "Mastering API Integration in Mobile Apps",
    excerpt: "Tips and tricks for integrating REST and GraphQL APIs effectively.",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/400x300/?ui,design",
    date: "25 January, 2025",
    title: "UI/UX Best Practices for Mobile Developers",
    excerpt: "How to design intuitive interfaces that enhance user experience.",
  },
];

export default function Blog() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h2 className="text-lg text-gray-500 italic">Blog</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Insights from Chiranjeevi
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Sharing my journey and expertise as a freelance mobile developer.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 italic">{post.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors duration-200">
                {post.title}
              </h3>
              <p className="mt-2 text-gray-600 text-base line-clamp-2">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors flex items-center gap-2">
          Load More
          <span role="img" aria-label="arrow">↗️</span>
        </button>
      </div>
    </section>
  );
}