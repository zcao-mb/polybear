import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/shared';
import Home from './components/Home';
import Test from './Test';
import { ProjectList, ProjectDetail, ProjectEdit } from './components/project';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/project/list" component={ProjectList} />
        <Route path="/project/detail/:id?" component={ProjectDetail} />
        <Route path="/project/create" component={ProjectEdit} />
      </Layout>
    );
  }
}

export default App;
