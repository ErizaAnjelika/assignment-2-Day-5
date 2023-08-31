/**logika prhitungan konversi
 * konversi menit ke jam dan menit :
 * - jumlah jam = jumlah menit / 60
 * - sisa menit = jumlah menit % 60 
 * misalkan 180menit
 * jumlah jam = 185 / 60 = 3jam
 * sisa menit = 185 % 60 = 5menit
 * jadi 3jam:05menit
 */

/**Test case
 * - buat function konversiMenit dangan parameter 'menit'
 * - variabel untuk perhitungan jumlah jam dan sisa menit
 * - didalam function terdapat kondisi yang harus dipenuh i
 * - mengembalikan nilai  
 */

function konversiMenit(menit){
    let jumlahJam = Math.floor(menit  / 60);//Math.floor berfungsi untuk membulatkan bilangan desimal.
    let sisaMenit = menit % 60;// mnghitung sisaMenit menggunakan modulus "%"

    if (sisaMenit < 10) { //kondisi jika sisaMenit kurang dari 10 maka didepan sisaMenit ditambah "0".
        return `${jumlahJam}:0${sisaMenit}`;
    }else{
        return `${jumlahJam}:${sisaMenit}`;
    }
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00