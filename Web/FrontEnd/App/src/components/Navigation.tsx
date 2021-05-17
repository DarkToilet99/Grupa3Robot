import React from "react";
import {ReactNode} from "react";

export interface NavigationProps{
    activeScreen:number;
    children:ReactNode[];
}
export const Navigation=({activeScreen, children}:NavigationProps)=>{
return <>{children[activeScreen]}</>;
};