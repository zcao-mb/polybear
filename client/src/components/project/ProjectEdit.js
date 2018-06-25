import React from 'react';
import _ from 'lodash';
import { projectServices } from '../../services';

export class ProjectEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: {
                title: '',
                description: ''
            }
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let data = _.clone(this.state.data);
        data[name] = value;
        this.setState({ data: data });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        var self = this;
        this.setState({ isLoading: true })
        projectServices.create(this.state.data)
            .then(function (data) {
                console.log('create project: ', data);
                self.setState({ isLoading: false });
                self.gotoList();
            }, function (error) {
                console.log('create project error: ', error);
                self.setState({ isLoading: false });
            });
    }

    render() {
        return (
            <div>
                <h1>Create Project</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                <div className="row">
                    <div className="col-md-10">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input className="form-control" name="title" type="text" value={this.state.data.title} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control" name="description" value={this.state.data.description} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-default" type="submit" disabled={this.state.isLoading}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    gotoList = (e) => {
        this.props.history.push('/project/list');
    }

}