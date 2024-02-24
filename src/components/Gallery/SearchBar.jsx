/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
// import { useState } from "react";

const SearchBar = ({ role, handleSearch, searchQuery, setSearchQuery }) => {

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <>
            <div className="w-1/2 px-4  ">
                <div className="relative ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="search"
                            id="default-search"
                            className="block h-[40px] w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Themes..."
                            value={searchQuery}
                            onChange={handleChange}
                            required
                        />
                        {role === "admin" ? (
                            <Button className="w-1/3 h-[40px]">Add New</Button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;