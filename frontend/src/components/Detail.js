import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import './css/Detail.css';

/**
 * Component is responsible for display detail of the selected job.
 */
export default class Detail extends Component {

    /**
    * constructor function.
    *
    * @param {object} props
    * @return void
    */
    constructor(props) {
        super(props);
        this.state = {
            job      : {},
        };
    }

    /**
    * Fetch job detail via http get request then assign the response to state variables.
    *
    * @return void
    */
    componentDidMount() {
        const jobId = this.props.match.params.id;
        const url = global.apiUrl + 'api/v1/jobs/' + jobId;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                job      : data.data
            });
        })
        .catch(console.log)
        ;        
    }

    /**
    * Return the component view.
    *
    * @return JSX
    */
    render() {
        return(

            <Table celled>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Title</Table.Cell>
                        <Table.Cell>{this.state.job.title}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Description</Table.Cell>
                        <Table.Cell>{this.state.job.description}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Location</Table.Cell>
                        <Table.Cell>{ typeof this.state.job.location == 'undefined' ? '' : this.state.job.location.name }</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Date</Table.Cell>
                        <Table.Cell>{this.state.job.date}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Applicants</Table.Cell>
                        <Table.Cell>
                        { typeof this.state.job.applicants == 'undefined' ? (
                                    <div></div>
                                ):(
                                <div>
                                    {this.state.job.applicants.map((item, key) =>
                                        <span className="applicants" key={key} >
                                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </span>
                                    )}
                                </div>
                        )}
                        </Table.Cell>
                    </Table.Row>

                </Table.Body>

            </Table>

        )
    }
}
