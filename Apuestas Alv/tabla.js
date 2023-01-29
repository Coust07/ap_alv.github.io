document.querySelectorAll('.images-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}


var data = [
    { Posiciones: 4, Nombre: "Saiyajin", Ganados: 16, Perdidos: 12 },
    { Posiciones: 1, Nombre: "Fer LB", Ganados: 17, Perdidos: 7 },
    { Posiciones: 1, Nombre: "Gominola", Ganados: 19, Perdidos: 7 },
    { Posiciones: 5, Nombre: "Golosopicks", Ganados: 17, Perdidos: 12 },
    { Posiciones: 5, Nombre: "Chueda", Ganados: 18, Perdidos: 12 },
    { Posiciones: 3, Nombre: "Wingbet", Ganados: 14, Perdidos:10 },
    { Posiciones: 5, Nombre: "Allincrack", Ganados: 11, Perdidos: 12 },
    { Posiciones: 8, Nombre: "Ninja", Ganados: 22, Perdidos: 13 }
];


// Get a reference to the table element
var table = document.getElementById("myTable");

// Add a table header 

var header = table.createTHead();
var row = header.insertRow();
var cell1 = row.insertCell(0);
cell1.innerHTML = "Positions";
var cell2 = row.insertCell(1);
cell2.innerHTML = "Name";
var cell3 = row.insertCell(2);
cell3.innerHTML = "Wins";
var cell4 = row.insertCell(3);
cell4.innerHTML = "Lost";
var cell5 = row.insertCell(4);
cell5.innerHTML = "Effectiveness";


// Sort the data array by the first place
data.sort(function(a, b) {
    var aEfficiency = (a.Ganados/(a.Ganados+a.Perdidos))*100;
    var bEfficiency = (b.Ganados/(b.Ganados+b.Perdidos))*100;
    return bEfficiency - aEfficiency;
});


// Get a reference to the table element
var table = document.getElementById("myTable");

// Clear the existing table rows
while (table.rows.length > 1) {
    table.deleteRow(1);
}

// Loop through the data and add a row for each object
for (var i = 0; i < data.length; i++) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = i+1;
    if (i === 0) {
      cell1.innerHTML = '<img src="/Img/Medallas/Oro 1.png" alt="Oro"> ' + (i+1);
    }else if(i === 1){
      cell1.innerHTML = '<img src="/Img/Medallas/Plata.png" alt="silver_medal">' + (i+1);
    }else if(i === 2){
      cell1.innerHTML = '<img src="/Img/Medallas/Bronce.png" alt="bronze_medal">' + (i+1);
    }
    cell2.innerHTML = data[i].Nombre;
    cell3.innerHTML = data[i].Ganados;
    cell3.classList.add("green")
    cell4.innerHTML = data[i].Perdidos;
    cell4.classList.add("red")
    cell5.innerHTML = (data[i].Ganados/(data[i].Ganados+data[i].Perdidos) *100).toFixed(2)+'%';
    cell5.classList.add("par")








    
}


