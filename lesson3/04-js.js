let salesDay = 'cybermonday';

if (salesDay === 'cybermonday') {
    console.log('Giam 40% cho san pham cong nghe');
} else if (salesDay === 'blackfriday') {
    console.log('Giam 50% toan bo san pham');
} else if (salesDay === 'christmas') {
    console.log('Uu dai dac biet cho mua Noel - giam 30%');
}


switch (salesDay) {
    case 'cybermonday':
        console.log('Giam 40% cho san pham cong nghe');
        break;
    case 'blackfriday':
        console.log('Giam 50% toan bo san pham');
        break;
    case 'christmas':
        console.log('Uu dai dac biet cho mua Noel - giam 30%');
        break;
}

