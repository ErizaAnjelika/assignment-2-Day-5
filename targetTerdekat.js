/**
 * - mencari target terdekat 'o' dan 'x'
 * - 
 */


function targetTerdekat(arr) {//deklarasi fungsi 'targetTerdekat' dengan parameter 'arr'
    let indexO = arr.indexOf('o');//mencari index pertama dengan method indexOf.hasil disimpan di indexO 
    let indexX = arr.indexOf('x');//mencari index pertama muncul karakter 'x', hasil disimpan di indexX
    
    if (indexO === -1 || indexX === -1) {//kondisi akan dijalankan jika salah satu atau 2 kondisi terpenuhi
        return 0;//jika salah satu karakter tidak ditemukan dalam array, nilai dikembalikan 0 dan berakhir
    }
    
    let jarakTerdekat = Math.abs(indexO - indexX);//menghitung jarak awal index '0' dan 'x', dengan fungsi Math.abs() untuk menghasilkan nilai mutlak
    for (let i = 0; i < arr.length; i++) {//looping untuk meriksa semua elemen array dengan variabel i index 0
        if (arr[i] === 'o' || arr[i] === 'x') { //memeriksa apakah elemen arr adalah karakter 'o' dan 'x'
            let jarak = Math.abs(i - indexO || i - indexX);//jika hasil terpenuhi maka akan dilakukan perhitungan jarak, dengan fungsi mutlak
            if (jarak < jarakTerdekat) { //jika jarak yang dihitung lebih kecil jarakTerdekat 
                jarakTerdekat = jarak  //memperbarui nilai jarakTerdekat
        }
    }
    }
    return jarakTerdekat;//mengembalikan jarakterdekat yang telah dihitung sebelumnya
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2



