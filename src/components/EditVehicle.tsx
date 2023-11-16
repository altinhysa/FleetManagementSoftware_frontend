import {useEffect, useState} from "react";

const EditVehicle = () => {
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [fuel, setFuel] = useState("");
    const [status, setStatus] = useState("");
    const [licencePlate, setLicencePlate] = useState("");
    const [odometer, setOdometer] = useState(0);
    const [yearOfProduced, setYearOfProduced] = useState(0);
    const [active, setActive] = useState(false);

    const vehicleId = (window.location.pathname).split("/")[3]

    useEffect(() => {
        const getVehicle = async () => {
            const response = await fetch("http://localhost:8080/vehicles/" + vehicleId)

            const vehicle = await response.json()
            console.log(vehicle)
            setBrand(vehicle.brand)
            setColor(vehicle.color)
            setFuel(vehicle.fuel)
            setStatus(vehicle.status)
            setLicencePlate(vehicle.licencePlate)
            setOdometer(vehicle.odometer)
            setYearOfProduced(vehicle.yearOfProduced)
            setActive(vehicle.active)
        }
        getVehicle()
    }, [])


    const updateVehicle = async (event: any) => {
        event.preventDefault()
        const vehicle = {
            brand: brand,
            color: color,
            fuel: fuel,
            status: status,
            licencePlate: licencePlate,
            odometer: odometer,
            yearOfProduced: yearOfProduced,
            active: active
        }
            const
        requestOptions = {
            method: "PUT",
            body: JSON.stringify(vehicle),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch("http://localhost:8080/vehicles/" + vehicleId, requestOptions)
        const responseJson = await response.json()
        if (responseJson) {
            window.location.href = ("/vehicles")
        }
        console.log(responseJson)

    }


    return (
        <div className="grow flex items-center justify-center min-h-screen bg-gray-900 p-6">
            <form className="md:container m-6 bg-slate-950 p-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input value={brand} onChange={(e) => setBrand(e.target.value)} type="email" name="floating_email"
                           id="floating_email"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand
                        Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input value={color} onChange={e => setColor(e.target.value)} type="text" name="floating_password"
                           id="floating_password"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">

                    <label htmlFor="fuel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                        fuel</label>
                    <select value={fuel} onChange={e => setFuel(e.target.value)} id="fuel"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option selected value="ELECTRIC">Electric</option>
                        <option value="SUPER">Super</option>
                        <option value="DIESEL">Diesel</option>

                    </select>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">

                        <select value={status} onChange={e => setStatus(e.target.value)} id="status"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Status</option>
                            <option value="EN_ROUTE">En Route</option>
                            <option value="AVAILABLE">Available</option>
                            <option value="OUT_OF_SERVICE">Out of service</option>

                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={licencePlate} onChange={(e) => setLicencePlate(e.target.value)} type="text"
                               name="floating_last_name" id="floating_last_name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_last_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Licence
                            Plate
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={odometer} onChange={e => setOdometer(+e.target.value)} type="number"
                               name="floating_phone" id="floating_phone"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Odometer
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={yearOfProduced} onChange={e => setYearOfProduced(+e.target.value)} type="number"
                               name="floating_company" id="floating_company"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_company"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Produced
                            Year
                        </label>
                    </div>
                </div>
                <div>
                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input checked={active} type="checkbox" onChange={e => setActive(e.target.checked)} value=""
                               className="sr-only peer"/>
                        <div
                            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                    </label>
                </div>
                <button onClick={(e) => updateVehicle(e)} type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
            </form>
        </div>

    )
}

export default EditVehicle