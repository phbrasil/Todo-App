import React,{Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';


class App extends Component {
    state = {
      todos: [
        {id:1,content:'Buy some milk'},
        {id:2,content:'Play mario kart'}
      ]
    }

    deleteTodo = (id)=>{
        // console.log(id)
      const mock = this.state.todos.filter(todo =>{
        return todo.id !== id
      })

      this.setState({
        todos: mock
      })

    }

    addTodo = (something) =>{

      something.id = Math.random()
      const aux = [...this.state.todos,something]
      this.setState({
        todos:aux
      })
    }

  render(){
    return (
      <div className="todo-app container">
          <h1 className='center blue-text' >Todos's</h1>
          <Todos todos={this.state.todos} deleteItem={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo}/>
      </div>
  )

  }

}

export default App;
