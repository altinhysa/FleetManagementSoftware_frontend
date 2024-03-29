import {useEffect, useState} from "react";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";
import {API_URL} from "../../constants/api";
import {Pagination} from "../../utils/Pagination";

const DriverTable = () => {
    const [drivers, setDrivers] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalDrivers, setTotalDrivers] = useState(0);
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const fetchDrivers = async () => {
            const response = await fetch(`${API_URL}/drivers?page${currentPage}`)
            const responseJson = await response.json()
            console.log(responseJson)
            console.log(responseJson.content)

            setTotalPages(responseJson.totalPages)
            setTotalDrivers(responseJson.totalElements)
            setDrivers(responseJson.content)
            setLoading(false)
        }
        fetchDrivers()

    }, [])


    const deleteDriver = async (id) => {

        try {
            const response = await fetch(`http://localhost:8080/api/drivers/${id}`, {method: "DELETE"})
            console.log(response)
            const responseJson = await response.json()


            const newDrivers = drivers.filter(driver => driver.id !== id)
            setDrivers(newDrivers)
        } catch (err) {
            console.log(err.message)
        }


    }
    if (loading) {
        return <Spinner/>
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="grow flex items-center justify-center min-h-screen bg-gray-900">
            <div className="col-span-12 grow m-6">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                        <thead className="bg-gray-800 text-gray-500">
                        <tr>
                            <th className="p-3">Full Name</th>
                            <th className="p-3 text-left">E-mail</th>
                            <th className="p-3 text-left">Telephone</th>
                            <th>Active</th>
                            <th className="p-3 text-left">Available</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {drivers.map(driver => (
                            <tr key={driver.id} className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        {/*<img className="rounded-full h-12 w-12   object-cover"*/}
                                        {/*     src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80"*/}
                                        {/*     alt="unsplash image"/>*/}
                                        <div className="ml-3">
                                            <div className="">{driver.name}</div>
                                            <div className="text-gray-500">{driver.surname}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    {driver.email}
                                </td>
                                <td className="p-3 font-bold">
                                    {driver.telephone}
                                </td>
                                <td className="p-3">
                                    {driver.active}
                                    <span
                                        className={`${driver.active === true && "bg-blue-500"} ${driver.active === false && "bg-red-500"} text-gray-50 rounded-md px-2`}>{driver.active.toString()}</span>

                                </td>
                                <td className="p-3">
                                    <span
                                        className={`${driver.available === true && "bg-blue-500"} ${driver.available === false && "bg-red-500"} text-gray-50 rounded-md px-2`}>{driver.available.toString()}</span>

                                </td>
                                <td className="p-3">
                                    <Link to={`${driver.id}`} href="#"
                                          className="text-gray-400 hover:text-gray-100 mr-2">
                                        <i className="material-icons-outlined text-base">visibility</i>
                                    </Link>
                                    <Link to={`edit/${driver.id}`} className="text-gray-400 hover:text-gray-100 mx-2">
                                        <i className="material-icons-outlined text-base">edit</i>
                                    </Link>
                                    <button onClick={() => deleteDriver(driver.id)}
                                            className="text-gray-400 hover:text-gray-100 ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </button>
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
export default DriverTable