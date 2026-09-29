import React from 'react'
import { Search ,  } from "lucide-react"
const Navbar = () => {
    return (

        <header>
            <div className='flex m-10 justify-between'>
                <div>
                    <span className='text-2xl font-bold '>Shop<span className=' text-primary'>Easy</span></span>
                    <p>Smart Shopping, Easy Life</p>
                </div>
                <div className=' flex gap-5 items-center'>
                    <div className="join">
                        <input type="text" placeholder="Search" className="input input-bordered join-item" />
                        <button className="btn join-item">
                            <Search />
                        </button>
                    </div>
                    <button className=''><img src="/src/assets/cart.webp" alt="cart" className='size-14' /></button>
                    <button className='btn   size-14 dropdown rounded-full'>
                        <img src="/src/assets/profilepic.webp" alt="" className='size-7 ' />
                        <ul className=' dropdown-content menu ' >
                            <li> <a href="/profile">Profile</a> </li>
                            <li> <a href="/Coupons">Coupons</a> </li>
                            <li> <a href="/Wishlist">Wishlist</a> </li>
                        </ul>
                    </button>
                </div>
            </div>
        </header>
    )

}

export default Navbar
