/* eslint-disable react/prop-types */
import React from "react";

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
import {useNavigate } from "react-router-dom";


export function CreateEmail({ id }) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

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
            const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/email/create", requestOptions);
            const result = await response.json();
            navigate(JSON.parse(result.result).email_url);
        } catch (error) {
            console.error(error);
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
            values['id'] = id
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
                            <span>Yes</span>
                        </Button>
                    </DialogFooter>
                </form>

            </Dialog>
        </>
    );
}