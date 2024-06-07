function ImageContent({ img, imgDesc, title, desc, orderReverse = false }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-0 my-2 md:my-4">
      <div
        className={`w-full h-full order-1 ${
          orderReverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <img src={img} alt={imgDesc} className="img-contain" />
      </div>
      <div
        className={`w-full h-full flex flex-col justify-center order-2 ${
          orderReverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <h3 className="font-bold text-xl md:text-2xl mb-2">{title}:</h3>
        <p className="text-lg md:text-xl text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default ImageContent;
