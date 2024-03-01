/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";

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
import ButtonLoader from "../General/ButtonLoader";
import { SelectedStepContext } from "../../Context/SelectedStepID";


export function Generate({ isload, success, setSuccess }) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [selectedStep,] = useContext(SelectedStepContext);


    useEffect(() => {

        if (success) {
            setTimeout(() => {
                handleOpen();
            }, 1000);
        }
        setSuccess(false)

    }, [success])

    const handleOpen = () => setOpen(!open);

    async function generate(values) {
        console.log("hello from add an generate.");
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
            const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/templates/create/ai", requestOptions);
            const result = await response.json();
            setIsLoading(false)
            window.open(window.location.origin + JSON.parse(result.result).page_url, "_self");
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
            values["step_id"] = selectedStep
            generate(values)
        },
    });


    return (
        <>
            <Button variant="gradient" color="black" type="submit"  >
                {isload ?
                    <ButtonLoader /> :
                    <span>Submit</span>
                }
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Create a page with AI</DialogHeader>
                <img src={hr} alt="" />
                <form onSubmit={formHandler.handleSubmit}>
                    <DialogBody>
                        <p className="mb-3" >
                            Please enter page name:
                        </p>
                        <Input
                            id="page_name"
                            name="page_name"
                            size="large"
                            placeholder=""
                            type="page_name"
                            onChange={formHandler.handleChange}
                            onBlur={formHandler.handleBlur}
                            label="name"
                            value={formHandler.values.page_name}
                        />
                        {formHandler.touched.page_name && formHandler.errors.page_name ? <div className="mb-2 text-red-600">{formHandler.errors.page_name}</div> : null}
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
                        <Button variant="gradient" color="green" type="submit">
                            {isLoading ?
                                <ButtonLoader /> :
                                <span>Yes</span>
                            }
                        </Button>
                    </DialogFooter>
                </form>

            </Dialog>
        </>
    );
}