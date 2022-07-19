import portfolioImg from '../assets/img/portfolio.png'
import workoutGeneratorImg from '../assets/img/workout-generator.png'
import reelReviewsImg from '../assets/img/reel-reviews.png'
import ticTacToeImg from '../assets/img/tic-tac-toe.png'
import jobTrackerImg from '../assets/img/job-tracker.png'

const ProjectData = [
  {
    title: 'Portfolio',
    description: 'React & Express',
    type: 'Latest',
    type2: 'Solo',
    image: portfolioImg,
    appLink: '.',
    githubLink: 'https://github.com/MarcusAdams1220/portfolio'
  },
  {
    title: 'Basketball Workout Generator',
    description: 'PERN Stack',
    type: 'Solo',
    image: workoutGeneratorImg,
    appLink: 'https://warm-lowlands-83978.herokuapp.com/',
    githubLink: 'https://github.com/MarcusAdams1220/basketball-workout-app'
  },
  { 
    title: 'Reel Reviews',
    description: 'Ruby & Sinatra',
    type: 'Solo',
    image: reelReviewsImg,
    appLink: 'https://sheltered-everglades-43597.herokuapp.com/',
    githubLink: 'https://github.com/MarcusAdams1220/reel-reviews'
  },
  {
    title: 'Basketball Tic Tac Toe',
    description: 'HTML, CSS & Javascript',
    type: 'Solo',
    image: ticTacToeImg,
    appLink: 'https://marcusadams1220.github.io/tic-tac-toe/',
    githubLink: 'https://github.com/MarcusAdams1220/tic-tac-toe'
  },
  {
    title: 'Job Tracker',
    description: 'Javascript, Express & Postgresql',
    type: 'Group',
    image: jobTrackerImg,
    appLink: 'https://jobs-app-tracker.herokuapp.com/',
    githubLink: 'https://github.com/MarcusAdams1220/job-app-tracker'
  }
]

export default ProjectData