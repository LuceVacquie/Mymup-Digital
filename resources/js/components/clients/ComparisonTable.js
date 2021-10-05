import React from 'react';

const ComparisonTable = () => {
    return(
        
        <div className="bg-lightGrey">
            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
                <h2 className="text-3xl font-extrabold text-darkGrey tracking-tight sm:text-4xl mb-6 text-center">
                    What do we offer?
                </h2>
                <div className="flex flex-col">
                    <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                <table className="relative bg-white min-w-full divide-y divide-gray-200 text-center">

                                    <colgroup>
                                        <col span="1" className="sticky left-0"/>
                                    </colgroup>
                                    <colgroup>
                                        <col span="1" className="bg-blue"/>
                                    </colgroup>
                                    <colgroup>
                                        <col span="4" className="bg-pink"/>
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
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-darkGrey">Flows data to MHSDS for you</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-darkGrey">3rd sector specific</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-darkGrey">In built digital self help</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-darkGrey">Simple, clinician friendly</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">?</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-darkGrey">Created & developed in collaboration with users</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-darkGrey">Record all 3 MHST functions</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">?</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-darkGrey">FULLY SNOMED coded</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-mediumGrey"></td>
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