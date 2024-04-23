import AboutCard from "./AboutCard"
import StudentDetailsForm from "./StudentDetailsForm"
import LoginCard from "./LoginCard"
import ResultCard from "./ResultCard"
import FAQCard from "./FAQCard"

export const nav = [
     { path:     "/about",    name: "About",       element: <AboutCard />,      isMenu: true,     isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <LoginCard />,      isMenu: false,    isPrivate: false  },
     { path:     "/faq",  name: "FAQ",     element: <FAQCard />,    isMenu: true,     isPrivate: false  },
     { path:     "/result",  name: "Result",     element: <ResultCard />,    isMenu: true,     isPrivate: true  },
     { path:     "/details",  name: "Details",     element: <StudentDetailsForm />,    isMenu: true,     isPrivate: true  },
]