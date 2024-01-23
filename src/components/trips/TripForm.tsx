import {useEffect, useState} from "react";
import {API_URL} from "../../constants/api";
import axios from "axios";
import Alert from "../Alert";

const TripForm = () => {
    const [startDate, setStartDate] = useState("2023-11-07");
    const [endDate, setEndDate] = useState("2023-11-08");
    const [startTime, setStartTime] = useState("08:00:00");
    const [endTime, setEndTime] = useState("16:00:00");
    const [departure, setDeparture] = useState("Dragodan");
    const [destination, setDestination] = useState("Shkup");
    const [distance, setDistance] = useState(14750);
    const [fuelUsed, setFuelUsed] = useState(20);
    const [fuelPrice, setFuelPrice] = useState(1.52);
    const [vehicles, setVehicles] : any = useState([])
    const [vehicleId, setVehicleId] = useState(0)

    const [message,setMessage] = useState("")
    const [showMessage, setShowMessage] = useState(false)

    useEffect(()=> {

        const fetchAvailableCards = async () => {
            const response = await axios.get(`${API_URL}/vehicles/filter?available=true`)

            setVehicles(response.data)
        }

        fetchAvailableCards().catch(e=>{
            console.log(e)
        })
    },[])

    const timeOptions = Array.from({ length: 24 }, (_, index) => {
        const hour = index < 10 ? `0${index}` : `${index}`;
        const label = index < 12 ? `${index} AM` : `${index - 12} PM`;
        const value = `${hour}:00:00`;
        return { value, label };
    });

    const addTrip = async (e: any) => {
        e.preventDefault()
        const trip = {
            startDate,
            endDate,
            startTime,
            endTime,
            departure,
            destination,
            distance,
            fuelUsed,
            fuelPrice
        }


        try{
            const response = await axios.post(`${API_URL}/trips?vehicleId=${vehicleId}`, trip)

            if (response) {
                window.location.href = "/trips"
            }
        }catch (err){
            console.log(err)
            setMessage("Error check all fields, also the selected car must have a driver")
            setShowMessage(true)
        }

    }

    const disableMessage = () => {
        setShowMessage(false)
    }


    return (

        <div className="grow flex items-center justify-center min-h-screen bg-gray-900 p-6">
            <form className="md:container m-6 bg-slate-950 p-6">
                {showMessage && <Alert message={message} showDeleteMessage={disableMessage}/>}
                <h1 className="py-10 text-white text-4xl">Add new trip</h1>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setStartDate(e.target.value)} type="date" name="floating_email"
                               id="floating_email"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_email"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setEndDate(e.target.value)} type="date" name="floating_email"
                               id="floating_email"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_email"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date
                        </label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">

                        <label htmlFor="fuel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Start Time</label>
                        <select onChange={e => setStartTime(e.target.value)} id="fuel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="Select Time" disabled>Select Time</option>
                            {timeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">

                        <label htmlFor="fuel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select End Time</label>
                        <select onChange={e => setEndTime(e.target.value)} id="fuel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="Select Time" disabled>Select Time</option>
                            {timeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>



                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setDeparture(e.target.value)} type="text" name="floating_email"
                               id="floating_email"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_email"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Departure
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setDestination(e.target.value)} type="text" name="floating_last_name"
                               id="floating_last_name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_last_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Destination

                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={e => setFuelUsed(+e.target.value)} type="number" name="floating_phone"
                               id="floating_phone"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fuel Used
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={e => setFuelPrice(+e.target.value)} type="number" name="floating_phone"
                               id="floating_phone"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fuel Price
                        </label>
                    </div>
                </div>
                <div  className="grid md:grid-cols-2 md:gap-6">

                    <div className="relative z-0 w-full mb-6 group">

                        <label htmlFor="fuel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select End Time</label>
                        <select onChange={e => setVehicleId(+e.target.value)} id="fuel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option selected disabled={true}>Select Car</option>

                            {vehicles.map((vehicle : any ) => (
                                <option key={vehicle.id} value={vehicle.id}>{vehicle.brand} {vehicle.licencePlate} </option>
                            ))}

                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={e => setDistance(+e.target.value)} type="number" name="floating_phone"
                               id="floating_phone"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Distance
                        </label>
                    </div>
                </div>
                <button onClick={(e) => addTrip(e)} type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
            </form>
        </div>
    )
}

export default TripForm