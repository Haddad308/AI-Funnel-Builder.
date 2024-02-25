/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import editIcon from "../../assets/Images/edit.svg";
import { TemplateViewer } from "./TemplateViewer";
import { Link } from "react-router-dom";
import { CopyTemplate } from "./CreateCopy";


export function FunnelCard({ templateName, image, role, index, edit_url, template_id }) {

    return (
        <Card className="max-w-[24rem] relative overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex justify-center "
            >
                {image ? <img
                    src={"https://primedenteg-stage-11526440.dev.odoo.com/" + image}
                    className="w-full"
                    alt="ui/ux review check"
                /> : <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                    className="w-[270px] border-b-2  "
                    alt="ui/ux review check" />
                }
            </CardHeader>
            <CardBody className={`py-2 ${index < 2 ? "pt-7" : ""} `} >
                <Typography variant="h4" color="blue-gray" className="text-xl" >
                    {templateName}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center  gap-3 pt-2">
                <CopyTemplate template_id={template_id}/>
                <TemplateViewer Name={templateName} image={image} template_id={template_id} ></TemplateViewer>
            </CardFooter>
            {role === "admin" ? <div className="absolute hover:shadow-md transition-all duration-300 bg-white p-1 rounded-lg cursor-pointer top-2 left-2 group">
                <Link to={`${edit_url.slice(1) }`} >
                    <img src={editIcon} className="w-4 h-4 hover:w-5 hover:h-5  transition-all duration-400  group-hover:w-5 group-hover:h-5 " alt="" />
                </Link>
            </div> : ""}
        </Card>
    );
}