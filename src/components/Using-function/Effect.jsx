import { useReducer, useState, useEffect } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: initialState.count };
        default:
            throw new Error();
    }
}

const initialState = { count: 0, price: 50 };


const Effect = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [dataList, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()) // json 
            .then((data) => { setData(data) }) // useState
            .catch(error => {
            });
    }, []);



    return (
        <div className="box">
            <div>
                <p>Data</p>
                <div>
                    <ul>
                        {dataList.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Effect;
