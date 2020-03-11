import React, { Fragment, useState } from "react";
import logo from "../assets/images/logo-inverted.svg";

function Navbar() {
    let [isOpen, setOpen] = useState(false);
    let toogle = () => {
        setOpen(isOpen => !isOpen);
    };
    return (
        <Fragment>
            <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 ">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0 ">
                    <div>
                        <img className="h-8" src={logo} alt="Workation" />
                    </div>
                    <div className="sm:hidden">
                        <button
                            onClick={toogle}
                            type="button"
                            className=" text-gray-500 focus:text-white hover:text-white focus:outline-none "
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${isOpen ? 'block ' :"hidden"}`}>
                    <a
                        className=" block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
                        href="#"
                    >
                        List property
                    </a>
                    <a
                        className=" mt-1 block px-2 py-1  text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
                        href="#"
                    >
                        Trips
                    </a>
                    <a
                        className="mt-1 px-2 py-1  block text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
                        href="#"
                    >
                        Message
                    </a>
                </div>
            </header>
        </Fragment>
    );
}

export default Navbar;
