const MaintenanceCard = ( props : any ) => {

    return (
        <div
            className="w-full my-6 p-6 bg-white border border-gray-100  shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-12 h-12 text-gray-800 dark:text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
                </svg>

                <a href="#">
                    <h5 className="mb-4 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${props.cost}</h5>
                </a>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Date</p>
                    <p className="inline-flex items-center text-white">
                        {props.date}
                    </p>
                </div>
                <div>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Workshop</p>
                    <p className="inline-flex items-center text-white">
                        {props.workshop}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default MaintenanceCard