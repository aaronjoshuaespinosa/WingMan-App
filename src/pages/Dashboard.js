import React from 'react'

const Dashboard = () => {
  const navLinks = [
    {
      id: 1,
      icon: "",
      name: "Dashboard",
    },
    {
      id: 2,
      icon: "",
      name: "Marketplace",
    },
    {
      id: 3,
      icon: "",
      name: "Appointments",
    },
    {
      id: 4,
      icon: "",
      name: "News & Announcements",
    },
    {
      id: 5,
      icon: "",
      name: "Complaint System",
    },
    {
      id: 6,
      icon: "",
      name: "FAQs",
    }
  ]
  return (
    <>
      {/* nav */}
      <div className='w-full h-screen flex font-space'>
        <div className='bg-blk w-80 h-full'>
          <div>
            <div className='flex items-center justify-center border-b-2 border-wht h-28'>
              <img src='https://ik.imagekit.io/xzgmktvzg/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671386953332' alt=""/>
            </div>
          </div>

          <div>
            <div></div>
          </div>

          <div>
            <div></div>
          </div>
        </div>

        <div className='bg-wht w-full h-full'>
          <div className='border-b-2 border-blk h-28 flex'>
            <div className='my-auto ml-10 text-5xl font-bold'>Good day, AJ!</div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard