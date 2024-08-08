document.getElementsByTagName("form")[0].addEventListener('submit',function(e){
e.preventDefault()
var data = {}
var thisData = new FormData(this);
thisData.forEach((v,k)=>{
    data[k] = v;
})

fetch(this.action,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
}).then(r=>r.text()).then(r=>console.log(r))


});document.getElementsByTagName("form")[0].addEventListener('submit',function(e){
e.preventDefault()
var data = {}
var thisData = new FormData(this);
thisData.forEach((v,k)=>{
    data[k] = v;
})

fetch(this.action,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
}).then(r=>r.text()).then(r=>console.log(r))


});
