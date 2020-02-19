import React,{useState} from 'react'
import "./Header.css"
import Axios from "axios";
import {useHistory} from "react-router";
import Sun from "./Sun";
import {styled} from 'linaria/react'

export default function Header ({props}) {
    const history=useHistory()
    const [state,setState]=useState({
        click:false,
        posts:[]
    })

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
           const person=response.data
          setState(state.posts)
        }).catch(err=>console.log(err)).finally({
            message:"پیام با موفقیت گرفته شد"
        })

    }

return(
    <div>
        <div onClick={()=>{
           history.push("sun")
        }}

             className="img">
            <input type="checkbox" className="toggle"/>
            <img className="width" src={require("../assets/img/moon-outline.png")} alt=""/>
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
            <div className="input">
            <input type="text"/>
                    <img className="month" src={require("./../assets/img/search-outline.png")}/>
                </div>
    </div>
)
}