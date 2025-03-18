let payTier = 'premium';

if (payTier === 'free') {
    console.log('Ban co the nghe nhac nhung co quang cao');
} else if (payTier === 'premium') {
    console.log('Khong quang cao, nghe nhac offline');
} else if (payTier === 'family') {
    console.log('Goi danh cho nhieu thanh vien');
} else if (payTier === 'student') {
    console.log('Uu dai danh rieng cho sinh vien');
}


switch (payTier) {
    case 'free':
        console.log('Ban co the nghe nhac nhung co quang cao');
        break;
    case 'premium':
        console.log('Khong quang cao, nghe nhac offline');
        break;
    case 'family':
        console.log('Goi danh cho nhieu thanh vien');
        break;
    case 'student':
        console.log('Uu dai danh rieng cho sinh vien');
        break;
}

