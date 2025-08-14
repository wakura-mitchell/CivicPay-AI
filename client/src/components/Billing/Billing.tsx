import Sidebar from '../Sidebar'
import BillingDetails from './BillingDetails'
import Top from '../Top'

const Dashboard = () => {
    return (
        <div className="relative w-[95vw] h-[95vh] flex items-center justify-center overflow-auto shadow-2xl border border-transparent rounded-lg m-auto mt-2 p-0.5 bg-gray-200 no-scrollbar">
            <Sidebar />
            <Top />
            <BillingDetails />
        </div>
    )
}

export default Dashboard