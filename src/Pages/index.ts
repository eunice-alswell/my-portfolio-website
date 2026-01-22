import {lazy} from "react"

export const Home = lazy(() => import("./Home"))
export const AboutMe = lazy(() => import("./AboutMe"))
export const Project = lazy(() => import("./Project"))
export const ProjectDetail = lazy(() => import("./ProjectDetail"))
export const Blog = lazy(() => import("./Blog"))
export const Contact = lazy(() => import("./Contact"))

const Pages = {
    Home,
    AboutMe,
    Project,
    ProjectDetail,
    Blog,
    Contact
}

export default Pages