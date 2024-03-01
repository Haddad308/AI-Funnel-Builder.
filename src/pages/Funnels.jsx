import FunnelCard from "../components/Funnels/FunnelCard";
import SalesFunnelIcon from "../assets/Images/arrow.svg"

import LeadGenerationIcon from "../assets/Images/clock.svg"
import HomeIcon from "../assets/Images/cup.svg"
import OptInlIcon from "../assets/Images/funnel.svg"
import AppointmentIcon from "../assets/Images/funnel.svg"
import WebinarIcon from "../assets/Images/speaker.svg"
import CouponIcon from "../assets/Images/magnet.svg"
import SalesFunnel2Icon from "../assets/Images/www.svg"
export default function Funnels() {
    return (
        <div className="flex flex-col h-full items-center p-10" >
            <h1 className="text-2xl font-semibold mt-4 mb-5" >What type of funnel do you want to build?</h1>
            <div className=" grid grid-rows-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full h-full p-10 pt-1">
                <FunnelCard text={"Sales Funnel"} Icon={SalesFunnelIcon} to={"/FunnelBuilder"} />
                <FunnelCard text={"Lead Generation"} Icon={LeadGenerationIcon} />
                <FunnelCard text={"Home"} Icon={HomeIcon} />
                <FunnelCard text={"Opt-IN"} Icon={OptInlIcon} />
                <FunnelCard text={"Appointment"} Icon={AppointmentIcon} />
                <FunnelCard text={"Webinar"} Icon={WebinarIcon} />
                <FunnelCard text={"Coupon"} Icon={CouponIcon} />
                <FunnelCard text={"Sales Funnel"} Icon={SalesFunnel2Icon}  />
            </div>
        </div>
    )
}
