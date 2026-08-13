const reverse = (name)=> {
    let arr = name.split('');
    arr.reverse();
    name = arr.join("");
    return name;
}

const x = reverse("java");
console.log(x);




const largest = arr => {
    let lar = arr[0]
    for (let i =0;i<=arr.length-1;i++){
        if(arr[i]>lar){
            lar = arr[i]
        }

    }
    return lar;
}
const y = largest([10,20,100,8,90]);
console.log(y);
/*
const chek = st =>{
    let arr = st.split('');
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]==="a"||arr[i]==="e"||arr[i]==="i"||arr[i]==="o"||arr[i]==="u"||arr[i]==="A"||arr[i]==="E"||arr[i]==="I"||arr[i]==="O"||arr[i]==="U"){
             count++;
        }
       
    }
    return count;
}
const u = chek("Aman");
console.log(u);
*/

const chek = st =>{
    const lower = st.toLowerCase();
    let arr = lower.split('');
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]==="a"||arr[i]==="e"||arr[i]==="i"||arr[i]==="o"||arr[i]==="u"){
             count++;
        }
       
    }
    return count;
}
const u = chek("Aman");
console.log(u);

function duplicate(arr){
    let result = [];
    for(let i =0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    console.log(result)
}
duplicate([10,20,20,30,30,10]);


const short = arr=>{
    arr.sort((a,b)=>b-a);
    return arr;
}
console.log(short([78,9,65,77,11]));