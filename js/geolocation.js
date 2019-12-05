$('document').ready(function(){

    $('#button').click(getLocation);
   
   async function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } 
    }

    async function showPosition(position) {
        data=[];
        data[0]=position.coords.latitude;
        data[1]=position.coords.longitude;
        table=document.getElementById('table');
        tbody=document.createElement('tbody');
        tr=document.createElement('tr');
        area=document.getElementById('maps');
        
            str="geolocation is supported by this browser";
        for(let i=0;i<2;++i)
        {
        tr.setAttribute('class','text-center');
        td=document.createElement('td');
        td.setAttribute('class','bg-danger')

        cell=document.createTextNode(data[i]);
        td.appendChild(cell);
        tr.appendChild(td);
        }
        td=document.createElement('td');
        td.setAttribute('class','font-italic bg-success');
        cell=document.createTextNode(str);
        td.appendChild(cell);
        tr.appendChild(td);

        tbody.appendChild(tr);
    table.appendChild(tbody);
    var mapProp= {
        center:new google.maps.LatLng(data[0],data[1]),
        zoom:5,
      };
      var uluru = {lat: data[0], lng: data[1]};
      var map = new google.maps.Map(document.getElementById("maps"),mapProp);
      var marker = new google.maps.Marker({position: uluru, map: map});
    }
    });