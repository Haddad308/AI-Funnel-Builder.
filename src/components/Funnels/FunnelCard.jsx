/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FunnelDescription } from "./FunnelDescription"
export default function FunnelCard({ text, Icon, to }) {


    return (
        <Link to={to} className="relative cursor-pointer bg-white  border-t-[4px] border-black w-6/6 h-6/6 flex flex-col justify-center items-center rounded-2xl shadow-md transition duration-300 hover:bg-gray-100 group">
            <div className="flex flex-col justify-center items-center " >
                <div className=" w-20 mb-2 flex justify-center ">
                    <img src={Icon} alt="test" />
                </div>
                <h2 className="text-lg font-semibold">{text}</h2>
                <FunnelDescription to={to} />
            </div>
        </Link>
    )
}
