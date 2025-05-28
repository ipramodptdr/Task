import React from 'react'

const Sidebar = () => {
    const catagories = [
        {
            id: 1,
            name: "Woman’s Fashion "
        },
        {
            id: 2,
            name: "Men’s Fashion"
        },
        {
            id: 3,
            name: "Medicine"
        },
        {
            id: 4,
            name: "Sports & Outdoor"
        },
        {
            id: 5,
            name: "Baby’s & Toys"
        },
        {
            id: 5,
            name: "Groceries & Pets"
        },
        {
            id: 5,
            name: "Health & Beauty"
        },
        
    ]
  return (
    <div className=''>
      <ul className='flex flex-col gap-2'>
        {catagories.map((catagory) => (
            <li key={catagory.id} className='cursor-pointer mt-2'>{catagory.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
