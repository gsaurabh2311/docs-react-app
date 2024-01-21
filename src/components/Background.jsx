import React from "react";

const Background = () => {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="text-semibold text-2xl flex justify-center absolute py-10 w-full text-zinc-600 top-[5%]">
          Documents
        </div>
        <h1 className="text-zinc-600 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tighter">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
