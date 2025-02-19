import { GoHome } from "react-icons/go";
import { CgToolbox } from "react-icons/cg";
import { RiSchoolLine } from "react-icons/ri";


export const menuItems = [
  {
    path: "/dashboard?overview=overview",
    icon: <GoHome className="w-5 h-5" />,
    label: "Dashboard",
    section: "overview",
  },
  {
    path: "/dashboard?overview=investment",
    icon: <CgToolbox className="w-5 h-5" />,
    label: "Tools",
    section: "investment",
  },
  {
    path: "/dashboard?overview=insurance",
    icon: <RiSchoolLine className="w-5 h-5" />,
    label: "Tax Learning",
    section: "insurance",
  },
];
