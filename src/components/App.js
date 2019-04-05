import React, { Component } from 'react';
import Header from './Header'
import List from './list/List'

class App extends Component {
  state = {
    task: "",
    list: []
  }
  
  updateTask = (e) => {
    
    this.setState({
      task: e.target.value
    })

    if (e.key === 'Enter') {
      this.addTaskToList()
    }
  }

  addTaskToList = () => {

    if (this.state.task) {
      let tempList = this.state.list
    
      tempList.push({
        task: this.state.task,
        completed: false
      })
      
      this.setState({
        list: tempList,
        task: ''
      })
    }  
    console.log(this.state.list);
    

  }

  removeItemFromList = (index) => {
    let tempList = this.state.list

    tempList.splice(index, 1)

    this.setState({
      list: tempList
    })
  }

  taskCompleted = (index) => {
    let tempList = this.state.list

    tempList[index].completed = !tempList[index].completed

    this.setState({
      list: tempList
    })
  }

  render() {
    return (
      <div className='container'>
        
        <Header
          inputHandler={this.updateTask}
          taskValue={this.state.task}
          clickHandler={this.addTaskToList}
        />
        <List 
          listItems={this.state.list}
          removeItemFromList={this.removeItemFromList}
          taskCompleted={this.taskCompleted}
        />
      </div>
    );
  }
}

export default App;
