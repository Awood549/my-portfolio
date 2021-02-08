import Header from '../components/header.js'
import Image from 'next/image'

export default function Projects (props) {
  let projects = [
    {
      name: 'Guess Who',
      link: 'mean-gorls.github.io/guess-who/',
      description: 'find tha dude',
      techDesc: 'using a keyboard I Blah',
      thumbNail: GuessWhoThumb,
      
    }
  ]

  function displayProject(object){
    return <>
    
    <h4> {object.name} </h4>
    <Image src = '/GuessWhoThumb.PNG'/>
    </>
  }
                   
  return(
    <>
    <Header> </Header>
    {displayProject(projects[0])}

    <h2> Hur Da Projects </h2>



    </>
  )
}
