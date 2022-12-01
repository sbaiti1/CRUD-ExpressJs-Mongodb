$("#update_form").submit(function(e){
  console.log("here");
  e.preventDefault() ;


var unindexed_array  = $(this).serializeArray()
var data = {}

$.map(unindexed_array , function(n){
  data[n['name']] = n['value']
})

var request = {
  'url' : `http://localhost:3000/api/users/${data.id}` , 
  'method' : "PUT" ,
  'data' : data
}

$.ajax(request).done(function(response){
    alert('data updated successfully')
})
console.log("done");

})
console.log(window.location.pathname);
if(window.location.pathname == '/'){
  console.log('route');
  $ondelete = $('.delete_btn')
  $ondelete.click(function(){
    console.log("hello");
    var id = $(this).attr("data-id")
    console.log("id is "  + id);

  var request = {
  'url' : `http://localhost:3000/api/users/${id}` , 
  'method' : "DELETE" ,
  
  }

  if(confirm("Do you really want to delete this record?")){
    $.ajax(request).done(function(response){
      alert('user deleted successfully')
      location.reload()
  })
  }

  })
}
/*const update_form = document.getElementById("update_form")
update_form.addEventListener('submit' , (e)=>{
    e.preventDefault() ;
    let form_data = new FormData(update_form)
    console.log(form_data);
    let obj = {} ;
    for(let [key , value] of form_data){
            obj[key] = value
    }
    console.log(obj);

    
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", `http://localhost:3000/api/users/${obj.id}`, true); 
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     // Response
     alert('successfuly updated !')
   }
    };
    var data = obj
    xhttp.send(form_data);
    console.log(`updating ${JSON.stringify(obj)}`);
})*/
