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
    link: '.'
  },
  {
    title: 'Basketball Workout Generator',
    description: 'PERN Stack',
    type: 'Solo',
    image: workoutGeneratorImg,
    link: 'https://warm-lowlands-83978.herokuapp.com/'
  },
  { 
    title: 'Reel Reviews',
    description: 'Ruby & Sinatra',
    type: 'Solo',
    image: reelReviewsImg,
    link: 'https://sheltered-everglades-43597.herokuapp.com/'
  },
  {
    title: 'Basketball Tic Tac Toe',
    description: 'HTML, CSS & Javascript',
    type: 'Solo',
    image: ticTacToeImg,
    link: 'https://marcusadams1220.github.io/tic-tac-toe/'
  },
  {
    title: 'Job Tracker',
    description: 'Javascript, Express & Postgresql',
    type: 'Group',
    image: jobTrackerImg,
    link: 'https://jobs-app-tracker.herokuapp.com/'
  }
]

export default ProjectData