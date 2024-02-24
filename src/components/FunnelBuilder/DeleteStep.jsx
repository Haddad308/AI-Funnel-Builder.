/* eslint-disable react/prop-types */
import React from "react";
import trash from "../../assets/Images/Icon.svg"

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import hr from "../../assets/Images/Vector 6.svg"

export function DeleteStep({ selected, id, index, getSteps }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    async function deleteStep(id) {
        console.log("hello from delete a step.");
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "Cookie_1=value; session_id=d5201e1d49d70a2596e142a78100d6b3ffa3f181");

        const raw = JSON.stringify({
            "step_id": id
        });
        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/steps/delete", requestOptions);
            const result = await response.text();
            console.log(result)
        } catch (error) {
            console.error(error);
        }

        handleOpen();
        getSteps();
    }


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
                        deleteStep(id)
                    }  }>
                        <span>Yes</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}