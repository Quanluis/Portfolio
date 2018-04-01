import React from 'react';

class About extends React.Component {
    render(){
        return(
            <div className = 'header'>
                <h1>
                    About
                </h1>
                <p>
                    This Portfolio was built by Luis Garzon to showcase his work, abilities, some
                    small info about his life and ambitions. 
                </p>
                <h1>
                    Story
                </h1>
                <p>
                    Luis was born in the coastal town of Macuto, Venezuela on the summer of 
                    August 31 1996. <br/> Two years later he immigrated to the States with his parents
                    and had the privilege to become a citizen. <br/> He grew up with a passion for Games,
                    astronomy and science fiction which later transitioned into technology <br/> and how it
                    Works to create a fun experience for the user. He now wishes to transition <br/> into the 
                    tech field to prove his skills and grow not only himself but the people around him.
                </p> 
            </div>
        )
    }
}
export default About;