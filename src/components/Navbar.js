// Rule #1 (optional)
import React from 'react';


// Rule #2 -- Define a function with same name as component name

const Navbar = function() {
// Rule #4 -- function/component needs to return something like HTML
  return (
//     <div>
//       <head>
//         <link href="https://cdn.jsdelivr.net/npm/daisyui@2.11.0/dist/full.css" rel="stylesheet" type="text/css" />
//         <script src="https://cdn.tailwindcss.com"></script>
//       </head>
//       <nav>
//       <div class="navbar bg-base-100">
//   <div class="flex-1">
//     <p class="btn btn-ghost normal-case text-xl">Decosmos Housing Co-op</p>
//   </div>
//   <div class="flex-none">
//     <ul class="menu menu-horizontal p-0">
//       <li><a>About</a></li>
//       <li tabindex="0">
//         <a>
//           Members
//           <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
//         </a>
//         <ul class="p-2 bg-base-100">
//           <li><a href='https://decosmos.myqnapcloud.com:8081/RepairRequest/StandardsInput.php' >Request Forms</a></li>
//           <li><a >Committees</a></li>
//         </ul>
//       </li>
//       <li><a>News</a></li>
//     </ul>
//   </div>
// </div>
//       </nav>
//     </div>
  // )
  <div class="navbar bg-base-100">
    <div class="dropdown dropdown-hover">
  {/* <label tabindex="0" class="btn m-1">Hover</label> */}
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div class="flex-1">
    <h2 class="company-name normal-case text-xl">Company Name</h2>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div> )
}

// Rule #3 -- export default function
export default Navbar;