import {useEffect, useState} from "react";

const EditDriver = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [active, setActive] = useState(false)
    const [available, setAvailable] = useState(false)

    const driverId = (window.location.pathname).split("/")[3]

    useEffect(() => {
        const getDriver = async () => {
            const response = await fetch("http://localhost:8080/drivers/" + driverId)

            const driver = await response.json()
            console.log(driver)
            setName(driver.name)
            setSurname(driver.surname)
            setBirthdate(driver.birthdate)
            setAddress(driver.address)
            setEmail(driver.email)
            setTelephone(driver.telephone)
            setActive(driver.active)
            setAvailable(driver.available)
        }
        getDriver()
    }, [])

    const updateDriver = async (event: any) => {
        event.preventDefault()
        const driver = {
            name: name,
            surname: surname,
            birthdate: birthdate,
            address: address,
            email: email,
            telephone: telephone,
            active: active,
            available: available
        }
        const requestOptions = {
            method: "PUT",
            body: JSON.stringify(driver),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch("http://localhost:8080/drivers/" + driverId, requestOptions)
        const responseJson = await response.json()
        if (responseJson) {
            window.location.href = ("/drivers")
        }
        console.log(responseJson)

    }
    return (
        <div className="grow flex items-center justify-center min-h-screen bg-gray-900 p-6">
            <form className="md:container m-6 bg-slate-950 p-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={(e) => setName(e.target.value)} value={name} type="email" name="floating_email"
                           id="floating_email"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={e => setSurname(e.target.value)} value={surname} type="text" name="floating_password"
                           id="name"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Surname</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={(e) => setBirthdate(e.target.value)} value={birthdate} type="date" name="floating_email"
                           id="floating_email"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birthdate
                    </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" name="floating_email"
                               id="floating_email"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_email"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="floating_last_name"
                               id="floating_last_name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_last_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email

                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={e => setTelephone(e.target.value)} value={telephone} type="text" name="floating_phone"
                               id="floating_phone"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telephone
                        </label>
                    </div>

                </div>
                <div  className="grid md:grid-cols-2 md:gap-6">
                    <div>
                        <label className="relative inline-flex items-center mb-5 cursor-pointer">

                            <input type="checkbox" onChange={e => setAvailable(e.target.checked)} value={'available'}
                                   className="sr-only peer"/>
                            <div
                                className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Available</span>
                        </label>
                    </div>

                    <div>
                        <label className="relative inline-flex items-center mb-5 cursor-pointer">
                            <input type="checkbox" onChange={e => setActive(e.target.checked)} value={'active'}
                                   className="sr-only peer"/>
                            <div
                                className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                        </label>
                    </div>
                </div>
                <button onClick={(e) => updateDriver(e)} type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
            </form>
        </div>

)
}
export default EditDriver