import { Button } from "@material-tailwind/react";
import DoneIcon from "../assets/Images/Success.svg"
import empytIcon from "../assets/Images/Not.svg"
import DragIcon from "../assets/Images/8872333_more_horizontal_icon 1.svg"
import { useState } from "react";
import { AddStep } from "../components/AddStep";
import StatusButton from "../components/StatusButton"
import { DeleteStep } from "../components/DeleteStep";
export default function FunnelBuilder() {
  // Todo: Handle the right box by viewing the selected part 

  const [selected, setSelected] = useState(0);
  const [steps, setSteps] = useState([
    {
      "id": 1,
      "name": "Create a Sign up Page",
      "status": "created",
      "reference": null,
      "description": "This a description 1"
    },
    {
      "id": 2,
      "name": "Create an order form",
      "status": "empty",
      "reference": null,
      "description": "This a description 2"
    },
    {
      "id": 3,
      "name": "Create an Email",
      "status": "empty",
      "reference": null,
      "description": "This a description 3"
    },
    {
      "id": 4,
      "name": "Create an Event",
      "status": "empty",
      "reference": null,
      "description": "This a description 4"
    },
    {
      "id": 5,
      "name": "Create a Thank you Page",
      "status": "created",
      "reference": null,
      "description": "This a description 5"
    }
    // ,
    // {
    //   "id": 5,
    //   "name": "Create a Thank you Page",
    //   "status": "created",
    //   "reference": null
    // }
  ]);
  const handleClick = (elementNumber) => {
    setSelected(elementNumber === selected ? null : elementNumber);
  };


  console.log(steps.length);
  return (
    <div className="flex  h-full py-10 gap-5  " >
      {/* left Section */}
      <div id="description" className="w-1/2 bg-white border-t-[6px] border-black rounded-lg p-10 shadow-md " >
        {steps.length === 0 ? <p className="font-medium text-xl text-[#0C0C27] mb-10">There are No steps </p> : <>
          <StatusButton status={steps[selected]?.status} />
          <h1 className="font-semibold text-2xl text-[#0C0C27] mb-10" >{steps[selected]?.name}</h1>
          <p className="font-medium text-xl text-[#0C0C27] mb-10">{steps[selected]?.description}</p>
          <div>
            <h2 className="text-[#0C0C27] text-2xl font-semibold mb-5" >Template Name</h2>
            <Button className="bg-[#F58529] normal-case font-semibold text-xl"  >Add Template </Button>
          </div>
        </>
        }

      </div>
      {/* Right Section */}
      <div className="w-1/2 flex flex-col gap-5">

        {/* Add new Step */}
        <div className="w-full flex items-center justify-between " >
          <div className="bg-white rounded-lg w-[90%] border-t-[6px] border-black shadow-md" >
            <p className="text-[#0C0C27] text-2xl font-semibold py-6 px-3" >Sales Funnel Steps</p>
          </div>
          <AddStep steps={steps} setSteps={setSteps} />
        </div>

        {/* Actual Steps here */}
        <div className=" h-screen overflow-scroll flex flex-col gap-5 scrollbar-none pb-4"  >

          {steps?.map(({ name, status }, index) => (
            <div key={index} className="w-full flex items-center justify-between">
              <div onClick={() => handleClick(index)} className={` ${selected === index ? 'bg-[#E6E6ED] border-l-[6px] border-[#F58529]' : 'bg-white'} cursor-pointer relative rounded-lg w-[90%] transition-all duration-400  shadow-md flex items-center pl-3 py-[2.6px]`} >
                {status === "empty" ? (
                  <img src={empytIcon} alt="empty icon" className="h-5 w-5 my-4" />
                ) : (
                  <img src={DoneIcon} alt="done icon" className="h-4 w-4 my-4" />
                )}
                <p className="text-[#0C0C27] text-2xl font-semibold py-6 pl-4 ">{name}</p>
                <img src={DragIcon} alt="done icon" className={`h-6 w-6  absolute top-0 left-1/2 ${selected === index ? '' : 'hidden'}`} />
                <DeleteStep selected={selected} index={index} steps={steps} id={index + 1} setSteps={setSteps} />
              </div>
              {status === "empty" ? (
                <div className={`font-semibold text-2xl text-[#B1B5BE] border-[#B1B5BE] border-2 h-12 w-12 mr-2 flex justify-center items-center rounded-full  relative`}>
                  {index + 1}
                  {index + 1 === steps.length ? "" : <div className="absolute bg-[#B1B5BE] h-12 w-[2.48px] rounded-md bottom-[-53px]"></div>}
                </div>
              ) : (
                <div className={`font-semibold text-2xl text-[#FCFCFC] h-12 w-12 mr-2 flex justify-center items-center rounded-full bg-[#F58529] relative`}>
                  {index + 1}
                  {index + 1 === steps.length ? "" : <div className="absolute bg-[#F58529] h-12  w-[2.48px] rounded-md bottom-[-52px]"></div>}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
