import { useState } from "react";
import SearchBar from "../components/SearchBar";
import TabC from "../components/tab";
import { FunnelCard } from "../components/Card";
import AiButton from "../assets/Images/AI.svg"
import funnelImage from "../assets/templates/corporate-style.png"
import funnelImage2 from "../assets/templates/background-focus-squeeze.png"
import funnelImage3 from "../assets/templates/chiropractor-squeeze.png"
import funnelImage4 from "../assets/templates/entire-page-squeeze.png"
import funnelImage5 from "../assets/templates/dark-yellow-webinar.png"
import funnelImage6 from "../assets/templates/entire-page-squeeze.png"
import { Link } from "react-router-dom";

const tabs = ["All", "Sales", "Lead", "Opt-In", "Lead Generation", "Home", "Appointment", "Webinar", "Coupon"]
const templates = [
  {
    "templateName": "Pop blue",
    "image": funnelImage
  },
  {
    "templateName": "Elegant gold",
    "image": funnelImage2
  },
  {
    "templateName": "Minimalist black",
    "image": funnelImage3
  },
  {
    "templateName": "Retro red",
    "image": funnelImage4
  },
  {
    "templateName": "Modern white",
    "image": funnelImage5
  },
  {
    "templateName": "Modern black",
    "image": funnelImage6
  }
];

export default function Gallery() {
  const [role,] = useState("user")

  const [selected, setSelected] = useState(0);
  const handleClick = (elementNumber) => {
    setSelected(elementNumber);
  };


  return (
    <div className="flex flex-col justify-center items-center p-10 gap-7 ">
      <h1 className="font-semibold text-3xl text-[#0C0C27]" >Check out our newest themes and templates</h1>
      <SearchBar role={role} />
      <div className="flex flex-wrap justify-center items-center gap-3 px-20 ">
        {tabs.map((text, index) => (
          <TabC handleClick={handleClick} selected={selected} index={index} key={index} text={text} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10" >
        <div className="bg-white w-[384px]  transition-all duration-300 hover:shadow-lg rounded-lg gap-3 flex flex-col justify-center items-center p-7 border-2 border-dashed border-[#8D93A1]" >
          <h1 className="text-[#0C0C27] text-3xl font-semibold" >Create with AI</h1>
          <p className="text-[#0C0C27] text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
          <Link to={"/QuestionsForm"} >
            <img className="w-16 cursor-pointer" src={AiButton} alt="Generate with Ai" />
          </Link>
        </div>
        {templates.map(({ templateName, image }, index) => (
          <FunnelCard role={role} key={index} templateName={templateName} image={image} />
        ))}
      </div>
    </div>
  )
}
