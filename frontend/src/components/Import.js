import React, { Component } from 'react';

import { Button, Form } from 'semantic-ui-react'

/**
 * Component is responsible to import jobs into the system.
 */
export default class Import extends Component {

    /**
    * constructor function.
    *
    * @param {object} props
    * @return void
    */
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    /**
    * handle form submit event.
    * 
    * @param {object} event
    * @return void
    */
    handleSubmit(event) {
        event.preventDefault();

        if(this.fileInput.current.files.length === 0) {
            alert('Please select a Csv file first.');
            return;
        }

        const fileExt = /[^.]+$/.exec(this.fileInput.current.files[0].name);

        // 0 index is considered because user can select only one file.
        if(fileExt[0] !== 'csv') {
            alert('Please make sure you are uploading a valid file(CSV).');
            return;
        }
        
        this.importFile();
    }
    
    /**
    * Import data into the system.
    *
    * @return void
    */
    importFile() {
        const url = global.apiUrl + 'api/v1/jobs';
        var data = new FormData();

        // 0 index is considered because user can select only one file.
        data.append('file', this.fileInput.current.files[0]);

        fetch(url,{
            method:'POST',
            body:data
        })
        .then(res => res.json())
        .then((data) => {

        })
        .catch(function(error){
            console.log(error);
        })
        ;
    }
    
    /**
    * Return the component view.
    *
    * @return JSX
    */
    render() {
        return(
            <div>
                <h1>Import Jobs</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Select Csv File</label>
                        <input ref={this.fileInput} type="file" className="form-control"/>
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }

}
