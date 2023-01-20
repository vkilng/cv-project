import { Component } from "react";
import uniqid from "uniqid";

class SectionTwo extends Component {
    render() {
        const {isForm,addFieldSet,deleteFieldSet,updateField,data} = this.props;
        const formTemplate = (
            <div className = "section two">
                <legend>
                    Education Details
                    <i  className = "material-symbols-rounded"
                        onClick = {() => addFieldSet('education')}>add_circle</i>
                </legend>
                {data.map((elem,index) => (
                    <div className = "editingForm" key = {elem.id}>
                        <div className = "top-half">
                            <input type = "text" placeholder = "School / College / University" required defaultValue = {elem.school}
                                onChange = {(e) => updateField('education','school',e.target.value,index)} />
                            <input type = "text" placeholder = "Title of Study" required defaultValue = {elem.study}
                                onChange = {(e) => updateField('education','study',e.target.value,index)} />
                        </div>
                        <div className = "bottom-half">
                            <input type = "year" placeholder = "start year" required
                                defaultValue = {elem.start} className = 'year-input'
                                onChange = {(e) => updateField('education','start',e.target.value,index)} />
                            <span> --- </span>
                            <input type = "year" placeholder = "end year" required
                                defaultValue = {elem.end} className = 'year-input'
                                onChange = {(e) => updateField('education','end',e.target.value,index)} />
                            <span>
                                <button onClick = {() => deleteFieldSet('education',index)}>Delete</button>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        )

        if (!isForm) {
            var viewTemplate = (
                <div className = "section two">
                    <div className = "header">EDUCATION</div>
                    {data.map(element => (
                        <div className = "row" key = {uniqid()}>
                            <span>{element.study}</span>
                            <span>{element.school} | {element.start} - {element.end}</span>
                        </div>
                    ))}
                </div>
            )
        }

        return (
            isForm ? formTemplate : viewTemplate
        );
    }
}

export default SectionTwo;