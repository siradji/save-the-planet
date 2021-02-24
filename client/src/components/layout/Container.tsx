import React from 'react'



 interface Iprops {
     children?: React.ReactNode
 }

const Container:React.FC<Iprops> = ({children}) => {
    return (
        <main id="main">
            <div className=" max-w-xs sm:container mx-auto mt-4 md:mt-3 ">
                {children}
            </div>
        </main>
    )
}


export default Container 