import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Companies from "../LoadingPage/Companies";
import DreamJob from "../LoadingPage/DreamJob";
import JobCategory from "../LoadingPage/JobCategory";
import Subscribe from "../LoadingPage/Subscribe";
import Testimonials from "../LoadingPage/Testimonials";
import Working from "../LoadingPage/Working";

const HomePage = () => {
   return (
      <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
         <Header />
         <DreamJob/>
         <Companies/>
         <JobCategory/>
         <Working/>
         <Testimonials/>
         <Subscribe/>
         <Footer />
      </div>

   )

}
export default HomePage;