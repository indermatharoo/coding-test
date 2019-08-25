import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './css/Listing.css';

class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            jobs     : []
        };
        this.getListing();
        
    }

    getListing() {
        const url = global.apiUrl + 'api/v1/jobs';
        // this.setState({isLoading:true});
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoading: false,
                jobs     : data
            });    
        })
        .catch(console.log)
        ;        
    }

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

    clearState() {
        this.setState({
            isLoading: false,
            jobs     : []
        });
    }

}

export default Listing;