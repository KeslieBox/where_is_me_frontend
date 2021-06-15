// not currently using
export default function fixString(category) {
    if (category === 'identities'){
       return `${category.split('ies')[0]}yIds`
    } else if (category === 'statuses'){
       return `${category.split('es')[0]}Ids`
    } else if (category === 'interests'){
       return `${category.split('s')[0]}stIds`
    } else if (category === 'looking_fors'){
       return `${category.split('_fors')[0]}ForIds`
    } else {
       return `${category.split('s')[0]}Ids`
    }
}