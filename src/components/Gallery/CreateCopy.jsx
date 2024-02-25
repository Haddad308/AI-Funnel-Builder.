/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,

} from "@material-tailwind/react";
import hr from "../../assets/Images/Vector 6.svg"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../General/ButtonLoader";


export function CopyTemplate({ template_id }) {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)


    const handleOpen = () => setOpen(!open);

    async function copyTemplate(values, template_id) {
        console.log("My ID",template_id);
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
            const response = await fetch(`https://primedenteg-stage-11526440.dev.odoo.com/funnel/templates/copy/${template_id}`, requestOptions);
            const result = await response.json();
            setIsLoading(false)
            console.log(JSON.parse(result.result).page_url);
            navigate(JSON.parse(result.result).page_url);
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }

        handleOpen();
    }


    const formHandler = useFormik({
        initialValues: {
            page_name: '',
        },
        validationSchema: Yup.object({
            page_name: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            copyTemplate(values, template_id)
        },
    });


    return (
        <>
            <Button onClick={handleOpen}>Copy</Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Take a copy from this template</DialogHeader>
                <img src={hr} alt="" />
                <form onSubmit={formHandler.handleSubmit}>
                    <DialogBody className="">
                        <div className="mb-3">
                            <p className="mb-1  " >
                                Enter the copy name:
                            </p>
                            <Input
                                id="page_name"
                                name="page_name"
                                size="large"
                                placeholder=""
                                type="text"
                                label="name"
                                onChange={formHandler.handleChange}
                                onBlur={formHandler.handleBlur}
                                value={formHandler.values.page_name}
                            />
                            {formHandler.touched.page_name && formHandler.errors.page_name ? <div className="mb-2 text-red-600">{formHandler.errors.page_name}</div> : null}
                        </div>

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
                        <Button variant="gradient" color="orange" type="submit">
                            {isLoading ?
                                <ButtonLoader /> :
                                <span>Create</span>
                            }
                        </Button>
                    </DialogFooter>
                </form>

            </Dialog>
        </>
    );
}