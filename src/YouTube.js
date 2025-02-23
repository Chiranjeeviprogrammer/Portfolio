import React from "react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Never Gonna Give You Up",
    description: "Official Rick Astley music video."
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "SpaceX Falcon Heavy Launch",
    description: "Watch the incredible Falcon Heavy maiden flight."
  }
];

const YouTube = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">YouTube Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="space-y-4 bg-white shadow-lg rounded-lg p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{video.title}</h2>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTube;
