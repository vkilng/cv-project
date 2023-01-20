import { Component } from 'react';
import uniqid from 'uniqid';
import EditingTemplate from './EditingTemplate';
import PreviewTemplate from './PreviewTemplate';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalDetails: {
        userName: 'Kakeru Ryuen',
        title: 'Web Developer',
        phone: '+81 123-456-7890',
        email: 'kakeruryuen321@gmail.com',
        location: 'Chiba, Tokyo'
      },
      education: [
        {id: '1d47gapx', school: 'Sobu Elementary School, Chiba', study:'Elementary School', start: '2006', end: '2016'},
        {id: '1d47gapy', school: 'Sobu High School, Chiba', study: 'Science stream', start: '2016', end: '2018'},
        {id: '1d47gapz', school: 'Coco Ichibanya University', study: 'Bachelor in Culinary Arts', start: '2018', end: '2022'},
        {id: '1d47gaq0', school: 'The Odin Project', study: 'Fullstack JavaScript', start: '2022', end: 'Present'}
      ],
      experience: [
        {id: '1d4de1d3', company: '7 Eleven', position: 'Cashier', description: 'Helped local management deliver value and quality to retail customers.\nDirectly facilitated revenue growth and customer retention, while proactively informing the company culture of service and loyalty.', start: '2016', end: '2017'},
        {id: '1d4de1d4', company: 'Coco Ichibanya', position: 'Underwater Ceramics Technician', description: 'Washed dishes and utensils', start: '2017', end: '2018'},
        {id: '1d4de1d5', company: 'Saizeriya', position: 'Line Cook', description: 'I cook food', start: '2018', end: 'Present'}
      ]
    }
  }

  addFieldSet(category) {
    const dummmyObject = Object.assign({},this.state);
    if (category !== '') {
      const uniqID = uniqid();
      dummmyObject[category].push({id: uniqID,school:'',study:'',start:'',end:''});
    }
    this.setState(dummmyObject);
  }

  deleteFieldSet(category,index) {
    const dummmyObject = Object.assign({},this.state);
    if (category !== '') dummmyObject[category].splice(index,1);
    this.setState(dummmyObject);
  }
  
  updateField(category, field, content, index) {
    const dummmyObject = Object.assign({},this.state);
    if (category === 'personalDetails') dummmyObject[category][field] = content;
    if (category !== '') dummmyObject[category][index][field] = content;
    this.setState(dummmyObject);
  }
  
  render() {
    return (
      <div className = "App">
        <EditingTemplate
          eduData = {this.state.education}
          expData = {this.state.experience}
          addFieldSet = {(category) => this.addFieldSet(category)}
          deleteFieldSet = {(category,index) => this.deleteFieldSet(category,index)}
          updateField = {(category,field,content,count) => this.updateField(category,field,content,count)}
        />
        <PreviewTemplate data = {this.state} />
      </div>
    );
  }
}

export default App;