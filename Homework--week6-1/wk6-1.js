const arr1 = [2, 2, 3, 2, 3];
const arr2 = [0, 1, 0, 1, 0, 99, 1, 99];
const arr3 = [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8];


let doubleNumber1, doubleNumber2, doubleNumber3;  // birer değişken tanımladım


// burada içiçe for döngüsü oluşturdum 
for (let i = 0; i < arr1.length; i++) { // array içerisinde odalara bakmak için oluşturduğum değişken
  let count = 0;
  for (let j = 0; j < arr1.length; j++) { // array içerisinde odalardaki değerlere bakmak için oluşturduğum değişken
    if (arr1[i] === arr1[j]) {  //eşitlik olduğunda bunu counta tutuyoruz 
      count++;
    }
  }
  if (count === 2) { // countta tutulan değerlerden 2 tane varsa şayet
    doubleNumber1 = arr1[i]; // yeni bir değişkende tutuyor ve break ile döngüden çıkıp diğer arraylar 
                            // içinde aynı döngüyü sorguluyorum
    break;
  }
}

for (let i = 0; i < arr2.length; i++) {
  let count = 0;
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[i] === arr2[j]) {
      count++;
    }
  }
  if (count === 2) {
    doubleNumber2 = arr2[i];
    break;
  }
}

for (let i = 0; i < arr3.length; i++) {
  let count = 0;
  for (let j = 0; j < arr3.length; j++) {
    if (arr3[i] === arr3[j]) {
      count++;
    }
  }
  if (count === 2) {
    doubleNumber3 = arr3[i];
    break;
  }
}

console.log("1. Arraydaki Çift yazılı sayılar",doubleNumber1);
console.log("2. Arraydaki Çift yazılı sayılar",doubleNumber2);
console.log("3. Arraydaki Çift yazılı sayılar",doubleNumber3);


