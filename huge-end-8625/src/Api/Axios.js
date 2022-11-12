import axios from 'axios'
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


    