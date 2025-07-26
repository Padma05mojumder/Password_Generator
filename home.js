let generate=document.querySelector("#click")
let copy=document.querySelector("#copy")
let text=document.querySelector("#text")
let warning=document.querySelector("#warning")
let name=document.querySelector("#name")
let number=document.querySelector("#number")
generate.addEventListener("click",()=>{
let input1=name.value
if(name.value=="" || number.value==""){
        text.appendChild(document.createTextNode("No inputs!"))
    }
else{
let input2=parseInt(number.value)
if(Number.isFinite(parseInt(input1))|| isNaN(input2))
{
  text.appendChild(document.createTextNode("Invalid input!"))  
}
else{
let array1=Array.from(input1)
let random2=Math.floor(Math.random()*3+3)
let i,j
for(i=0;i<random2;i++)
    {
        text.appendChild(document.createTextNode(array1[i]))
    }
for(j=random2+1;j<=input2;j++)
    {
        text.appendChild(document.createTextNode(String.fromCharCode(j*Math.floor(Math.random()*2+11))))
    }
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(text.textContent)
    alert("Copied!")
    location.reload()
})
}}
name.addEventListener("focus",()=>{
text.textContent=" "
})
number.addEventListener("focus",()=>{
    text.textContent=" "
})
}) 

