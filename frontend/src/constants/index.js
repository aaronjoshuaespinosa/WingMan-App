import { MdDashboard, MdShoppingCart, MdOutlineAccessTimeFilled, MdError } from "react-icons/md";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMegaphoneSharp } from "react-icons/io5";

export const signinInputs = [
    {
        id: 1,
        name: "email",
        type: "text",
        placeholder: "Enter your CvSU Email",
        title: "Email should have \"@cvsu.edu.ph\" on it."
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        title: "Password must be a minimum of 8 characters."
    }
]

export const joinusInputs = [
    {
        id: 0,
        name: "fName",
        type: "text",
        placeholder: "First Name",
        maxLength: 25,
        title: "Your first name. Ex. Juan"
    },
    {
        id: 1,
        name: "lName",
        type: "text",
        placeholder: "Last Name",
        maxLength: 25,
        title: "Your last name. Ex. Dela Cruz"
    },
    {
        id: 2,
        name: "studentNum",
        type: "text",
        placeholder: "Student Number",
        maxLength: 9,
        title: "Student number must be exactly 9 digits only."
    },
    {
        id: 3,
        name: "email",
        type: "text",
        placeholder: "CvSU Email",
        maxLength: 255,
        title: "Email should have \"@cvsu.edu.ph\" on it."
    },
    {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        maxLength: 255,
        title: "Password must be a minimum of 8 characters."
    },
    {
        id: 5,
        name: "confPassword",
        type: "password",
        placeholder: "Confirm Password",
        maxLength: 255,
        title: "Must be the same as above."
    },
    {
        id: 6,
        name: "username",
        type: "text",
        placeholder: "Username",
        maxLength: 255,
        title: "Username must be a minimum of 8 characters."
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
        name: "News & Announcements",
        link: "/news-and-announcements"
    },
    {
        id: 3,
        name: "FAQs",
        link: "/faqs"
    },
    {
        id: 4,
        name: "Appointments",
        link: "/appointments"
    },
    {
        id: 5,
        name: "Complaint System",
        link: "/complaint-system"
    },
]


export const navHeader = [
    {
        id: 0,
        name: 'Good day, ',
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
    },
]

export const navMenu = [
    {
        id: 0,
        name: "Your Profile",
        link: "/profile"
    },
    {
        id: 1,
        name: "Your Cart",
        link: "/cart"
    },
    {
        id: 2,
        name: "Your Appointments",
        link: "/appointments-user"
    },
    {
        id: 3,
        name: "Your Questions",
        link: "/faq-user"
    },
    {
        id: 4,
        name: "Your Complaints",
        link: "/complaints-user"
    }
]

export const devs = [
    {
        id: 0,
        img: "https://ik.imagekit.io/xzgmktvzg/aj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673631439113",
        name: "AJ Espinosa",
        role1: "Frontend Developer",
        role2: "UX/UI Designer",
        twtrIcon: <BsTwitter/>,
        twtrLink: "https://twitter.com/_eyrooonnn",
        twtrState: true,
        fbIcon: <BsFacebook/>,
        fbLink: "https://www.facebook.com/eyrooonnn",
        fbState: true,
        igIcon: <BsInstagram/>,
        igLink: "https://www.instagram.com/_eyrooonnn/",
        igState: true,
        ghIcon: <BsGithub/>,
        ghLink: "https://github.com/eyrooonnn",
        ghState: true,
    },
    {
        id: 1,
        img: "https://ik.imagekit.io/xzgmktvzg/bernard.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673631437937",
        name: "Bernard Sarroca",
        role1: "Backend Developer",
        role2: "Database Admin",
        twtrIcon: <BsTwitter/>,
        twtrLink: "",
        twtrState: false,
        fbIcon: <BsFacebook/>,
        fbLink: "https://www.facebook.com/bernarddddd",
        fbState: true,
        igIcon: <BsInstagram/>,
        igLink: "https://www.instagram.com/i.am.nards/",
        igState: true,
        ghIcon: <BsGithub/>,
        ghLink: "https://github.com/iamnards",
        ghState: true,
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/xzgmktvzg/charles.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673631437848",
        name: "Charles Camantigue",
        role1: "Project Manager",
        role2: "QA Manager",
        twtrIcon: <BsTwitter/>,
        twtrLink: "",
        twtrState: false,
        fbIcon: <BsFacebook/>,
        fbLink: "https://www.facebook.com/Charles.Hiei",
        fbState: true,
        igIcon: <BsInstagram/>,
        igLink: "https://www.instagram.com/chrls.hiei/",
        igState: true,
        ghIcon: <BsGithub/>,
        ghLink: "",
        ghState: false,
    },
]

export const landingWorks = [
    {
        id: 0,
        title: "JOIN US",
        desc: "Make your own WingMan account by filling out required credentials in the form. It is important to take note that you must use your CvSU Account provided by the university.",
    },
    {
        id: 1,
        title: "SIGN IN",
        desc: "After successfully creating your WingMan account, you can now input your correct email and password in order to enter the website.",
    },
    {
        id: 2,
        title: "EXPLORE",
        desc: "Now that you've already logged-in, you can now view and use the different features offered by WingMan.",
    },
]

export const adminNav = [
    {
        id: 0,
        name: "Dashboard",
        link: "/admin",
    },
    {
        id: 1,
        name: "FAQs",
        link: "/admin/faqs",
    },
    {
        id: 2,
        name: "Appointments",
        link: "/admin/appointments",
    },
    {
        id: 3,
        name: "Complaints",
        link: "/admin/complaints",
    },
]