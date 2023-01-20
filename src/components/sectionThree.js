import { Component } from "react";
import uniqid from "uniqid";

class SectionThree extends Component {
    render() {
        const {isForm,addFieldSet,deleteFieldSet,updateField,data} = this.props;
        
        const formTemplate = (
            <div className = "section three">
                <legend>
                    Experience Details
                    <i  className = "material-symbols-rounded"
                        onClick = {() => addFieldSet('experience')}>add_circle</i>
                </legend>
                {data.map((elem,index) => (
                    <div className = "editingForm" key = {elem.id}>
                        <div className = "top-half">
                            <input type = "text" placeholder = "Position" required defaultValue = {elem.position}
                                onChange = {(e) => updateField('experience','position',e.target.value,index)} />
                            <input type = "text" placeholder = "Organization / Company" required defaultValue = {elem.company}
                                onChange = {(e) => updateField('experience','company',e.target.value,index)} />
                            <textarea placeholder = "Job Description" required defaultValue = {elem.description}
                                onChange = {(e) => updateField('experience','description',e.target.value,index)} />
                        </div>
                        <div className = "bottom-half">
                            <input type = "year" placeholder = "start year" required
                                defaultValue = {elem.start} className = 'year-input'
                                onChange = {(e) => updateField('experience','start',e.target.value,index)} />
                            <span> --- </span>
                            <input type = "year" placeholder = "end year" required
                                defaultValue = {elem.end} className = 'year-input'
                                onChange = {(e) => updateField('experience','end',e.target.value,index)} />
                            <span>
                                <button onClick = {() => deleteFieldSet('experience',index)}>Delete</button>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        )

        if (!isForm) {
            var viewTemplate = (
                <div className = "section three">
                    <div className = "header">EXPERIENCE</div>
                    {data.map(element => (
                        <div className = "row" key = {uniqid()}>
                            <div className = "top-half">
                                <span>{element.position}</span>
                                <span>{element.company} | {element.start} - {element.end}</span>
                            </div>
                            <div className = "bottom-half">{element.description}</div>
                        </div>
                    ))}
                </div>
            )
        }

        return (
            isForm ? formTemplate : viewTemplate
        )
    }
}

export default SectionThree;