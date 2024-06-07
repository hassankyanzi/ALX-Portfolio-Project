function Feature({ svg, title }) {
  return (
    <div className="w-full p-2 md:p-4 min-h-56">
      <div className="bg-black inline-block rounded-xl p-2 md:p-4 text-white">
        {svg}
      </div>
      <h3 className="text-sm md:text-base my-2">{title}</h3>
    </div>
  );
}

export default Feature;
