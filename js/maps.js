$('document').ready(function(){

        table=document.getElementById('table');       
        clr=[];
        clr[0]="grey";
        clr[1]="#38B44A";
        clr[2]="#DF382C";
        clr[3]="orange";
        clr[4]="#25374d";
        clr[5]="grey";
        clr[6]="#38B44A";
        clr[7]="#DF382C";
        clr[8]="orange";
        clr[9]="#25374d";
        let k=0;

        for(let i=0;i<10;++i)
        {
        lat=parseFloat((Math.random()*180-90+1).toFixed(3));
        long=parseFloat((Math.random()*360-180+1).toFixed(3));
        data=[lat,long];
        tbody=document.createElement('tbody');
        
        tr=document.createElement('tr');
        tr.style.backgroundColor=clr[k++];
        
        area=document.getElementById('maps');

        for(let j=0;j<data.length;++j)
        {
            tr.setAttribute('class','text-center');
            td=document.createElement('td');
            cell=document.createTextNode(data[j]);
            td.appendChild(cell);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        table.appendChild(tbody);   
    }
    $('table>tbody>tr').mouseover(function(){
        var latitude = $(this).find('td:first-child').text();
        var longitude=$(this).find('td:nth-child(2)').text();
        var latitude2=parseFloat(latitude);
        var longitude2=parseFloat(longitude);
        var mapProp= {
            center:new google.maps.LatLng(latitude2,longitude2),
            zoom:5,
          };
          var uluru = {lat: latitude2, lng: longitude2};
          var map = new google.maps.Map(document.getElementById("maps"),mapProp);
          var marker = new google.maps.Marker({position: uluru, map: map});
        });
    });
