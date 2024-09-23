import React, { useState } from 'react'
import Header from './shared_components/Header'
import EmployeesDataTable from './dataTables/hrtables/EmployeesDataTable'
import LeavesDataTable from './dataTables/hrtables/LeavesDataTable'

const HumanResource = () => {

    const [tabs, setTabs] = useState('overview')

    const handleTabs = (value) => {
        setTabs(value)
    }


    return (
        <div className="flex flex-col w-full p-4">
            <div className="">
                <Header />
            </div>
            <div className="flex gap-2 mt-2  flex-wrap lg:gap-3 justify-start p-4">
                <div className="flex flex-col justify-start cursor-pointer  bg-gradient-to-r from-blue-700 to-purple-400 p-3 rounded-lg scale-[.72] mt-2">
                    {/* <img src={leadslogo} alt="db" className="size-7" /> */}
                    <i class="fa-solid fa-people-roof text-white text-2xl"></i>
                    <h1 className="text-white text-2xl font-bold pr-16">HRMS</h1>
                </div>
                <div className="flex gap-2 mt-2  flex-wrap lg:gap-8 justify-start text-center items-center mx-2">
                    <div className="border-2 shadow-lg border-cyan-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center  cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-cyan-400 px-2 rounded-md py-4">
                        <i className="fa-solid fa-circle-user text-2xl"></i>
                        <h2 className="text-sm lg:text-base">Total Users</h2>
                        <h1 className="text-sm lg:text-base my-1 font-bold">10</h1>
                    </div>
                    <div className="border-2 shadow-lg border-green-500 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-green-500 px-2 rounded-md py-4">
                        <i class="fa-solid fa-circle-check text-2xl"></i>
                        <h2 className="text-sm lg:text-base">Present Users</h2>
                        <h1 className="text-sm lg:text-base my-1 font-bold">9</h1>
                    </div>
                    <div className="border-2 shadow-lg border-orange-600 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-orange-600 px-2 rounded-md py-4">
                        <i class="fa-solid fa-circle-xmark text-2xl"></i>
                        <h2 className="text-sm lg:text-base">Absent Users</h2>
                        <h1 className="text-sm lg:text-base my-1 font-bold">1</h1>
                    </div>
                </div>
            </div>
            {/* <div className='p-4'>
                <h1 className='text-xl text-white'>Management Tabs</h1>
            </div> */}
            <div className='flex flex-wrap justify-between mx-8 p-4'>
                <button onClick={() => { handleTabs('overview') }} className={`flex-grow   text-white text-base border-b-4  ${tabs==='overview' ? ' border-blue-600' : 'bg-transparent'} py-2  rounded-t-lg cursor-pointer`}><i class=" fa-solid fa-magnifying-glass-chart text-sky-400 text-xl mx-2"></i> Overview </button>
                <button onClick={() => { handleTabs('employees') }} className={`flex-grow   text-white text-base border-b-4  ${tabs==='employees' ? ' border-blue-600' : 'bg-transparent'} py-2  rounded-t-lg cursor-pointer`}><i class=" fa-solid fa-address-card text-teal-400 mx-2 text-xl"></i> Employees </button>
                <button onClick={() => { handleTabs('attendance') }} className={`flex-grow   text-white text-base border-b-4  ${tabs==='attendance' ? ' border-blue-600' : 'bg-transparent'} py-2  rounded-t-lg cursor-pointer`}><i class=" fa-solid fa-fingerprint text-violet-400 mx-2 text-xl"></i> Attendance </button>
                <button onClick={() => { handleTabs('leaves') }} className={`flex-grow   text-white text-base border-b-4  ${tabs==='leaves' ? ' border-blue-600' : 'bg-transparent'} py-2  rounded-t-lg cursor-pointer`}><i class=" fa-solid fa-person-circle-xmark text-red-500 mx-2 text-xl"></i> Leaves </button>
                <button onClick={() => { handleTabs('seperation') }} className={`flex-grow   text-white text-base border-b-4  ${tabs==='seperation' ? ' border-blue-600' : 'bg-transparent'} py-2  rounded-t-lg cursor-pointer`}><i class=" fa-solid fa-person-walking-luggage text-stone-400 mx-2 text-xl"></i> Seperation </button>
                <button onClick={() => { handleTabs('compliance') }} className={`flex-grow   text-white text-base border-b-4  ${tabs==='compliance' ? ' border-blue-600' : 'bg-transparent'} py-2  rounded-t-lg cursor-pointer`}><i class=" fa-solid fa-file-circle-check text-orange-500 mx-2 text-xl"></i> Compliance </button>
            </div>
            {tabs === 'overview' && (
                <div className='px-4 '>
                    <h1 className='text-white'>Overview</h1>
                </div>
            )}
            {tabs === 'employees' && (
                <div className='px-4 '>       
                    <div>
                        <EmployeesDataTable/>
                    </div>
                </div>
            )}
            {tabs === 'attendance' && (
                <div className='px-4 '>
                    <h1 className='text-white'>attendance</h1>
                </div>
            )}
            {tabs === 'leaves' && (
                <div className='px-4 '>
                    <h1 className='text-white'>
                        <div>
                            <LeavesDataTable/>
                        </div>
                    </h1>
                </div>
            )}
           
            {tabs === 'seperation' && (
                <div className='px-4 '>
                    <h1 className='text-white'>seperation</h1>
                </div>
            )}
            {tabs === 'compliance' && (
                <div className='px-4 '>
                    <h1 className='text-white'>compliance</h1>
                </div>
            )}
        </div>
    )
}

export default HumanResource
