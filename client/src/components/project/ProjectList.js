import React from 'react';
import { Link } from 'react-router-dom';
import { projectServices } from '../../services';

export class ProjectList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            error: null,
            projects: []
        };
    }

    componentWillMount() {
        const self = this;

        self.setState({ isLoading: true });

        projectServices.list()
            .then(function(data) {
                self.setState({ isLoading: false, projects: data });
                console.log('project list: ', data);
            }, function(error) {
                self.setState({ isLoading: false, error: error });
                console.log('list project error:  ', error);
            });
    }

    render() {
        let content;
        
        if(this.state.isLoading) 
            content = this.renderLoading();
        else if(this.state.error)
            content = this.renderError(this.state.error);
        else 
            content = this.renderList(this.state.projects);

        return (
            <div>
                <div><Link to={`create`}>Create Project</Link></div>
                {content}
            </div>
        )
    }

    renderLoading() {
        return <div>Loading...</div>
    }

    renderError(error) {
        return <div>Error: {error.message}</div>
    }

    renderList(projects) {
        return (
            <table className='table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Created Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project =>
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.title}</td>
                  <td>{project.createdDate}</td>
                  <td><Link to={`detail/${project.id}`}>Details</Link></td>
                </tr>
              )}
            </tbody>
          </table>
        );
    }
}