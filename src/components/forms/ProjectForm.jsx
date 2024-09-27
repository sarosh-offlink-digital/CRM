import React, { useState, useEffect, useRef } from 'react'
import Header from '../shared_components/Header'
import member1 from '../../src/profilepic.jpg'
import member2 from '../../src/profilepic2.jpg'
import member3 from '../../src/profilepic3.jpg'
import member4 from '../../src/profilepic4.jpg'
import { Chart } from 'react-google-charts';
import Projectmembers from '../../projectcomponents/Projectmembers';
import 'react-quill/dist/quill.snow.css';
import ProjectDiscussion from '../../projectcomponents/ProjectDiscussion'
import ProjectFile from '../../projectcomponents/ProjectFile'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FileUploader from '../shared_components/FileUploader'
import TaskDataTable from '../dataTables/TaskDataTable'
import saroshPic from '../../src/sarosh.png'
import yousufPic from '../../src/yousaf.png'
import hamzaPic from '../../src/hamza.png'
import dummyUser from '../../src/user.png'
import waniPic from '../../src/wani.png'
import mustafaPic from '../../src/mustafa.png'

const ProjectForm = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  let [newTasks, setTasks] = useState([{

    TaskID: 'NT1',
    'Task Name': 'Offlink Digital Index Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
  {

    TaskID: 'NT2',
    'Task Name': 'Offlink Digital About Us Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
  {

    TaskID: 'NT3',
    'Task Name': 'Offlink Digital About Us Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
  {

    TaskID: 'NT4',
    'Task Name': 'Offlink Digital Portfolio Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
    // {
    //   TaskID: 'NT5',
    //   'Task Name': 'Offlink Digital Services Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
  ])

  let [revisionTasks, setRevisionTasks] = useState([{

    TaskID: 'RT1',
    'Task Name': 'Offlink Digital Index Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
  {

    TaskID: 'RT2',
    'Task Name': 'Offlink Digital About Us Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
  {

    TaskID: 'RT3',
    'Task Name': 'Offlink Digital About Us Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
  {

    TaskID: 'RT4',
    'Task Name': 'Offlink Digital Portfolio Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
    // {
    //   TaskID: 'RT5',
    //   'Task Name': 'Offlink Digital Services Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
  ])

  let [review, setreview] = useState([{

    TaskID: 'RV1',
    'Task Name': 'Offlink Digital Index Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
  {

    TaskID: 'RV2',
    'Task Name': 'Offlink Digital About Us Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
    // {

    //   TaskID: 'RV3',
    //   'Task Name': 'Offlink Digital About Us Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
    // {

    //   TaskID: 'RV4',
    //   'Task Name': 'Offlink Digital PoRVfolio Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
    // {
    //   TaskID: 'RV5',
    //   'Task Name': 'Offlink Digital Services Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
  ])

  let [completed, setcompleted] = useState([{

    TaskID: 'CT1',
    'Task Name': 'Offlink Digital Index Page Revamp',
    'Task Description': 'Revamp the index page of the website',
    'Task Deadline': '2026-9-30'
  },
    // {

    //   TaskID: 'CT2',
    //   'Task Name': 'Offlink Digital About Us Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
    // {

    //   TaskID: 'CT3',
    //   'Task Name': 'Offlink Digital About Us Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
    // {

    //   TaskID: 'CT4',
    //   'Task Name': 'Offlink Digital PoCTfolio Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
    // {
    //   TaskID: 'CT5',
    //   'Task Name': 'Offlink Digital Services Page Revamp',
    //   'Task Description': 'Revamp the index page of the website',
    //   'Task Deadline': '2026-9-30'
    // },
  ])

  let [members, setMembers] = useState([
    {
      memberID: 1,
      'memberName': 'Wasif Ahmed',
      'memberRole': 'Project Manager',
      'memberDepartment': 'Management',
      'memberProfile': dummyUser
    },
    {
      memberID: 2,
      'memberName': 'Hamza Makdoom',
      'memberRole': 'UI/UX Designer',
      'memberDepartment': 'Production',
      'memberProfile': hamzaPic
    },
    {
      memberID: 3,
      'memberName': 'Sarosh Ahmed',
      'memberRole': 'Front-End',
      'memberDepartment': 'Production',
      'memberProfile': saroshPic
    },
    {
      memberID: 4,
      'memberName': 'Yousuf Baqai',
      'memberRole': 'Back-End',
      'memberDepartment': 'Production',
      'memberProfile': yousufPic
    }
  ])
  const newMember = [{
    memberID: 5,
    'memberName': 'Shoaib Wani',
    'memberRole': 'CMS-Developer',
    'memberDepartment': 'Production',
    'memberProfile': waniPic
  },
  {
    memberID: 6,
    'memberName': 'Muhammad Mustafa',
    'memberRole': 'Junior Developer',
    'memberDepartment': 'Production',
    'memberProfile': mustafaPic
  },
  ]


  // State to capture form data
  const [taskType, setTaskType] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskID, setTaskID] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');
  //State to capture selected member ID
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMember = (e) => {
    e.preventDefault();
     //a function of JS that iterates over array and finds object id based on the selection
    const selected = newMember.find(member => member.memberID === parseInt(selectedMember));
    //checks if the user is already in data based on their id, some function finds if the data exists in array or not
    if(selected && !members.some(member => member.memberID === selected.memberID)){ 
      
      setMembers([...members, selected]);
    }
    else{
      console.log('user already exists')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      TaskID: taskID,
      'Task Name': taskName,
      'Task Description': taskDescription,
      'Task Deadline': taskDeadline,
    };

    // Add to newTasks or revisionTasks based on taskType
    if (taskType === 'New Task') {
      setTasks([...newTasks, newTask]);
    } else if (taskType === 'Revised Task') {
      setRevisionTasks([...revisionTasks, newTask]);
    }

    // Close modal or reset form (optional)
    document.getElementById('my_modal_2').close();
  };
  const [displayTabs, setDisplayTabs] = useState('Overview')
  const handleRendering = (tabs) => {
    setDisplayTabs(tabs)
  }
  const data = [
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
      { type: 'string', label: 'Color' }
    ],
    ['Task 1', 'Task 1', 'Resource 1', new Date(2024, 6, 1), new Date(2024, 6, 5), null, 20, null, '#FF0000'],
    ['Task 2', 'Task 2', 'Resource 2', new Date(2024, 6, 6), new Date(2024, 6, 10), null, 10, 'Task 1', '#00FF00'],
    ['Task 3', 'Task 3', 'Resource 2', new Date(2024, 6, 6), new Date(2024, 6, 10), null, 5, 'Task 2', '#0000FF'],
    ['Task 4', 'Task 4', 'Resource 2', new Date(2024, 6, 6), new Date(2024, 6, 10), null, 60, 'Task 3', '#FFFF00'],
  ];

  const options = {
    height: 400,
    gantt: {
      trackHeight: 50,
      palette: [
        {
          "color": "#d6d6d6",
          "dark": "#2a31bf",
          "light": "#53cfb0"
        },
        {
          "color": "#d6d6d6",
          "dark": "#2a31bf",
          "light": "#53cfb0"
        }
      ],
      criticalPathEnabled: false, // Highlight the critical path
      criticalPathStyle: {
        stroke: 'green',
        strokeWidth: 1
      }
    },
  };
  const chartEvents = [
    {
      eventName: 'select',
      callback({ chartWrapper }) {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length) {
          const task = data[selection[0].row + 1];
          alert(`Task selected: ${task[1]}`);
        }
      },
    },
  ];

  // Handle New Tasks


  return (
    <div>
      <div className='p-4'>
        <div className='mt-2'>
          <Header />
        </div>
        {/* <div className='bg-gradient-to-r from-blue-700 to-purple-400 rounded-t-md p-4 mt-6'>
          <h1 className='text-sm xl:text-xl text-white'>Project # 0001</h1>
        </div> */}
        <div className=' p-4 rounded-b-md py-10'>
          <div className='flex lg:flex-row flex-col justify-between'>
            <button className={`flex-grow pb-5 ${displayTabs === 'Overview' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Overview') }}><i class="fa-solid fa-border-all mx-2 text-blue-500" ></i>Overview</button>
            <button className={`flex-grow pb-5 ${displayTabs === 'Members' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Members') }}><i class="fa-solid fa-user-group mx-2 text-orange-500" ></i>Members</button>
            <button className={`flex-grow pb-5 ${displayTabs === 'Tasks' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Tasks') }}><i class="fa-solid fa-list-check mx-2 text-rose-500" ></i>Tasks</button>
            {/* <button className={`flex-grow pb-5 ${displayTabs === 'Files' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Files') }}><i class="fa-solid fa-file-lines mx-2 text-yellow-500" ></i> Files</button> */}
            <button className={`flex-grow pb-5 ${displayTabs === 'Discussion' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Discussion') }}><i class="fa-solid fa-comments mx-2 text-green-500" ></i>Discussion</button>
            <button className={`flex-grow pb-5 ${displayTabs === 'Chart' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Chart') }}><i class="fa-solid fa-chart-gantt mx-2 text-teal-500" ></i>Gantt Chart</button>
            <button className={`flex-grow pb-5 ${displayTabs === 'Notes' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Notes') }}><i class="fa-solid fa-note-sticky mx-2 text-indigo-500" ></i>Notes</button>
          </div>
          {displayTabs === 'Overview' &&
            (
              <div className='my-10 mx-5'>
                <div className=''>
                  <h1 className='text-xl my-6 mb-2 font-semibold'><i class="fa-solid fa-bars-progress mr-5 text-blue-500"></i>Project Name: Offlink Digital Revamp</h1>
                  <h1 className='text-xl my-6 mb-2 font-semibold'><i class="fa-solid fa-bars-progress mr-5 text-blue-500"></i>Project Details:</h1>
                  <div className='my-6'>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto praesentium iste iure deserunt illum pariatur perspiciatis, ducimus unde explicabo repellendus sapiente maxime rem sit vel obcaecati vero aut, placeat amet.</p>

                  </div>
                  <div>
                    <h1 className='text-xl mt-10 mb-2 font-semibold'><i class="fa-solid fa-clipboard mr-5 text-green-500"></i>Project Notes:</h1>
                    <div className='flex justify-center flex-col mt-6 gap-6'>
                      {/* box 1 */}
                      <div className='break-words'>
                        <h1 className='border-2  rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'><i class="fa-solid fa-list mx-5 text-teal-300"></i>Customer Details</h1>
                        <div className='border-t-0  border-2 p-4'>
                          <div className='flex gap-4 flex-wrap'>
                            <div className='flex gap-4'>
                              <p className='font-semibold'><i class="fa-solid fa-user px-5 text-blue-500 "></i>Customer Name:</p>
                              <p>Internal Project</p>
                            </div>
                            <div className='flex gap-4'>
                              <p className='font-semibold'><i class="fa-solid fa-envelope mx-5 text-orange-500"></i>Customer Email:</p>
                              <p>none</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* box 2 */}
                      <div className='break-words'>
                        <h1 className='border-2  rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'><i class="fa-solid fa-stopwatch mx-5 text-red-400"></i>Active Timer</h1>
                        <div className='border-t-0  border-2 p-4'>
                          <p className='text-white'>No active Timer</p>
                        </div>
                      </div>
                      {/* box 3 */}
                      <div className='break-words'>
                        <div className='flex justify-between items-center  bg-gradient-to-r from-blue-700 to-purple-700 border-2 relative  rounded-t-md'>
                          <h1 className=' py-2 text-white font-semibold text-xl '><i class="fa-solid fa-user-group text-purple-500 mx-5"></i>Members</h1>
                          
                          <h1 className='mx-6 rounded-full bg-white text-blue-800 font-bold px-3 py-1 tooltip tooltip-info' data-tip='Total Members'>{members.length}</h1>
                        </div>
                        <div className='border-t-0 flex justify-between flex-wrap border-2 p-4'>
                          <div >
                            <div className='flex justify-start gap-2 my-2'>
                              {/* <img src={dummyUser} className='h-8 w-8 rounded-full' alt="" />
                              <img src={hamzaPic} className='h-8 w-8 rounded-full' alt="" />
                              <img src={saroshPic} className='h-8 w-8 rounded-full' alt="" />
                              <img src={yousufPic} className='h-8 w-8 rounded-full' alt="" /> */}
                              {members.map((member)=>(
                                 <img src={member.memberProfile} className='h-8 w-8 rounded-full' alt="" />
                              ))}
                            </div>
                          </div>
                          <div className=' py-2 px-5 rounded-lg w-full lg:w-auto border-2'>
                            <h1 className='border-b-2'><span className='text-xl text-orange-500 '>0 </span >Open Tasks</h1>
                            <h1 className='border-b-2'><span className='text-xl text-green-500 '>0 </span >Days Left</h1>
                            <h1 className='border-b-2'><span className='text-xl text-blue-500 '>0 </span >Hours Logged</h1>
                          </div>
                        </div>
                      </div>
                      {/* box 4 */}
                      <div className='break-words'>
                        <h1 className='border-2  rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'><i class="fa-solid fa-list-check mx-5 text-lime-400"></i>Tasks</h1>
                        <div className='border-t-0  border-2 p-4'>
                          <div className='flex flex-wrap gap-16 justify-between items-center'>
                            <div className='flex-grow'>
                              <div className='border-2 text-center rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'>
                                New Tasks
                              </div>
                              <div className='border-white border-2 border-t-0 p-4'>
                                <div>
                                  {newTasks.map((newTasks) => (
                                    <div
                                      key={newTasks.TaskID}
                                      className='cursor-pointer my-4 text-white hover:text-blue-500'
                                      onClick={() => setSelectedTask(newTasks)}>
                                      <div className='flex flex-wrap justify-between'>
                                        <div>
                                          {newTasks['TaskID']} - {newTasks['Task Name']}
                                        </div>
                                        <div>
                                          {newTasks['Task Deadline']}
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  {selectedTask && (
                                    <dialog id="my_modal_1" className="modal" open>
                                      <div className="text-white modal-box bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 border-2 border-gray-300">
                                        <h3 className="font-bold text-lg border-b-gray-500 border-b-2 mb-8"><i class="fa-solid fa-list-check"></i> Task Title: {selectedTask['Task Name']}</h3>
                                        <div className='my-4 flex justify-between border-b-gray-500 border-b-2'>
                                          <p className=" text-sm text-gray-400"><i class="fa-solid fa-hashtag"></i>Task ID: {selectedTask['TaskID']}</p>
                                          <p className='text-sm text-gray-400'><i class="fa-solid fa-user-shield"></i> Uploaded By: Admin</p>
                                        </div>
                                        <div className='my-8 border-b-gray-500 border-b-2'>
                                          <p className="mb-2"><i class="fa-solid fa-info"></i> Task Description: </p>
                                          <p>{selectedTask['Task Description']}</p>
                                        </div>
                                        <p className='border-b-gray-500 border-b-2 mb-8'><i class="fa-solid fa-hourglass-half"></i> Task Deadline: {selectedTask['Task Deadline']}</p>
                                        <div>
                                          <p className='text-sm text-gray-400 italic'> Attachments: </p>
                                        </div>
                                        <div className="modal-action">
                                          <button data-tip='Back to Tasks' className='tooltip tooltip-info tooltip-left bg-blue-800 p-3 mt-2 text-white rounded-md' onClick={() => setSelectedTask(null)}>
                                            Close
                                          </button>
                                        </div>
                                      </div>
                                    </dialog>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className='flex-grow'>
                              <div className='border-2 text-center rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'>
                                Revision Tasks
                              </div>
                              <div className='border-white border-2 border-t-0 p-4'>
                                {revisionTasks.map((revtasks) => (
                                  <div
                                    key={revtasks.TaskID}
                                    className='cursor-pointer my-4 text-white hover:text-blue-500'
                                    onClick={() => setSelectedTask(revtasks)}>
                                    <div className='flex justify-between flex-wrap'>
                                      <div>
                                        {revtasks['TaskID']} - {revtasks['Task Name']}
                                      </div>
                                      <div>
                                        {revtasks['Task Deadline']}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          {displayTabs === 'Members' &&
            (
              <div className='my-10 mx-5'>
                {/* Add new member modal */}
                <dialog id='my_modal_member' className='modal'>
                  <div className='modal-box bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 border-2 border-gray-300'>
                    <h3 className='font-bold text-lg'>Add New Member</h3>
                    <form onSubmit={handleMember} className='text-black'>
                      <label className=''>
                        <select
                          className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4 appearance-none'
                          name="taskType"
                          id="taskType"
                          value={selectedMember}
                          onChange={(e) => setSelectedMember(e.target.value)}
                        >
                          <option selected disabled hidden value=''>
                            Select Member
                          </option>
                          {newMember.map((member) => (
                            <option key={member.memberID} value={member.memberID} className='text-white'>
                              {member.memberName}
                            </option>
                          ))}
                        </select>
                        <i className="fa-solid fa-circle-arrow-down text-white absolute right-8 bottom-[102px] transform -translate-y-1/2"></i>
                      </label>

                      <div className='flex justify-between'>
                        <button type='submit' data-tip='Save & Submit' className='tooltip tooltip-info tooltip-right bg-blue-800 p-3 mt-2 text-white rounded-md'>
                          Save
                        </button>
                        <button type='button' data-tip='Back to Members' className='tooltip tooltip-info tooltip-left bg-blue-800 p-3 mt-2 text-white rounded-md' onClick={() => document.getElementById('my_modal_member').close()}>
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
                <div className='my-6'>
                  <div className='p-3 rounded-t-lg bg-gradient-to-r from-blue-700 to-purple-700'>
                    <h1 className='text-lg font-semibold text-white'><i class="fa-solid fa-user-group mr-5 text-orange-500"></i>Members Details:
                      <i class="fa-solid fa-circle-plus mx-4 cursor-pointer" onClick={() => document.getElementById('my_modal_member').showModal()} ></i></h1>
                  </div>
                  <div className='p-3 bg-slate-800 rounded-b-lg'>
                    {members.map((members) => (
                      <div key={members.memberID}>
                        <div className='grid grid-cols-3 md:grid-cols-5 items-center border-gray-400 py-4 border-t'>
                          <img src={members.memberProfile} className=' w-16 h-16' alt="" />
                          <div>
                            <h1 className='text-xs'>Member ID: </h1>
                            <h2><i class="fa-solid fa-id-card-clip text-blue-400"></i> {members.memberID}</h2>
                          </div>
                          <div>
                            <h1 className='text-xs'>Member Name: </h1>
                            <h2><i class="fa-solid fa-user text-green-500"></i> {members.memberName}</h2>
                          </div>
                          <div>
                            <h1 className='text-xs'>Member Role: </h1>
                            <h2><i class="fa-solid fa-list-check text-rose-500"></i> {members.memberRole}</h2>
                          </div>
                          <div>
                            <h1 className='text-xs'>Member Department: </h1>
                            <h2><i class="fa-solid fa-building text-yellow-500"></i> {members.memberDepartment}</h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          {displayTabs === 'Tasks' &&
            (
              <div>
                <div className='my-5'>
                  <button className='tooltip tooltip-info tooltip-right bg-gradient-to-r from-blue-700 to-purple-700 text-white p-3 rounded-lg my-4' onClick={() => document.getElementById('my_modal_2').showModal()}
                    data-tip='Add New Task' >
                    <i
                      className='fa-solid fa-circle-plus cursor-pointer'
                    ></i>{' '}
                    Add Task
                  </button>
                  <div className='grid lg:grid-cols-4 grid-cols-1 gap-10 justify-between items-center'>
                    <div className=''>
                      <div
                        className='border-2 text-center rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'>
                        New Tasks
                      </div>
                      {/* Modal To Add Tasks */}

                      <dialog id='my_modal_2' className='modal'>
                        <div className='modal-box bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 border-2 border-gray-300'>
                          <h3 className='font-bold text-lg'>Add Task</h3>
                          <form onSubmit={handleSubmit} className='text-black'>
                            <label className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4'>
                              <i className='fa-solid fa-list-check text-green-500'></i>
                              <input
                                type='text'
                                className='grow bg-transparent border-none focus:ring-0 focus:outline-none'
                                placeholder='Task Name'
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)} />
                            </label>
                            <div className='relative w-full'>
                              <select
                                className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4 appearance-none'
                                value={taskType}
                                onChange={(e) => setTaskType(e.target.value)}>
                                <option selected disabled hidden value=''>
                                  Select Task Type
                                </option>
                                <option value='New Task'>New Task</option>
                                <option value='Revised Task'>Revised Task</option>
                              </select>
                              <i className="fa-solid fa-circle-arrow-down text-white absolute right-4 top-1/2 transform -translate-y-1/2"></i>
                            </div>
                            <label className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4'>
                              <i className='fa-solid fa-hashtag text-orange-500'></i>
                              <input
                                type='text'
                                className='grow bg-transparent border-none focus:ring-0 focus:outline-none'
                                placeholder='Task ID'
                                value={taskID}
                                onChange={(e) => setTaskID(e.target.value)}
                              />
                            </label>
                            <label className=''>
                              <div>
                                <h1 className='text-white'><i className='fa-solid fa-info text-rose-500'></i> Task Description:</h1>
                              </div>
                              <textarea type='text' className='bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4 focus:ring-0 focus:outline-none h-64' placeholder='...' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
                            </label>
                            <label className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4'>
                              <i className='fa-solid fa-hourglass-half text-blue-500'></i>
                              <input
                                type='date'
                                className='grow bg-transparent border-none focus:ring-0 focus:outline-none'
                                placeholder='Deadline'
                                value={taskDeadline}
                                onChange={(e) => setTaskDeadline(e.target.value)}
                              />
                            </label>
                            <div>
                              <FileUploader className='bg-slate-900' />
                            </div>
                            <div className='flex justify-between'>
                              <button type='submit' data-tip='Save & Submit' className='tooltip tooltip-info tooltip-right bg-blue-800 p-3 mt-2 text-white rounded-md'>
                                Save
                              </button>
                              <button type='button' data-tip='Back to Tasks' className='tooltip tooltip-info tooltip-left bg-blue-800 p-3 mt-2 text-white rounded-md' onClick={() => document.getElementById('my_modal_2').close()}>
                                Close
                              </button>
                            </div>
                          </form>
                        </div>
                      </dialog>
                      <div className='border-white border-2 border-t-0 p-4 h-[450px] overflow-y-auto rounded-b-xl'>
                        <div>
                          {newTasks.map((newTasks) => (
                            <div
                              key={newTasks.TaskID}
                              className='cursor-pointer my-4 text-white hover:text-blue-500'
                              onClick={() => setSelectedTask(newTasks)}>
                              <div className='flex flex-wrap justify-between'>
                                <div>
                                  {newTasks['TaskID']} - {newTasks['Task Name']}
                                </div>
                                <div>
                                  {newTasks['Task Deadline']}
                                </div>
                              </div>
                            </div>
                          ))}
                          {selectedTask && (
                            <dialog id="my_modal_1" className="modal" open>
                              <div className="text-white modal-box bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 border-2 border-gray-300">
                                <h3 className="font-bold text-lg border-b-gray-500 border-b-2 mb-8"><i class="fa-solid fa-list-check"></i> Task Title: {selectedTask['Task Name']}</h3>
                                <div className='my-4 flex justify-between border-b-gray-500 border-b-2'>
                                  <p className=" text-sm text-gray-400"><i class="fa-solid fa-hashtag"></i>Task ID: {selectedTask['TaskID']}</p>
                                  <p className='text-sm text-gray-400'><i class="fa-solid fa-user-shield"></i> Uploaded By: Admin</p>
                                </div>
                                <div className='my-8 border-b-gray-500 border-b-2'>
                                  <p className="mb-2"><i class="fa-solid fa-info"></i> Task Description: </p>
                                  <p>{selectedTask['Task Description']}</p>
                                </div>
                                <p className='border-b-gray-500 border-b-2 mb-8'><i class="fa-solid fa-hourglass-half"></i> Task Deadline: {selectedTask['Task Deadline']}</p>
                                <div>
                                  <p className='text-sm text-gray-400 italic'> Attachments: </p>
                                </div>
                                <div className="modal-action">
                                  <button data-tip='Back to Tasks' className='tooltip tooltip-info tooltip-left bg-blue-800 p-3 mt-2 text-white rounded-md' onClick={() => setSelectedTask(null)}>
                                    Close
                                  </button>
                                </div>
                              </div>
                            </dialog>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      <div className='border-2 text-center rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'>
                        Revision Tasks
                      </div>
                      <div className='border-white border-2 border-t-0 p-4 h-[450px] overflow-y-auto rounded-b-xl'>
                        {revisionTasks.map((revtasks) => (
                          <div
                            key={revtasks.TaskID}
                            className='cursor-pointer my-4 text-white hover:text-blue-500'
                            onClick={() => setSelectedTask(revtasks)}>
                            <div className='flex justify-between flex-wrap'>
                              <div>
                                {revtasks['TaskID']} - {revtasks['Task Name']}
                              </div>
                              <div>
                                {revtasks['Task Deadline']}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className=''>
                      <div
                        className='border-2 text-center rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'>
                        Tasks on Review
                      </div>
                      {/* Modal To Add Tasks */}
                      {/* Modal To Add Tasks */}
                      {/* <dialog id='my_modal_2' className='modal'>
                      <div className='modal-box bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 border-2 border-gray-300'>
                        <h3 className='font-bold text-lg'>Add Task</h3>
                        <form onSubmit={handleSubmit} className='text-black'>
                          <label className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4'>
                            <i className='fa-solid fa-list-check text-green-500'></i>
                            <input
                              type='text'
                              className='grow bg-transparent border-none focus:ring-0 focus:outline-none'
                              placeholder='Task Name'
                              value={taskName}
                              onChange={(e) => setTaskName(e.target.value)} />
                          </label>
                          <div className='relative w-full'>
                            <select
                              className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4 appearance-none'
                              value={taskType}
                              onChange={(e) => setTaskType(e.target.value)}
                            >
                              <option selected disabled hidden value=''>
                                Select Task Type
                              </option>
                              <option value='New Task'>New Task</option>
                              <option value='Revised Task'>Revised Task</option>
                            </select>
                            <i className="fa-solid fa-circle-arrow-down text-white absolute right-4 top-1/2 transform -translate-y-1/2"></i>
                          </div>


                          <label className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4'>
                            <i className='fa-solid fa-hashtag text-orange-500'></i>
                            <input
                              type='text'
                              className='grow bg-transparent border-none focus:ring-0 focus:outline-none'
                              placeholder='Task ID'
                              value={taskID}
                              onChange={(e) => setTaskID(e.target.value)}
                            />
                          </label>
                          <label className=''>
                            <div>
                              <h1 className='text-white'><i className='fa-solid fa-info text-rose-500'></i> Task Description:</h1>
                            </div>
                            <textarea type='text' className='bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4 focus:ring-0 focus:outline-none h-64' placeholder='...' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
                          </label>
                          <label className='flex items-center bg-gray-800 border-white text-white input focus:border-white input-bordered gap-2 w-full shadow-lg my-4'>
                            <i className='fa-solid fa-hourglass-half text-blue-500'></i>
                            <input
                              type='text'
                              className='grow bg-transparent border-none focus:ring-0 focus:outline-none'
                              placeholder='Deadline'
                              value={taskDeadline}
                              onChange={(e) => setTaskDeadline(e.target.value)}
                            />
                          </label>
                          <div>
                            <FileUploader className='bg-slate-900' />
                          </div>
                          <div className='flex justify-between'>
                            <button type='submit' data-tip='Save & Submit' className='tooltip tooltip-info tooltip-right bg-blue-800 p-3 mt-2 text-white rounded-md'>
                              Save
                            </button>
                            <button type='button' data-tip='Back to Tasks' className='tooltip tooltip-info tooltip-left bg-blue-800 p-3 mt-2 text-white rounded-md' onClick={() => document.getElementById('my_modal_2').close()}>
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </dialog> */}
                      <div className='border-white border-2 border-t-0 p-4 h-[450px] overflow-y-auto rounded-b-xl'>
                        <div>
                          {review.map((review) => (
                            <div
                              key={review.TaskID}
                              className='cursor-pointer my-4 text-white hover:text-blue-500'
                              onClick={() => setSelectedTask(review)}>
                              <div className='flex flex-wrap justify-between'>
                                <div>
                                  {review['TaskID']} - {review['Task Name']}
                                </div>
                                <div>
                                  {review['Task Deadline']}
                                </div>
                              </div>
                            </div>
                          ))}
                          {selectedTask && (
                            <dialog id="my_modal_1" className="modal" open>
                              <div className="text-white modal-box bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 border-2 border-gray-300">
                                <h3 className="font-bold text-lg border-b-gray-500 border-b-2 mb-8"><i class="fa-solid fa-list-check"></i> Task Title: {selectedTask['Task Name']}</h3>
                                <div className='my-4 flex justify-between border-b-gray-500 border-b-2'>
                                  <p className=" text-sm text-gray-400"><i class="fa-solid fa-hashtag"></i>Task ID: {selectedTask['TaskID']}</p>
                                  <p className='text-sm text-gray-400'><i class="fa-solid fa-user-shield"></i> Uploaded By: Admin</p>
                                </div>
                                <div className='my-8 border-b-gray-500 border-b-2'>
                                  <p className="mb-2"><i class="fa-solid fa-info"></i> Task Description: </p>
                                  <p>{selectedTask['Task Description']}</p>
                                </div>
                                <p className='border-b-gray-500 border-b-2 mb-8'><i class="fa-solid fa-hourglass-half"></i> Task Deadline: {selectedTask['Task Deadline']}</p>
                                <div>
                                  <p className='text-sm text-gray-400 italic'> Attachments: </p>
                                </div>
                                <div className="modal-action">
                                  <button data-tip='Back to Tasks' className='tooltip tooltip-info tooltip-left bg-blue-800 p-3 mt-2 text-white rounded-md' onClick={() => setSelectedTask(null)}>
                                    Close
                                  </button>
                                </div>
                              </div>
                            </dialog>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      <div className='border-2 text-center rounded-t-md py-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-700 to-purple-700'>
                        Completed Tasks
                      </div>
                      <div className='border-white border-2 border-t-0 p-4 h-[450px] overflow-y-auto rounded-b-xl'>
                        {completed.map((completed) => (
                          <div
                            key={completed.TaskID}
                            className='cursor-pointer my-4 text-white hover:text-blue-500'
                            onClick={() => setSelectedTask(completed)}>
                            <div className='flex justify-between flex-wrap'>
                              <div>
                                {completed['TaskID']} - {completed['Task Name']}
                              </div>
                              <div>
                                {completed['Task Deadline']}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* REVIEW AND COMPLETED */}
                  <div className='flex flex-wrap mt-5  gap-16 justify-between items-center'>

                  </div>
                  {/* END */}
                </div>
                {/* Task Data Table */}
                {/* <div>
                <TaskDataTable/>
              </div> */}
              </div>
            )}
          {displayTabs === 'Files' &&
            (
              <div className='my-5'>Files
                {/* <ProjectFile /> */}
              </div>
            )}
          {displayTabs === 'Discussion' &&
            (
              <div className='my-5'>
                {/* <ProjectDiscussion /> */}
              </div>
            )}
          {displayTabs === 'Chart' &&
            (
              //   <div className='my-5'>
              //   <Chart
              //     chartType="Gantt"
              //     width="auto"
              //     height="400px"
              //     data={data}
              //     options={options}
              //     chartEvents={chartEvents}
              //   />
              // </div>
              <div>
                Gantt Chart
              </div>
            )}
          {displayTabs === 'Notes' &&
            (
              <div className='my-5'>Notes</div>
            )}
        </div>
      </div>
    </div>

  )
}

export default ProjectForm
