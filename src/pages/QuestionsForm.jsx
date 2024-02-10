import { Button, DialogFooter } from "@material-tailwind/react";
import Question from "../components/Question";


export default function QuestionsForm() {
  return (
    <div className="bg-white flex flex-col pb-8" >
      <div id="Header" className="mt-5 flex justify-center items-center border-t-8 border-black rounded-2xl shadow-md" >
        <h1 className="text-3xl font-semibold p-10" >Build your sales funnel with AI</h1>
      </div>
      <Question isFocusedprop={true} questionBody={"What is the name of your service or initiative?"} example={'Example: "HomeMom Harmony" - Coaching service for stay-at-home moms'} />
      <Question questionBody={"Who are you aiming to reach with your service?"} example={'Example: "Stay-at-home moms looking for personal development and balance" - for a coaching service'} />
      <Question questionBody={'What is your main goal for your audience? (E.g., support, education, community building)'} example={'Example: "To provide support and resources for self-care and skill development" - suitable for a resource and community-building funnel'} />
      <Question questionBody={'What unique benefits does your service offer?'} example={'Example: "Tailored coaching programs for personal growth and managing family life" - for a coaching service'} />
      <Question questionBody={'What would you like your audience to do as a result of engaging with your service?'} example={'Example: "Join our community for exclusive access to resources and workshops" - Call to action for a coaching service'} />
      <DialogFooter>
        <Button
          variant="text"
          color="gray"
          className="mr-1"
        >
          <span>Close</span>
        </Button>
        <Button variant="gradient" color="black" >
          <span>Submit</span>
        </Button>
      </DialogFooter>
    </div>
  )
}
