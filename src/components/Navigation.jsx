import FAQCardEx from "./FAQCardEx"
import StudentDetailsForm from "./StudentDetailsForm"
import LoginCard from "./LoginCard"
import ResultCard from "./ResultCard"
import HomeCard from "./HomeCard"
import AboutCard from "./AboutCard"
import StudentDetailsCard from "./StudentDetailsCard"

export const nav = [
     { path:     "/",    name: "Home",       element: <HomeCard />,      isMenu: false,     isPrivate: false  },
     { path:     "/about",    name: "About",       element: <AboutCard />,      isMenu: true,     isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <LoginCard />,      isMenu: false,    isPrivate: false  },
     { path:     "/faq",  name: "FAQ",     element: <FAQCardEx />,    isMenu: true,     isPrivate: false  },
     { path:     "/result",  name: "Result",     element: <ResultCard />,    isMenu: false,     isPrivate: true  },
     { path:     "/details",  name: "Details",     element: <StudentDetailsForm />,    isMenu: true,     isPrivate: true  },
     { path:     "/showall",  name: "Show All",     element: <StudentDetailsCard />,    isMenu: true,     isPrivate: true  }
]
