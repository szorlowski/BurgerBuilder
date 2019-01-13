import React, {Component} from 'react';
import Order from "../../components/Order/Order";
import axios from '../../axios-orders'
import withErrorHandler from '../withErrorHandler/withErrorHandler'
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/Orders.json')
            .then(res => {
                const fetchOrders = [];
                for(let key in res.data){
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({loading: false, orders: fetchOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            })
    }

    render(){
        let orders = <Spinner/>;
        if(!this.state.loading){
            orders = <div>
                {this.state.orders.map(order => (
                    <Order
                        ingredients={order.ingredients}
                        price={+order.price}
                        key={order.id}/>
                ))}
            </div>;
        }

        return(
            <React.Fragment>
            {orders}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(Orders, axios);