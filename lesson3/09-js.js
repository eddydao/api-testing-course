
let score = 59;

if (score < 40) {
    console.log('Xep hang: newbie');
} else if (score >= 40 && score < 70){
    console.log('Xep hang: Intermediate');
} else if (score >= 70 && score < 90){
    console.log('Xep hang: Pro');
} else {
    console.log('Xep hang: Legend');
}




switch (true) {
    case (score < 40):
        console.log('Xep hang: newbie');
        break;
    case (score >= 40 && score < 70):
        console.log('Xep hang: Intermediate');
        break;
    case (score >= 70 && score < 90):
        console.log('Xep hang: Pro');
        break;
    default:
        console.log('Xep hang: Legend');
        break;
}



