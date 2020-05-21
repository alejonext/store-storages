export * from './storage';
export * from './decorator';

/**
 *  Use React
 *  import { Stores } form './decorator';
 *
 *  class Todos {
 *    @Stores('myTodos', window.localStorage)
 *    set todos(val){
 *      this.setState({ todos : val });
 *    }
 *    get todos(){
 *      return this.state.todos;
 *    }
 *
  *   @Stores('olderOrder', window.localStorage)
 *    set order(val){
 *      this.setState({ order : val });
 *    }
 *    get order(){
 *      return this.state.order;
 *    }
 *
 *    iDo(item, index){
 *      const { todos } = this;
 *      todos[index] = { ...item, !check : item.check};
 *      this.todos = todos;
 *    }
 *
 *    render(){
 *      return (
 *        <ul>
 *          {this.state.todos.map((item, index) => (
 *            <li>
 *              {item.name}
 *              <input
 *                type="checkbox"
 *                checked={item.check}
 *                onclick={() => this.iDo(item, index); }
 *               />
 *            </li>
 *           ))}
 *        </ul>
 *      );
 *    }
 *  }
 *
 *
 *
 *
 *
 */
