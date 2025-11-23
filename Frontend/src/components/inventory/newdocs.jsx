function ADDNEWDOCS(props) {
  return (
    <>
      <div
        id="Test1"
        class="fixed flex inset-0 bg-black/90 justify-center z-50 pt-50 cursor-default"
      >
        <div className="h-fit pt-0 px-10 pb-10 w-90 bg-white/25 rounded-sm flex flex-col gap-3 justify-center items-center">
          <div className="box1 h-12 w-75 text-amber-50 flex justify-center items-center font-bold">
            Add New Docs
          </div>
          <input
            type="text"
            className="box1 h-12 w-75 bg-gray-900 rounded-sm active:border-0 text-white px-2"
            placeholder="Nama Documents"
          />
          <div className="box1 h-12 w-75 flex content-center">
            <div className="h-12 w-[65%]  bg-gray-900 rounded-sm active:border-0 text-white/50 px-2 flex items-center ">
              PATH
            </div>
            <div className="h-12 w-[5%]"></div>
            <div className="h-12 w-[30%] border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center">
              UPLOAD
            </div>
          </div>
          <div className="box1 h-12 w-75 flex justify-between">
            <div
              className="h-12 w-[30%] border-1 border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center"
              onClick={() => {
                props.onupdate("");
              }}
            >
              CANCEL
            </div>
            <div className="h-12 w-[30%] border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center">
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ADDNEWDOCS;
