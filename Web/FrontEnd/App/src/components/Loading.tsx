import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

export interface LoadingProps{
    navigateToAutentificare:()=>void;
}

export const Loading=({navigateToAutentificare}:LoadingProps)=>{
    navigateToAutentificare()
    return(<LoadingOutlined/>);
}