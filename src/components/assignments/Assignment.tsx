import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../constants/api";
import Alert from "../Alert";

export const Assignment = () => {
    const [drivers, setDrivers]: any = useState([])
    const [vehicles, setVehicles]: any = useState([])
    const [driverId, setDriverId] = useState(0)
    const [vehicleId, setVehicleId] = useState(0)
    const [errMessage, setErrMessage] = useState("")
    useEffect(() => {
        const getData = async () => {
            const responseVehicles = await axios.get(`${API_URL}/vehicles/filter?available=true`)
            const responseDrivers = await axios.get(`${API_URL}/drivers/filter?available=true`)


            setDrivers(responseDrivers.data)
            console.log(drivers)
            setVehicles(responseVehicles.data)
        }
        console.log('triggered')
        getData().catch(e => {
            console.log(e)
        })

    }, [])


    async function assignDriver(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log(driverId, vehicleId)
        try {
            const response = await axios.patch(`${API_URL}/vehicles/${vehicleId}/driver?driverId=${driverId}`)
            window.location.href = `/vehicles/${vehicleId}`

        } catch (e) {
            setErrMessage("An Error Occured")

        }


    }

    return (
        <div className="grow flex items-center justify-center min-h-screen bg-gray-900 p-6">

            <form className="md:container m-6 bg-slate-950 p-6">

                {errMessage && <Alert message={errMessage}/>}

                <div className="relative z-0 w-full mb-6 group">

                    <label htmlFor="fuel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assign
                        driver to vehicle</label>
                    <select onChange={e => {
                        setVehicleId(+e.target.value)
                    }} id="fuel"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option selected disabled={true} value="SELECT">Select Vehicle</option>
                        {vehicles.map((vehicle: any) => (
                            <option value={vehicle.id}>{vehicle.brand} {vehicle.licencePlate}</option>
                        ))}

                    </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">

                    <select onChange={e => {
                        setDriverId(+e.target.value)
                    }} id="status"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected disabled={true} value="SELECT">Select Driver</option>
                        {drivers.map((driver: any) => (
                            <option value={driver.id}>{driver.name} {driver.surname}</option>
                        ))}
                    </select>
                </div>


                <button onClick={(e) => assignDriver(e)} type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Assign
                </button>
            </form>
        </div>
    )

}