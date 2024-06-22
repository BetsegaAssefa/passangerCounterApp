let count = document.getElementById("head2").innerHTML;
let saveEl = document.getElementById("save-el").innerHTML;

function increment() {
    count++;
    document.getElementById("head2").innerHTML = count;
}

function save() {
   let counterPreview = count;
   saveEl += count + " - "
   console.log(count)
   console.log(saveEl)
   document.getElementById("save-el").innerHTML = saveEl;
   count = 0;
   document.getElementById("head2").innerHTML = count;

}