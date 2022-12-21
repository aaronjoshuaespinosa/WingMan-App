import { MdDashboard, MdShoppingCart, MdOutlineAccessTimeFilled, MdError } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMegaphoneSharp } from "react-icons/io5";

export const signinInputs = [
    {
        id: 1,
        name: "email",
        type: "text",
        placeholder: "Enter your CvSU Email"
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password"
    }
]

export const joinusInputs = [
    {
        id: 1,
        name: "fName",
        type: "text",
        placeholder: "First Name"
    },
    {
        id: 2,
        name: "lName",
        type: "text",
        placeholder: "Last Name"
    },
    {
        id: 3,
        name: "uName",
        type: "text",
        placeholder: "Username"
    },
    {
        id: 4,
        name: "email",
        type: "text",
        placeholder: "CvSU Email"
    },
    {
        id: 5,
        name: "password",
        type: "password",
        placeholder: "Password"
    },
    {
        id: 6,
        name: "confPassword",
        type: "password",
        placeholder: "Confirm Password"
    }
]

export const navIcons = [
    <MdDashboard />,
    <MdShoppingCart />,
    <MdOutlineAccessTimeFilled />,
    <IoMegaphoneSharp />,
    <MdError />,
    <AiFillQuestionCircle />,
]

export const navLinks = [
    {
        id: 0,
        name: "Dashboard",
        link: "/dashboard"
    },
    {
        id: 1,
        name: "Marketplace",
        link: "/marketplace"
    },
    {
        id: 2,
        name: "Appointments",
        link: "/appointments"
    },
    {
        id: 3,
        name: "News & Announcements",
        link: "/news-and-announcements"
    },
    {
        id: 4,
        name: "Complaint System",
        link: "/complaint-system"
    },
    {
        id: 5,
        name: "FAQs",
        link: "/faqs"
    }
]