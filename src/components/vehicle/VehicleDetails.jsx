import {useEffect, useState} from "react";
import Spinner from "../Spinner";
import MaintenanceCard from "../MaintenanceCard";
import Modal from "../Modal";
import Alert from "../Alert";

const VehicleDetails = () => {
    const [vehicle,setVehicle] = useState({})
    const [loading, setLoading] = useState(true)
    const [maintenances, setMaintenances] = useState([])
    const [showDeleteMessage, setShowDeleteMessage] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState("")
    const [showModal, setShowModal] = useState(false)
    const vehicleId = (window.location.pathname).split('/')[2]

    useEffect(()=> {
        const getVehicle = async () => {

            const response = await fetch("http://localhost:8080/api/vehicles/" + vehicleId)
            const responseJson = await response.json()

            setVehicle(responseJson)
            setLoading(false)
        }

        getVehicle()


    },[])

    useEffect(()=> {
        const getMaintenances = async () => {

            const response = await fetch(`http://localhost:8080/api/vehicles/${vehicleId}/maintenances`)
            const responseJson = await response.json()

            console.log(responseJson)
            setMaintenances(responseJson)
            setLoading(false)
        }

        getMaintenances()


    },[])

    const deleteVehicle = async () => {


            const response = await fetch(`http://localhost:8080/api/vehicles/${vehicleId}`, {method: "DELETE"})
            console.log(response)
            if(response.status !== 200){
                setShowDeleteMessage(true)
                setDeleteMessage("Failed deleting vehicle it is assigned to a driver or trip")
                setShowModal(false)
                return;
            }
            setShowDeleteMessage(true)

            setVehicle({})
            setDeleteMessage("Sucessfully deleted vehicle")
            setShowModal(false)



    }

    if(loading){
        <Spinner/>
    }

    return (

        <div className="grow grid grid-cols-2 grid-rows-2 gap-4 p-2">
            <div
                className="w-full p-6 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15.5 10.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 0a2.225 2.225 0 0 0-1.666.75H12m3.5-.75a2.225 2.225 0 0 1 1.666.75H19V7m-7 4V3h5l2 4m-7 4H6.166a2.225 2.225 0 0 0-1.666-.75M12 11V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9h1.834a2.225 2.225 0 0 1 1.666-.75M19 7h-6m-8.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
                </svg>
                <a href="#" >
                    <h5 className="mb-4 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{vehicle.brand}</h5>
                </a>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Status</p>
                        <p  className="inline-flex items-center text-white">
                            <span className={`${vehicle.status === "EN_ROUTE" && "bg-blue-500"} ${vehicle.status === "AVAILABLE" && "bg-green-500"} ${vehicle.status === "OUT_OF_SERVICE" && "bg-red-500"} text-gray-50 rounded-md px-2`}>{vehicle.status}</span>

                        </p>
                    </div>
                    <div>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Driver</p>
                        <p  className="inline-flex items-center text-white">
                            {vehicle.driver ? vehicle.driver : "none"}

                        </p>
                    </div>




                </div>
                <div className="mt-6">
                    {showModal && <Modal setShowModal={setShowModal}  deleteVehicle={deleteVehicle}/>
                    }
                    <button onClick={() => setShowModal(true)} type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete
                    </button>
                    {showDeleteMessage && <Alert showDeleteMessage={setShowDeleteMessage} message={deleteMessage}/>}

                </div>

            </div>

            <div className="row-span-2 w-full p-6 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                {maintenances.slice(0,3).map(maintenance => (
                    <MaintenanceCard key={maintenance.id} cost={maintenance.cost} workshop={maintenance.workshop} date={maintenance.date}/>
                ))}
            </div>

            <div className="row-span-2 row-start-2">
                <div className="relative overflow-x-auto shadow-md">
                    <table className="w-full p-8 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Vehicle Details
                            </th>


                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Brand
                            </th>
                            <td className="px-6 py-4 font-medium text-black">
                                {vehicle.brand}
                            </td>

                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Color
                            </th>
                            <td className="px-6 py-4 font-medium text-black">
                                {vehicle.color}
                            </td>

                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Produced Year
                            </th>
                            <td className="px-6 py-4 font-medium text-black">
                            {vehicle.yearOfProduced}
                            </td>

                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Odometer
                            </th>
                            <td className="px-6 py-4 font-medium text-black">

                            {vehicle.odometer} km
                            </td>

                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row"
                                className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800`}>
                                Distance since last service
                            </th>
                            <td className={`px-6 py-4 font-medium text-black ${vehicle.serviceDistance > 14000 && "bg-yellow-500"}`}>
                            {vehicle.serviceDistance} km
                            </td>

                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Licence Plate
                            </th>
                            <td className="px-6 py-4 font-medium text-black">
                                {vehicle.licencePlate}
                            </td>

                        </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>


    )
}

export default VehicleDetails