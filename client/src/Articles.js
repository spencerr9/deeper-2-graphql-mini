import React, {Component} from 'react';
import gql from 'graphql-tag';      // acts like axios
import {graphql} from 'react-apollo';      // acts like connect

class Articles extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.articles)}
            </div>
        )
    }
}

const getArticles = gql`
{
    articles {
        id
        url
        title
    }
}
`

export default graphql(getArticles, {name: 'articles'})(Articles);