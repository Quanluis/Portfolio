import React from 'react';
import Footer from './Footer';

class Home extends React.Component {
    render(){
        return(
            <div className = 'header'>
               <br/>
               <img className = 'luis' src={require("../img/luis.jpg")} alt = 'Not showing up' />
               <h1>
                   Welcome
               </h1>
               <p>
                 Hi i'm Luis and welcome to my custom website built with React! <br/> Please 
                 take a look around and check my projects. <br/> Love to code with others and help anyone
                 as much as i can. let me know if you have any questions!  
               </p>
               <p>
                 This website was built with the following.
               </p>
               <Footer /> 
            </div>
        )
    }
}
export default Home;