import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <div className = 'header'>
               <br/>
               <img src={'https://avatars1.githubusercontent.com/u/35511948?s=400&u=263141ea319ac11c1b3af1e07743a3894a71803e&v=4'} alt = 'Not showing up' />
               <h1>
                   Welcome
               </h1>
               <p>
                 Hi i'm Luis and welcome to my custom website built with React! <br/> Please 
                 take a look around and check my projects. <br/> Love to code with others and help anyone
                 as much as i can. let me know if you have any questions!  
               </p>
            </div>
        )
    }
}
export default Home;