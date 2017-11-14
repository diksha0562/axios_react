import React from 'react';

import axios from 'axios';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            new_hero:'',
            heroes:[],
        }
        
    }
    
    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/diksha0562/react-practice/master/data.json')
        .then(response =>{
        //   console.log(response.data); // ex.: { user: 'Your User'}
        //   console.log(response.status); // ex.: 200
           this.setState({heroes:response.data})
        });  
    }
    
    buttonClick(e){
        e.preventDefault();
       const new_hero = this.state.new_hero;
       const heroes= this.state.heroes;
       heroes.push(new_hero);
       this.setState({heroes});
    }
    
    render(){
        return(
            <div>
            <form>
                <input type="text" onChange={event=>{this.setState({new_hero:event.target.value})}}/>
                <button onClick={e => {this.buttonClick(e)}}>Submit</button>
                <ul>
                    {this.state.heroes.map((obj)=>{
                        return <li>{obj}</li>
                    })}
                </ul>    
            </form>
            </div>   
        )
    }
}
export default App;