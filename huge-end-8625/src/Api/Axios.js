import axios from 'axios'
import { useState } from 'react';
export function CreateAccount(data){
    let ans= axios(
        {
            method:"POST",
            url:"http://localhost:3001/login_data",
            data:data
    }
   
    )
    return ans;
    }

 export function LoginAccount(data){
let ans= axios(
            {
                method:"POST",
                url:"http://localhost:3001/login_data",
                data:data
   }
       


  )
return ans;
 }
   
export  const DealsData =(page,limit)=>{
  return axios(`http://localhost:3001/meals`,{
                params:{
                    _page:page,
                    _limit:limit
                  
                }
            } )
 }
 export  const DealsDataOne =(id)=>{
    return axios(`http://localhost:3001/meals/${id}` )
   }

 export  const KindsData =(page,limit)=>{
    return axios(`http://localhost:3001/moments`,{
                  params:{
                      _page:page,
                      _limit:limit
                    
                  }
              } )
   }
  
  
 export  const KindsDataOne =(id)=>{
    return axios(`http://localhost:3001/moments/${id}` )
   }
  



   export function Order(data){
    let ans= axios(
        {
            method:"POST",
            url:"http://localhost:3001/order",
            data:data
    }
   
    )

    return ans;
    }

    export function GetOrder(){
        let ans= axios(
            {
                method:"GET",
                url:"http://localhost:3001/order",
        }
       
        )
        return ans;
        }

        export function DeliteOrder(id){
            let ans= axios(
                {
                    method:"DELETE",
                    url:`http://localhost:3001/order/${id}`,
            }
           
            )
        
            return ans;
            }

            export function UpdateData(id,data){
                let ans= axios(
                    {
                        method:"PATCH",
                        url:`http://localhost:3001/order/${id}`,
                        data:data
                }
               
                )
            
                return ans;
                }