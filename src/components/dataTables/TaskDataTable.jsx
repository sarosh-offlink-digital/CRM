import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import projectMember1 from '../../src/profilepic2.jpg';

const initialData = [
    { id: 1, projectName: 'Test Project 1', brand: "Captain Design Agency", projectMembers: "Member1", deadline: '14-9-2024', completion: 100, status: "Finished" },
    { id: 2, projectName: 'Test Project 2', brand: "Captain Design Agency", projectMembers: "Member2", deadline: '20-6-2024', completion: 50, status: "Overdue" },
    { id: 3, projectName: 'Test Project 3', brand: "Captain Book Publishing", projectMembers: "Member3", deadline: '17-9-2024', completion: 10, status: "Cancelled" },
    { id: 4, projectName: 'Test Project 4', brand: "Captain Design Agency", projectMembers: "Member4", deadline: '19-9-2024', completion: 100, status: "Finished" },
    { id: 5, projectName: 'Test Project 5', brand: "Captain Design Agency", projectMembers: "Member5", deadline: '19-9-2024', completion: 35, status: "In Progress" },
    // Additional tasks here...
];

const TaskDataTable = () => {
    const [data, setData] = useState(initialData);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Task form fields
    const [taskName, setTaskName] = useState('');
    const [taskType, setTaskType] = useState('');
    const [taskID, setTaskID] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    
    // Handle opening the modal for a specific task
    const handleTaskClick = (id) => {
        const task = data.find((task) => task.id === id);
        setSelectedTask(task);
    };

    // Handle opening the modal to add a new task
    const handleAddTaskClick = () => {
        setIsAddTaskModalOpen(true);
    };

    // Handle form submission for adding a new task
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: data.length + 1,
            projectName: taskName,
            projectMembers: 'New Member',
            deadline: taskDeadline,
            completion: 0,
            status: taskType,
            taskDescription,
        };
        setData([...data, newTask]);
        // Clear form
        setTaskName('');
        setTaskType('');
        setTaskID('');
        setTaskDescription('');
        setTaskDeadline('');
        setIsAddTaskModalOpen(false);
    };

    // Filter the data for search
    const filteredData = data.filter(item =>
        Object.values(item).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const columns = [
        { name: 'Id', selector: row => row.id, sortable: true, width: '60px' },
        { name: 'Project Name', selector: row => row.projectName, sortable: true },
        { name: 'Project Members', selector: row => row.projectMembers, sortable: true },
        { name: 'Deadline', selector: row => row.deadline, sortable: true },
        { name: 'Completion', selector: row => `${row.completion}%`, sortable: true },
        { name: 'Brand', selector: row => row.brand, sortable: true },
        { name: 'Project Status', selector: row => row.status, sortable: true },
        {
            name: 'Action',
            cell: row => (
                <button
                    onClick={() => handleTaskClick(row.id)}
                    className='bg-blue-500 text-white p-2 rounded-md'
                >
                    View Task
                </button>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="mb-4 p-2 border border-gray-300"
            />
            <DataTable columns={columns} data={filteredData} />
            
            {/* Add Task Button */}
            <button
                onClick={handleAddTaskClick}
                className="bg-green-500 text-white p-2 rounded-md mt-4"
            >
                Add Task
            </button>

            {/* Task Modal */}
            {selectedTask && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3>Task Title: {selectedTask.projectName}</h3>
                        <p>Task ID: {selectedTask.id}</p>
                        <p>Task Description: {selectedTask.taskDescription}</p>
                        <p>Deadline: {selectedTask.deadline}</p>
                        <button 
                            onClick={() => setSelectedTask(null)} 
                            className="bg-red-500 text-white p-2 rounded-md mt-4"
                        >
                            Close
                        </button>
                    </div>
                </dialog>
            )}

            {/* Add Task Modal */}
            {isAddTaskModalOpen && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3>Add New Task</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Task Name"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                className="p-2 border border-gray-300 w-full mb-4"
                            />
                            <input
                                type="text"
                                placeholder="Task Type"
                                value={taskType}
                                onChange={(e) => setTaskType(e.target.value)}
                                className="p-2 border border-gray-300 w-full mb-4"
                            />
                            <input
                                type="text"
                                placeholder="Task ID"
                                value={taskID}
                                onChange={(e) => setTaskID(e.target.value)}
                                className="p-2 border border-gray-300 w-full mb-4"
                            />
                            <textarea
                                placeholder="Task Description"
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                className="p-2 border border-gray-300 w-full mb-4"
                            />
                            <input
                                type="date"
                                placeholder="Task Deadline"
                                value={taskDeadline}
                                onChange={(e) => setTaskDeadline(e.target.value)}
                                className="p-2 border border-gray-300 w-full mb-4"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded-md"
                            >
                                Add Task
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsAddTaskModalOpen(false)}
                                className="bg-red-500 text-white p-2 rounded-md ml-4"
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default TaskDataTable;
