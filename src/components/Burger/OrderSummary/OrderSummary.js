import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillMount () {
        console.log('[OrderSummary] Will update')
    }

    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return ( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
            );
        });
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>The delicous burger has the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Success' clicked={this.props.purchaseContinued}> CONTINUE</Button>
            <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
        </Aux>
        )
    }
} 

export default OrderSummary;