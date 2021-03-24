import Header from '../components/header.js'
import Image from 'next/image'
import Link from 'next/link';


export default function Projects (props) {
  let projects = [
    {
      name: 'Guess Who',
      link: 'http://mean-gorls.github.io/Guess-Who/',
      description: 'find tha dude',
      techDesc: 'using a keyboard I Blah',
      // thumbNail: GuessWhoThumb,
      
    },
    {
      name: 'FMLA Leave Planner',
      link: 'http://jala-leave.xyz/',
      description: 'This is a prototype I made for King County Metro, allowing employees to submit requests to use their leave time granted by FMLA.',
      techUsed: 'Technologies used: jQuery, EJS, Node.js, Express, Method-Override, Nodemon, Node Version Manager, PostgreSQL, Superagent, Visual Studios',
      techDesc: 'Currently King County Metro uses a set of google spreadsheets to track and update each employees FMLA balances, this App creates a user friendly UI for the staff easyily track and manage stored balances.'
      // thumbNail: GuessWhoThumb,
      
    },
    {
      name: 'Dynamo Cards',
      link: 'https://github.com/phoebe-assistant/dynamo-cards',
      description: 'fA flashcard Alexa skill that allows the user to create, retrieve, update, and delete, flashcards to study any subject of their choosing with little start up time. ',
      techDesc: 'The skill functions as a verbal database query system allowing the user to access and modify the database storing their flashcards, and also iterate through them to study.',
      techUsed: 'Technologies used: Alexa Console, DynamoDB, AWS Lambda, AWS-SDK, ASK-SDK'
      // thumbNail: GuessWhoThumb,
      
    },
    {
      name: 'MusicWiz',
      link: ' https://github.com/the-game-masters/MusicWiz',
      description: 'A modern take on the classic i-Pod nano music game that quizzes you on your knowledge of your music library.',
      techDesc: 'This application was a challenge to learn Swift and XCode in one week well enough to create a music quiz application. More features to be added.',
      techUsed: 'Technologies used: XCode, Swift 5.1'
      // thumbNail: GuessWhoThumb,
      
    }
  ]

  function displayProject(object){
    return <>

    <h4> {object.name} </h4>
    <p><Link href={object.link} passHref = {true}> Check it Out</Link></p>


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
    {displayProject(projects[0])}

    <h2> Hur Da Projects </h2>
    {/* {showAllProjects(projects)} */}



    </>
  )
}
