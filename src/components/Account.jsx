import React from 'react';

const Account = () => {
    return (
        <div className="container">
            {/*<h1 className="text-right">Jonim Username bu </h1>*/}
            <div className="pt-60">

                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-base poppins-semimedium">Manage My Account</h1>
                        <ul className="ml-7 mt-3 mb-5">
                            <li className=" text-base font-normal leading-6 opacity-80 hover:text-[#DB4444] ">My
                                Profile
                            </li>
                            <li className=" text-base font-normal leading-6 opacity-80 hover:text-[#DB4444]">Address
                                Book
                            </li>
                            <li className=" text-base font-normal leading-6 opacity-80 hover:text-[#DB4444]">My Payment
                                Options
                            </li>
                        </ul>
                        <h1 className="text-base poppins-semimedium">My Orders </h1>
                        <ul className="ml-7 mt-3 mb-5">
                            <li className=" text-base font-normal leading-6 opacity-80 hover:text-[#DB4444] ">My
                                Returns
                            </li>
                            <li className=" text-base font-normal leading-6 opacity-80 hover:text-[#DB4444]">My
                                Cancellations
                            </li>
                            <li className=" text-base font-normal leading-6 opacity-80 hover:text-[#DB4444]">My Payment
                                Options
                            </li>
                        </ul>

                        {/*    left side*/}

                    </div>
                    <div className="w-[870px] ">
                        {/*    right side */}
                        <h1 className="poppins-semimedium text-[#DB4444] text-xl mb-3 "> Edit Your Profile</h1>
                        <div className="flex justify-between items-center">
                            <ul>
                                <li className="mb-3">Firs Name</li>
                                <li ><input className=" w-[300px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)]"/></li>
                            </ul>
                            <ul>
                                <li className="mb-3">Last Name</li>
                                <li><input className=" w-[300px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)]"/></li>
                            </ul>
                        </div>
                        <div className="flex justify-between">
                            <ul>
                                <li>Email</li>
                                <li><input/></li>
                            </ul>
                            <ul>
                                <li>Address</li>
                                <li><input/></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Account;