import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import saroshimg from '../../../src/sarosh.png'
import yousafimg from '../../../src/yousaf.png'
import waniimg from '../../../src/wani.png'
import hamzaimg from '../../../src/hamza.png'
import mustafaimg from '../../../src/mustafa.png'
import UserActivityDB from '../../Charts/UserActivityDB';
import LeavesCalender from './Calender/LeavesCalender';
const LeavesDataTable = () => {
    const [selectedDates, setSelectedDates] = useState([]);

  // This function should be passed down to LeavesCalender
  const handleDatesUpdate = (dates) => {
    setSelectedDates(dates);
    console.log("Selected dates:", dates); // For debugging
  };

    // STATE TO HANDLE SEARCH FILTER
    const [searchTerm, setSearchTerm] = useState('');
    // STATE TO CONDITIONALLY RENDER DATATABLE, FORM DETAILS & FORM EDIT 
    const [display, setDisplay] = useState('dataTable');
    // STATE TO SELECT THE SELECTED EMPLOYEE
    const [selectedEmployee, setselectedEmployee] = useState(null);

    // Dummy data
    const employeeLeavesData = [
        {
            contact_form_id: 1,
            contact_form_name: 'Sarosh Ahmed',
            contact_form_leaves_available: 18,
            contact_form_phone: '03158290290',
            employee_department: 'Production',
            Role: 'Front-End Developer',
            contact_form_leaves_total: 18,
            employee_picture: saroshimg,
        },
        {
            contact_form_id: 2,
            contact_form_name: 'Yousuf Baqai',
            contact_form_leaves_available: 18,
            contact_form_phone: '090078607',
            employee_department: 'Production',
            Role: 'Back-End Developer',
            contact_form_leaves_total: 18,
            employee_picture: yousafimg,
        },
        {
            contact_form_id: 3,
            contact_form_name: 'Hamza Makhdoom',
            contact_form_leaves_available: 18,
            contact_form_phone: '090078601',
            employee_department: 'Production',
            Role: 'UI / UX Designer',
            contact_form_leaves_total: 18,
            employee_picture: hamzaimg,
        },
        {
            contact_form_id: 4,
            contact_form_name: 'Shoaib Wani',
            contact_form_leaves_available: 18,
            contact_form_phone: '444-555-6666',
            employee_department: 'Production',
            Role: 'CMS Developer',
            contact_form_leaves_total: 18,
            employee_picture: waniimg,
        },
        {
            contact_form_id: 5,
            contact_form_name: 'Muhammad Mustafa',
            contact_form_leaves_available: 18,
            contact_form_phone: '333-444-5555',
            employee_department: 'Production',
            Role: 'Junior Developer',
            contact_form_leaves_total: 18,
            employee_picture: mustafaimg,
        },
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = employeeLeavesData.filter(item =>
        Object.values(item).some(value => {
            if (value !== null && value !== undefined) {
                return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
        })
    );
    const handleEmployeeClick = (employee) => {
        setselectedEmployee(employee);
    };

    const handleSelectChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const columns = [
        { name: 'ID', selector: row => row.contact_form_id, sortable: true, width: '80px' },
        { name: 'Name', selector: row => row.contact_form_name, sortable: true, wrap: true },
        { name: 'Phone', selector: row => row.contact_form_phone, sortable: true, wrap: true },
        { name: 'Department', selector: row => row.employee_department, sortable: true, wrap: true },
        { name: 'Designation', selector: row => row.Role, sortable: true, wrap: true },
        { name: 'Total Leaves', selector: row => row.contact_form_leaves_total, sortable: true, wrap: true },
        { name: 'Leaves Available', selector: row => row.contact_form_leaves_available, sortable: true, wrap: true },
        {
            name: 'Actions',
            cell: row => (

                <button data-tip="Mark Leave"
                    className='tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md'
                    onClick={() => {
                        handleEmployeeClick(row);
                        handleDisplay('editform');
                    }}>

                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                // <div className="dropdown dropdown-left">
                //     <div tabIndex={0} role="button" data-tip="View & Edit" className="tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105  text-white p-2 rounded-md"><i class="fa-solid fa-circle-chevron-down"></i></div>

                //     <ul tabIndex={0} className="flex dropdown-content gap-2 bg-base-100 rounded-box z-[1] mr-2 p-2 shadow">
                //         <li>
                //             <button data-tip="View"
                //                 className='tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md'
                //                 onClick={() => {
                //                     handleEmployeeClick(row);
                //                     handleDisplay('form');
                //                 }}>

                //                 <i class="fa-solid fa-eye"></i>
                //             </button>
                //         </li>
                //         <li>
                //             <button data-tip="Edit"
                //                 className='tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md'
                //                 onClick={() => {
                //                     handleEmployeeClick(row);
                //                     handleDisplay('editform');
                //                 }}>

                //                 <i class="fa-solid fa-pen-to-square"></i>
                //             </button>
                //         </li>
                //     </ul>
                // </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const handleDisplay = (display) => {
        setDisplay(display);
    };

    return (
        <div>
            {display === 'dataTable' && (
                <>
                    <div className='flex justify-center items-center'>
                        {/* drawer filter start */}
                        <div className="drawer drawer-end z-[999]">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-[#0F172A] text-base-content border-l-2 border-slate-600 min-h-full w-96 p-4">
                                    {/* Sidebar content here */}
                                    <div className='rounded-t-lg relative bg-[#15203B]'>
                                        <h1 className='bg-[#2C457D] text-white rounded-t-lg px-4 py-2 text-xl'>
                                            <i className="fa-solid fa-filter text-sm mx-2"></i>Filter
                                        </h1>
                                        <div className="modal-action">
                                            {/* Close button */}
                                        </div>
                                        <select className='border-2 py-2 m-2 rounded-lg bg-gray-200 border-gray-200 text-black cursor-pointer px-2 w-[340px]' name="filter" id="filter" onChange={handleSelectChange}>
                                            <option value="" className='text-white'>All Names</option>
                                            {employeeLeavesData.map((row) => (
                                                <option className='w-52' key={row.id} value={row.contact_form_name}>
                                                    {row.contact_form_name}
                                                </option>
                                            ))}
                                        </select>
                                        <select className='border-2 py-2 m-2 rounded-lg bg-gray-200 border-gray-200 text-black cursor-pointer px-2 w-[340px]' name="filter" id="filter" onChange={handleSelectChange}>
                                            <option value="">All Emails</option>
                                            {employeeLeavesData.map((row) => (
                                                <option key={row.id} value={row.contact_form_leaves_available}>
                                                    {row.contact_form_leaves_available}
                                                </option>
                                            ))}
                                        </select>
                                        <select className='border-2 py-2 m-2 rounded-lg bg-gray-200 border-gray-200 text-black cursor-pointer px-2 w-[340px]' name="filter" id="filter" onChange={handleSelectChange}>
                                            <option value="">All Services</option>
                                            {employeeLeavesData.map((row) => (
                                                <option key={row.id} value={row.employee_department}>
                                                    {row.employee_department}
                                                </option>
                                            ))}
                                        </select>
                                        <select className='border-2 py-2 m-2 rounded-lg bg-gray-200 border-gray-200 text-black cursor-pointer px-2 w-[340px]' name="filter" id="filter" onChange={handleSelectChange}>
                                            <option value="">Date</option>
                                            {employeeLeavesData.map((row) => (
                                                <option key={row.id} value={row.contact_form_leaves_total}>
                                                    {row.contact_form_leaves_total}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        {/* drawer filter end  */}
                    </div>
                    <div>
                        <div className="container w-[370px] lg:w-auto mx-auto lg:p-4 relative">
                            <input
                                type="text"
                                placeholder="Search Employee"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="border focus:border-blue-400 text-black text-sm outline-transparent border-gray-300 bg-gray-200 w-36 lg:w-auto rounded-md px-1 py-1 mb-4 absolute z-30 right-2 top-3 lg:right-8 lg:top-7"
                            />
                            <div>
                                <label htmlFor="my-drawer-4" className="drawer-button absolute z-30 text-white lg:left-7 lg:top-8 top-4 left-3 hover:scale-110 cursor-pointer tooltip tooltip-info">
                                    <i className="fa-solid fa-filter"></i>
                                </label>
                            </div>
                            <DataTable
                                title="Leave Management"
                                columns={columns}
                                data={filteredData}
                                pagination={true}
                                paginationPerPage={5}
                                paginationRowsPerPageOptions={[5, 10, 20, 50]}
                                paginationComponentOptions={{
                                    rowsPerPageText: 'Rows per page:',
                                }}
                                highlightOnHover={false}
                                customStyles={{
                                    tableWrapper: {
                                        style: {
                                            borderTop: 'none',
                                            border: '16px solid #1C2C50',
                                            color: 'white',
                                        },
                                    },
                                    header: {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            background: '#1C2C50',
                                            opacity: 'var(--tw-bg-opacity)',
                                            color: 'white',
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px",
                                            paddingLeft: "35px",
                                        },
                                    },
                                    headRow: {
                                        style: {
                                            // borderColor: '#2E3A59',
                                            color: 'black'
                                        },
                                    },
                                    headCells: {
                                        style: {
                                            color: 'black',  // Ensures the text is visible
                                            // fontSize: '13px',
                                        },
                                    },
                                    rows: {
                                        style: {
                                            fontSize: '13px',
                                            paddingLeft: '5px',
                                            paddingRight: '5px',
                                            border: '0.5px solid #15203B',
                                            borderTopWidth: '0px',
                                        },
                                    },
                                    pagination: {
                                        style: {
                                            fontSize: '12px',
                                            paddingTop: '10px',
                                            paddingBottom: '5px',
                                            background: '#1C2C50',
                                            color: 'white',
                                            borderBottomLeftRadius: "10px",
                                            borderBottomRightRadius: "10px",
                                        },
                                    },
                                }}
                            />

                        </div>
                    </div>
                </>
            )}
            {display === 'form' && (
                <>
                    <div className='text-white p-4'>
                        <div className=''>
                            <div className='flex justify-between items-center flex-wrap rounded-lg bg-gradient-to-r from-blue-700 to-purple-400 px-4 py-2'>
                                <div className='flex justify-start gap-3 items-center'>
                                    <img src={selectedEmployee.employee_picture} className='w-16 h-16' alt='Employee' />
                                    <h1 className='text-2xl font-bold'> {selectedEmployee.contact_form_name}</h1>
                                </div>
                                <h1 className='text-2xl font-bold'><i class="fa-solid fa-id-card-clip"></i> Employee ID: 0000{selectedEmployee.contact_form_id}</h1>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-2 '>
                                <div className='border rounded-lg p-4'>
                                    <div className='flex items-center justify-start mb-5  gap-3'>
                                        <i class="fa-solid fa-envelope text-orange-500"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.contact_form_leaves_available}
                                        </h1>
                                    </div>
                                    <div className='flex items-center justify-start mb-5 gap-3'>
                                        <i class="fa-solid fa-phone text-blue-400"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.contact_form_phone}
                                        </h1>
                                    </div>
                                    <div className='flex items-center justify-start mb-5 gap-3'>
                                        <i class="fa-solid fa-building-user text-green-500"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.employee_department}
                                        </h1>
                                    </div>
                                    <div className='flex items-center justify-start mb-5 gap-3'>
                                        <i class="fa-solid fa-list-check text-purple-500"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.Role}
                                        </h1>
                                    </div>
                                    <div className='flex items-center justify-start mb-5 gap-3'>
                                        <i class="fa-solid fa-user-clock text-emerald-500"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.contact_form_leaves_total}
                                        </h1>
                                    </div>
                                </div>
                                <div className='border rounded-lg p-4 '>
                                    <h1 className='text-center text-lg font-bold'>{selectedEmployee.contact_form_name}'s Monthly Attendance</h1>
                                    <div className=''>
                                        <UserActivityDB />
                                    </div>
                                </div>
                            </div>

                            <button
                                data-tip='Back to form'
                                className='tooltip tooltip-info tooltip-right bg-blue-800 p-3 mt-2 text-white rounded-md'
                                onClick={() => handleDisplay('dataTable')}>
                                <i className="fa-solid fa-caret-left mx-2"></i>
                                Back
                            </button>
                        </div>
                    </div>
                </>
            )}
            {display === 'editform' && (
                <>
                    <div className='text-white p-4'>
                        <div className=''>
                            <div className='flex justify-between items-center flex-wrap rounded-lg bg-gradient-to-r from-blue-700 to-purple-400 px-4 py-2'>
                                <div className='flex justify-start gap-3 items-center'>
                                    <img src={selectedEmployee.employee_picture} className='w-16 h-16' alt='Employee' />
                                    <h1 className='text-2xl font-bold'> {selectedEmployee.contact_form_name}</h1>
                                </div>
                                <h1 className='text-2xl font-bold'><i class="fa-solid fa-id-card-clip"></i> Employee ID: 0000{selectedEmployee.contact_form_id}</h1>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-2 '>
                                <div className='border rounded-lg p-4'>
                                    <h3 className='ml-8 text-sm text-gray-400'>Phone Number:</h3>
                                    <div className='flex items-center justify-start mb-5 gap-3'>
                                        <i class="fa-solid fa-phone text-blue-400"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.contact_form_phone}
                                        </h1>
                                    </div>
                                    {/* <div className='flex items-center justify-start mb-5  gap-3'>
                                        <i class="fa-solid fa-envelope text-orange-500"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.contact_form_email}
                                        </h1>
                                    </div> */}
                                    <h3 className='ml-8 text-sm text-gray-400'>Department:</h3>
                                    <div className='flex items-center justify-start mb-5 gap-3'>
                                        <i class="fa-solid fa-building-user text-green-500"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.employee_department}
                                        </h1>
                                    </div>
                                    <h3 className='ml-8 text-sm text-gray-400'>Designation:</h3>
                                    <div className='flex items-center justify-start mb-5 gap-3'>
                                        <i class="fa-solid fa-list-check text-purple-500"></i>

                                        <h1 className='rounded-lg border w-full p-2'>
                                            {selectedEmployee.Role}
                                        </h1>
                                    </div>
                                    <div className='grid grid-cols-3 gap-3'>
                                        <div>
                                            <h3 className='ml-8 text-sm text-gray-400'>Total Leaves:</h3>
                                            <div className='flex items-center justify-start mb-5 gap-3'>
                                                <i class="fa-solid fa-user-check text-emerald-500"></i>

                                                <h1 className='rounded-lg border w-full p-2'>
                                                    {selectedEmployee.contact_form_leaves_total}
                                                </h1>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='ml-8 text-sm text-gray-400'>Leaves Available:</h3>
                                            <div className='flex items-center justify-start mb-5 gap-3'>
                                                <i class="fa-solid fa-user-xmark text-red-500"></i>

                                                <h1 className='rounded-lg border w-full p-2'>
                                                    {selectedEmployee.contact_form_leaves_available}
                                                </h1>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='ml-8 text-sm text-gray-400'>Leave Reason:</h3>
                                            <div className='flex items-center justify-start mb-5 gap-3'>
                                                <i class="fa-solid fa-indent text-yellow-500"></i>

                                                {/* <h1 className='rounded-lg border w-full p-2'>
                                                    {selectedEmployee.contact_form_leaves_available}
                                                </h1> */}
                                                <select className='rounded-lg border w-full p-2 bg-transparent text-white' name="" id="">
                                                    <option className='' selected hidden disabled value="">Reason of Leave</option>
                                                    <option className=' bg-slate-900' value="">Sick Leave</option>
                                                    <option className=' bg-slate-900' value="">Casual Leave</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border rounded-lg p-4 '>
                                    <h1 className='text-center text-lg font-bold'>Mark {selectedEmployee.contact_form_name}'s Leaves</h1>
                                    <div className=''>
                                        <LeavesCalender onDatesChange={handleDatesUpdate}/>
                                    </div>
                                </div>
                            </div>
                            {/* buttons */}
                            <div className='flex justify-between'>

                            <button
                                data-tip='Back to form'
                                className='tooltip tooltip-info tooltip-right bg-blue-800 p-3 mt-2 text-white rounded-md'
                                onClick={() => handleDisplay('dataTable')}>
                                <i className="fa-solid fa-caret-left mx-2"></i>
                                Back
                            </button>
                            <button
                                data-tip='Save & Submit'
                                className='tooltip tooltip-info tooltip-left bg-blue-800 p-3 mt-2 text-white rounded-md'
                                onClick={() => handleDisplay('dataTable')}>
                                <i className="fa-solid fa-circle-check mx-2"></i>
                                Save
                            </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LeavesDataTable;
