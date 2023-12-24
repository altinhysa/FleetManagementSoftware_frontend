import {useState} from "react";

const Modal = (props: any) => {



    return (
        <div>
             <div
                className=" w-auto fixed top-1/2 left-fixed -translate-y-1/2 -translate-x-1/20 overflow-y-auto overflow-x-hidden  z-50 justify-center items-center  max-h-full">
                <div className=" p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Are you sure you want to delete this Vehicle
                            </h3>
                            <button onClick={() => props.setShowModal(false)} type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div><div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            You can't recover your data back.
                        </p>

                    </div>
                        <div
                            className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={() => props.deleteVehicle()} data-modal-hide="default-modal" type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                                accept
                            </button>
                            <button onClick={() => props.setShowModal(false)} data-modal-hide="default-modal" type="button"
                                    className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal