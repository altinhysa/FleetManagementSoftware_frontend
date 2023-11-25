import {useEffect, useState} from "react";
import Spinner from "../Spinner";

const DriverView = (props: any) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [address, setAdrress] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [active, setActive] = useState("")
    const [available, setAvailable] = useState("")
    const [loading , setLoadig] = useState(true)

    const  driverId = (window.location.pathname ).split("/")[2]

    useEffect(() => {
        const getDriver = async () => {
            const response = await fetch("http://localhost:8080/drivers/" + driverId)
            const driver = await response.json()

            setName(driver.name)
            setSurname(driver.surname)
            setBirthdate(driver.birthdate)
            setAdrress(driver.address)
            setEmail(driver.email)
            setTelephone(driver.telephone)
            setActive(driver.active)
            setAvailable(driver.available)
            setLoadig(false)
        }
        getDriver()
    }, []);

    if(loading){
        return <Spinner/>
    }

    return (


        <div className="profile grow">
            <div className=" flex flex-col items-stretch p-5">
                <div className="text-slate-600 text-center text-2xl font-bold leading-5 mt-1 max-md:-ml-2">
                    User Profile
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fece29bc-f506-410b-8adf-7df061182cc7?"
                    className="aspect-[143] object-contain object-center w-[143px] stroke-[1px] stroke-stone-300 overflow-hidden max-w-full mt-4 self-start"
                />
                <div className="w-full -mr-5 mt-16 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                            <div className="grow max-md:max-w-full max-md:mt-10">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                                        <img
                                            loading="lazy"
                                            src="https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/People-09-2-512.png"
                                            className="aspect-[1.01] object-contain object-center w-[105px] overflow-hidden shrink-0 max-w-full grow max-md:mt-5"
                                        />
                                    </div>
                                    <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                                        <div className="flex flex-col items-stretch my-auto max-md:mt-8">
                                            <div
                                                className="text-slate-600 text-xl font-bold leading-6 whitespace-nowrap">
                                                {name} {surname}
                                            </div>
                                            <div className="text-slate-600 text-xl leading-6 whitespace-nowrap mt-4">
                                                {birthdate}
                                            </div>
                                            <div className="text-gray-500 text-base leading-5 whitespace-nowrap mt-3.5">
                                                {address}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex justify-between gap-5 mt-3.5 max-md:mt-10">
                                <div
                                    className="text-white text-center text-sm font-bold leading-5 whitespace-nowrap justify-center items-stretch border bg-slate-600 grow px-5 py-5 rounded-lg border-solid border-slate-600">
                                    Upload New Photo{" "}
                                </div>
                                {/*<div*/}
                                {/*    className="text-slate-600 text-center text-sm font-bold leading-5 whitespace-nowrap justify-center items-center border border-[color:var(--peak-primary,#384D6C)] bg-white grow px-5 py-5 rounded-lg border-solid">*/}
                                {/*    Delete*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*section2*/}

            <div className="flex flex-col p-10">
                <div className="flex w-[672px] max-w-full items-stretch justify-between gap-5 px-5 max-md:flex-wrap">
                    <div className="text-slate-600 text-base font-bold leading-5 flex-1">
                        Email Address
                    </div>
                    <div className="ml-6 text-slate-600 text-center font-bold leading-5 whitespace-nowrap">
                        Phone Number
                    </div>
                </div>
                <div
                    className="self-stretch flex w-full items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <div
                        className="border border-gray-300 bg-white flex grow basis-[0%] flex-col px-5 py-3 rounded-lg border-solid max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf0344ed-bfed-436c-90d1-954d8d3be904?"
                            className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full"

                        />
                      <p>{email}</p>
                    </div>
                    <div
                        className="border border-gray-300 bg-white flex grow basis-[0%] flex-col px-5 py-3 rounded-lg border-solid max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/676a9f58-c6eb-4483-bde6-cdbab7925f15?"
                            className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full max-md:ml-px"
                        />
                        <p>{telephone}</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-stretch px-5">
                <div className="text-slate-600 text-base font-bold leading-5 w-full -mr-5">
                    Companies
                </div>
                <div className="flex w-full items-stretch justify-content gap-5 -mr-5 mt-6">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92814ef1-fbf6-4293-a112-9f1b976bc204?"
                        className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-600 text-xl font-bold leading-6 my-auto">

                        Active
                    </div>
                </div>
                <div className="flex w-full items-stretch justify-content gap-5 -mr-5 mt-8">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/710be709-8278-4d32-b362-20486a340063?"
                        className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-600 text-xl font-bold leading-6 my-auto">
                        Available
                    </div>
                </div>

            </div>

        </div>
    )
}


export default DriverView