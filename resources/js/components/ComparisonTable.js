import React from 'react';

const ComparisonTable = () => {
    return(
        // <div className="bg-lightGrey">
        //     <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
        //         <h2 className="text-3xl font-extrabold text-darkGrey tracking-tight sm:text-4xl mb-6 text-center">
        //             What do we offer?
        //         </h2>
        //         <div className="flex flex-col">
        //             <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        //                 <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        //                     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        //                         <table className="min-w-full divide-y divide-gray-200 text-center">
        //                             <thead className="bg-pink text-sm font-bold text-white uppercase">
        //                                 <tr>
        //                                     <th
        //                                     scope="col"
        //                                     className="px-6 py-3 tracking-wider"
        //                                     >
                                            
        //                                     </th>
        //                                     <th
        //                                     scope="col"
        //                                     className="px-6 py-3 tracking-wider"
        //                                     >
        //                                     Mymup Digital
        //                                     </th>
        //                                     <th
        //                                     scope="col"
        //                                     className="px-6 py-3 tracking-wider"
        //                                     >
        //                                     Rio
        //                                     </th>
        //                                     <th
        //                                     scope="col"
        //                                     className="px-6 py-3 tracking-wider"
        //                                     >
        //                                     IAPTus
        //                                     </th>
        //                                     <th
        //                                     scope="col"
        //                                     className="px-6 py-3 tracking-wider"
        //                                     >
        //                                     Carenotes
        //                                     </th>
        //                                     <th
        //                                     scope="col"
        //                                     className="px-6 py-3 tracking-wider"
        //                                     >
        //                                     Home made spreadsheet
        //                                     </th>
        //                                 </tr>
        //                             </thead>

        //                             <tbody>
        //                                 <tr>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Flows data to MHSDS for you</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        //                                         </svg>
        //                                     </td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                 </tr>
        //                                 <tr>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3rd sector specific</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        //                                         </svg>
        //                                     </td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                 </tr>
        //                                 <tr>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">In built digital self help</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        //                                         </svg>
        //                                     </td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                 </tr>
        //                                 <tr>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Simple, clinician friendly</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        //                                         </svg>
        //                                     </td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">?</td>
        //                                 </tr>
        //                                 <tr>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Created & developed in collaboration with users</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        //                                         </svg>
        //                                     </td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                 </tr>
        //                                 <tr>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Record all 3 MHST functions</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        //                                         </svg>
        //                                     </td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">?</td>
        //                                 </tr>
        //                                 <tr>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">FULLY SNOMED coded</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        //                                         </svg>
        //                                     </td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
        //                                 </tr>
        //                             </tbody>
        //                         </table>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
        <div className="bg-lightGrey">
            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-darkGrey tracking-tight sm:text-4xl mb-6 text-center">
                    What do we offer?
                </h2>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="overflow-x-scroll min-w-full divide-y divide-gray-200 text-center">
                                    <colgroup>
                                        <col span="2" className="bg-pink sticky left-0 z-10 md:relative"/>
                                    </colgroup>
                                    <thead className="bg-pink text-sm font-bold text-white uppercase">
                                        <tr>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 tracking-wider"
                                            ></th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 tracking-wider"
                                            >
                                            Mymup Digital
                                            </th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 tracking-wider"
                                            >
                                            Rio
                                            </th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 tracking-wider"
                                            >
                                            IAPTus
                                            </th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 tracking-wider"
                                            >
                                            Carenotes
                                            </th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 tracking-wider"
                                            >
                                            Home made spreadsheet
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Flows data to MHSDS for you</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3rd sector specific</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">In built digital self help</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Simple, clinician friendly</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">?</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Created & developed in collaboration with users</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Record all 3 MHST functions</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">?</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">FULLY SNOMED coded</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparisonTable;