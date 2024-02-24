/* eslint-disable react/prop-types */
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Typography,
} from "@material-tailwind/react";

export function TemplateViewer({ Name, image }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Button onClick={handleOpen} className="bg-transparent text-[#8D93A1] border-[#8D93A1] border-2" >View</Button>
            <Dialog className="h-[90vh] overflow-x-hidden   scrollbar scrollbar-w-3 scrollbar-thumb-[#0C0C27]   " size="xl" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                    <div className="flex items-center gap-3">
                        <Typography variant="h4" color="blue-gray" className="text-xl" >
                            {Name}
                        </Typography>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="text"
                            onClick={handleOpen}
                            className="mr-1 text-[#8D93A1]"
                        >
                            <span>Close</span>
                        </Button>                        <Button color="gray" size="sm">
                            Copy
                        </Button>
                    </div>
                </DialogHeader>
                <DialogBody className="border-2 border-black m-2 p-0 rounded-xl overflow-hidden" >
                    <img
                        alt="nature"
                        className="h-full w-full rounded-lg  object-fill"
                        src={image}
                    />
                </DialogBody>
            </Dialog>
        </>
    );
}