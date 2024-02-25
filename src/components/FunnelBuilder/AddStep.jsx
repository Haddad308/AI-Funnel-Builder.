/* eslint-disable react/prop-types */
import React, { useState } from "react";
import addButton from "../../assets/Images/addButton.svg"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import hr from "../../assets/Images/Vector 6.svg"
import ButtonLoader from "../General/ButtonLoader";

export function AddStep({ getSteps }) {

    const [isLoading, setIsLoading] = useState(false)

    async function addStep(values) {
        console.log("hello from add a step.");
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "Cookie_1=value; session_id=d5201e1d49d70a2596e142a78100d6b3ffa3f181");

        const raw = JSON.stringify(values)
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            setIsLoading(true)
            const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/steps/create", requestOptions);
            const result = await response.json();
            console.log(result);
            setIsLoading(false)
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }

        handleOpen();
        getSteps()
    }

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = useState(0);
    const [mainSteps,] = useState([
        {
            "name": "Create a Sign up Page",
            "description": "This a description 1",
            "type": "page"
        },
        {
            "name": "Create an order form",
            "description": "This a description 2",
            "type": "page"
        },
        {
            "name": "Create an Email",
            "description": "This a description 3",
            "type": "email"
        },
        {
            "name": "Create an Event",
            "description": "This a description 4",
            "type": "event"
        },
        {
            "name": "Create a Thank you Page",
            "description": "This a description 5",
            "type": "page"
        }
    ])

    const handleClick = (elementNumber) => {
        setSelected(elementNumber);
    };

    const handleOpen = () => setOpen(!open);
    const handleButtonClick = (event) => {
        handleOpen();
        event.preventDefault(); // Prevents the default behavior
    };

    return (
        <div>
            <img
                src={addButton}
                alt="add Button"
                className="cursor-pointer"
                onClick={handleOpen}
            />
            <Dialog open={open} size={"md"} handler={handleButtonClick} className="flex flex-col justify-center items-center bg-[#FBFBFE]">
                <DialogHeader className="text-[#0C0C27] text-3xl font-semibold  self-start " >Add New Step</DialogHeader>
                <img src={hr} alt="" />
                <DialogBody className="grid gap-5  w-full " >
                    {mainSteps.map(({ name }, index) => (
                        <div key={index} className={`p-5 cursor-pointer rounded-md shadow-md w-full hover:bg-[#E6E6ED] transition-all duration-300 ${selected === index ? "bg-[#E6E6ED]" : "bg-white"} `} onClick={() => handleClick(index)}>
                            <h3 className={`text-2xl text-[#0C0C27] ${selected === index ? "font-semibold" : "font-medium"}`}>{name}</h3>
                        </div>
                    ))}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        onClick={handleButtonClick}
                        className="mr-1 text-[#8D93A1]"
                    >
                        <span>Close</span>
                    </Button>
                    <Button variant="gradient" color="orange" onClick={() => {
                        addStep(mainSteps[selected])
                    }
                    }>
                        {isLoading ?
                            <ButtonLoader /> :
                            <span>Create</span>
                        }
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}
