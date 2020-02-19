import React,{useState} from 'react'
import "./Header.css"
import Axios from "axios";

import styled from "styled-components/dist/styled-components.browser.esm";
export default function Header ({props}) {
    const [state,setState]=useState({
        posts:[],
        div:false,
        click:false
    })

const Change=()=>{
        state.click=(<img src={require("./../assets/img/moon.png")}/>)
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
        }).then(function (response) {
       const updatePosts=state.posts.data;
       setState({
           updatePosts:state.posts
       })
        })

        .catch(err=>console.log(err)).finally({
            message:"پیام با موفقیت گرفته شد"
        })
    }
return(
    <div>
        <div
            onClick={Change}
             className="img">

            <img className="width" src={require("../assets/img/moon.png")} alt=""/>

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
            <input type="text"/>
                    <img onClick={Search} className="month" src={require("./../assets/img/search.png")}/>
                </div>
    </div>
)
}