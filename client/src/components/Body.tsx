import { ApplicationList } from "./Applications/ApplicationList";
import Top from "./Top"
import { Outlet } from "react-router-dom"

interface BodyProps {
    applications: { id: number; businessName: string; licenseType: string; applicationDate: string; status: string }[];
}

const Body: React.FC<BodyProps> = ({ applications }) => {
    return (
        <div className="mainContent w-[82%] h-full p-8 overflow-auto no-scrollbar items-center justify-center mx-auto ">
            <Top />

            {/* Application List */}
            <ApplicationList applications={applications} />

            {/* Dynamic content rendered here */}
            <div className="flex flex-col items-start gap-8 mt-8">
                <Outlet context={{ applications }} />
            </div>

        </div>
    )
}

export default Body