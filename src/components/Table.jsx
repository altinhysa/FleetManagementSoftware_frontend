import {useEffect, useState} from "react";

const Table = () => {
    const [vehicles, setVehicles]  = useState([])


    useEffect(()=>{
        const fetchVehicles = async () => {

            const response = await fetch("http://localhost:8080/vehicles")
            const responseJson = await response.json()
            console.log(responseJson._embedded.vehicles)
            setVehicles(responseJson._embedded.vehicles)
        }

        fetchVehicles()
    },[])

    const deleteVehicle = async (id) => {
        const response = await fetch(`http://localhost:8080/vehicles/${id}`, {method: "DELETE"})
        const responseJson = await response.text()
        const vehicleId = JSON.parse(responseJson).id

        const newVehicles = vehicles.filter(vehicle => vehicle.id !== vehicleId)
        setVehicles(newVehicles)
    }

    return (
        <div className="grow flex items-center justify-center min-h-screen bg-gray-900">
            <div className="col-span-12 grow m-6">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                        <thead className="bg-gray-800 text-gray-500">
                        <tr>
                            <th className="p-3">Brand</th>
                            <th className="p-3 text-left">Color</th>
                            <th className="p-3 text-left">Licence Plate</th>
                            <th>Odometer</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicles.map(vehicle => (
                            <tr key={vehicle.id} className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        {/*<img className="rounded-full h-12 w-12   object-cover"*/}
                                        {/*     src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80"*/}
                                        {/*     alt="unsplash image"/>*/}
                                        <div className="ml-3">
                                            <div className="">{vehicle.brand}</div>
                                            <div className="text-gray-500">{vehicle.fuel}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    {vehicle.color}
                                </td>
                                <td className="p-3 font-bold">
                                    {vehicle.licencePlate}
                                </td>
                                <td className="p-3">
                                    {vehicle.odometer}
                                </td>
                                <td className="p-3">
                                    <span className="bg-green-500 text-gray-50  rounded-md px-2">{vehicle.status}</span>
                                </td>
                                <td className="p-3">
                                    <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                        <i className="material-icons-outlined text-base">visibility</i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                                        <i className="material-icons-outlined text-base">edit</i>
                                    </a>
                                    <button onClick={() => deleteVehicle(vehicle.id)} className="text-gray-400 hover:text-gray-100 ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table