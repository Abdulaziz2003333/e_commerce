import React from 'react';

const Account = () => {
    return (
        <div className="container">

            <div className="pt-60 pb-52">

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
                                <li ><input className=" w-[330px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)] pl-3"
                                placeholder="Md"/></li>
                            </ul>
                            <ul>
                                <li className="mb-3">Last Name</li>
                                <li><input className=" w-[330px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)] pl-3"
                                placeholder="Rimel"/></li>
                            </ul>
                        </div>
                        <div className="flex justify-between">
                            <ul>
                                <li className="mb-3 mt-2" >Email</li>
                                <li ><input className=" w-[330px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)] pl-3"
                                            placeholder="rimel1111@gmail.com"/></li>
                            </ul>
                            <ul>
                                <li className="mb-3 mt-2">Address</li>
                                <li><input className=" w-[330px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)] pl-3"
                                placeholder="Kingston, 5236, United State"/></li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <h1 className="mb-5">Password Changes</h1>
                            <input
                                className="w-[870px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)] pl-3"
                            placeholder="Current Passwod"/>
                            <input
                                className="w-[870px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)] mt-5 pl-3"
                                placeholder=" New Passwod"/>
                            <input
                                className="w-[870px] h-[50px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)] mt-5 pl-3"
                            placeholder="Confirm New Passwod"/>
                        </div>
                        <div>
                            <ul className=" flex justify-end items-center mt-6">
                                <li className="mr-6"> Cancel</li>
                                <li>
                                    <button className=" text-white rounded [background:var(--Button2,#DB4444)] px-12 py-4">Save Changes</button>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Account;