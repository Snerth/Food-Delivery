let counter = (state = {}, action) => {
    switch (action.type) {
        case "INITIALIZE_STORE":
            return action.counters
        case "INCREASE":
            if (state[action.itemName].counter > 100) {
                return Object.assign({}, state)
            }
            return Object.assign({}, state, {
                [action.itemName]: {counter: state[action.itemName].counter + 1}
            })
        case "DECREASE":
            if (state[action.itemName].counter === 1) {
                return Object.assign({}, state)
            }
            return Object.assign({}, state, {
                [action.itemName]: {counter: state[action.itemName].counter - 1}
            })
        case "ADD_TO_CART":
            return Object.assign({}, state, {
                [action.item.name]: {...state[action.item.name], addedToCart: true}
            })
        case "REMOVE_FROM_CART":
            console.log(state)
            delete state[action.item.name].addedToCart
            return Object.assign({}, state, {
                [action.item.name]: {...state[action.item.name]}
            })
        default:
            return state
    }
}

export default counter