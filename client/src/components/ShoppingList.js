import React, { component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';

import PropTypes from 'prop-types';

class ShoppingList extends React.Component{
    state = {
        items: [
            { id: uuid(), name: 'Eggs'},
            { id: uuid(), name: 'Milk'},
            { id: uuid(), name: 'Steak'},
            { id: uuid(), name: 'Water'},
        ]
    };

    render(){
        const { items } = this.state;
        return (
            <Container>
                <Button color="dark" style={ { marginBottom: '2rem' } } 
                        onClick={() => { 
                            const name = prompt('Enter Item');
                            if(name){
                                this.setState(state => ({
                                    items: [...state.items, { id: uuid(), name }]
                                }));
                            }
                        }}>
                Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(i => (
                            <CSSTransition key={i.id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm" onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(ii => { return ii.id != i.id; })
                                        }))
                                    }}>&times;</Button>
                                    {i.name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapsStateToProps = (state) => ({
    item: state.item
});

export default connect(mapsStateToProps, { getItems })(ShoppingList);