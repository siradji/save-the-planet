import React from 'react';
import { LocationIcon } from 'src/icons';


interface IProps  {
title: string,
city: string 
}


const Header: React.FC<IProps> = ({title, city}) => {
    return (
        <nav className="bg-transparent shadow-xl">
            <div className=" mx-auto sm:container py-3 px-4 sm:px-1 items-center flex flex-row justify-between">
                <h1 className="text-lg sm:text-3xl text-text-color">
                    {title}
                </h1>
                <div className="flex flex-row items-center">
                <LocationIcon classes="text-green-app w-6 h-6" />
                <p className="text-md text-text-color">{city}</p>
                </div>
            </div>
        </nav>
    )
}


export default Header

