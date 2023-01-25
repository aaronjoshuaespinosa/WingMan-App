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
        name: 'Dashboard',
        link: "/dashboard",
        desc: "An overview of your activity in WingMan.",
    },
    {
        id: 1,
        name: "Marketplace",
        link: "/marketplace",
        desc: "In need or looking for something? You may find it here!",
    },
    {
        id: 2,
        name: "Appointments",
        link: "/appointments",
        desc: "Schedule appointments if you need documents or even uniform.",
    },
    {
        id: 3,
        name: "News & Announcements",
        link: "/news-and-announcements",
        desc: "New and updated news and announcements from inside the campus.",
    },
    {
        id: 4,
        name: "Complaint System",
        link: "/complaint-system",
        desc: "Inconvenience? Send it here to be the voice for others.",
    },
    {
        id: 5,
        name: "FAQs",
        link: "/faqs",
        desc: "Looking for answers? Post an FAQ and find out!",
    },
]

export const navMenu = [
    // {
    //     id: 0,
    //     name: "Your Profile",
    //     link: "/profile"
    // },
    // {
    //     id: 1,
    //     name: "Your Cart",
    //     link: "/cart"
    // },
    {
        id: 0,
        name: "Your Appointments",
        link: "/appointments-user"
    },
    {
        id: 1,
        name: "Your Questions",
        link: "/faq-user"
    },
    {
        id: 2,
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
        twtrIcon: <BsTwitter />,
        twtrLink: "https://twitter.com/_eyrooonnn",
        twtrState: true,
        fbIcon: <BsFacebook />,
        fbLink: "https://www.facebook.com/eyrooonnn",
        fbState: true,
        igIcon: <BsInstagram />,
        igLink: "https://www.instagram.com/_eyrooonnn/",
        igState: true,
        ghIcon: <BsGithub />,
        ghLink: "https://github.com/eyrooonnn",
        ghState: true,
    },
    {
        id: 1,
        img: "https://ik.imagekit.io/xzgmktvzg/bernard.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673631437937",
        name: "Bernard Sarroca",
        role1: "Backend Developer",
        role2: "Database Admin",
        twtrIcon: <BsTwitter />,
        twtrLink: "",
        twtrState: false,
        fbIcon: <BsFacebook />,
        fbLink: "https://www.facebook.com/bernarddddd",
        fbState: true,
        igIcon: <BsInstagram />,
        igLink: "https://www.instagram.com/i.am.nards/",
        igState: true,
        ghIcon: <BsGithub />,
        ghLink: "https://github.com/iamnards",
        ghState: true,
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/xzgmktvzg/charles.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673631437848",
        name: "Charles Camantigue",
        role1: "Project Manager",
        role2: "QA Manager",
        twtrIcon: <BsTwitter />,
        twtrLink: "",
        twtrState: false,
        fbIcon: <BsFacebook />,
        fbLink: "https://www.facebook.com/Charles.Hiei",
        fbState: true,
        igIcon: <BsInstagram />,
        igLink: "https://www.instagram.com/chrls.hiei/",
        igState: true,
        ghIcon: <BsGithub />,
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

export const news = [
    {
        id: 0,
        name: "WEEKLONG STRASUC OLYMPICS 2022 OFFICIALLY ENDS",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2022/12/29/weeklong-strasuc-olympics-2022-officially-ends/",
        new: true,
        img: "https://ik.imagekit.io/xzgmktvzg/n1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715712",
    },
    {
        id: 1,
        name: "CvSU RECEIVES RECOGNITION FROM PARTNER AGENCIES",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2022/12/29/cvsu-receives-recognition-from-partner-agencies/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/n2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715312",
    },
    {
        id: 2,
        name: "CVSU OFFICIALS PARTICIPATE IN REGIONAL FUTURES CORSONTIUM WORKSHOP",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2022/12/29/cvsu-officials-participate-in-regional-futures-consortium-workshop/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/n3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715624",
    },
    {
        id: 3,
        name: "CvSU HOSTS 2ND SEASEC",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2022/12/29/cvsu-hosts-2nd-seacec/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/n4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715165",
    },
    {
        id: 4,
        name: "CON STARTS LIMITED F2F CLASSES",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2022/03/09/college-of-nursing-starts-limited-f2f-classes/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/n5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715529",
    },
    {
        id: 5,
        name: "CvSU WINS 4 MEDALS IN NATIONAL KARATE TOURNAMENT",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2021/10/29/cvsu-wins-4-medals-in-national-karate-tournament/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/n6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715683",
    },
]

export const firstNews = [
    {
        id: 0,
        name: "WEEKLONG STRASUC OLYMPICS 2022 OFFICIALLY ENDS",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2022/12/29/weeklong-strasuc-olympics-2022-officially-ends/",
        new: true,
        img: "https://ik.imagekit.io/xzgmktvzg/n1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715712",
    },
    {
        id: 1,
        name: "CvSU RECEIVES RECOGNITION FROM PARTNER AGENCIES",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2022/12/29/cvsu-receives-recognition-from-partner-agencies/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/n2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715312",
    },
    {
        id: 2,
        name: "CVSU OFFICIALS PARTICIPATE IN REGIONAL FUTURES CORSONTIUM WORKSHOP",
        author: "CvSU",
        link: "https://cvsu.edu.ph/2022/12/29/cvsu-officials-participate-in-regional-futures-consortium-workshop/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/n3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715624",
    },
]

export const announcements = [
    {
        id: 0,
        name: "NEW CEIT MERCH HAS DROPPED",
        author: "CEIT-SC",
        link: "https://www.facebook.com/ceitsc.cvsumain/posts/pfbid02aRfqngEKG5Mx2i8WtmMtWzo4a8DrJPtrw7gZE5jJVKEvbqJEcvFfy4hFVQevRmxMl",
        new: true,
        img: "https://ik.imagekit.io/xzgmktvzg/a6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708719389"
    },
    {
        id: 1,
        name: "SCHEDULE OF FINAL EXAMS",
        author: "CvSU Registrar",
        link: "https://www.facebook.com/photo/?fbid=643095704281568&set=a.565284382062701",
        new: true,
        img: "https://ik.imagekit.io/xzgmktvzg/a5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708718310"
    },
    {
        id: 2,
        name: "F2F CLASSES UPDATE",
        author: "CSG",
        link: "https://www.facebook.com/cvsu.csgmain/photos/a.2088723401169486/8612303998811361/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/a1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715626"
    },
    {
        id: 3,
        name: "APPLICATION FOR ISKO'T ISKA NI CSG 2023",
        author: "CSG",
        link: "https://www.facebook.com/cvsu.csgmain/posts/pfbid0bi9qmMVsgPTjBFYKsuXpnTPDy29NrMnDnprX535djGiEjSDK2U47Zc2wpxhTsRfAl",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/a2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715515"
    },
    {
        id: 4,
        name: "DONATION OF TALENTS",
        author: "CSSO",
        link: "https://www.facebook.com/CSSO2016/posts/pfbid0AiPX2wPhaKcgGoyXusHDjVWWdGTVBvo2SqP5pyVizp3TyAxmccW6hFsJK4bJDrBFl",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/a3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708716031"
    },
    {
        id: 5,
        name: "EXTENDED ORG SHIRT PRE-ORDER",
        author: "CSSO",
        link: "https://www.facebook.com/CSSO2016/posts/pfbid02EqmzfxsX8SZTocgaXnzGfQ7AW2Z4gysSrQgxRFmfFPrqCNK2GKwgqQHBNx6Qwo8el",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/a4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715620"
    },
]

export const firstAnnouncements = [
    {
        id: 0,
        name: "NEW CEIT MERCH HAS DROPPED",
        author: "CEIT-SC",
        link: "https://www.facebook.com/ceitsc.cvsumain/posts/pfbid02aRfqngEKG5Mx2i8WtmMtWzo4a8DrJPtrw7gZE5jJVKEvbqJEcvFfy4hFVQevRmxMl",
        new: true,
        img: "https://ik.imagekit.io/xzgmktvzg/a6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708719389"
    },
    {
        id: 1,
        name: "SCHEDULE OF FINAL EXAMS",
        author: "CvSU Registrar",
        link: "https://www.facebook.com/photo/?fbid=643095704281568&set=a.565284382062701",
        new: true,
        img: "https://ik.imagekit.io/xzgmktvzg/a5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708718310"
    },
    {
        id: 2,
        name: "F2F CLASSES UPDATE",
        author: "CSG",
        link: "https://www.facebook.com/cvsu.csgmain/photos/a.2088723401169486/8612303998811361/",
        new: false,
        img: "https://ik.imagekit.io/xzgmktvzg/a1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673708715626"
    },
]

export const features = [
    {
        id: 0,
        name: "MARKETPLACE",
        desc: "Are you searching for an item or a service that you need or are you looking forward to sell an item or a service in order to gain profit? Whether which one of you are in these two, the marketplace is the place for you.",
    },
    {
        id: 1,
        name: "NEWS",
        desc: "Looking for a reliable source of news and announcements inside the campus? WingMan's got you covered!  With news straight from the university and announcements coming from different various school organizations, you can now be informed and updated while also being assured that the information you are getting is verified and true.",
    },
    {
        id: 2,
        name: "FAQs",
        desc: "Do you want to ask something from your fellow schoolmates but you don't have the confidence to do it personally? With this feature it is now possible for you to do it. Just post your question and  you shall receive different answers from your fellow CvSUenos",
    },
    {
        id: 3,
        name: "APPOINTMENTS",
        desc: "A slow transaction consumes a lot of your time and energy, right? That's why this feature allows you to make your own appointment whenever you needed something from the university. So you can have a faster transaction.",
    },
    {
        id: 4,
        name: "COMPLAINTS",
        desc: "Did you have a negative experience at the university? This feature will serve as your platform to let your voice out and also to be heard.",
    },
]