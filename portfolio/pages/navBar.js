import Link from 'next/link'

function NavBar() {
  let links =[]

  return (
    <>
    <ul>
      <li> 
      <a href= '/projects'> Projects </a>
        </li>

      <li> About Me</li>
      <li> Other thing</li>
      <li> Other Other Thing</li>
    </ul>
</>
  )
}

export default NavBar