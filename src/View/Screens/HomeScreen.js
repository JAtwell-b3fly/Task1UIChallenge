import React from  "react";
import HeaderTemplate from "../Layouts/Header Layout Template";
import { NativeBaseProvider } from "native-base";

export default function HomeScreen(){

    return(

        <NativeBaseProvider>

            <HeaderTemplate/>


        </NativeBaseProvider>
            

        
        


    );


}