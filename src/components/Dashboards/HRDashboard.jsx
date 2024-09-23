import React, { useEffect, useState } from 'react'
import Header from '../shared_components/Header'
import DateTimeDisplay from '../shared_components/DateTimeDisplay'
import dashboardlogo from '../../src/dashboard.png';
import { Link } from 'react-router-dom'
import LineChartDB from '../Charts/LineChartDB'
import BarChartDB from '../Charts/BarChartDB'
import DoughnutChart from '../Charts/DoughnutChart'
import PieChartDB from '../Charts/SalesTargetFunnel'
import FunnelChartApex from '../Charts/FunnelChartApex';
import FunnelChartProjects from '../Charts/FunnelChartProjects';
import MyDataTable from '../dataTables/MyDataTable';
import BarChartPackages from '../Charts/BarChartPackages';
import BarChartDBBrands from '../Charts/BarChartDBBrands';
import SplineAreaChartLeads from '../Charts/SplineAreaChartLeads';
import UserActiveStatusChart from '../Charts/UserActiveStatusChart';
import UserActivityDB from '../Charts/UserActivityDB';
import AttendanceChartDB from '../Charts/AttendanceChartDB';


const HRDashboard = () => {


  return (
    <div className='bg-slate-900 ' >
      <div className="flex w-full">
        <div className="flex-1 p-4">
          <Header />
          <div className='flex gap-2 mt-2  flex-wrap lg:gap-3 justify-start items-center'>
            <div className=' bg-gradient-to-r from-blue-700 to-purple-400 px-3 py-1 rounded-lg mb-1 '>
              <i className="fa-solid fa-chalkboard-user text-white text-lg "></i>
              <h1 className='text-white text-sm pt-1 font-bold cursor-pointer'>HR Dashboard</h1>
            </div>
            <div className=' border-2 shadow-lg border-cyan-400 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-cyan-400  px-2 rounded-md py-4'>
              <i class="fa-solid fa-circle-user text-base"></i>
              <h2 className='text-sm '>Total Users</h2>
              <h1 className='text-sm  my-1 font-bold'>7</h1>
            </div>

            <div className='border-2 shadow-lg border-orange-500 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-orange-500  px-2 rounded-md py-4'>
              <i class="fa-solid fa-clock-rotate-left text-base"></i>
              <h2 className='text-sm '>On Leave</h2>
              <h1 className='text-sm  my-1 font-bold'>0</h1>
            </div>
            {/* <div className='border-2 shadow-lg border-green-500 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-green-500  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-users text-base"></i>
                            <h2 className='text-sm '>Online Users</h2>
                            <h1 className='text-sm  my-1 font-bold'>1</h1>
                        </div> */}
            <div className=' border-2 shadow-lg border-[#cad629] border-l-[12px] flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center   cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-[#cad629]  px-2 rounded-md py-4'>
              <i class="fa-solid fa-people-group text-base"></i>
              <h2 className='text-sm '>Active Users</h2>
              <h1 className='text-sm  my-1 font-bold'>1</h1>
            </div>
          </div>
          {/* CHARTS */}
          {/* <div className='flex justify-start flex-wrap  w-full mt-10 gap-5'>
            <div className=' lg:w-[48%] w-full border-2 border-slate-700 bg-slate-900 rounded-lg shadow-lg'>
              <AttendanceChartDB />
            </div >
            <div className=' lg:w-[48%] w-full  border-2  border-slate-700 bg-slate-900 rounded-lg shadow-lg'>
              <UserActivityDB />
            </div>
          </div> */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
            <div className=' border-2 border-slate-700 bg-slate-900 rounded-lg shadow-lg'>
              <AttendanceChartDB />
            </div >
            <div className=' border-2  border-slate-700 bg-slate-900 rounded-lg shadow-lg'>
              <UserActivityDB />
            </div>
            <div className=' border-2  border-slate-700 bg-slate-900 rounded-lg shadow-lg'>
              <UserActiveStatusChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HRDashboard;
