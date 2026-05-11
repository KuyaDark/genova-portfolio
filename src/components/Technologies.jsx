import React from "react";

const Technologies = () => {
  const images = [
    { image: "/technologies/html.png" },
    { image: "/technologies/css.png" },
    { image: "/technologies/js.png" },
    { image: "/technologies/bootstrap.png" },
    { image: "/technologies/react.png" },
    { image: "/technologies/nextjs.png" },
    { image: "/technologies/ts.png" },
    { image: "/technologies/tailwind.png" },
    { image: "/technologies/mongoDB.png" },
    { image: "/technologies/postman.png" },
    { image: "/technologies/vscode.png" },
    { image: "/technologies/figma.png" },
  ];

  return (
    <div className="">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Technologies</h2>

      <div className="flex flex-wrap gap-6 justify-center mt-12">
        {images.map((item, index) => (
          <img key={index} className="w-[40px]" src={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
