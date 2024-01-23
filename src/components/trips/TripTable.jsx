import {useEffect, useState} from "react";
import Spinner from "../Spinner";
import {Link, redirect} from "react-router-dom";
import Modal from "../Modal";
import Alert from "../Alert";
import {API_URL} from "../../constants/api";
import {Pagination} from "../../utils/Pagination";

const TripTable = () => {
    const [trips, setTrips]  = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalTrips, setTotalTrips] = useState(0);
    const [totalPages, setTotalPages] = useState(0)

    useEffect(()=>{
        const fetchTrips = async () => {

            const response = await fetch(`${API_URL}/trips`)
            const responseJson = await response.json()
            console.log(responseJson)
            setTrips(responseJson)
            setLoading(false)
        }

        fetchTrips()
    },[currentPage])



    if(loading){
        return <Spinner/>
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <div className="grow flex items-center justify-center min-h-screen bg-gray-900">
            <div className="col-span-12 grow m-6">
                <div className="overflow-auto lg:overflow-visible ">
                    <Link to="/addTrip">
                        <button
                            className="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New
                        </button>
                    </Link>

                    <table className="table text-gray-400 space-y-6 text-sm w-full">
                        <thead className="bg-gray-800 text-gray-500">
                        <tr>
                            <th className="p-3 text-left">Vehicle</th>
                            <th className="p-3 text-left">From</th>
                            <th className="p-3 text-left">To</th>
                            <th className="p-3 text-left">Start Date</th>
                            <th className="p-3 text-left">End Date</th>
                            <th className="p-3 text-left">Duration</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {trips.map(trip => (
                            <tr key={trip.id} className="border border-slate-300 p-2">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        {/*<img className="rounded-full h-12 w-12   object-cover"*/}
                                        {/*     src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80"*/}
                                        {/*     alt="unsplash image"/>*/}
                                        <div className="ml-3">
                                            <div className="">{trip.vehicleName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 py-5">
                                    {trip.departure}
                                </td>
                                <td className="p-3 font-bold">
                                    {trip.destination}
                                </td>
                                <td className="p-3">
                                    {trip.startDate}
                                </td>
                                <td className="p-3">
                                    <span className={`text-gray-50 rounded-md px-2`}>{trip.endDate}</span>
                                </td>
                                <td className='p-3'>
                                    {trip.distance} km
                                </td>
                                <td className="p-3">
                                    <Link to={`${trip.id}`} href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                        <i className="material-icons-outlined text-base">visibility</i>
                                    </Link>
                                    <Link to={`edit/${trip.id}`}  className="text-gray-400 hover:text-gray-100 mx-2" >
                                        <i className="material-icons-outlined text-base">edit</i>
                                    </Link>

                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>

                </div>
            </div>
        </div>
    )
}

export default TripTable