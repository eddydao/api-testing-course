
let dish = 'sushi';

if (dish === 'burger') {
    console.log('Gia: 5$');
} else if (dish === 'pizza') {
    console.log('Gia: 8$');
} else if (dish === 'sushi') {
    console.log('Gia: 12$');
} else if (dish === 'taco') {
    console.log('Gia: 6$');
}



switch (dish) {
    case 'burger':
        console.log('Gia: 5$');
        break;
    case 'pizza':
        console.log('Gia: 8$');
        break;
    case 'sushi':
        console.log('Gia: 12$');
        break;
    case 'taco':
        console.log('Gia: 6$');
        break;
}
