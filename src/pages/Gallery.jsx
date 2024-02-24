import { useState } from "react";
import SearchBar from "../components/Gallery/SearchBar";
import TabC from "../components/Gallery/tab";
import { FunnelCard } from "../components/Gallery/Card";
import AiButton from "../assets/Images/AI.svg"
import funnelImage from "../assets/templates/corporate-style.png"
import funnelImage2 from "../assets/templates/background-focus-squeeze.png"
import funnelImage3 from "../assets/templates/chiropractor-squeeze.png"
import funnelImage4 from "../assets/templates/entire-page-squeeze.png"
import funnelImage5 from "../assets/templates/dark-yellow-webinar.png"
import funnelImage6 from "../assets/templates/entire-page-squeeze.png"
import { Link } from "react-router-dom";


export default function Gallery() {
  const tabs = ["All", "Sales", "Lead", "Opt-In", "Lead Generation", "Home", "Appointment", "Webinar", "Coupon"]
  const [searchQuery, setSearchQuery] = useState('');

  const [templates,] = useState([
    {
      "templateName": "Pop blue",
      "image": funnelImage,
      "category": "Sales"
    },
    {
      "templateName": "Elegant gold",
      "image": funnelImage2,
      "category": "Lead"
    },
    {
      "templateName": "Minimalist black",
      "image": funnelImage3,
      "category": "Home"
    },
    {
      "templateName": "Retro red",
      "image": funnelImage4,
      "category": "Appointment"
    },
    {
      "templateName": "Modern white",
      "image": funnelImage5,
      "category": "Webinar"
    },
    {
      "templateName": "Modern black",
      "image": funnelImage6,
      "category": "Coupon"
    }])
  const [filtered, setFiltered] = useState(templates);

  function filterCategories(categoryName) {
    if (categoryName === "All") {
      setFiltered(templates)
      return;
    }

    const arr = [];
    for (let index = 0; index < templates.length; index++) {
      if (templates[index].category === categoryName)
        arr.push(templates[index])
    }
    console.log(arr);
    setFiltered(arr);
  }

  function handleSearch(query) {
    setSearchQuery(query);
    const filteredTemplates = templates.filter(template =>
      template.templateName.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredTemplates);
  }

  const [role,] = useState("admin")
  const [selected, setSelected] = useState(0);
  const handleClick = (elementNumber) => {
    setSelected(elementNumber);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-7 ">
      <h1 className="font-semibold text-3xl text-[#0C0C27]" >Check out our newest themes and templates</h1>
      <SearchBar role={role} handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-wrap justify-center items-center gap-3 px-20 ">
        {tabs.map((text, index) => (
          <TabC handleClick={handleClick} selected={selected} index={index} key={index} text={text} filterCategories={filterCategories} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10" >
        <div className="bg-white w-[384px]  transition-all duration-300 hover:shadow-lg rounded-lg gap-3 flex flex-col justify-center items-center p-7 border-2 border-dashed border-[#8D93A1]" >
          <h1 className="text-[#0C0C27] text-3xl font-semibold" >Create with AI</h1>
          <p className="text-[#0C0C27] text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
          <Link to={"/QuestionsForm"} >
            <img className="w-16 cursor-pointer border-2 border-white hover:border-[#8D93A1] duration-300 transition-all  rounded-full " src={AiButton} alt="Generate with Ai" />
          </Link>
          <p className="text-[#0C0C27] text-xl font-medium ">OR <span className="underline cursor-pointer hover:text-blue-600 duration-300 transition-all">Create from Scratch </span> </p>
        </div>
        {filtered.map(({ templateName, image }, index) => (
          <FunnelCard role={role} key={index} templateName={templateName} image={image} index={index} />
        ))}
      </div>
    </div>
  )
}
