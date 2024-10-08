import React, { useEffect, useState } from 'react'
import Header from './shared_components/Header'
import DateTimeDisplay from './shared_components/DateTimeDisplay'
import dashboardlogo from '../src/dashboard.png';
import { Link } from 'react-router-dom'
import LineChartDB from './Charts/LineChartDB'
import BarChartDB from './Charts/BarChartDB'
import DoughnutChart from './Charts/DoughnutChart'
import SalesTargetFunnel from './Charts/SalesTargetFunnel'
import FunnelChartApex from './Charts/FunnelChartApex';
import FunnelChartProjects from './Charts/FunnelChartProjects';
import AreaChartDB from './Charts/AreaChartDB';
import MultiGroupDB from './Charts/MultiGroupDB';
import MyDataTable from './dataTables/MyDataTable';
import UserActivityDB from './Charts/UserActivityDB';
import UserActiveStatusChart from './Charts/UserActiveStatusChart';
import UserStatusDonutChartDB from './Charts/UserStatusDonutChartDB';

const Dashboard = ({ leadsData, customerData }) => {
    const [leadsDataDB, setLeadsDataDB] = useState(leadsData);
    const [customerDataDB, setcustomerDataDB] = useState(customerData);
    useEffect(() => {
        setLeadsDataDB(leadsData);
        setcustomerDataDB(customerData)
    }, [leadsData, customerData]);

    const latestContactFormId = leadsDataDB.length;
    const latestContactFormIdCustomers = customerDataDB.length;
    return (
        <div className='bg-slate-900 '>
            <div className="flex w-full">
                <div className="flex-1 p-4">
                    <Header />
                    <div className='flex gap-2 mt-2  flex-wrap lg:gap-3 justify-start text-center items-center'>
                        <div className=' bg-gradient-to-r from-blue-700 to-purple-400 p-3 rounded-lg mb-1 '>
                            <img src={dashboardlogo} alt="db" />
                            <h1 className='text-white text-sm pt-1 font-bold cursor-pointer'>Main Dashboard</h1>
                        </div>
                        <div className='border-2 shadow-lg border-cyan-400 border-l-[12px]  flex flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-cyan-400  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-bars-progress text-base"></i>
                            <h2 className='text-sm lg:text-sm'>Total Projects</h2>
                            <h1 className='text-sm lg:text-sm my-1 font-bold'>225</h1>
                        </div>
                        <div className='border-2 shadow-lg border-green-500 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-green-500  px-2 rounded-md py-4'>
                            <i class="fa-regular fa-square-check text-base"></i>
                            <h2 className='text-sm '>Completed Tasks</h2>
                            <h1 className='text-sm  my-1 font-bold'>28</h1>
                        </div>
                        <div className='border-2 shadow-lg border-orange-500 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-orange-500  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-clock-rotate-left text-base"></i>
                            <h2 className='text-sm '>Pending Tasks</h2>
                            <h1 className='text-sm  my-1 font-bold'>15</h1>
                        </div>

                        <div className=' border-2 shadow-lg border-purple-500 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-purple-500  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-circle-user text-base"></i>
                            <h2 className='text-sm '>Total Leads</h2>
                            <h1 className='text-sm  my-1 font-bold'>{latestContactFormId}</h1>
                        </div>
                        <div className='border-2 shadow-lg border-emerald-500 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-emerald-500  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-users text-base"></i>
                            <h2 className='text-sm '>Total Customers</h2>
                            <h1 className='text-sm  my-1 font-bold'>{latestContactFormIdCustomers}</h1>
                        </div>
                        <div className=' border-2 shadow-lg border-[#cad629] border-l-[12px] flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-[#cad629]  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-people-group text-base"></i>
                            <h2 className='text-sm '>Active Users</h2>
                            <h1 className='text-sm  my-1 font-bold'>1</h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-0 md:mx-5'>
                        <div className=' border-2 border-slate-700 px-2 rounded-lg   w-full  mt-6 '>
                            <div className=' bg-slate-900 rounded-lg shadow-lg py-3'>
                                <div className='px-3 text-lg mb-5'>
                                    <h1 className='text-white font-semibold'>Leads Data Per Week</h1>
                                </div>
                                <AreaChartDB leadsDataDB={leadsDataDB} />
                                {/* <LineChartDB leadsDataDB={leadsDataDB} customerDataDB={customerDataDB} /> */}
                            </div>
                        </div>
                        <div className=' border-2 border-slate-700 px-2 rounded-lg  w-full   mt-6 '>
                            <div className=' bg-slate-900 rounded-lg shadow-lg py-3'>
                                <div className='text-lg px-3 mb-5'>
                                    <h1 className='text-white font-semibold'>Leads and Customers Conversion</h1>
                                </div>
                                <BarChartDB leadsDataDB={leadsDataDB} customerDataDB={customerDataDB} />
                            </div>
                        </div>
                        <div className=' border-2 border-slate-700 px-2 rounded-lg  w-full  mt-6 '>
                            <div className=' bg-slate-900 rounded-lg shadow-lg py-3'>
                                <div className='text-lg px-3 mb-5'>
                                    <h1 className='text-white font-semibold'>Current Active Users</h1>
                                </div>
                                {/* <BarChartDB leadsDataDB={leadsDataDB} customerDataDB={customerDataDB} /> */}
                                {/* <MultiGroupDB /> */}
                                <UserStatusDonutChartDB />
                            </div>
                        </div>
                        <div className=' lg:h-[100px] w-full  '>
                            <div className=' border-2 border-slate-700 bg-slate-900 rounded-lg shadow-lg py-3'>
                                <div className='text-xl px-3 mb-5'>
                                    <h1 className='text-white font-semibold'>Projects By Status</h1>
                                </div>

                                <FunnelChartProjects />
                            </div>
                        </div>

                        <div className='  w-full '>
                            <div className=' border-2 border-slate-700 bg-slate-900 rounded-lg shadow-lg py-3'>
                                <div className='text-xl px-3 mb-5'>
                                    <h1 className='text-white font-semibold'>Customers By Status </h1>
                                </div>
                                <FunnelChartApex />
                            </div>
                        </div>
                        <div className=' w-full  '>
                            <div className='border-2 border-slate-700 bg-slate-900 rounded-lg shadow-lg'>
                                <div className='text-xl mt-2 px-3 mb-5'>
                                    <h1 className='text-white font-semibold'>Sales Target </h1>
                                </div>
                                <div className='flex justify-center'>
                                    <SalesTargetFunnel />
                                </div>
                            </div>
                        </div>

                    </div>
                   
                        <div className='grid grid-cols-1 border-2 border-slate-700 bg-slate-900 rounded-lg shadow-lg mt-4 mx-0 md:mx-5'>
                            <div className='text-lg px-3 mb-5'>
                                <h1 className='text-white font-semibold mt-2'>Task Stages</h1>
                                <MultiGroupDB />
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Dashboard
