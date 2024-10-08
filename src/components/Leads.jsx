import React, { useState } from 'react';
import MyDataTable from './dataTables/MyDataTable';
import Header from './shared_components/Header';
import leadslogo from '../src/leads.png';

const Leads = ({ leadsData }) => {
  const [convertedCustomer, setConvertedCustomer] = useState(0);

  const handleConvertedLeads = (data) => {
    setConvertedCustomer(data);
  };

  const latestContactFormId = leadsData.length;

  return (
    <div className="flex flex-col w-full">
      <div className="p-4">
        <Header />
      </div>
      <div className="flex gap-2 mt-2  flex-wrap lg:gap-3 justify-start text-center items-center">
        <div className="flex flex-col cursor-pointer  bg-gradient-to-r from-blue-700 to-purple-400 p-3 rounded-lg scale-[.72] mt-2">
          <img src={leadslogo} alt="db" className="size-7" />
          <h1 className="text-white text-2xl font-bold pr-16">Leads</h1>
        </div>
        <div className="flex gap-2 mt-2  flex-wrap lg:gap-8 justify-start text-center items-center mx-2">
          <div className="border-2 shadow-lg border-cyan-400 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-cyan-400 px-2 rounded-md py-4">
            <i className="fa-solid fa-circle-user text-2xl"></i>
            <h2 className="text-sm lg:text-base">Total Leads</h2>
            <h1 className="text-sm lg:text-base my-1 font-bold">{latestContactFormId}</h1>
          </div>
          <div className="border-2 shadow-lg border-green-500 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-green-500 px-2 rounded-md py-4">
            <i className="fa-solid fa-arrows-turn-to-dots text-2xl"></i>
            <h2 className="text-sm lg:text-base">Converted leads</h2>
            <h1 className="text-sm lg:text-base my-1 font-bold">{convertedCustomer}</h1>
          </div>
          <div className="border-2 shadow-lg border-orange-600 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto text-orange-600 px-2 rounded-md py-4">
            <i className="fa-solid fa-clock-rotate-left text-2xl"></i>
            <h2 className="text-sm lg:text-base">Pending Leads</h2>
            <h1 className="text-sm lg:text-base my-1 font-bold">{latestContactFormId}</h1>
          </div>
        </div>
      </div>
      <div className="p-1 ">
        <MyDataTable leadsData={leadsData} sendConvertedCustomer={handleConvertedLeads} />
      </div>
    </div>
  );
};

export default Leads;
