
import App from "../App";
import Header from "./Header";

import Post from "./Post";
const Routes=[
    {
        path:"/",
        component:App,
        exact:true
    },
    {
        path:"/header",
        component:Header,
        exact:true
    },

    {
        path:"/post",
        component:Post
    }
]
export default Routes