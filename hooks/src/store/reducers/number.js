export function numberReducer(state,action) {

    switch (action.type) {
        case 'add2':
            return { ...state, number: state.number + 2 }
        case 'mult7':
            return { ...state, number: state.number * 7 }
        case 'sos25':
            return { ...state, number: state.number / 25 }
        case 'parsa':
            return { ...state, number: parseInt(state.number) }
        case 'NumaddN':
            return { ...state, number: state.number + action.name }
        default:
            return state
    }
}