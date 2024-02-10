/* eslint-disable react/prop-types */

export default function DescriptionItem({ number, text }) {
    const isEven = number % 2 === 0;

    return (
        <div className="bg-white relative rounded-xl shadow-md p-6 mx-5">
            <h3 className="text-[#0C0C27] font-semibold text-xl">Start by collecting emails</h3>
            <p className="text-[#0C0C27] pr-5 font-medium text-base">{text}</p>
            <div className={`absolute right-[-20px] top-[30%] font-semibold text-2xl text-[#FCFCFC] h-11 w-11 flex justify-center items-center rounded-full ${isEven ? 'bg-[#0C0C27]' : 'bg-[#F58529]'}`}>
                {number}
            </div>
        </div>
    )
}

