/**
 * - mencari pasangan angka yang terdiri dari 2 angka yang berdekatan
 * - misal "23456" menjadi "23","34","45","56"
 * - mengabungkan 2 angka untuk membentuk satu angka tunggal
 * - membandingkan pasangan terbesar
 * - menemukan pasangan terbesar
 * - mengembalika hasil
 */

function pasanganTerbesar(angka){
    angka = angka.toString() //mengubah angka menjadi string untuk mengkases setiap digit angka

    if (angka.length < 3) {//memeriksa panjang string, jika kurang dari 3 digit maka tidak cukup untuk membuat pasangan
        return;
    }
    
    let pasanganAngka =parseInt(angka[0] + angka[1]);//mengambil 2 digit angka untuk pasangan sementara,parseInt digunakan untuk merubah string ke bilangan bulat

    for (let i = 1; i < angka.length - 1; i++) { //melakukan perulangan dengan indeks pertama 1,angka.length - 1, sebagai batas atas perulangan
        let pasanganSementara =parseInt(angka[i] + angka[i+1]);//mengambil 2 digit yang berdekatan dan menggabungkan, sehingga membentuk pasangan angak sementara
        if (pasanganSementara > pasanganAngka) { //dilakukan perbandingan dari kedua penggabungan yang telah dilakukan 
           pasanganAngka = pasanganSementara;
        }
    }
    return pasanganAngka;//mengembalikan nilai pasangan angka menjadi bilangan bulat
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


