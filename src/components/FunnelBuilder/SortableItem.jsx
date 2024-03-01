/* eslint-disable react/prop-types */
import DoneIcon from "../../assets/Images/Success.svg"
import empytIcon from "../../assets/Images/Not.svg"
import DragIcon from "../../assets/Images/8872333_more_horizontal_icon 1.svg"
import { DeleteStep } from "./DeleteStep";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem({ handleClick, index, reference, name, selected, setSteps, stepslist, id, getSteps }) {


    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id })


    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    // console.log("styles", style);


    return (
        <div key={index} className="w-full flex items-center justify-between  " >
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                
                onClick={() => { console.log("test"); handleClick(index); }}
                className={` ${selected === index ? 'bg-[#E6E6ED] border-l-[6px] border-[#F58529]' : 'bg-white'} hover:bg-[#E6E6ED] cursor-pointer relative rounded-lg w-[90%] transition-all duration-400  shadow-md flex items-center pl-3 py-[2.6px]`} >
                {!reference ? (
                    <img src={empytIcon} alt="empty icon" className="h-5 w-5 my-4" />
                ) : (
                    <img src={DoneIcon} alt="done icon" className="h-4 w-4 my-4" />
                )}
                <p className="text-[#0C0C27] text-2xl font-semibold py-6 pl-4 ">{name}</p>
                <div>
                    <img src={DragIcon} alt="done icon" className={`h-6 w-6  absolute top-0 left-1/2 ${selected === index ? '' : 'hidden'}`} />
                </div>
                <DeleteStep getSteps={getSteps} selected={selected} index={index} steps={stepslist} id={id} setSteps={setSteps} />
            </div>
            {!reference ? (
                <div className={`font-semibold text-2xl text-[#B1B5BE] border-[#B1B5BE] border-2 h-12 w-12 mr-2 flex justify-center items-center rounded-full  relative`}>
                    {index + 1}
                    {index + 1 === stepslist.length ? "" : <div className="absolute bg-[#B1B5BE] h-12 w-[2.48px] rounded-md bottom-[-53px]"></div>}
                </div>
            ) : (
                <div className={`font-semibold text-2xl text-[#FCFCFC] h-12 w-12 mr-2 flex justify-center items-center rounded-full bg-[#F58529] relative`}>
                    {index + 1}
                    {index + 1 === stepslist.length ? "" : <div className="absolute bg-[#F58529] h-12  w-[2.48px] rounded-md bottom-[-52px]"></div>}
                </div>
            )}

        </div>

    )
}
