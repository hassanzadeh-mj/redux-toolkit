import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "../counterSlice/counterSlice";
import { Badge, Button, ButtonGroup, Card } from "react-bootstrap";


const Counter = () => {
    // const value = useSelector(state =>state.Counter.value)
    const dispatch = useDispatch()
    const value = useSelector(state => state.counter.value)
    return (<>
 <Card className="m-4 ">
      <Card.Header className="d-flex justify-content-center">Redux</Card.Header>
      <Card.Body>
    
    <div className="m-4 d-flex justify-content-evenly align-item-center align-items-center">
            <Button className="m-2" onClick={() => dispatch(incrementAction())}>increment</Button>
        <Badge bg="secondary">value : {value}</Badge>
            <Button className="m-2" variant="warning" onClick={() => dispatch(decrementAction())}>decrement</Button>
    </div>
      </Card.Body>
    </Card>
    </>
    );
}

export default Counter;