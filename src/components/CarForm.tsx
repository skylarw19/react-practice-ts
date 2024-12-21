import { useState } from 'react'

interface Car {
    year: number,
    make: string,
    model: string
}

function CarForm() {
    const [cars, setCars] = useState<Car[]>([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handleAddCar = (e: any) => {
        const newCar:Car = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(c => [...c, newCar])
        // reset form fields
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }
    const handleRemoveCar = (i: number) => {
        setCars(c => c.filter((_, index) => index !== i))
    }
    const handleYearChange = (e: any) => {
        setCarYear(c => c = e.target.value)
    }
    const handleMakeChange = (e: any) => {
        setCarMake(c => c = e.target.value)
    }
    const handleModelChange = (e: any) => {
        setCarModel(c => c = e.target.value)
    }


    return(
        <>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map(({year, make, model}, i) => 
                    <li key={i} onClick={() => handleRemoveCar(i)}>{year} {make} {model}</li>
                )}
            </ul>
            {/* the <br/> is needed at end of inputs otherwise it's in line */}
            <input type="number" placeholder="year" value={carYear} onChange={handleYearChange} /><br/> 
            <input type="text" placeholder="make" value={carMake} onChange={handleMakeChange} /><br/>
            <input type="text" placeholder="model" value={carModel} onChange={handleModelChange} /><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </>
    )
}

export default CarForm