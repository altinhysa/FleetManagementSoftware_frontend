import {pieArcLabelClasses, PieChart} from "@mui/x-charts";
import {useEffect, useState} from "react";
import axios from "axios";
import {Typography} from "@mui/material";
import {API_URL} from "../../constants/api";

export const Dashboard = () => {
    const [spendings,setSpendings] = useState(0)
    const [pieData, setPieData] : any = useState([])


    useEffect( ()=> {
        const getSpendings =  async () => {
            const response = await axios.get(`${API_URL}/trips/spendings`)
            setSpendings(response.data)
        }

        getSpendings().catch(err => console.log(err))
    },[])

    useEffect(() => {
        const getStatusCount = async () => {
            const response = await axios.get("http://localhost:8080/api/vehicles/statusCount")
            const data : any = []
            Object.keys(response.data).forEach(key => {
                data.push ({
                    value: response.data[key],
                    label: key
                })
            })

            setPieData(data)
            console.log(data)
        }

        getStatusCount()
    },[])

    return (
        <div className="grow">
            <div className="p-4  rounded-lg dark:border-gray-700">
                <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                            <div className="flex justify-between">
                                <div>
                                    <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">${spendings}</h5>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Trip Spendings this week</p>
                                </div>
                                <div
                                    className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                                    12%
                                    <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 10 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                                <div className="flex justify-between items-center pt-5">
                                    <button
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="lastDaysdropdown"
                                        data-dropdown-placement="bottom"
                                        className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                                        type="button">
                                        Last 7 days
                                        <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                    <div id="lastDaysdropdown"
                                         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="#"
                                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                                                    7 days</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                                                    30 days</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                                                    90 days</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <a
                                        href="#"
                                        className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                                        Vehicle Report
                                        <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m1 9 4-4-4-4"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 text-white p-4 md:p-6">
                        <Typography>Vehicles Status</Typography>
                        <PieChart
                            series={[
                                {
                                    data: pieData,
                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                    faded: { innerRadius: 30, additionalRadius: -30, color: 'white'},
                                },
                            ]}

                            height={200}
                        />
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>

                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9 1v16M1 9h16"/>
                        </svg>
                    </p>
                </div>

            </div>
        </div>
    )
}