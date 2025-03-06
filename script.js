//your JS code here. If required.
let text=document.getElementById("text");
let number=document.getElementById("delay");
let btn=document.getElementById("btn");

let promise1=()=>{
	
	return new Promise((resolve,reject)=>{
		let delay = Number(number.value);
	        if (delay < 0 || number.value === "") {
            reject("Please enter a valid positive number for the delay.");
            return;
        }
		setTimeout(()=>{
			resolve(text.value);
		},delay);
	});
}
async function fetchData()
{
	let data = await promise1();
	let output= document.getElementById("output");
	output.innerHTML=`<p>"${data}-${number.value}"</p>
	`
}
btn.addEventListener("click",fetchData);