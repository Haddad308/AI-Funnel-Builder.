/* eslint-disable react/prop-types */

export default function StatusButton({status}) {
    return (
        <div className="bg-[#e7e7eb] w-32 h-10 flex justify-center items-center rounded-lg mb-10" >
            {status? <p className="text-[#0C0C27] text-base font-semibold" >
                Completed
            </p> : <p className="text-[#8D93A1] text-base font-semibold" >
                InCompleted
            </p>}
        </div>
    )
}
