// // document.body.innerHTML = '<div id="triangle"></div>';
// // const triangleID = document.getElementById('triangle');
// // triangleID.innerHTML = '<input id="inputID" type="text" name="name" value="" /> \ <input type="button" id="generate" value="Generate" />';
// const tri = document.getElementById('tri');
// generate.addEventListener('click', function() {
//     let inputid = document.getElementById('inputID').value;
//     let strArray = inputid.trim().split(" ");
//     const len = strArray.length;
//     for(let i=0; i<len; i++) {
//         let finalArray = [];
//         strArray.forEach((val, j) => {
//             if(j < (strArray.length - 1)) {
//                 arr = parseInt(strArray[j]) + parseInt(strArray[j+1]);
//                 finalArray.push(arr);
//             }
//         });
//         strArray = finalArray;
//         console.log(strArray);
//         // strArray.forEach((val, j) => {
//         //     tri.appendChild(finalArray);
//         // });
//     }
// });

const tri = document.getElementById('tri');
generate.addEventListener('click', function() {
   let inputid = document.getElementById('inputID').value;
   let strArray = inputid.trim().split(" ");
   const len = strArray.length;
   let totArr = [];
   for(let i=0; i<len; i++) {
       let finalArray = [];
       strArray.forEach((val, j) => {
           if(j < (strArray.length - 1)) {
               arr = parseInt(strArray[j]) + parseInt(strArray[j+1]);
               finalArray.push(arr);
           }
       });
       if(finalArray.length > 0) {
        totArr.push(finalArray);
       }
       strArray = finalArray;
       // strArray.forEach((val, j) => {
       //     tri.appendChild(finalArray);
       // });
   }

   //console.log(totArr);
   totArr.forEach((val, index) =>{
       console.log(val);
       setTimeout(()=>{
           let className = "row_"+index;
           let p = "<p class="+ className+">"+ val.toString().replace(/,/g," ") + "</p>";
           //p.appendChild(tri);
           //tri.prepend();
           tri.insertAdjacentHTML("afterend",p);
       }, index * 1000);
   });
});