import Header from '../components/header.js'
import Image from 'next/image'

export default function Projects (props) {
  let projects = [
    {
      name: 'Guess Who',
      link: 'mean-gorls.github.io/guess-who/',
      description: 'find tha dude',
      techDesc: 'using a keyboard I Blah',
      // thumbNail: GuessWhoThumb,
      
    },
    {
      name: 'FMLA Leave Planner',
      link: 'http://jala-leave.xyz/',
      description: 'This is a prototype I made for King County Metro, allowing employees to submit requests to use their leave time granted by FMLA.',
      techDesc: 'Technologies used: jQuery, EJS, Node.js, Express, Method-Override, Nodemon, Node Version Manager, PostgreSQL, Superagent, Visual Studios',
      // thumbNail: GuessWhoThumb,
      
    },
    {
      name: 'Guess Who',
      link: 'mean-gorls.github.io/guess-who/',
      description: 'find tha dude',
      techDesc: 'using a keyboard I Blah',
      // thumbNail: GuessWhoThumb,
      
    },
    {
      name: 'Guess Who',
      link: 'mean-gorls.github.io/guess-who/',
      description: 'find tha dude',
      techDesc: 'using a keyboard I Blah',
      // thumbNail: GuessWhoThumb,
      
    }
  ]

  function displayProject(object){
    return <>

    <h4> {object.name} </h4>
    <Image src = '/GuessWhoThumb.PNG' width='100%' height = '100%'/>
    </>
  }

  function showAllProjects(array){
    

    const list = <> <ul>

    {array.map((project,idx) => {
      <li key={idx}> {console.log('ping')
    }'HEYYYY'</li>
    })}
    </ul>
    </>

    return list
  }
                   
  return(
    <>
    <Header> </Header>
    {/* {displayProject(projects[0])} */}

    <h2> Hur Da Projects </h2>
    {showAllProjects(projects)}



    </>
  )
}
