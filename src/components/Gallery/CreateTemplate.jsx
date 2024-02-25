/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";
import hr from "../../assets/Images/Vector 6.svg"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../General/ButtonLoader";


export function CreateTemplate() {
    const categories = [
        // { "categ_id": 1, "name": "All" },
        { "categ_id": 2, "name": "Sales" },
        { "categ_id": 3, "name": "Lead" },
        { "categ_id": 4, "name": "Opt-in" },
        { "categ_id": 5, "name": "Lead Generation" },
        { "categ_id": 6, "name": "Home" },
        { "categ_id": 7, "name": "Appointment" },
        { "categ_id": 8, "name": "Webinar" },
        { "categ_id": 9, "name": "Coupon" }]

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)


    const handleOpen = () => setOpen(!open);

    async function addTemplate(values) {
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
            const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/templates/create", requestOptions);
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
            categ_id: '',
        },
        validationSchema: Yup.object({
            page_name: Yup.string().required('Required'),
            categ_id: Yup.number().required('Required'),
        }),
        onSubmit: (values) => {
            addTemplate(values)
        },
    });


    return (
        <>
            <Button className="w-1/3 h-[40px]" onClick={handleOpen}>Add New</Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Create an Email</DialogHeader>
                <img src={hr} alt="" />
                <form onSubmit={formHandler.handleSubmit}>
                    <DialogBody className="">
                        <div className="mb-3">
                            <p className="mb-1  " >
                                Enter page name:
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
                        </div>

                        <div>
                            <p className="mb-1" >
                                Choose page category:
                            </p>
                            <Select
                                id="categ_id"   // Unique id
                                name="categ_id" // Unique name
                                size="large"
                                onChange={(value) => formHandler.setFieldValue('categ_id', value)} 
                                onBlur={formHandler.handleBlur}
                                label="Category"
                                value={formHandler.values.categ_id} // Update value to match formHandler
                            >
                                {categories.map(({ categ_id, name }) => (
                                    <Option key={categ_id} value={categ_id} >{name}</Option>
                                ))}
                            </Select>

                            {formHandler.touched.categ_id && formHandler.errors.categ_id ? <div className="mb-2 text-red-600">{formHandler.errors.categ_id}</div> : null}
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