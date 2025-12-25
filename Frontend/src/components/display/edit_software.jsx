import axios from "axios";
function EDITSOFTWARE(props) {
  const form_data = {
    ID: props.id,
    Name: null,
    Username: null,
    Password: null,
  };
  const input_handler = (e, data_name) => {
    if (data_name) {
      form_data[data_name] = e.target.value;
    }
  };
  async function send_data(data) {
    if (!data.ID || !data.Name || !data.Username || !data.Password) {
      alert("Data Software Kosong");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:8990/API/software/",
        form_data
      );
      if (res.status === 200) {
        alert("Data Sukses Dikirim");
        props.setEditSoft(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="fixed flex inset-0 bg-black/90 justify-center z-50 pt-50 cursor-default">
        <div className="h-fit w-[30%] rounded-sm bg-gray-950 flex justify-center">
          <form action="" className=" flex flex-col p-2 gap-2 w-full">
            <span className="font-mono text-amber-50 text-[0.8rem]">Name</span>
            <input
              type="text"
              className="bg-gray-700 px-2 text-gray-100 border-0 rounded-sm h-10"
              onChange={(e) => input_handler(e, "Name")}
            />
            <span className="font-mono text-amber-50 text-[0.8rem]">
              Username
            </span>
            <input
              type="text"
              className="bg-gray-700 px-2 text-gray-100 border-0 rounded-sm h-10"
              onChange={(e) => input_handler(e, "Username")}
            />
            <span className="font-mono text-amber-50 text-[0.8rem]">
              Password
            </span>
            <input
              type="text"
              className="bg-gray-700 px-2 text-gray-100 border-0 rounded-sm h-10"
              onChange={(e) => input_handler(e, "Password")}
            />
            <div className="btn h-10 flex flex-row justify-between my-2">
              <div
                className="h-10 w-auto px-3 border-1 border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center"
                onClick={() => props.setEditSoft(false)}
              >
                BACK
              </div>
              <div
                className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center"
                onClick={() => {
                  send_data(form_data).then(() => {
                    props.setEditSoft(false);
                    props.setReload(true);
                  });
                }}
              >
                POST
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EDITSOFTWARE;
