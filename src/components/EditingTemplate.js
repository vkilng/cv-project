import { Component } from 'react';
import '../styles/EditingTemplate.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './sectionThree';

class EditingTemplate extends Component {
  render() {
    return (
      <div className = 'EditingTemplate'>
        <SectionOne
          isForm = {true}
          updateField = {(category,field,content) => this.props.updateField(category,field,content)}
        />
        <SectionTwo
          isForm = {true}
          addFieldSet = {(category) => this.props.addFieldSet(category)}
          deleteFieldSet = {(category,index) => this.props.deleteFieldSet(category,index)}
          updateField = {(category,field,content,index) => this.props.updateField(category,field,content,index)}
          data = {this.props.eduData}
        />
        <SectionThree
          isForm = {true}
          addFieldSet = {(category) => this.props.addFieldSet(category)}
          deleteFieldSet = {(category,index) => this.props.deleteFieldSet(category,index)}
          updateField = {(category,field,content,index) => this.props.updateField(category,field,content,index)}
          data = {this.props.expData}
        />
      </div>
    )
  }
}

export default EditingTemplate;