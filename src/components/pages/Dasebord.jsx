import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from '../Image';
import cardpicone from '/src/assets/Ellipse 2.png';
import catdpictwo from '/src/assets/catdpictwo.png';
import catdpicthree from '/src/assets/catdpicthree.png';
import friendone from '/src/assets/friendone.png';
import friendtwo from '/src/assets/friendtwo.png';
import friendthree from '/src/assets/friendthree.png';
import friendfour from '/src/assets/friendfour.png';
import { FaPlus } from "react-icons/fa6";





const Dasebord = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-blue-500 text-white">

          <span className={`hover:bg-white hover:text-blue-500 flex justify-center text-[20px] p-5`}><MdOutlineHome /></span>
          <span className={`hover:bg-white hover:text-blue-500 flex justify-center text-[20px] p-5`}><IoChatboxEllipses /></span>
          <span className={`hover:bg-white hover:text-blue-500 flex justify-center text-[20px] p-5`}><IoIosNotificationsOutline /></span>
          <span className={`hover:bg-white hover:text-blue-500 flex justify-center text-[20px] p-5`}><CiSettings /></span>
          <span className={`hover:bg-white hover:text-blue-500 flex justify-center text-[20px] p-5 mt-5`}><BiLogOut /></span>



        </div>
        <div className=" flex w-full mt-5 mr-5">
          {/* ====================== one start */}
          <div className="ml-5 w-full ">
            <div class="flex items-center justify-between  bg-white border border-gray-200 rounded-full shadow-sm  transition-all duration-200 hover:shadow-md mb-5">
              <div class="flex items-center space-x-2 w-full">

                <CiSearch className={`ml-3`} />
                <input
                  type="text"
                  placeholder="Search"
                  class="outline-none focus:outline-none focus:ring-0 border-none text-sm text-gray-700 placeholder-gray-400 w-full bg-transparent"
                />
              </div>


              <HiDotsVertical className={`mr-3`} />
            </div>


            <div className="">
              <Card className=" mx-auto shadow-2xl">
                <CardHeader>
                  <CardTitle className={`teax-[20px] font-Poppins font-semibold`}>Groups List</CardTitle>

                </CardHeader>
                <CardContent>
                  <div className="flex">
                    <Image src={cardpicone} className={`w-[62px]`} />
                    <div className="items-center m-auto">
                      <h1 className={`font-Poppins text-[18px] font-semibold`}>Friends Reunion</h1>
                      <p className={`font-Poppins text-[16px] font-medium text-zinc-500 `}>Hi Guys, Wassup!</p>
                    </div>
                    <div className="items-center m-auto">
                      <button className={`px-3 py-1 bg-blue-700 text-white font-Poppins rounded-full`}>Join</button>
                    </div>

                  </div>
                  <div className="border-1 mt-3 bg-black mb-3"></div>

                  <div className="flex">
                    <Image src={catdpictwo} className={`w-[62px]`} />
                    <div className="items-center m-auto">
                      <h1 className={`font-Poppins text-[18px] font-semibold`}>Friends Forever</h1>
                      <p className={`font-Poppins text-[16px] font-medium text-zinc-500 `}>Good to see you.</p>
                    </div>
                    <div className="items-center m-auto">
                      <button className={`px-3 py-1 bg-blue-700 text-white font-Poppins rounded-full`}>Join</button>
                    </div>

                  </div>
                  <div className="border-1 mt-3 bg-black mb-3"></div>



                  <div className="flex">
                    <Image src={catdpicthree} className={`w-[63px]`} />
                    <div className=" items-center m-auto">
                      <h1 className={`font-Poppins text-[18px] font-semibold`}>Crazy Cousins</h1>
                      <p className={`font-Poppins text-[16px] font-medium text-zinc-500 `}>What plans today?</p>
                    </div>
                    <div className="items-center m-auto">
                      <button className={`px-3 py-1 bg-blue-700 text-white font-Poppins rounded-full`}>Join</button>
                    </div>

                  </div>

                </CardContent>
              </Card>
            </div>
          </div>
          {/* ====================== one end*/}

          {/* ====================== two start*/}
          <div className="ml-5  w-full">
            <div className="">
              <Card className=" mx-auto shadow-2xl">
                <CardHeader>
                  <CardTitle className={`teax-[20px] font-Poppins font-semibold`}>Friends</CardTitle>

                </CardHeader>
                <CardContent>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendone} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Raghav</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">Dinner?</p>
                      </div>
                    </div>

                    <p className="font-Poppins text-[10px] font-medium">
                      Today, 8:56pm
                    </p>
                  </div>

                  <div className="border-1 mt-3 bg-black mb-3"></div>



                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendtwo} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Swathi</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">Sure!</p>
                      </div>
                    </div>

                    <p className="font-Poppins text-[10px] font-medium">
                      Today, 2:31pm
                    </p>
                  </div>
                  <div className="border-1 mt-3 bg-black mb-3"></div>




                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendthree} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Kiran</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">Hi.....</p>
                      </div>
                    </div>

                    <p className="font-Poppins text-[10px] font-medium">
                      Yesterday, 6:22pm
                    </p>
                  </div>
                  <div className="border-1 mt-3 bg-black mb-3"></div>




                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendfour} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Tejeshwini C</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">I will call him today.</p>
                      </div>
                    </div>

                    <p className="font-Poppins text-[10px] font-medium">
                      Today, 12:22pm
                    </p>
                  </div>


                </CardContent>
              </Card>
            </div>
          </div>
          {/* ====================== two end */}

          {/* ====================== three start*/}
          <div className="ml-5  w-full">
            <div className="">
              <Card className=" mx-auto shadow-2xl">
                <CardHeader>
                  <CardTitle className={`teax-[20px] font-Poppins font-semibold`}>User List</CardTitle>

                </CardHeader>
                <CardContent>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendone} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Raghav</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">Dinner?</p>
                      </div>
                    </div>

                    <span className={`bg-blue-600 rounded-[6px] text-white py-2 px-2`}><FaPlus /></span>
                  </div>

                  <div className="border-1 mt-2 bg-black mb-3"></div>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendone} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Raghav</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">Dinner?</p>
                      </div>
                    </div>

                    <span className={`bg-blue-600 rounded-[6px] text-white py-2 px-2`}><FaPlus /></span>
                  </div>

                  <div className="border-1 mt-2 bg-black mb-3"></div>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendone} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Raghav</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">Dinner?</p>
                      </div>
                    </div>

                    <span className={`bg-blue-600 rounded-[6px] text-white py-2 px-2`}><FaPlus /></span>
                  </div>

                  <div className="border-1 mt-2 bg-black mb-3"></div>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendone} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Raghav</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">Dinner?</p>
                      </div>
                    </div>

                    <span className={`bg-blue-600 rounded-[6px] text-white py-2 px-2`}><FaPlus /></span>
                  </div>

                  <div className="border-1 mt-2 bg-black mb-3"></div>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex">
                      <Image src={friendone} />
                      <div className="pl-4">
                        <h1 className="font-Poppins text-[14px] font-semibold">Raghav</h1>
                        <p className="font-Poppins text-[12px] font-medium text-zinc-500">Dinner?</p>
                      </div>
                    </div>

                    <span className={`bg-blue-600 rounded-[6px] text-white py-2 px-2`}><FaPlus /></span>
                  </div>



                </CardContent>
              </Card>
            </div>
          </div>
          {/* ====================== three end */}





        </div>
      </div>
    </>
  )
}

export default Dasebord
