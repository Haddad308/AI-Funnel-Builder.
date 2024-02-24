/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import editIcon from "../assets/Images/edit.svg";
import { TemplateViewer } from "./TemplateViewer";


export function FunnelCard({ templateName, image, role, index }) {
    console.log(templateName);
    return (
        <Card className="max-w-[24rem] relative overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={image}
                    className="w-full"
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody className={`py-2 ${index < 2 ? "pt-7" : ""} `} >
                <Typography variant="h4" color="blue-gray" className="text-xl" >
                    {templateName}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center  gap-3 pt-2">
                <Button>Copy</Button>
                <TemplateViewer Name={templateName} image={image} ></TemplateViewer>
            </CardFooter>
            {role === "admin" ? <div className="absolute hover:shadow-md transition-all duration-300 bg-white p-1 rounded-lg cursor-pointer top-2 left-2 group">
                <img src={editIcon} className="w-4 h-4 hover:w-5 hover:h-5  transition-all duration-400  group-hover:w-5 group-hover:h-5 " alt="" />
            </div> : ""}

        </Card>
    );
}