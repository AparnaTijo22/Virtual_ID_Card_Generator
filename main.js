var showImg = function(e){
    var img = document.getElementById("displayPic");
    img.src = URL.createObjectURL(e.target.files[0])
}

function genCard(){
    var name = document.getElementById("studentName").value;
    var college = document.getElementById("collegeName").value;
    var city = document.getElementById("cityName").value;
    var pic =  document.getElementById("displayPic").src;

    $("#IDpic").attr("src", `${pic}`);
    $("#IDname").text(`${name}`);
    $("#IDcollege").text(`${college}`);
    $("#IDcity").text(`${city}`);
}