console.log(`Link OK`);

$(`#t1`).on(`click`, ()=>{
    console.log(`Hey, you clicked me.`);
 });

$(`#t2`).click(() => {
    $(`#t1`).text(`Changed`);
});


var poc=0;

$(`#t3`).click(() => {
    poc= poc + 1;
})

console.log(poc);

if ( poc === 1) {
    $(`#t3`).click(() => {
        let barva = $(`#v1`).val();
        $(`#t1, #t2, #t3`).css(`background-color`, barva);
    });
}
