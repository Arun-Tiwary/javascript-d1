// QUESTION 1


let string="alphabet";
let search="a";


for(let i=0;i<string.length;i++)
{
    if(string[i]==search)
    {console.log(string[i]);
}
}

// QUESTION 2

let minute = 60;
let convert= 60;

let second= minute * convert;

console.log(second);



// QUESTION 3


let data =["laptop","mouse","keyboard","monitor","camera"];

let string = "camera";

for(let i=0;i<data.length;i++)
{
    if(data[i]==string)
    {
        console.log(data[i]);
    }
}





// QUESTION 4


let data =["laptop","mouse","keyboard","monitor","camera","joystick","lan wire"];

let string = "a";

for(let i=0;i<data.length;i++)
{
    let fab =data[i];
    for(let j=0;j<fab.length;j++)
    {
    if(fab[j]==string)
    {
        console.log(data[i]); 
    }
  
}}





// QUESTION 5


let data =["laptop","mouse","keyboard","monitor","camera"];

for(let i=data.length;i>=0;i--)
{


        console.log(data[i]);

}





