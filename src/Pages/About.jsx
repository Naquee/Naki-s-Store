
// import { useProductContext } from '../components/context/Productcontext'
import HeroSection from '../components/HeroSection'

const About = () => {
// const {myName}=useProductContext()
// console.log("n",myName)

  const data={
    name:"Ecommerce Data"
  }
  return (
    <div>
    {/* <h1>{myName}</h1> */}
    <HeroSection myData={data}/>
    </div>
  )
}

export default About