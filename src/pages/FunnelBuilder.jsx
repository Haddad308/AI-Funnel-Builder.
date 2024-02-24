import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { AddStep } from "../components/AddStep";
import StatusButton from "../components/StatusButton"
import SortableItem from "../components/SortableItem";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { Link } from "react-router-dom";
// import axios from "axios";

export default function FunnelBuilder() {

  const [selected, setSelected] = useState(0);
  const [steps, setSteps] = useState([
    {
      "id": 21,
      "name": "Create a Sign up Page",
      "status": "created",
      "reference": null,
      "description": "This a description 1"
    },
    {
      "id": 312,
      "name": "Create an order form",
      "status": "empty",
      "reference": null,
      "description": "This a description 2"
    },
    {
      "id": 32,
      "name": "Create an Email",
      "status": "empty",
      "reference": null,
      "description": "This a description 3"
    },
    {
      "id": 313,
      "name": "Create an Event",
      "status": "empty",
      "reference": null,
      "description": "This a description 4"
    },
    {
      "id": 3131,
      "name": "Create a Thank you Page",
      "status": "created",
      "reference": null,
      "description": "This a description 5"
    }
  ]);


  async function getSteps() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "Cookie_1=value; session_id=d5201e1d49d70a2596e142a78100d6b3ffa3f181");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/steps", requestOptions);
      // const result = await respons;
      // console.log("");
      console.log(response)
    } catch (error) {
      console.log("Da");
      console.error(error);
    }
  }

  function changeIndex(items, activeID, overID) {
    // Find the indexes of the items with the provided IDs
    const activeIndex = items.findIndex(item => item.id === activeID);
    const overIndex = items.findIndex(item => item.id === overID);

    // Check if both IDs are found
    if (activeIndex === -1 || overIndex === -1) {
      console.error("One or both of the provided IDs are not found in the list.");
      return items; // Return the original list if any ID is not found
    }

    // Create a new array to avoid mutating the original
    const newItems = [...items];

    // Swap the items in the new array
    const temp = newItems[activeIndex];
    newItems[activeIndex] = newItems[overIndex];
    newItems[overIndex] = temp;

    console.log("Test function", newItems);
    return newItems;
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSteps((items) => {
        const updatedItems = changeIndex(items, active.id, over.id);
        // Check if the selected index needs to be updated
        const selectedIndex = items.findIndex(item => item.id === active.id);
        const newIndex = updatedItems.findIndex(item => item.id === active.id);
        if (selectedIndex !== newIndex) {
          setSelected(newIndex);
        }
        return updatedItems;
      });
    }
  }

  const handleClick = (elementNumber) => {
    setSelected(elementNumber);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  useEffect(() => {
    getSteps();
  }, [])

  return (
    <div className="flex  h-full py-10 gap-5  " >
      {/* left Section */}
      <div id="description" className="w-1/2 bg-white border-t-[6px] border-black rounded-lg p-10 shadow-md  flex flex-col" >
        {(steps.length === 0) || (selected === null) ? <p className="font-semibold text-xl text-[#0C0C27] self-center pt-56 mb-10">There are No step selected. </p> : <>
          <StatusButton status={steps[selected]?.status} />
          <h1 className="font-semibold text-2xl text-[#0C0C27] mb-10" >{steps[selected]?.name}</h1>
          <p className="font-medium text-xl text-[#0C0C27] mb-10">{steps[selected]?.description}</p>
          <div>
            <h2 className="text-[#0C0C27] text-2xl font-semibold mb-5" >Template Name</h2>
            <Link to={"/gallery"} >
              <Button className="bg-[#F58529] transition-all duration-300 normal-case font-semibold text-xl"  >Add Template </Button>
            </Link>
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
          <DndContext collisionDetection={closestCorners} sensors={sensors} onDragEnd={handleDragEnd} >

            <SortableContext items={steps} strategy={verticalListSortingStrategy} >
              {steps?.map(({ name, status, id }, index) => (
                <SortableItem
                  key={index}
                  handleClick={handleClick}
                  index={index}
                  status={status}
                  name={name}
                  selected={selected}
                  setSteps={setSteps}
                  stepslist={steps}
                  id={id}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>

      </div>
    </div>
  )
}
