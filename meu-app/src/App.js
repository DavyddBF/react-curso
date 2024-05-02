import { Component } from 'react';
import './App.css';

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá eu sou o(a) { this.props.nome }</h2>
        <h3>Meu cargo é de { this.props.cargo }</h3>
        <p>Tenho { this.props.idade } anos</p>
      </div>
    );
  }
}

class RedeSocial extends Component {
  render() {
    return (
      <div>
        <a href={this.props.fb}>Facebook -</a>
        <a href={this.props.insta}> Instagram -</a>
        <a href={this.props.yt}> Youtube</a>
      </div>
    );
  }
}

class Equipe extends Component {
  render() {
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
        <RedeSocial  fb={this.props.facebook} insta={this.props.instagram} yt={this.props.youtube} />
        <hr></hr>
      </div>
    );
  }
}

// function App() {
//   const redesSociais = {
//     facebook: 'https://www.facebook.com/?locale=pt_BR',
//     instagram: 'https://www.instagram.com/',
//     youtube: 'https://www.youtube.com/'
//   }

//   return(
//     <div>
//       <h1>Conheça a equipe:</h1>
//       <Equipe nome="Davyd" cargo="estudante" idade="18" facebook={redesSociais.facebook} instagram={redesSociais.instagram} youtube={redesSociais.youtube} />
//       <Equipe nome="Rodrigo" cargo="designer" idade="28" facebook={redesSociais.facebook} instagram={redesSociais.instagram} youtube={redesSociais.youtube}/>
//       <Equipe nome="Pedro" cargo="programador" idade="16" facebook={redesSociais.facebook} instagram={redesSociais.instagram} youtube={redesSociais.youtube}/>
//     </div>
//   );
// }

class App extends Component {
  redesSociais = {
    facebook: 'https://www.facebook.com/?locale=pt_BR',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/'
  }

  render() {
    return (
      <div>
        <h1>Conheça a equipe:</h1>
        <Equipe nome="Davyd" cargo="estudante" idade="18" facebook={this.redesSociais.facebook} instagram={this.redesSociais.instagram} youtube={this.redesSociais.youtube} />
        <Equipe nome="Rodrigo" cargo="designer" idade="28" facebook={this.redesSociais.facebook} instagram={this.redesSociais.instagram} youtube={this.redesSociais.youtube}/>
        <Equipe nome="Pedro" cargo="programador" idade="16" facebook={this.redesSociais.facebook} instagram={this.redesSociais.instagram} youtube={this.redesSociais.youtube}/>
      </div>
    );
  }
}

export default App;

// const Sobre = (props) => {
//   return (
//     <div>
//       <h2>Olá eu sou o(a) { props.nome }</h2>
//       <h3>Meu cargo é de { props.cargo }</h3>
//       <p>Tenho { props.idade } anos</p>
//     </div>
//   );
// }

// const RedeSocial = (props) => {
//   return (
//     <div>
//       <a href={props.fb}>Facebook -</a>
//       <a href={props.insta}> Instagram -</a>
//       <a href={props.yt}> Youtube</a>
//     </div>
//   );
// }

// const Equipe = (props) => {
//   return (
//     <div>
//       <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
//       <RedeSocial  fb={props.facebook} insta={props.instagram} yt={props.youtube} />
//       <hr></hr>
//     </div>
//   );
// }

// function App() {
//   const redesSociais = {
//     facebook: 'https://www.facebook.com/?locale=pt_BR',
//     instagram: 'https://www.instagram.com/',
//     youtube: 'https://www.youtube.com/'
//   }

//   return (
//     <div>
//       <h1>Conheça a equipe:</h1>
//       <Equipe nome="Davyd" cargo="estudante" idade="18" facebook={redesSociais.facebook} instagram={redesSociais.instagram} youtube={redesSociais.youtube} />
//       <Equipe nome="Rodrigo" cargo="designer" idade="28" facebook={redesSociais.facebook} instagram={redesSociais.instagram} youtube={redesSociais.youtube}/>
//       <Equipe nome="Pedro" cargo="programador" idade="16" facebook={redesSociais.facebook} instagram={redesSociais.instagram} youtube={redesSociais.youtube}/>
//     </div>
//   );
// }

// export default App;