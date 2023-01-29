import React from 'react'

const Pagination = ({ totalItems, itemsPerPage, setCurrentPage, currentPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i)
    }
    return (
        <>
            {pages.map((page, i) => (
                <div className='flex flex-col gap-x-2'>
                    <button
                        key={i}
                        className="py-2 px-4 mx-1 mt-[24px] bg-wht border-[2px] border-blk rounded-[3px] hover:bg-light-lgry transition-bg duration-[0.2s] ease-in-out"
                        onClick={() => setCurrentPage(page)}
                        style={page === currentPage ? { color: "#F9F9F9", backgroundColor: "#1E1E1E" } : {}}>{page}</button>
                </div>
            ))}
        </>
    )
}

export default Pagination