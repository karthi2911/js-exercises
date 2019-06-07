document.body.innerHTML = '<div id="triangle"></div>';
const triangleID = document.getElementById('triangle');
triangleID.innerHTML = '<input id="inputID" type="text" name="name" value="" /> \ <input type="button" id="generate" value="Generate" />';
//document.body.innerHTML = '<div id="tri"></div>';
const tri = document.getElementById('tri');
generate.addEventListener('click', function() {
   let inputid = document.getElementById('inputID').value;
   let strArray = inputid.trim().split(" ");
   const len = strArray.length;
   for(let i=0; i<len; i++)
   {
       let finalArray = [];
       strArray.forEach((val, j) => {
           if(j < (strArray.length - 1))
           {
               arr = parseInt(strArray[j]) + parseInt(strArray[j+1]);
               finalArray.push(arr);
           }
       })
       strArray = finalArray;
       console.log(strArray);
       strArray.forEach((val,j) => {
           tri.appendChild(val+'&nbsp&nbsp&nbsp');
       });
   }
});