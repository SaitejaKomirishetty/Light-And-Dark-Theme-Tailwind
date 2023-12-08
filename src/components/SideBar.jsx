import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
function SideBar() {
    return (
        <div
            className="fixed top-0 left-0 h-screen w-16 flex flex-col
                    bg-white dark:bg-gray-900 shadow-lg"
        >
            <SideBarIcon icon={<FaFire className='icoon' size="28" />} />
            <Divider />
            <SideBarIcon icon={<BsPlus className='icoon' size="32" />} />
            <SideBarIcon icon={<BsFillLightningFill className='icoon' size="20" />} />
            <SideBarIcon icon={<BsFillLightningFill className='icoon' size="20" />} />
            <Divider />
            <SideBarIcon icon={<BsGearFill className='icoon' size="22" />} />
        </div>
    );
}

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
    <div className="sidebar-icon group ">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
    
);

const Divider = () => {
    <hr className="sidebar-hr" />;
};
export default SideBar;
