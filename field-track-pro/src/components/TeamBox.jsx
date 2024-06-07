function TeamBox({ title, subTitle, desc }) {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 border shadow-md rounded-lg text-center">
      <div className="block h-full">
        <svg
          fill="currentColor"
          viewBox="0 0 64 64"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto w-48 h-48 bg-primary shadow-lg text-white rounded-full"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path d="M32,32.86a9.22,9.22,0,1,1,9.21-9.22A9.23,9.23,0,0,1,32,32.86Zm0-15.43a6.22,6.22,0,1,0,6.21,6.21A6.21,6.21,0,0,0,32,17.43Z"></path>
            <path d="M32,56.64a24.68,24.68,0,0,1-15.22-5.27,1.52,1.52,0,0,1-.57-1.06c0-.16,0-.31,0-.47a15.8,15.8,0,1,1,31.6,0c0,.16,0,.31,0,.47a1.52,1.52,0,0,1-.57,1.06A24.68,24.68,0,0,1,32,56.64ZM19.21,49.45a21.62,21.62,0,0,0,25.58,0,12.8,12.8,0,0,0-25.58,0Zm27.08.74h0Z"></path>
            <path d="M32,56.64a24.65,24.65,0,1,1,15.22-5.27A24.68,24.68,0,0,1,32,56.64Zm0-46.28A21.63,21.63,0,0,0,18.64,49a21.64,21.64,0,0,0,35-17A21.67,21.67,0,0,0,32,10.36Z"></path>
          </g>
        </svg>
      </div>
      <div className="h-full flex flex-col">
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        <h6 className="text-sm md:text-base mb-4">{subTitle}</h6>
        <p className="text-sm md:text-base text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default TeamBox;
