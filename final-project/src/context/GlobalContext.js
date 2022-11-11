import React, { createContext, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  
  const [data, setData] = useState(null)
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(true)
    const [input,setInput] = useState({
        name: "",
        description: "",
        category : "",
        release_year : 0,
        size : 0,
        price : 0,
        rating : 0,
        image_url : "",
        is_android_app : 0,
        is_ios_app : 0,
      })
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        if (name === "name"){
            setInput({...input,name:value})
        }
        else if (name ==="category"){
            setInput({...input,category:value})
        }
        else if (name ==="description"){
            setInput({...input,description:value})
        }
        else if (name === "release_year"){
            setInput({...input,release_year:value})
        }
        else if (name === "size"){
            setInput({...input,size:value})
        }
        else if (name === "price"){
            setInput({...input,price:value})
        }
        else if (name === "rating"){
            setInput({...input,rating:value})
        }
        else if (name === "image_url"){
            setInput({...input,image_url:value})
        }
        else if (name === "is_android_app"){
            setInput({...input,is_android_app:value})
        }
        else if (name === "is_ios_app"){
            setInput({...input,is_ios_app:value})
        }
        
      }
    
      const handleDelete = (e) => {
        let idData= parseInt(e.target.value)
        console.log(idData)
    
        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
        .then((res) => {
            setFetchStatus(true)
          })
      }
      
      const handleSubmit = (e) =>{
        e.preventDefault();
        let {
            name,description,category,release_year,size,price,rating,image_url,is_android_app,is_ios_app,
          } = input
        if (currentId === -1) {
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', { name,description,category,release_year,size,price,rating,image_url,is_android_app,is_ios_app, })
            .then((res) => {
              console.log(res)
              setFetchStatus(true)
            })
        } else {
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, { name,description,category,release_year,size,price,rating,image_url,is_android_app,is_ios_app, })
            .then((res) => {
              console.log(res)
              setFetchStatus(true)
            })
        }
        
        setCurrentId(-1)
            
            setInput(
                {
                    name: "",
                    description: "",
                    category : "",
                    release_year : 2007,
                    size : 0,
                    price : 0,
                    rating : 0,
                    image_url : "",
                    is_android_app : 0,
                    is_ios_app : 0,
                }
              )
      }
    
      const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        setCurrentId(idData)
        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
        .then((res) => {
          let data = res.data
  
          setInput(
            {
                name: data.name,
                description: data.description,
                category : data.category,
                release_year : data.release_year,
                size : data.size,
                price : data.price,
                rating : data.rating,
                image_url : data.image_url,
                is_android_app : data.is_android_app,
                is_ios_app : data.is_ios_app,
            }
          )
  
        })
      }

      let fetchData = () =>{
        axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
        })
    }
      let state ={
        data, setData,
        currentId, setCurrentId,
        fetchStatus, setFetchStatus,
        input,setInput,
    }

        let handleFunction  = {
            handleInput,handleDelete,handleSubmit,handleEdit,fetchData
        }

       
    return (
        <GlobalContext.Provider value = {
            {
                state,handleFunction
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}


