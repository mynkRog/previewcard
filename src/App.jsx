import bg from "./assets/bg.png";
import i1 from "./assets/i1.webp";
const App = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F5D04E]">
      <div className="w-80 h-[29rem] flex flex-col justify-between items-center bg-white rounded-2xl shadow-custom">
        <div className="mt-5">
          <img className="w-72 h-40 rounded-xl" src={bg} alt="" />
        </div>
        <div className="flex flex-col gap-2 w-72 mb-8">
          <button className="bg-[#F5D04E] font-extrabold p-1 rounded-md w-24">
            Learning
          </button>
          <h1 className="font-semibold">Published 21 Dec 2023</h1>
          <h1 className="font-extrabold text-xl">HTML & CSS foundations</h1>
          <p className="text-[#757575]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <span className="flex items-center gap-2">
            <img className="w-8" src={i1} alt="" />
            <h1 className="font-extrabold text-[0.9rem]">Greg Hooper</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
