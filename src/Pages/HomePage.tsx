import Header from "../Header/Header";
import Companies from "../LoadingPage/Companies";
import DreamJob from "../LoadingPage/DreamJob";
import JobCategory from "../LoadingPage/JobCategory";

const HomePage = () => {
   return (
      <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
         <Header />
         <DreamJob/>
         <Companies/>
         <JobCategory/>
      </div>

   )

}
export default HomePage;