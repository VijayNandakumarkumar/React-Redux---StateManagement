export default function(state = null, action) {
    switch (action.type) {
        case 'user_Selected':
            { return action.payload }
        default:
            return state
    }

}