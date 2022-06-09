// Rule #1 (optional)
import React from 'react';


// Rule #2 -- Define a function with same name as component name

const Navbar = function() {
// Rule #4 -- function/component needs to return something like HTML
  return (
    <div>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.11.0/dist/full.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <nav>
      <div class="navbar bg-base-100">
  <div class="flex-1">
    <p class="btn btn-ghost normal-case text-xl">Decosmos Housing Co-op</p>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a>About</a></li>
      <li tabindex="0">
        <a>
          Members
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><a href='https://decosmos.myqnapcloud.com:8081/RepairRequest/StandardsInput.php' >Request Forms</a></li>
          <li><a >Committees</a></li>
        </ul>
      </li>
      <li><a>News</a></li>
    </ul>
  </div>
</div>
      </nav>
    </div>
  )
}

// Rule #3 -- export default function
export default Navbar;