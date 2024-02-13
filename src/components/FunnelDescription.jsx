/* eslint-disable react/prop-types */

import React from "react";
import InfoIcon from "../assets/Images/info.svg"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import DescriptionItem from "./DescriptionItem";
import { Link } from "react-router-dom";
import hr from "../assets/Images/Vector 6.svg"
export function FunnelDescription({ to }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const handleButtonClick = (event) => {
        handleOpen();
        event.preventDefault(); // Prevents the default behavior
    };


    return (
        <div onClick={(e) => {
            e.stopPropagation()
        }} >
            <div id="icon" onClick={handleButtonClick} className="bg-white w-10 h-10 shadow-md transition duration-300 justify-center items-center rounded-xl absolute top-3 right-3 opacity-0 flex  group-hover:opacity-100 ">
                <img className="w-9/12" src={InfoIcon} alt="" />
            </div>
            <Dialog open={open} size={"lg"} handler={handleButtonClick} className="flex flex-col justify-center items-center bg-[#FBFBFE]">
                <DialogHeader className="text-[#0C0C27] text-3xl font-semibold" >Sales Funnel</DialogHeader>
                <img src={hr} alt="" />

                <DialogBody className="grid gap-5 max-h-96 overflow-x-hidden overflow-y-scroll  scrollbar scrollbar-w-3 scrollbar-thumb-[#0C0C27] " >
                    <DescriptionItem number={1} text={"Lorem ipsum dolor sit amet  Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                    <DescriptionItem number={2} text={"Lorem ipsum dolor sit amet  Lorem Ipsum is simply dummy text of the printing and typesetting industry.ipsum dolor sit amet  Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                    <DescriptionItem number={3} text={"Lorem ipsum dolor sit amet  Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                    <DescriptionItem number={4} text={"Lorem ipsum dolor sit amet  Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                    <DescriptionItem number={5} text={"Lorem ipsum dolor sit amet  Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="black"
                        onClick={handleButtonClick}
                        className="mr-1"
                    >
                        <span>Close</span>
                    </Button>
                    <Link to={to} >
                        <Button variant="gradient" color="orange" onClick={handleOpen}>
                            <span>Create</span>
                        </Button>
                    </Link>
                </DialogFooter>
            </Dialog>
        </div>
    );
}
