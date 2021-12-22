/**
 * 
 *  <Inf test={exp}>
 *  <span>...</span>
 *  <span>...</span>
 *  <span>...</span>
 * 
 * </Inf>
 * 
 */

export default props => {

    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const isChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if (props.test) {
        return isChildren
    } else if (elseChild) {
        return elseChild
    } else {
        return false;
    }

}

export const Else = props => props.children