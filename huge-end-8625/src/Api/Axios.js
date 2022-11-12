import axios from 'axios'
import { useState } from 'react';
export function CreateAccount(data){
    let ans= axios(
        {
            method:"POST",
            url:"http://localhost:3000/login_data",
            data:data
    }
   
    )
    console.log(ans);
    console.log("hello")
    return ans;
    }

 export function LoginAccount(data){
let ans= axios(
            {
                method:"POST",
                url:"http://localhost:3000/login_data",
                data:data
   }
       


  )
return ans;
 }
   
export  const DealsData =(page,limit)=>{
  return axios(`http://localhost:3000/items`,{
                params:{
                    _page:page,
                    _limit:limit
                  
                }
            } )
 }

 export  const KindsData =(page,limit)=>{
    return axios(`http://localhost:3000/Kinds`,{
                  params:{
                      _page:page,
                      _limit:limit
                    
                  }
              } )
   }
  
  