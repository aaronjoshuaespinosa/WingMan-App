import React from 'react'

const AppCard = () => {
    return (
        <>
            <div className='flex flex-row'>

                <div className='flex justify-center items-center pr-3 lg:pr-5'>
                    {/* INDEX NUNG ENTRY, KUNG PANG-ILAN NA APPOINTMENT */}
                    <p className='text-orng font-bold text-3xl'>01</p>
                </div>

                <div className='flex flex-col lg:flex-row bg-light-lgry border-l-orng border-l-[5px] w-full justify-start lg:justify-between items-start py-[3rem] pl-3 lg:pl-[24px] cursor-pointer'>

                    {/* APPOINTMENT TYPE + APPOINTMENT TITLE */}
                    <p className='underline font-bold cursor-pointer hover:text-orng transition-all ease-in-out duration-[0.2s]'>DOCUMENT: Certificate of Grades</p>

                    <div className='flex flex-col lg:flex-row gap-x-2 lg:pr-[24px] font-bold select-none'>

                        {/* APPOINTMENT DATE - PLACEHOLDER MUNA */}
                        <p>Schedule: 12/12/2022</p>

                        {/* LINE */}
                        <p className='hidden lg:block'>|</p>

                        {/* APPOINTMENT TIME - PLACEHOLDER MUNA */}
                        <p>10:00 AM</p>
                    </div>

                </div>

                {/* KAHIT DITO MO MUNA STORE YUNG APPOINTMENT DESCRIPTION - NASA LABAS TALAGA S'YA NG CARD AS OF NOW, AKO NA MAG-AYOS NG STYLES KAPAG NAFE-FETCH NA S'YA */}
                <p></p>

            </div>
        </>
    )
}

export default AppCard