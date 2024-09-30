import React, { useState } from 'react';

const FileUploader = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [filePreviews, setFilePreviews] = useState([]);

    // Handle file selection
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);

        const newPreviews = files.map(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return new Promise((resolve) => {
                reader.onloadend = () => resolve(reader.result);
            });
        });

        // Update state with new files and previews
        Promise.all(newPreviews).then(previews => {
            setSelectedFiles(prevFiles => [...prevFiles, ...files]);
            setFilePreviews(prevPreviews => [...prevPreviews, ...previews]);
        });
    };

    // Handle file deletion
    const handleDelete = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        const updatedPreviews = filePreviews.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
        setFilePreviews(updatedPreviews);
    };

    // Handle file upload
    const handleUpload = () => {
        if (selectedFiles.length === 0) return;
        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append('files', file);
        });
        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='flex justify-start my-5'>
            <div className="p-3 bg-transparent rounded-lg shadow-md border border-gray-400 w-full">
                <h1 className='text-white'>
                    Upload Project Files <span className='italic text-sm text-gray-500'>(if any)</span>
                </h1>
                <input
                    type="file"
                    className="text-sm text-gray-900 border border-gray-300 rounded-r-lg cursor-pointer bg-gray-50"
                    onChange={handleFileChange}
                    multiple
                />
                <div className="my-4">
                    {filePreviews.map((preview, index) => (
                        <div key={index} className="relative mb-4">
                            <img src={preview} alt={`Preview ${index}`} className="w-full object-cover" />
                            <button
                                onClick={() => handleDelete(index)}
                                className="absolute top-0 right-0 px-3 py-2 bg-black text-white rounded-lg tooltip tooltip-top tooltip-info" data-tip='Delete'>X</button>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleUpload}
                    className="bg-blue-800 text-white py-2 px-4 rounded-md"
                >
                    Upload Files
                </button>
            </div>
        </div>
    );
};

export default FileUploader;
