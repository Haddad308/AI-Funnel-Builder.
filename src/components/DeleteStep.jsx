/* eslint-disable react/prop-types */
import React from "react";
import trash from "../assets/Images/Icon.svg"

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import hr from "../assets/Images/Vector 6.svg"

export function DeleteStep({ selected, index, setSteps }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);


    const deleteStep = (index) => {
        setSteps(prevSteps => {
            const updatedSteps = [...prevSteps];
            updatedSteps.splice(index, 1);
            return updatedSteps;
        });
        handleOpen()
    };



    return (
        <>
            <img src={trash} onClick={handleOpen} alt="done icon" className={`h-5 w-5 my-4 absolute right-5 ${selected === index ? '' : 'hidden'}`} />

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Delete Step</DialogHeader>
                <img src={hr} alt="" />

                <DialogBody>
                    Are You sure do you want to delete this step?
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="red" onClick={ ()=>{
                        deleteStep(index)
                    }  }>
                        <span>Yes</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}