import React from 'react'
import {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
	const data = useLoaderData()
  // const [data, SetData] = useState([])
  // useEffect(()=> {
  //   fetch('https://api.github.com/users/tekwanigit')
  //   .then((response)=>{
  //     return response.json()
  //   })
  //   .then(data => SetData(data))
  // }, [])
  return (
    <>
			<div className='bg-gray-700 text-3xl text-white p-4 text-center'> Followers: {data?.followers}</div>
			<div className='p-4'><img src={data?.avatar_url} width={300} /></div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
	const response = await fetch('https://api.github.com/users/tekwanigit')
	return response.json()
}