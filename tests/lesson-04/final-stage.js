attempt = 0;

for (a = 1; a <= 100; a++) {
    for (b = a; b <= 100; b++) {
        if ((a + b) % 17 === 0) {
            attempt++;
            console.log(`Cặp thứ ${attempt}: (${a}) và (${b})`);
        }
    }
}

console.log(`Tổng số cặp: ${attempt}`);