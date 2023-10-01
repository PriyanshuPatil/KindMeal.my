import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Appcontext } from "../Context/Appcontext";

/* Register New User  Api Function*/

export const CreateAccount = async (data, toast) => {
  let value = {
    username: data.username,
    email: data.email,
    password: data.password,
  };

  if (data.username && data.email && data.password) {
    try{
     let ans = await axios({
      method: "POST",
      url: "https://enchanting-teal-llama.cyclic.cloud/user/register",
      data: value,
    }) 
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    
    }catch(err){
      toast({
        title: "Account Allready Created",
        description: "We've are looking for your login.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  } else {
    toast({
      title: "Provide All Credentials.",
      description: "We've are looking for your all credentials.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  }
};

/* Login User Api Function*/

export const LoginAccount = async (data, toast,changeState,token_data) => {
  let value = {
    email: data.email,
    password: data.password,
  };

  if(data.email && data.password){
    try{
        let ans = await axios({
          method: "POST",
          url: "https://enchanting-teal-llama.cyclic.cloud/user/login",
          data: value,
        }) ;
         toast({
              title: "Login Successfull.",
              description: "You are login now,enjoy.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            changeState({token:ans.data.token,username:data.email,password:data.password})
       }catch(err){
        toast({
              title: "Wrong Credentials.",
              description: "Please Try To fill correct mail and password.",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
       }
  }else{
    toast({
      title: "Provide All Credentials.",
      description: "We've are looking for your all credentials.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  }
};

export const DealsData = (page, limit) => {
  return axios(`https://enchanting-teal-llama.cyclic.cloud/meals`, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};
export const DealsDataOne = (id) => {
  return axios(`https://enchanting-teal-llama.cyclic.cloud/meals/${id}`);
};

export const KindsData = (page, limit,token) => {
  return axios(`https://enchanting-teal-llama.cyclic.cloud/moments`, {
    headers:{authorization:token}
  });
};

export const KindsDataOne = (id) => {
  return axios(`https://enchanting-teal-llama.cyclic.cloud/moments/${id}`);
};

export function Order(data) {
  let ans = axios({
    method: "POST",
    url: "https://enchanting-teal-llama.cyclic.cloud/orders",
    data: data,
  });

  return ans;
}

export function GetOrder() {
  let ans = axios({
    method: "GET",
    url: "https://enchanting-teal-llama.cyclic.cloud/order",
  });
  return ans;
}

export function DeliteOrder(id) {
  let ans = axios({
    method: "DELETE",
    url: `https://enchanting-teal-llama.cyclic.cloud/order/${id}`,
  });

  return ans;
}

export function UpdateData(id, data) {
  let ans = axios({
    method: "PATCH",
    url: `https://enchanting-teal-llama.cyclic.cloud/order/${id}`,
    data: data,
  });

  return ans;
}
