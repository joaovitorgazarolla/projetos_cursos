
window.addEventListener('load', function(e){
    this.alert('A Pagina foi carregada');

})

window.addEventListener('beforeunload', function(e){
    e.returnValue = null;  
})