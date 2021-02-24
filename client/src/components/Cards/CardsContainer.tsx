import React from 'react'
import Card from "./Card";


const CardsContainer:React.FC = () => {
    return (
        <section className="flex flex-row  items-center justify-between space-x-4 sm:space-x-8">
            <Card/>
            <Card/>
            <Card/>
        </section>
    )
}

export default CardsContainer
