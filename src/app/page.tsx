import React from "react";

const page = () => {
  return (
    <section className="flex p-4 md:p-0 justify-center items-center gap-7 w-full flex-col min-h-[90vh] max-w-[1200px] m-auto">
      <h1 className=" text-4xl md:text-6xl w-full font-Montserrat   mb-3  text-center font-bold bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient">
        Shorten Your Links
      </h1>
      <div className="flex items-center flex-col md:flex-row gap-2 ">
        <div className="flex">
          <input
            type="text"
            disabled={true}
            value={"trim.theshiva.xyz/"}
            className=" bg-transparent p-4 bg-white font-medium text-black text-xs md:text-lg w-[60%] md:w-48 rounded-l-lg"
          />
          <input
            type="text"
            placeholder="Enter the url"
            className=" bg-transparent focus:outline-none focus:border-white p-4 rounded-r-lg border-2 border-white/10 w-full"
          />
        </div>
        <button className=" font-semibold ml-0 md:ml-5 mt-2 md:mt-0 w-full md:w-32  bg-white rounded-lg hover:border-2 hover:border-white/20 duration-200 text-black hover:text-white  hover:bg-transparent p-4">
          Generate
        </button>
      </div>

      <footer className=" absolute bottom-0 left-0 right-0  w-full text-center justify-center items-start flex">
        <h1 className=" text-lg pb-4">
          Built with ❤️ by{" "}
          <a
            href="https://github.com/shivabhattacharjee"
            target="_blank"
            className=" underline text-blue-500 font-bold"
          >
            Shiva
          </a>{" "}
        </h1>
      </footer>
    </section>
  );
};

export default page;
