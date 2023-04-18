//1st STEP
import React from 'react';
import ReactDOM from 'react-dom';
import profilePic1 from './images/pic1.avif';
import profilePic2 from './images/pic2.jpg';
import profilePic3 from './images/pic3.png';
import SingleComment from './SingleComment';
import FriendCard from './FriendCard';

//2nd STEP
// const App = function(){
    
//     return (
//         <div className='ui comments'>
//             <FriendCard>
//                 <SingleComment pic={profilePic1} name='Ali' time='Today at 5:00PM' text='Thanks!!!'>
//                     </SingleComment>
                 
        
//             </FriendCard>
//             <FriendCard>
//                 <SingleComment pic={profilePic2} name='Abdullah' time='Today at 4:00PM' text='Very Well!!!' />
            
//             </FriendCard>
//             <FriendCard>
//                 <SingleComment pic={profilePic3} name='Aslam' time='Yesterday at 3:00PM' text='Awesome!!!' />
        
//             </FriendCard>
//             </div>
//     )
// }

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {latitude:null,errorMessage:null}
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({latitude:position.coords.latitude})
            },
            (error)=>{
                this.setState({errorMessage:error.message})
            }
        )
    }
    render(){
        if(this.state.latitude && !this.state.errorMessage){
            return(
                <div>
                    {this.state.latitude}
                </div>
            )
        }
        else if(!this.state.latitude && this.state.errorMessage)
        {
            return(
                <div>
                    {this.state.errorMessage}
                </div>
            )
        }
        else{
            return(
                <div>
                    Waiting for permission...
                </div>
            )
        }
    }
}

//3rd STEP
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)