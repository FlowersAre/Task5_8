console.log(`Link OK`);

$(`#t1`).on(`click`, ()=>{
    console.log(`Hey, you clicked me.`);
 });

$(`#t2`).click(() => {
    $(`#t1`).text(`Changed`);
});

let count=0;

$(`#t3`).click(()=>{
    count++;
    console.log(count);
    if(count === 1) {
        let barva = $(`#v1`).val();
        console.log(barva);
        $(`#t1, #t2, #t3`).css({
            backgroundColor: barva,  
        });
    };
});



