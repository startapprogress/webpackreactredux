import React, { useState} from 'react'
import Axios from "axios";
import Post from "./Post";
import "./Sun.css"
import {useHistory} from "react-router";

function Sun({props}){
const [state,setState]=useState({
    click:false,
    posts:[]
})
    const history=useHistory();
    const Search=()=>{
        Axios.get("https://api.github.com/users/:id",{
            method:"GET",
            header:{
                'contentBase':"application/json",
                'accept':"application/json"

            },
            mode:"cors",
            body:JSON.stringify({message:"با موفقیت انجام شد"})
        }).then(response=>{
            const posts=response.data.slice(0,1)
            const updatePosts=posts.Map(post=>{
                return{
                    ...post
                }
            })
            setState({
                posts:updatePosts
            })
        }).catch(err=>console.log(err)).finally({
            message:"پیام با موفقیت گرفته شد"
        })

    }

    return(
        <div

     className="Frag">
            <div onClick={()=>{
                history.push("header")
            }} className="img">
                <img className="width" src={require("../assets/img/sun-outline.png")} alt=""/>
            </div>
            <div className="GitHub">
                <p className="GitHubStyle">
                    GitHub Profiles
                </p>
            </div>
            <div className="Enter">
                <p className="EnterStyle">   Enter a GitHub username<br/> to see the magic</p>
            </div>
            <div className="One">
                <label className="oneStyle">
                    GitHub Username
                </label>
            </div>
            <div className="input">
                <input type="text"/>


            </div>
            <div
                onClick={Search}
                className="search">

                <img className="month" src={require("./../assets/img/search-outline.png")}/>
            </div>
        </div>
    )
}

export default Sun

