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
import ButtonLoader from "../General/ButtonLoader";


export function CreateEmail({ id }) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)


    const handleOpen = () => setOpen(!open);

    async function addEmail(values) {
        console.log("hello from add an email.");
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
            const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/email/create", requestOptions);
            const result = await response.json();
            setIsLoading(false)
            window.open(window.location.origin + JSON.parse(result.result).email_url, "_self");
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }

        handleOpen();
    }


    const formHandler = useFormik({
        initialValues: {
            subject: '',
        },
        validationSchema: Yup.object({
            subject: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            values['step_id'] = id
            addEmail(values)
        },
    });


    return (
        <>
            <Button className="bg-[#F58529] transition-all duration-300 normal-case font-semibold text-xl" onClick={handleOpen} >Add Email </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Create an Email</DialogHeader>
                <img src={hr} alt="" />
                <form onSubmit={formHandler.handleSubmit}>
                    <DialogBody>
                        <p className="mb-3" >

                            Please enter the email name:
                        </p>

                        <Input
                            id="subject"
                            name="subject"
                            size="large"
                            placeholder=""
                            type="subject"
                            onChange={formHandler.handleChange}
                            onBlur={formHandler.handleBlur}
                            label="name"
                            value={formHandler.values.subject}
                        />
                        {formHandler.touched.subject && formHandler.errors.subject ? <div className="mb-2 text-red-600">{formHandler.errors.subject}</div> : null}
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