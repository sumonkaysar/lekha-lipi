import axios from "axios";
import MySingleBlog from "../../components/Dashboard/Profile/MySingleBlog";
import { server } from "../../../links";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const MyBlogs = () => {
    const {user} = useAuth();
    const { data: { data: blogs = [] } = {} } = useQuery
    ({
        queryKey: ['my-blogs'],
        queryFn: () => axios.get(`${server}/blogs/my/${user.email}`)
    })

    return (
        <div className="mb-20 mt-10 w-11/12 mx-auto">
            <h1 className="font-semibold text-3xl uppercase">
                <span>My </span>
                <span className="text-[#064e89]">Blogs</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-6 gap-y-12 xl:gap-10 mt-10">
                {
                    blogs?.map(blog => <MySingleBlog
                        key={blog._id}
                        blog={blog}
                    />)
                }
            </div>
        </div>
    )
};

export default MyBlogs