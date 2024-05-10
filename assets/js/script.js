$(document).ready(function() {
  $("#update-form").submit(function(event) {
      event.preventDefault();
      var formData = {
          name: $("#name").val(),
          age: $("#age").val(),
          street: $("#street").val(),
          neighborhood: $("#neighborhood").val(),
          state: $("#state").val(),
          biography: $("#biography").val()
      };
     
      $.each(formData, function(key, value) {
          $("#user" + key.charAt(0).toUpperCase() + key.slice(1)).text(value);
      });
      
      $("#name").prop("value", "");
      $("#age").prop("value", "");
      $("#street").prop("value", "");
      $("#neighborhood").prop("value", "");
      $("#state").prop("value", "");
      $("#biography").prop("value", "");
  });
});

$.ajax({
    url: 'http://localhost:3000/usuarios/' + 1,
    type: 'GET',
    success: function(data) {
        $('#userName').val(data.name);
        $('#userAge').val(data.age);
        $('#userStreet').val(data.street);
        $('#userNeighborhood').val(data.neighborhood);
        $('#userState').val(data.state);
        $('#userBiography').val(data.biography);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Erro na requisição GET por ID:', textStatus, errorThrown);
    }
});

$('#update-form').submit(function(event) {
    event.preventDefault();
    var userData = {
        name: $('#userName').val(),
        age: $('#userAge').val(),
        street: $('#userStreet').val(),
        neighborhood: $('#userNeighborhood').val(),
        state: $('#userState').val(),
        biography: $('#userBiography').val()
    };

    $.ajax({
        url: 'http://localhost:3000/usuarios/' + 1, 
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(userData),
        success: function(response) {
            console.log('Dados atualizados com sucesso:', response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Erro na requisição PUT por ID:', textStatus, errorThrown);
        }
    });
});
