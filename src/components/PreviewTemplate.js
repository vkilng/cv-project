import { Component } from 'react';
import '../styles/PreviewTemplate.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './sectionThree';

class PreviewTemplate extends Component {
  render() {
    return (
      <div className = 'PreviewTemplate'>
        <SectionOne isForm = {false} data = {this.props.data.personalDetails} />
        <SectionTwo isForm = {false} data = {this.props.data.education} />
        <SectionThree isForm = {false} data = {this.props.data.experience} />
      </div>
    )
  }
}

export default PreviewTemplate;