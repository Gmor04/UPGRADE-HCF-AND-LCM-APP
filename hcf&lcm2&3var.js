let twovariacont = document.querySelector('.twovariblewrapper')
let threevarbtn = document.querySelector('.threevardiv')
let twovarbtn = document.querySelector('.twovardiv')
let mainheading = document.querySelector('.mainheadin')
let namee = document.querySelector('.move')


function twovari() {
    twovariacont.style.display = 'block'

    threevarbtn.style.display = 'none'
    twovarbtn.style.display = 'none'
    mainheading .style.display = 'none'
    namee .style.display = 'none'

}
function closebtn() {
    twovariacont.style.display = 'none'

    threevarbtn.style.display = 'block'
    twovarbtn.style.display = 'block'
    mainheading .style.display = 'block'
    namee .style.display = 'block'

    first.value = ''
    second.value = ''
    display.innerHTML = ''

    
}

function cler() {
    first.value = ''
    second.value = ''
    display.innerHTML = ''
}




let threevariacont = document.querySelector('.threevariblewrapper')

function threevari() {

    threevariacont.style.display = 'block'
    // threevariacont.style.height = '70vh'

    threevarbtn.style.display = 'none'
    twovarbtn.style.display = 'none'
    mainheading .style.display = 'none'
    namee .style.display = 'none'
}

function secclosebtn() {
    threevariacont.style.display = 'none'

    threevarbtn.style.display = 'block'
    twovarbtn.style.display = 'block'
    mainheading .style.display = 'block'
    namee .style.display = 'block'

    displaytwo.innerHTML = ''
    newfirst.value = ''
    newsecond.value = ''
    third.value = ''

   
}
function clerr() {
    displaytwo.innerHTML = ''
    newfirst.value = ''
    newsecond.value = ''
    third.value = ''
}














//LCM & HCF OF TWO VARIABLE

let first = document.querySelector('.input1');
let second = document.querySelector('.input2');
let display = document.querySelector('.Answer');
let factor1 = [];
let factor2 = [];
let common = [];




function submit() {

    display.innerHTML = ''

    if (first.value == '' || second.value == '') {
        display.innerHTML = 'Your have not input the variable'
        return
    }

    for (let index = 1; index < first.value; index++) {
        
        if (first.value % index == 0 ) {

            factor1.push(index)
            
        }
        
    }
    // console.log(factor1);

    for (let ind = 1; ind < second.value; ind++) {
        
        if (second.value % ind == 0 ) {

            factor2.push(ind)
            
        }
        
    }
    // console.log(factor2);

    for (let i = 0; i < factor1.length; i++) {
        
        for (let k = 0; k < factor2.length; k++) {
            
            if (factor1[i] === factor2[k]) {
                common.push(factor2[k])
            }
            
        }
        
    }
    // console.log(common);

    // using sort function

    let result = common.sort(function(y,z){
        return z - y

    })
    // console.log(result);
    // console.log(result[0]);

  //To calculate the LCM = HCF * firstvariable/HCF * secondvariable/hcf

    let lcm =  (first.value * second.value ) / result[0]
     
    console.log(lcm);

    display.innerHTML = ` The HCF of ${first.value} and ${second.value} is ${result[0]} <br>
                                      and <br>
                            The LCM of ${first.value} and ${second.value} is ${lcm} 
    
                            `
                        
    
                        


    //using if statement
//     s = common[0]
//     for (let ix = 0; ix < common.length; ix++) {
//         if (s <= common[ix]) {
            
//             s = common[ix]
//         }
        
//     }
// console.log(s);


 factor1.length = 0
 factor2.length = 0
 common.length = 0

}





//LCM & HCF OF THREE VARIABLE

let newfirst = document.querySelector('.newinput1');
let newsecond = document.querySelector('.newinput2');
let third = document.querySelector('.input3');
let displaytwo = document.querySelector('.Answer2');
let newfactor1 = [];
let newfactor2 = [];
let factor3 = [];
let newcommon = [];
let semicommon = [];


function answer() {

    displaytwo.innerHTML = ''
    

    if (newfirst.value == '' || newsecond.value == '' || third.value == '') {
        displaytwo.innerHTML = 'Your have not input the variable'
        return
    }

    for (let index = 1; index < newfirst.value; index++) {
        
        if (newfirst.value % index == 0 ) {

            newfactor1.push(index)
            
        }
        
    }
    // console.log(newfactor1);

    for (let inde = 1; inde < newsecond.value; inde++) {
        
        if (newsecond.value % inde == 0 ) {

            newfactor2.push(inde)
            
        }
        
    }
    // console.log(newfactor2);

    for (let ind = 1; ind < third.value; ind++) {
        
        if (third.value % ind == 0 ) {

            factor3.push(ind)
            
        }
        
    }
    // console.log(factor3);



    for (let i = 0; i < newfactor1.length; i++) {
        
        for (let j = 0; j < newfactor2.length; j++) {
            
            if (newfactor1[i] === newfactor2[j]) {
                semicommon.push(newfactor2[j])
            }
            
        }
        
    }
    // console.log(semicommon);

    for (let m = 0; m < semicommon.length; m++) {
        
        for (let k = 0; k < factor3.length; k++) {
            
            if (semicommon[m] === factor3[k]) {
                newcommon.push(factor3[k])
            }
            
        }
        
    }
    // console.log(newcommon);

   
    

    // using sort function

    let newresult = newcommon.sort(function(y,z){
        return z - y

    })
    // console.log(newresult);
    // console.log(newresult[0]);

  //To calculate the LCM = HCF * firstvariable/HCF * secondvariable/hcf

    let lcm =  (newfirst.value * newsecond.value * third.value * newresult[0]) / 
    console.log(lcm);
    (first.value * second.value ) / result[0]
     
    displaytwo.innerHTML = ` The HCF of ${newfirst.value},${newsecond.value} and ${third.value} is ${newresult[0]} 
    
                            `
                        
    
                        


    //using if statement
//     s = common[0]
//     for (let ix = 0; ix < common.length; ix++) {
//         if (s <= common[ix]) {
            
//             s = common[ix]
//         }
        
//     }
// console.log(s);


newfactor1.length = 0
newfactor2.length = 0 
factor3.length = 0
newcommon.length = 0
semicommon.length = 0


}

    

    
   