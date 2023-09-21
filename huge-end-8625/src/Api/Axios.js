import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Appcontext } from "../Context/Appcontext";

/* Register New User  Api Function*/

export const CreateAccount = async (data, toast) => {
  let value = {
    first_name: data.username,
    last_name: "hello",
    phone_number: 12345,
    date_of_birth: "1234",
    email: data.email,
    password: data.password,
  };

  if (data.username && data.email && data.password) {
    let ans = await axios({
      method: "POST",
      url: "https://dizzy-tuna-twill.cyclic.app/users/register",
      data: value,
    })
      .then((e) => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((e) => {
        toast({
          title: "Account Allready Created",
          description: "We've are looking for your login.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
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

export const LoginAccount = async (data, toast,changeState) => {
  let value = {
    email: data.email,
    password: data.password,
  };
  if(data.email && data.password){
 let ans = await axios({
    method: "POST",
    url: "https://dizzy-tuna-twill.cyclic.app//users/login",
    data: value,
  }).then((e)=>{
    toast({
        title: "Login Successfull.",
        description: "You are login now,enjoy.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log(e.data.token)
      changeState({...data,token:e.data.token})
  }).catch(()=>{
    toast({
        title: "Wrong Credentials.",
        description: "Please Try To fill correct mail and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
  });
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
  return axios(`http://localhost:3001/meals`, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};
export const DealsDataOne = (id) => {
  return axios(`http://localhost:3001/meals/${id}`);
};

export const KindsData = (page, limit) => {
  return axios(`http://localhost:3001/moments`, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

export const KindsDataOne = (id) => {
  return axios(`http://localhost:3001/moments/${id}`);
};

export function Order(data) {
  let ans = axios({
    method: "POST",
    url: "http://localhost:3001/order",
    data: data,
  });

  return ans;
}

export function GetOrder() {
  let ans = axios({
    method: "GET",
    url: "http://localhost:3001/order",
  });
  return ans;
}

export function DeliteOrder(id) {
  let ans = axios({
    method: "DELETE",
    url: `http://localhost:3001/order/${id}`,
  });

  return ans;
}

export function UpdateData(id, data) {
  let ans = axios({
    method: "PATCH",
    url: `http://localhost:3001/order/${id}`,
    data: data,
  });

  return ans;
}
