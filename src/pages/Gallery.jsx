import { useContext, useEffect, useState } from "react";
import SearchBar from "../components/Gallery/SearchBar";
import TabC from "../components/Gallery/tab";
import { FunnelCard } from "../components/Gallery/Card";
import AiButton from "../assets/Images/AI.svg"
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { SelectedStepContext } from "../Context/SelectedStepID";
import { CreateScratch } from "../components/Gallery/CreateFromScratch";
// import images from '../assets/templates/adventure_pop_squeeze.png'; 

export default function Gallery() {
  const tabs = ["All", "Sales", "Lead", "Opt-In", "Lead Generation", "Home", "Appointment", "Webinar", "Coupon"]
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [templates, setTemplates] = useState([])
  const [filtered, setFiltered] = useState([]);
  const [selectedStep,] = useContext(SelectedStepContext);
  console.log("Show me the stepID", selectedStep);

  function filterCategories(categoryName) {
    if (categoryName === "All") {
      setFiltered(templates)
      return;
    }

    const arr = [];
    for (let index = 0; index < templates.length; index++) {
      if (templates[index].categ_name === categoryName)
        arr.push(templates[index])
    }
    console.log(arr);
    setFiltered(arr);
  }

  function handleSearch(query) {
    setSearchQuery(query);
    const filteredTemplates = templates.filter(template =>
      template.page_url.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredTemplates);
  }

  async function getTemplates() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "Cookie_1=value; session_id=d5201e1d49d70a2596e142a78100d6b3ffa3f181");


    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    try {
      setIsLoading(true)
      const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/templates", requestOptions);
      const result = await response.json();
      setTemplates(result.templates);
      setFiltered(result.templates)
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTemplates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [role,] = useState("admin")
  const [selected, setSelected] = useState(0);
  const handleClick = (elementNumber) => {
    setSelected(elementNumber);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-7 ">
      {isLoading ? <div className="backdrop-blur-sm absolute w-[100%] h-[90%] z-30 flex justify-center items-center top-10" >
        <Oval
          secondaryColor="#F58529"
          visible={true}
          height="80"
          width="80"
          color="#F58529"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""

        />
      </div> : ""}
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
          <p className="text-[#0C0C27] text-xl font-medium ">OR &nbsp;
          <CreateScratch/>
          </p>
        </div>
        {filtered.map(({ page_url, image_url, edit_url, template_id }, index) => (
          <FunnelCard role={role} key={index} templateName={page_url.slice(1)} image={image_url} index={index} edit_url={edit_url} template_id={template_id} />
        ))}
      </div>
    </div>
  )
}
