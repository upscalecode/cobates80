const firstName = 'Rukin';
const lastName = 'Anggora';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName; //pemberian singgle quote

//Append
val = 'Mungin ';
val += 'Matta';

//Escaping 
val = 'Syamsul Ma\'arif'; //ditambahkan slash atau double quote

//Length
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//Change Case
val = firstName.toUpperCase(); //Mengubah ke huruf kapital
val = firstName.toLocaleLowerCase(); //Mengubah ke huruf kecil

//mencari index array dalam string
val = firstName[2];

//indexOf()
val = firstName.indexOf('R');

//charAt()
val = firstName.charAt('2');
val = firstName.charAt(firstName.length -1); //mecari huruf terakhir

//subString (memotong nilai string)
val = firstName.substring(0,4);

//slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split
val = firstName.split(); //digunakan untuk tag tanda () diisi sebagai pemisah baik ('') atau koma (,)atau dash (-)

//replace()
val = firstName.replace('Rukin', 'Ngadiran');

//includes digunakan untuk validasi dalam suatu string
val = firstName.includes('Rukin');

console.log(val);
