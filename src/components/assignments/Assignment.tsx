export const Assignment = () => {

    function assignDriver(e: React.MouseEvent<HTMLButtonElement>) {

    }

    return (
        <div className="grow flex items-center justify-center min-h-screen bg-gray-900 p-6">
            <form className="md:container m-6 bg-slate-950 p-6">

                <div className="relative z-0 w-full mb-6 group">

                    <label htmlFor="fuel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assign driver to vehicle</label>
                    <select  id="fuel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option selected value="ELECTRIC">Vehicle 1</option>
                        <option value="SUPER">Vehicle 2</option>
                        <option value="DIESEL">Vehicle 3</option>

                    </select>
                </div>
                    <div className="relative z-0 w-full mb-6 group">

                        <select  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Driver</option>
                            <option  value="EN_ROUTE">Driver 1</option>
                            <option value="AVAILABLE">Driver 2</option>
                            <option value="OUT_OF_SERVICE">Driver 3</option>

                        </select>
                    </div>


                <button onClick={(e) => assignDriver(e)} type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Assign
                </button>
            </form>
        </div>
    )

}