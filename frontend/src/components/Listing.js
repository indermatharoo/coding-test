import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './css/Listing.css';

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
