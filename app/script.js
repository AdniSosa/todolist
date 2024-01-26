

$(document).on('click', '#checkbox', function(){
   
        if(this.checked === true){
            $(this).parent().addClass("tachado");

        }else if(this.checked === false){
            $(this).parent().removeClass("tachado");
        }
    });
   

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('marcar').addEventListener('click', function(e) {
            checkAll();
        });
        document.getElementById('desmarcar').addEventListener('click', function(e) {
            uncheckAll();
        });
    });

    

    function checkAll() {
        document.querySelectorAll('#lista input[type=checkbox]').forEach(function(checkElement) {
            checkElement.checked = true;
            
        });
    }

    function uncheckAll() {
        document.querySelectorAll('#lista input[type=checkbox]').forEach(function(checkElement) {
            checkElement.checked = false;
        });
    };

      $('#eliminar').click(function () {
        $(".items input:checked").parent().remove(); //Just select the checked inputs and remove the parents (the li elements containing the checkboxes):
     });
  
    
    

