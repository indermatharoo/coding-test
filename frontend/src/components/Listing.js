import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

import './scss/Listing.scss';

/**
 * Component is responsible for jobs listing.
 */
export default class Listing extends Component {

    /**
    * constructor function.
    *
    * @param {object} props
    * @return void
    */
    constructor(props) {
        super(props);
        this.state = {
            jobs     : []
        };
        this.getListing();
        
    }

    getListing() {
        const url = global.apiUrl + 'api/v1/jobs';
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                jobs     : data
            });    
        })
        .catch(function(error){
            console.log(error);
        })
        ;        
    }

    render() {
        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>More Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.state.jobs.map((item, key) => 
                    <Table.Row key={key} >
                        <Table.Cell>{key + 1}</Table.Cell>
                        <Table.Cell>{item.title}</Table.Cell>
                        <Table.Cell>{item.location.name}</Table.Cell>
                        <Table.Cell>{item.date}</Table.Cell>
                        <Table.Cell>
                        <Route render={({history}) => (
                            <button className="btn" type="button" onClick={() => { history.push('/detail/'+item.id)}}>
                                More Info
                            </button>
                        )}
                        />
                        </Table.Cell>
                    </Table.Row>
                    )}
                </Table.Body>

            </Table>
        )
    }
    /**
    * Return the component view.
    *
    * @return JSX
    */
    render_old() {
        return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">More Info</th>
                </tr>
            </thead>
            <tbody>
                {this.state.jobs.map((item, key) =>
                <tr key={item.id} className="job_detail">
                    <th scope="row">{key+1}</th>
                    <td>{item.title}</td>
                    <td>{item.location.name}</td>
                    <td>{item.date}</td>
                    <td>
                    {/* routes configuration */}
                    <Route render={({history}) => (
                        <button className="btn" type="button" onClick={() => { history.push('/detail/'+item.id)}}>
                            More Info
                        </button>
                    )}
                    />
                    </td>
                </tr>
                )}
            </tbody>
        </table>
        );
    }

}
