import React,{useState} from 'react'
import "./Header.css"
import Axios from "axios";
import styled from "styled-components/dist/styled-components.browser.esm";
import Post from "./Post";
export default function Header ({props}) {
    const [state,setState]=useState({
        posts:[],
        div:false,
        click:false
    })
const Change=()=>{
        state.click=(<img alt="moon" src={require("./../assets/img/moon.png")}/>)
    setState({
        state:!state.click
    })
 state.div=  styled.div`
  background: white;
  &:hover {
    background: black;
  }
`;
    setState({
        state:!state.div
    })
}
    const Search=()=>{
        Axios.get("https://api.github.com/users/:id",{
            method:"GET",
            header:{
               'contentBase':"application/json",
                'accept':"application/json"
            },
           mode:"cors",
            body:JSON.stringify({message:"با موفقیت انجام شد"})
        }).then(function(response) {
       const posts=state.posts.data.slice(0,1);
const updatePosts=posts.map((post)=>{
    return{
        ...post,
        message:""
    }
})
       setState({
           posts:updatePosts
       })
            console.log(response)
        })
        .catch(err=>console.log(err)).finally({
            message:"پیام با موفقیت گرفته شد"
        })

    }
    const posts=state.posts.map((post)=>(
        <Post
            message={post.message}
        />
    ))
return(
    <div>
        <div
            onClick={Change}
             className="img">
            <img className="width" src={require("../assets/img/moon.png")} alt="moon"/>
        </div>
        <div className="GitHub">
            <p >
                GitHub Profiles
            </p>
        </div>
        <div className="Enter">
            <p >   Enter a GitHub username<br/> to see the magic</p >
        </div>
        <div className="One">
        <label>
            GitHub Username
        </label>
        </div>
            <div  className="input">
            <input


                   type="text"/>
                {
                    posts
                }
                <img

                    onClick={Search} className="month"
                   alt="search"  src={require("./../assets/img/search.png")}/>

            </div>
    </div>
)
}