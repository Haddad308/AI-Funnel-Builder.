/* eslint-disable react/prop-types */
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Typography,
} from "@material-tailwind/react";
import { CopyTemplate } from "./CreateCopy";

export function TemplateViewer({ Name, image, template_id }) {
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
                        </Button>
                        <CopyTemplate template_id={template_id} />
                    </div>
                </DialogHeader>
                <DialogBody className="border-2 border-black m-2 p-0 rounded-xl overflow-hidden flex justify-center" >
                    {image ?

                        <img
                            alt="nature"
                            className="h-full w-full rounded-lg  object-fill"
                            src={"https://primedenteg-stage-11526440.dev.odoo.com" + image}
                        /> :
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                            className="w-[270px] border-b-2  "
                            alt="ui/ux review check" />
                    }
                </DialogBody>
            </Dialog>
        </>
    );
}