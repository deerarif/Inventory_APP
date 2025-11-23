import "../App.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginPage() {
  return (
    <>
      <div className="pallete absolute inset-0 flex justify-center items-center mb-40">
        <div className="flex flex-col gap-8 items-center relative pb-20">
          <span className="logincard text-3xl text-purple-300">LOGIN</span>
          <form
            action="#"
            className="flex flex-col text-gray-800 font-bold gap-10 items-center p-6 rounded"
          >
            <input
              type="text"
              className="username bg-gray-950 text-white rounded-[5px] h-12 w-80 px-2"
              placeholder="Username"
            />
            <input
              type="password"
              className="passwd bg-gray-950 text-white rounded-[5px] h-12 w-80 px-2"
              placeholder="Password"
            />
          </form>
          <button className=" bg-purple-400 hover:bg-purple-500 text-white rounded-[5px] p-0 h-12 w-15 mb-5 absolute bottom-0 right-6">
            <FontAwesomeIcon icon={faPaperPlane} size="xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
