import React, {Component} from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    this.getList();
  }

  getList = () =>{
    console.log( "Running getList");
    fetch('/api/getList')
    .then( res => res.json())
    .then( list => this.setState({ list }))
  }

  render(){
    const { list } = this.state;

    return(
      <div>
        <h1>
          The List
        </h1>
        <p>Lorem ipsum</p>
        { list.length ? (
           <div>
           {list.map((item) => {
            return (
              <div>
                  {item}
              </div>
              );
           })}
           </div>
          ) : (
            <div>Yeah that didn't work.</div>
          )
        }
      </div>
    );
  }
}

export default List;