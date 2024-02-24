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

export function AddStep({ steps, setSteps }) {

    const addStep = (step) => {
        setSteps(() => [...steps, step]);
        handleOpen();
    }

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = useState(0);
    const [mainSteps,] = useState([
        {
            "id": 1,
            "name": "Create a Sign up Page",
            "status": "empty",
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
            "status": "empty",
            "reference": null,
            "description": "This a description 5"
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
                        <span>Create</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}
