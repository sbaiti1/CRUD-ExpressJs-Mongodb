if(window.location.pathname == '/'){
    console.log('route');
    $login = $('#login')
    console.log($login);
    $login.click(function(e){
        window.location.href = "http://localhost:3000/home"
         
    })


}