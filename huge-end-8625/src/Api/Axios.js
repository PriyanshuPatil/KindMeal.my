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
    // const [data,setdata]=useState([]);

        let ans= axios(
            {
                method:"POST",
                url:"http://localhost:3000/login_data",
                data:data
        }
       


        )
        // let ans1=ans.then(
        //     res=>{
        //        let product =  res.data;
        //        setdata(product.data);
        //        data.map((el)=>{
        //         console.log(el);
        //         if(el.username=data1.username){
        //             if(el.admin=data1.category){
        //                 if(el.password==data1.password){
        //                     // setuser(true)
        //                 }
        //             }
        //         }
        //        })
        //        console.log(data)
               
        //     }
        // )
        // .catch(
        //     err => {console.log(err) ;
        //     alert('Plz Enter Correct Email & Password')}
        // )
     

        return ans;
        }
   