import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlice from './todoSlice'
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);

  const dispatch = useDispatch();
  const handleAddBtnClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidV4(),
        name: todoName,
        completed: false,
        priority: priority,
      })

    );

    setTodoName("");
    setPriority("Medium");
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}

        {todoList &&
          todoList.length > 0 &&
          todoList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                prioriry={todo.priority}
                completed={todo.completed}
              />
            );
          })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddBtnClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
