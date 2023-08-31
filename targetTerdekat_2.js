
// cara 2 target terdekat
function targetTerdekat(arr){
  let maxPosXBeforeO = null;
  let posO = null;

  let diffXO = null; // jarak x ke o terdekat
  let diffOX = null; // jarak o ke x terdekat

  let countLoop = 0;
  for (let i = 0; i < arr.length; i++) {
    countLoop++;

    if (arr[i] === 'o') {
      posO = i;
      if (maxPosXBeforeO !== null) {
        diffXO = posO - maxPosXBeforeO;
      }
    }

    if (posO === null) {
      // ketika o belum ditemukan

      if (arr[i] === 'x' && (maxPosXBeforeO === null || i > maxPosXBeforeO) ) {
        maxPosXBeforeO = i; // posisi x terbesar (dari kiri) sebelum bertemu 'o'
      }
    }
    else{
      // posO sudah ada nilainya

      if (diffXO !== null && i-posO > diffXO) {
        break; // hentikan looping. jarak x ke o sudah pasti lebih kecil dari o ke x (dibaca dari kiri)
      }

      if (arr[i] === 'x') {
        if (diffOX === null) {
          diffOX = i - posO; // perbarui posisi o ke x
          break; // hentikan looping. karena x setelah o sudah ditemukan, cukup cari x pertama di kanan setelah o
        }
      }
    }

  }

  console.log("jumlah loop = " + countLoop);

  if (diffXO === null && diffOX === null) {
    return 0;
  }
  else if (diffXO === null && diffOX !== null) {
    return diffOX;
  }
  else if (diffXO !== null && diffOX === null) {
    return diffXO;
  }
  else {
    return diffXO < diffOX ? diffXO : diffOX;
  }

}

console.log(targetTerdekat(['','','o','','','x','','x'])); // 3
console.log(targetTerdekat(['o','','','','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'])); // 4
console.log(targetTerdekat(['x','','','','x','x','o',''])); // 1
console.log(targetTerdekat(['','','o',''])); // 0
console.log(targetTerdekat(['','o','','x','x','','','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'])); // 2