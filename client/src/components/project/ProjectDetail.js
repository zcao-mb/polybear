import React from 'react';
import { projectServices } from '../../services';

export class ProjectDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            error: null,
            project: null
        };
    }

    componentWillMount() {
        console.log('project details: ', this.props.match);

        var self = this;

        self.setState({ isLoading: true });

        const id = parseInt(this.props.match.params.id, 10) || 0;
        projectServices.detail(id)
            .then(function(data) {
                console.log(data);
                self.setState({ isLoading: false, project: data });
            }, function(error) {
                console.log(error);
                self.setState({ isLoading: false, error: error });
            })
    }

    render() {
        let content;
        if(this.state.isLoading) 
            content = renderLoading();
        else if(this.state.error) 
            content = renderError(this.state.error);
        else if(!this.state.project) 
            content = renderNoData();
        else 
            content = renderDetail(this.state.project); 

        return (
            <div>
                {content}
                <div className="clearfix">
                    <button className="btn btn-default pull-left" onClick={this.goBack}>Back</button>
                </div>
          </div>
        )

    }

    goBack = () => {
        this.props.history.goBack();
    }

}


function renderLoading() {
    return <div>Loading...</div>
}

function renderError(error) {
    return <div>Error: {error.message}</div>
}

function renderNoData() {
    return <div>No Data</div>
}

function renderDetail(project) {
    return (
        <div>
            <div>Title: {project.title}</div>
            <div>Description: {project.description}</div>
        </div>
    );
}