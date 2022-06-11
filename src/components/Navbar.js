// Rule #1 (optional)
import React from 'react';


// Rule #2 -- Define a function with same name as component name

const Navbar = function() {
// Rule #4 -- function/component needs to return something like HTML
  return (

  <div className="navbar bg-base-100">
    <div className="dropdown dropdown-hover">
  {/* <label tabindex="0" className="btn m-1">Hover</label> */}
  <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-9 h-9 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
    <h2 className="company-name normal-case text-xl">Company Name</h2>
  </div>
  <div className="avatar">
    <div className="w-24 mask mask-triangle">
    <img src="https://api.lorem.space/image/face?hash=60857" alt="Company Logo"/>
    </div>
  </div>
</div> )
}

// Rule #3 -- export default function
export default Navbar;