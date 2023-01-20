import { Component } from "react";

class SectionOne extends Component {
    render() {
        const formTemplate = (
            <div className = "section one">
                <legend>Personal Details</legend>
                <div>
                    <label>
                        <input type = "text" placeholder = "Name" required onChange = {(e) => this.props.updateField('personalDetails',"userName",e.target.value)} />
                    </label>
                    <label>
                        <input type = "text" placeholder = "Title" required onChange = {(e) => this.props.updateField('personalDetails',"title",e.target.value)} />
                    </label>
                    <label>
                        <input type = "tel" placeholder = "Phone Number" required onChange = {(e) => this.props.updateField('personalDetails',"phone",e.target.value)} />
                    </label>
                    <label>
                        <input type = "email" placeholder = "Email" required onChange = {(e) => this.props.updateField('personalDetails',"email",e.target.value)} />
                    </label>
                    <label>
                        <input type = "text" placeholder = "Location" required onChange = {(e) => this.props.updateField('personalDetails',"location",e.target.value)} />
                    </label>
                </div>
            </div>
        );
        if (!this.props.isForm) {
            const {userName,title,phone,email,location} = this.props.data;
            var viewTemplate = (
                <div className = "section one">
                    <div className = "left">
                        <span className = "name">{userName}</span>
                        <div className = "job-title">{title}</div>
                    </div>
                    <div className = "right">
                        <div>
                            <i className = "material-symbols-rounded">call</i>
                            <span className = "phone">{phone}</span>
                        </div>
                        <div>
                            <i className = "material-symbols-rounded">mail</i>
                            <span className = "email">{email}</span>
                        </div>
                        <div>
                            <i className = "material-symbols-rounded">location_on</i>
                            <span className = "location">{location}</span>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            this.props.isForm ? formTemplate : viewTemplate
        );
    }
}

export default SectionOne;