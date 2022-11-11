import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {Table} from 'flowbite-react';
import {Button} from 'flowbite-react';
import { GlobalContext } from '../context/GlobalContext'



const Tugas13 = () => {
  const {state}= useContext(GlobalContext)
  const {handleFunction} = useContext(GlobalContext)
  const {data,setData,currentId, setCurrentId,fetchStatus, setFetchStatus,input,setInput} = state
  const {handleInput,handleDelete,handleSubmit,handleEdit,handleIndexScore,fetchData} = handleFunction
  useEffect(() => {
    fetchData()
  }, [])
 
  let i =0;
  useEffect(() => {
    if (fetchStatus === true) {
      fetchData()
      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus]) 
  

  return (
    <>
    <div class="containerTable">
    <Table>
  <Table.Head class="bg-purple-500 text-white">
    <Table.HeadCell>
      NO
    </Table.HeadCell>
    <Table.HeadCell>
      NAMA
    </Table.HeadCell>
    <Table.HeadCell>
      KATEGORI
    </Table.HeadCell>
    <Table.HeadCell>
      DESKRIPSI
    </Table.HeadCell>
    <Table.HeadCell>
      PRICE   
    </Table.HeadCell>
    <Table.HeadCell>
      RATING
    </Table.HeadCell>
    <Table.HeadCell>
      RELEASE YEAR
    </Table.HeadCell>
    <Table.HeadCell>
      SIZE
    </Table.HeadCell>
    <Table.HeadCell>
      IS_ANDROID_APP
    </Table.HeadCell>
    <Table.HeadCell>
      IS_IOS_APP
    </Table.HeadCell>
    <Table.HeadCell>
      ACTION
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    { data !== null && data.map((res) => {
        i += 1;
            return (
              <>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {i}
      </Table.Cell>
      <Table.Cell>  
        {res.name}
      </Table.Cell>
      <Table.Cell>
        {res.category}
      </Table.Cell>
      <Table.Cell>
        {res.description}
      </Table.Cell>
      <Table.Cell>
        {res.price}
      </Table.Cell>
      <Table.Cell>
        {res.rating}
      </Table.Cell>
      <Table.Cell>
        {res.release_year}
      </Table.Cell>
      <Table.Cell>
        {res.size}
      </Table.Cell>
      <Table.Cell>
        {res.is_android_app}
      </Table.Cell>
      <Table.Cell>
        {res.is_ios_app}
      </Table.Cell>
      <Table.Cell>
      <div class="inline-flex space-x-2">
        <button class="edit" onClick={handleEdit} value={res.id}>
            Edit
        </button>
        <button class ="delete" onClick={handleDelete} value={res.id} color="failure">
            Delete
        </button>
        </div>
      </Table.Cell>     
    </Table.Row>
              </>
            )
          })}
  </Table.Body>
    </Table>
    <br/>
        <form onSubmit={handleSubmit}>
        <label class="block">
            <span>Gambar Data Game</span>
            <hr class="mb-2"/>
            <span class="block text-sm font-medium text-slate-700">Image Url :</span>
            <input onChange={handleInput} type="text" value={input.image_url} name="image_url" 
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
            <br/>
            <span>Data Game</span>
            <hr class="mb-2"/>
            <span class="block text-sm font-medium text-slate-700">Name :</span>
            <input onChange={handleInput} type="text" value={input.name} name="name"  
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
            <span class="block text-sm font-medium text-slate-700">Category :</span>
            <input onChange={handleInput} type="text" value={input.category} name="category"
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
            <span class="block text-sm font-medium text-slate-700">Description :</span>
            <input onChange={handleInput} type="text" value={input.description} name="description"  
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
            <span class="block text-sm font-medium text-slate-700">Price :</span>
            <input onChange={handleInput} type="number" value={input.price} name="price"  
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
            <span class="block text-sm font-medium text-slate-700">Rating :</span>
            <input onChange={handleInput} type="number" value={input.rating} name="rating"  
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" min="0" max="5"/>
            <span class="block text-sm font-medium text-slate-700">Release Year :</span>
            <input onChange={handleInput} type="number" value={input.release_year} name="release_year"
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" min="2007" max="2021"/>
              <span class="block text-sm font-medium text-slate-700">Size :</span>
            <input onChange={handleInput} type="number" value={input.size} name="size"
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
            <span>Jenis Perangkat</span>
            <hr class="mb-2"/>
            <span class="block text-sm font-medium text-slate-700">Android ?</span>
            <input onChange={handleInput} type="number" value={input.is_android_app} name="is_android_app"  
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" min="0" max="1"/>
            <span class="block text-sm font-medium text-slate-700">Ios ? </span>
            <input onChange={handleInput} type="number" value={input.is_ios_app} name="is_ios_app"  
            class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" min="0" max="1"/>
            <br/>
            <Button type={'submit'}>
                    Submit
            </Button>
        </label>
        </form>
    </div>


    </>
  )

}

export default Tugas13