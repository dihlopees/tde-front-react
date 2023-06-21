import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [dataTodo, setDataTodo] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setDataTodo(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const renderTodoList = () => {
    if (loading || !dataTodo?.length) {
      return <h3> Carregando ...</h3>;
    }
    return (
      <div>
        <h3>Todo List: </h3>
        {dataTodo?.map((it) => (
          <div className='container'>
            <p>{it.userId}</p>
            <p>{it.id}</p>
            <p>{it.title}</p>
            <p>{String(it.completed)}</p>
          </div>
        ))}
      </div>
    );
  };
  return <div>{renderTodoList()}</div>
};

export default Todo;
