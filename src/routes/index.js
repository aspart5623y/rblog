import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import Posts from "../pages/Posts";
import Authors from "../pages/Authors";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/authors" element={<Authors />} />
            <Route 
                path="/post/:id" 
                element={<PostDetails />} 
                />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

export default router;