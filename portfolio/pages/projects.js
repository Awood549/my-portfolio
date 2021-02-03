import Header from '../components/header.js'

export default function Projects (props) {
  let projects = [
    {
      name: 'Guess Who',
      link: 'www.whodat.com',
      description: 'find tha dude',
      techDesc: 'using a keyboard I Blah',
      thumbNail: 'Pic',
      
    }
  ]

  function displayProject(object){
    return <>
    <h4> {object.name} </h4>
    <image></image>
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
