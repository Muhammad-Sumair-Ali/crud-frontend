import React from 'react'
import AddUser from '../AddUser'

const Navbar = () => {
  return (
    <div className='p-2'>
       <div className="flex justify-between p-4 bg-gray-50 border-b rounded-t-lg">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
              placeholder="Search Users"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Search
            </button>
         <AddUser/>
          </div>
          <div  className='flex items-center gap-1 bg-slate-400/50 p-2 hover:bg-slate-200/75 rounded-xl ' >
            <img href="https://github.com/Muhammad-Sumair-Ali" src='https://avatars.githubusercontent.com/u/165611106?v=4' className='h-14 w-14' />
            <a target='blank' href="https://github.com/Muhammad-Sumair-Ali" className='text-xl font-mono'>
                Muhammad Sumair
            </a>
          </div>
        </div>
    </div>
  )
}

export default Navbar
