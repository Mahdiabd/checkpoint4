import React, { Component } from 'react';
import delpiero from './delpiero.jpg';
import './App.css';
import Box from './component/juv';
import Titre from './component/titre';
import Present from './component/present';


class App extends Component {
  render() {
    return (
      <div className="test">
    
         <h1 className="header" >Juventus</h1>
         <div className="test-part">
         <span className="span1"><Box  name='Delpiero' des="El Capitano" img="./delpiero.jpg"/></span>
         <span className="span1"> <Box name='Buffon' des="The Spider" img="./buffon.jpg"/></span>
         <span className="span1"><Box name='Nedved' des="Golden Boy" img="./nedved.jpg"/> </span>
         <span className="span1"> <Box name='Chiellini' des="Go Gorilla" img="./chiellini.jpg"/></span>
        </div>
        <br/><br/>   <br/>  <br/><br/><br/>   <br/>  <br/>
        <br/>
        <br/>
        <div className="presentation">
        <h1>PRESENTATION</h1>
        <span className="span3"><Present des="La Juventus Football Club (du latin iuventūs : jeunessenote 1, prononcé : [juˈvɛntus]), plus communément appelée la Juventus de Turin en français, et familièrement la Juve (prononcer : [ˈjuːve]), mais également surnommée la Vecchia Signora (la Vieille Dame) ou bien encore les Bianconeri (les Blancs et Noirs), est un club de football professionnel italien (également S.p.A., société par actions) basé dans la ville de Turin, dans la région du Piémont, dans le nord de l'Italie."/></span>
        </div>
        <br/>
        <br/>
        <br/><br/>
      
        <br/>  <br/>
        
        <div ClassName="trophies">
        <h1>LE COMPLEXE</h1>
        <span className="span2"><Titre name='Juventus Meusum' des=" noto per esteso come Juventus Museum, è un museo storico-sportivo multimediale bilingue[4] dedicato alla società calcistica italiana per azioni Juventus Football Club, con sede nell'area nord-occidentale della città di Torino. Fu inaugurato nel 2012 in occasione del 115º anniversario di fondazione istituzionale del club bianconero, uno dei più antichi del Paese oltreché proprietario della struttura.[5]"/></span>
        <span className="span2"><Titre  name='Allianz Stadium' des="L'Allianz Stadium, nom commercial du Juventus Stadium, est un stade de football situé dans la ville italienne de Turin, dans le Piémont, qui accueille les matchs à domicile de la Juventus Football Club.
Avec 41 507 places,2 il est le huitième stade d'Italie en termes de capacité."/></span>
        <span className="span2"><Titre  name='La Contissa' des="a Continassa è un'area di 260 000 m² situata nell'estrema periferia nord-ovest di Torino, all'interno della Circoscrizione 5 nei quartieri Vallette e Lucento, confinante con Madonna di Campagna (zona Barriera di Lanzo) e il comune di Venaria Reale, delimitata a nord da strada Druento, a sud da corso Ferrara, a ovest da via Traves e a est dai terreni dell'Allianz Stadium (impianto privato inaugurato nel 2011 al posto del precedente stadio delle Alpi) fino a Strada Altessano."/></span>
        </div>
      </div>
    );
  }
}
export default App;