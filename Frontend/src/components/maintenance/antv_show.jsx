import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
const url = import.meta.env.VITE_URL;
import { useNavigate,useParams } from "react-router-dom";
import LOADING from "../../assets/loading.gif";

function antv_show() {
  const antvid = useParams();
  const [AntvData, setAntvData] = useState(null);
  const [LabelKIS_Code, setLabelKIS_Code] = useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async (ids) => {
      try {
        const res = await axios.get(url + "/API/antvusers/" + ids);
        const getKIS = await axios.get(url + "/API/antv/" + ids + "/");
        if(res.data['Status'] === 'Success'){
          if(Object.keys(res.data['Data']).length === 0){
            alert("Data Tidak Ada");
            navigate("/");
          }
          setAntvData(res.data['Data']);
        }
        if(getKIS.data['Status'] === 'Success'){
          setLabelKIS_Code(getKIS.data['Data']);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata(antvid.id);
  }, [])
  return (
    <>
      <div className="absolute inset-0 max-sm:relative text-[0.8rem] text-neutral-50 font-mono font-medium flex justify-center max-sm:min-h-screen">
        <div className="rounded-[5px] w-full max-w-6xl h-full max-sm:h-auto flex flex-row p-10 max-sm:p-4 gap-10 items-center max-sm:items-start">
          <div className="h-[30%] max-sm:h-auto w-full rounded-sm items-start max-sm:items-star border-1 border-amber-50 cursor-default">
            <div className="Lisensi_Bar p-3 text-2xl font-bold text-neutral-50 bg-purple-400 border-amber-50 border-1">{LabelKIS_Code ? LabelKIS_Code[0]: "Load Data"}</div>
              <table className="font-light pt-10 w-full border-amber-50 border-1 rounded-sm">
                {
                  AntvData ? Object.keys(AntvData).map((keys, index) =>{
                    index++ ;
                    return(
                      <>
                    <tr>
                    <td className="font-light h-8 w-[3%] px-2 border-amber-50 border-1 text-center justify-center">
                          {index}
                    </td>
                    <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          <span onClick={() => navigate("/detail/" + keys)}>{keys}</span>
                    </td>
                    <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          {AntvData[keys][0]}
                    </td>
                    <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          {AntvData[keys][1]}
                    </td>
                  </tr>
                    </>
                    )
                    }
                  ) : <>
                  <div className="size-[100%] p-10 relative flex items-center justify-center">
                          <img
                            src={LOADING}
                            className="size-[50%] object-contain"
                          />
              </div>
                  </>
                }
              </table>
              
              <div className="info p-3 italic text-amber-50/40">*Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita veniam laudantium, possimus aliquid exercitationem?</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default antv_show;
