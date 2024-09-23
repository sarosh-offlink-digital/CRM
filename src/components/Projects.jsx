import React from 'react'
import Header from './shared_components/Header'
import ProjectDataTable from './dataTables/ProjectDataTable'
import customerlogo from '../src/ticket.png';
import tasklogo from '../src/task.png';
import { Link } from 'react-router-dom';
import totalproj from "../src/documents.png"
import completed from "../src/check.png"
import pending from "../src/pending.png"


const Projects = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='p-4'>
                <Header />
            </div>
            <div className='flex flex-wrap gap-4 mt-4 lg:gap-4 justify-center lg:justify-start text-center items-center px-4  mb-3'>
                <div className='flex flex-col mx-5 lg:mx-0  cursor-pointer bg-gradient-to-r from-blue-700 to-purple-400 py-1 pr-10 pl-2 rounded-lg'>
                    <i class="fa-solid fa-bars-progress  text-white text-xl"></i>
                    <h1 className='text-white font-2xl font-bold '>Projects</h1>
                </div>
                {/* <Link to='/tasks' className='flex flex-col items-center mx-5 lg:mx-0  cursor-pointer bg-gradient-to-r from-purple-700 to-purple-400 py-1 pr-10 pl-2 rounded-lg hover:scale-105'>
                        <i class="fa-solid fa-circle-plus text-white text-xl"></i>
                        <h1 className='text-white  font-bold '>View Tasks</h1>
                    </Link> */}
                <div className="border-2 shadow-lg border-orange-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-orange-400 px-2 rounded-md py-4">
                    <i className="fa-solid fa-thumbs-up text-2xl"></i>
                    <h2 className="text-sm lg:text-base">Initiated</h2>
                    <h1 className="text-sm lg:text-base my-1 font-bold">0</h1>
                </div>
                <div className="border-2 shadow-lg border-cyan-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-cyan-400 px-2 rounded-md py-4">
                    <i className="fa-solid fa-spinner text-2xl"></i>
                    <h2 className="text-sm lg:text-base">In Progress</h2>
                    <h1 className="text-sm lg:text-base my-1 font-bold">3</h1>
                </div>
                <div className="border-2 shadow-lg border-green-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-green-400 px-2 rounded-md py-4">
                    <i className="fa-solid fa-circle-check text-2xl"></i>
                    <h2 className="text-sm lg:text-base">Finished</h2>
                    <h1 className="text-sm lg:text-base my-1 font-bold">3</h1>
                </div>
                <div className="border-2 shadow-lg border-red-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-red-400 px-2 rounded-md py-4">
                    <i className="fa-solid fa-hourglass-half text-2xl"></i>
                    <h2 className="text-sm lg:text-base">Overdue</h2>
                    <h1 className="text-sm lg:text-base my-1 font-bold">1</h1>
                </div>
                <div className="border-2 shadow-lg border-stone-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-stone-400 px-2 rounded-md py-4">
                    <i className="fa-solid fa-circle-pause text-2xl"></i>
                    <h2 className="text-sm lg:text-base">On Hold</h2>
                    <h1 className="text-sm lg:text-base my-1 font-bold">1</h1> 
                </div>
                <div className="border-2 shadow-lg border-yellow-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-yellow-400 px-2 rounded-md py-4">
                    <i className="fa-solid fa-circle-xmark text-2xl"></i>
                    <h2 className="text-sm lg:text-base">Canceled</h2>
                    <h1 className="text-sm lg:text-base my-1 font-bold">1</h1>
                </div>
            </div>
            <div className=" p-1 ">
                <ProjectDataTable />
            </div>
        </div>
    )
}

export default Projects
