/* eslint-disable react/prop-types */

export default function TabC({ text, index, selected, handleClick }) {
  return (
    <div
      onClick={() => {
        console.log("is");
        handleClick(index);
      }}
      className={`${selected === index
        ? 'bg-[#F58529]'
        : 'bg-white hover:bg-[#E6E6ED]  transition-colors duration-300'
        } shadow-md cursor-pointer rounded-xl`}
    >
      <p
        className={`text-base font-medium w-[160px] h-10 ${selected === index
          ? 'text-white '
          : 'text-[#0C0C27] font-normal'
          }  flex justify-center items-center  `}
      >
        {text}
      </p>
    </div>
  );
}
