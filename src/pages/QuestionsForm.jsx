/* eslint-disable react-hooks/exhaustive-deps */
import { Button, DialogFooter } from "@material-tailwind/react";
import Question from "../components/AIGeneration/Question";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Generate } from "../components/AIGeneration/Generate";


export default function QuestionsForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [answer, setAnswer] = useState()

  async function getAnswers() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "Cookie_1=value; session_id=d5201e1d49d70a2596e142a78100d6b3ffa3f181");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    try {
      console.log("asm gds ");
      const response = await fetch("https://primedenteg-stage-11526440.dev.odoo.com/funnel/page", requestOptions);
      const result = await response.json();
      setAnswer(result.page_data);
      console.log("asukhkfhads", answer);
    } catch (error) {
      console.error(error);
    }
  }

  const formHandler = useFormik({
    initialValues: {
      qt1: answer?.qt1,
      qt2: answer?.qt2,
      qt3: answer?.qt3,
      qt4: answer?.qt4,
      qt5: answer?.qt5,
    },
    validationSchema: Yup.object({
      qt1: Yup.string().required('Required'),
      qt2: Yup.string().required('Required'),
      qt3: Yup.string().required('Required'),
      qt4: Yup.string().required('Required'),
      qt5: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      submitQuestions(values)
    },
  });

  useEffect(() => {
    getAnswers();
  }, [])


  async function submitQuestions(values) {
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
      await fetch(`https://f64c-45-103-182-61.ngrok-free.app/funnel/page/create`, requestOptions);
      setIsLoading(false)
      toast.success('Successfully Submitted!')
      setSuccess(true)
    } catch (error) {
      console.error(error);
      setIsLoading(false)
      setSuccess(false)
    }

  }


  return (
    <div className="bg-white flex flex-col pb-8" >
      <Toaster className="z-50" />
      <div id="Header" className="mt-5 flex justify-center items-center border-t-8 border-black rounded-2xl shadow-md" >
        <h1 className="text-3xl font-semibold p-10" >Build your sales funnel with AI</h1>
      </div>
      <form onSubmit={formHandler.handleSubmit}>
        <Question
          isFocusedprop={true}
          questionBody={"What is the name of your service or initiative?"}
          example={'Example: "HomeMom Harmony" - Coaching service for stay-at-home moms'}
          name={"qt1"}
          change={formHandler.handleChange}
          blur={formHandler.handleBlur}
          value={formHandler.values.qt1}
          error={formHandler.errors.qt1}
          touched={formHandler.touched.qt1}
        />
        <Question
          questionBody={"Who are you aiming to reach with your service?"}
          example={'Example: "Stay-at-home moms looking for personal development and balance" - for a coaching service'}
          name={"qt2"}
          change={formHandler.handleChange}
          blur={formHandler.handleBlur}
          value={formHandler.values.qt2}
          error={formHandler.errors.qt2}
          touched={formHandler.touched.qt2}
        />
        <Question
          questionBody={'What is your main goal for your audience? (E.g., support, education, community building)'}
          example={'Example: "To provide support and resources for self-care and skill development" - suitable for a resource and community-building funnel'}
          name={"qt3"}
          change={formHandler.handleChange}
          blur={formHandler.handleBlur}
          value={formHandler.values.qt3}
          error={formHandler.errors.qt3}
          touched={formHandler.touched.qt3}
        />
        <Question
          questionBody={'What unique benefits does your service offer?'}
          example={'Example: "Tailored coaching programs for personal growth and managing family life" - for a coaching service'}
          name={"qt4"}
          change={formHandler.handleChange}
          blur={formHandler.handleBlur}
          value={formHandler.values.qt4}
          error={formHandler.errors.qt4}
          touched={formHandler.touched.qt4}
        />
        <Question
          questionBody={'What would you like your audience to do as a result of engaging with your service?'}
          example={'Example: "Join our community for exclusive access to resources and workshops" - Call to action for a coaching service'}
          name={"qt5"}
          change={formHandler.handleChange}
          blur={formHandler.handleBlur}
          value={formHandler.values.qt5}
          error={formHandler.errors.qt5}
          touched={formHandler.touched.qt5}
        />
        <DialogFooter>
          <Link to={"/gallery"} >
            <Button
              variant="text"
              color="gray"
              className="mr-1"
            >
              <span>Close</span>
            </Button>
          </Link>
          <Generate isload={isLoading} success={success} setSuccess={setSuccess} />
        </DialogFooter>
      </form>
    </div>
  )
}
