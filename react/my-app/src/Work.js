import React from 'react';

//const API = 'http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2';
const API = 'https://jsonplaceholder.typicode.com/posts';

class AppUserL extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           arr: []
        };
    }


    asdasdasd() {
        fetch(API)
           .then(response => response.json())
          .then(data => this.setState({ arr: data }));
        
    }


    render() {
        const { arr } = this.state;
        //console.log(this.state.arr);
        return (
          <div>
            {arr.map(hit =>
              <p key={hit.id}>
                <h3>{hit.title}</h3>
                <small>{hit.body}</small>
              </p>
            )}
          </div>
        );
    }
}



export default AppUserL;