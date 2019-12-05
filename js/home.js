$('document').ready(function(){
  
$('#button').click(getInfo);
async function getInfo(){
     let url ='https://www.ipinfo.io/json';
     let data = await fetch(url);
     let response=await data.json();
     newstr=response.loc.split(',');
     let info=[];
     info.push(newstr[0]);
     info.push(newstr[1]);
     info.push(response.ip);
     info.push(response.city);
     info.push(response.region);
     info.push(response.country);
   //  tr=document.querySelector('.table-success');
  // let td=document.getElementById('1');
    for(let i=0;i<info.length;++i)
    {
        td=document.getElementById(i);
        cell=document.createTextNode(info[i]);
        td.appendChild(cell);//td.innerHTML(response["ip"]);

    }
}});