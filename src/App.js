import './App.css';
import ListItems from "./List.js"
import {Bttn} from './List.js'


function App() {
  return (
    <div>

   <ListItems heading="Mobile Operating System" li1="Android" li2="Blackberry" li3="iPhone" li4="Windows Phone"/>

   <ListItems heading="Mobile Manufacturers" li1="Samsung" li2="HTC" li3="Micromax" li4="Apple"/>


   <div style={{width:'180px',display:'flex',flexWrap:'wrap',margin:'20px auto'}}>
   <Bttn name="JOIN US" bgcolor="blue" />
   <Bttn name="SETTINGS" bgcolor="grey"/>
   <Bttn name="LOGIN" bgcolor="orange"/>
   <Bttn name="CONTACT US" bgcolor="red"/>
   <Bttn name="SEARCH" bgcolor="green"/>
   <Bttn name="HELP" bgcolor="purple"/>
   <Bttn name="HOME" bgcolor="pink"/>
   <Bttn name="DOWNLOAD" bgcolor="brown"/>
   <Bttn name="swati" bgcolor="red"/>
   </div>
   </div>
  );
}

export default App;
