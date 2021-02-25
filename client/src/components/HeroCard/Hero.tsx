import React from 'react'
import { DangerIcon, GoodIcon } from '../../icons'


type emissionData = {
    data: {
        aqi: number
    }
}
const Hero: React.FC = () => {
    const [data, setData] = React.useState<emissionData | null>(null);
    const [danger, setDanger] = React.useState<boolean>(true)

    React.useEffect(() => {
        setData({data: {aqi: 60}});
        setDanger(true)
    }, [])
    return (
        <section className="mx-auto max-w-lg">
            <div className="bg-transparent rounded-2xl shadow-lg justify-center flex flex-col py-2 px-2 w-40">
                {data && danger ? (
                <DangerIcon classes={' text-orange-app w-40 h-40'} />
                ): (
                <GoodIcon classes={' text-green-app w-40 h-40'} />
                ) }

                <h1 className={`bg-opacity-50 font-bold text-center text-2xl sm:text-4xl bg-${danger ? "orange-app":"green-app"} py-2 text-white rounded-md`}>
                Co<sub>2</sub> Level is {data && danger ? "High": "Low"}
                 </h1>
            </div>
        </section>
            
    )
}

export default Hero
