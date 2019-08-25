import React, { Component } from 'react';
import './css/Detail.css';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            job      : {},
        };
    }

    componentDidMount() {
        const jobId = this.props.match.params.id;
        const url = global.apiUrl + 'api/v1/jobs/' + jobId;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoading: false,
                job      : data.data
            });
            // console.log(this.state.job.applicants);
        })
        .catch(console.log)
        ;        
    }

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

    clearState() {
        this.setState({
            isLoading: false,
            jobs     : []
        });
    }

}

export default Detail;