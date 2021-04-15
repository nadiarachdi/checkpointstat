import React from 'react';
class profile extends React.Component{
constructor(props) {
    super(props);
    console.log('1. constructor()');
    this.state ={
     fullName:"Hi! My name is Nadia RACHDI",
      Biographie:"I am Nadia RACHDI researcher in hydrogeological sciences",
      profession:"I am a Geoscience Teacher",
      srcImg: 'emoji-femme.png',
      intervall: null,
      timer: 0,    
          };
}

componentDidMount() {
  console.log('3. componentDidMount()');
  this.setState({
    intervall: setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000),
  });
}
render(){
    return (
  <div>
      <h1 style ={{color:'grey'}}>{this.state.fullName}</h1>
      <p style={{color:'black'}}>{this.state.Biographie}</p>
      <h4>{this.state.profession}</h4>
      
      <ul>
  <li><img src={this.state.srcImg} width="300" /></li>
 
</ul>
<div class="light"></div>
<h2>{this.state.timer}</h2>
      </div>
    );
  }

}
export default profile
