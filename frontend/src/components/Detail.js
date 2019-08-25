import React, { Component } from 'react';
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

            <div className="panel panel-default">
            <div className="panel-heading">Job Detail </div>

                <table className="table">
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>
                                {this.state.job.title}
                            </td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                {this.state.job.description}
                            </td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>
                                { typeof this.state.job.location == 'undefined' ? '' : this.state.job.location.name }
                            </td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>
                                {this.state.job.date}
                            </td>
                        </tr>
                        <tr>
                            <td>Applicants</td>
                            <td>
                                { typeof this.state.job.applicants == 'undefined' ? (
                                    <div>1</div>
                                ):(
                                    <div>
                                        {this.state.job.applicants.map((item, key) =>
                                            <span className="applicants" key={key} >
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
