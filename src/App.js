import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }


  async getUsersData(){
    const res = await axios.get('https://randomuser.me/api/?results=20')
    console.log(res.data.results)
    this.setState({loading:false, users: res.data.results})
  }
  componentDidMount(){
    this.getUsersData()
  }

  render() {
    const columns = [
      {  
      Header: 'Gender',  
      accessor: 'gender',
     },
     {  
      Header: 'First Name',  
      accessor: 'name.first',
     },
     {  
      Header: 'Last Name',  
      accessor: 'name.last',
     },
     {  
      Header: 'Phone',  
      accessor: 'phone',
     },


  ]

  
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}