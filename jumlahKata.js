/**logika perhitungan jumlah kata
 * - menghitung jumlah keseluruhan kata
 * - memeriksa karakter tidak sama dengan spasi
 * - agar spasi tidak masuk kedalam perhitungan kata
 * - melakukan perhitungan
 * - mengembalikan nilai
 */

function hitungJumlahKata(kalimat){
    let jumlahKata = 0; //variabel untuk menyimpan hasil perhitungan

    for (let i = 0; i < kalimat.length; i++) {
        /**
         * - kalimat[i] !== ' ', memeriksa karakter tidak sama dengan spasi
         * - i === 0, memeriksa apakah awal kata
         * - kalimat[i - 1] === ' ', menghitung sebagai kata baru jika sebelumnya adalah spasi. 
         */
        if (kalimat[i] !== ' ' && (i === 0 || kalimat[i - 1] === ' ')) {
            jumlahKata++; //menambah jumlah kata jika kondisi diatas terpenuhi
        }
    }
    return jumlahKata; //kembalikan nilai 
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
