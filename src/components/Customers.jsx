import React, { useState } from 'react'
import Header from './shared_components/Header'
import CustomersDataTable from './dataTables/CustomersDataTable'
import { Link } from 'react-router-dom'
import totalproj from "../src/documents.png"
import completed from "../src/check.png"
import pending from "../src/pending.png"
import customerlogo from '../src/customer.png';
const Customers = () => {
    const [totalCustomers, setTotalCustomers] = useState([])
    const [paidCustomers, setPaidCustomers] = useState(0)
    const [unPaidCustomers, setUnpaidCustomers] = useState(0)
    const totalCustomersData = totalCustomers.length
    const totalPaidCustomersData = paidCustomers
    const totalUnPaidCustomersData = unPaidCustomers
    const handleCustomersData = (data) => {
        setTotalCustomers(data);

        let paidCount = 0;
        let unpaidCount = 0;

        data.forEach(customer => {
            if (customer.contact_form_payment_status === 'Paid') {
                paidCount++;
            } else {
                unpaidCount++;
            }
        });

        setPaidCustomers(paidCount);
        setUnpaidCustomers(unpaidCount);
    };
    return (
        <div className='flex flex-col w-full'>
            <div className='p-4'>
                <Header />
            </div>
            <div className='flex  flex-wrap justify-start'>
                <div className='flex flex-col cursor-pointer bg-gradient-to-r from-blue-700 to-blue-400 p-3 rounded-lg scale-[.72] mt-2'>
                    <img src={customerlogo} alt="db" className='size-8 h-auto mt-2' />
                    <h1 className='text-white text-2xl font-bold  pr-14'>Customers</h1>
                </div>
                <div className="flex gap-2 mt-2  flex-wrap lg:gap-8 justify-start text-center items-center mx-2">
                    <div className="border-2 shadow-lg border-cyan-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-cyan-400 px-2 rounded-md py-4">
                        <i className="fa-solid fa-circle-user text-2xl"></i>
                        <h2 className="text-sm lg:text-base">Total Customers</h2>
                        <h1 className="text-sm lg:text-base my-1 font-bold">{totalCustomersData}</h1>
                    </div>
                    <div className="border-2 shadow-lg border-green-500 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-green-500 px-2 rounded-md py-4">
                        <i className="fa-regular fa-circle-check text-2xl"></i>
                        <h2 className="text-sm lg:text-base">Paid Customers</h2>
                        <h1 className="text-sm lg:text-base my-1 font-bold">{totalPaidCustomersData}</h1>
                    </div>
                    <div className="border-2 shadow-lg border-orange-600 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-orange-600 px-2 rounded-md py-4">
                        <i class="fa-solid fa-circle-exclamation text-2xl"></i>
                        <h2 className="text-sm lg:text-base">Unpaid Customers</h2>
                        <h1 className="text-sm lg:text-base my-1 font-bold">{totalUnPaidCustomersData}</h1>
                    </div>
                </div>
            </div>
            <div className=" p-1 ">
                <CustomersDataTable onFetchData={handleCustomersData} />
            </div>
        </div>
    )
}
export default Customers
