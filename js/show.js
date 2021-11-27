let objArr = [];
$(document).ready(function(){
    let searchParams = new URLSearchParams(window.location.search);
    objArr = JSON.parse(searchParams.get('data'));
    console.log(objArr);

    var html="";
    $('#table-body').html("");
    for(var i=0;i<objArr.length;i++){
        html = html + "<tr><th scope='row'>"+(i+1)+"</th><td>"+objArr[i].name+"</td><td>"+objArr[i].email+"</td><td>"+objArr[i].work+"</td><td><input type='file' id='fileUpload"+i+"' class='form-control' aria-label='file example' required></td></tr>";
    }
    $('#table-body').append(html);
});

$('#finalSubmit').click(function(){
    for(var i=0;i<objArr.length;i++){
        if($("#fileUpload"+i).get(0).files.length == 0) {
            alert("Please upload all files");
        }

    }
});
