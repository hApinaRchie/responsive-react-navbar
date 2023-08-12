import Typed from "react-typed";
import myPic from "../image/uwp1107154-01.jpeg";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <main className="flex flex-col md:flex-row-reverse flex-wrap text-center mx-4 my-6">
      <div className="flex m-2 p-2 items-center flex-1 justify-center">
        <img
          src={myPic}
          height={450}
          width={450}
          alt=""
          className="rounded-full border-2 border-slate-800 md:rounded-full"
        />
      </div>
      <div className="flex-1 justify-evenly items-center flex-col flex m-2 p-2">
        <div className="w-full justify-center mx-3 my-1 break-words  p-3">
          <h1 className=" text-amber-300 text-5xl">Hi there! I'm Jorge</h1>
          <h2 className="text-sky-500 text-3xl pt-3 h-[130px] lg:h-[95px]">
            {
              <Typed
                strings={[
                  "I want to be a frontend developer",
                  " ",
                  " ",
                  "I like coding",
                  " ",
                  " ",
                  "I want to learn more about web developement",
                  " ",
                  " ",
                ]}
                typeSpeed={130}
                backSpeed={40}
                loop
              />
            }
          </h2>
        </div>
        <div className="flex items-center flex-col p-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            obcaecati accusantium eum mollitia omnis quae expedita quidem?
            Deleniti dignissimos officiis, eos dolorem nam incidunt iste
            suscipit quibusdam odio alias sint.
          </p>
          <button
            type="button"
            className=" hover:opacity-70 mt-6 uppercase max-w-fit justify-center items-center flex bg-amber-300 rounded-md m-2 text-base text-rose-950 tracking-wider font-semibold p-2"
          >
            <AiOutlineDownload className="pr-1 font-bold text-2xl" /> resume
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
