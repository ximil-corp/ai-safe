$(function(){
 
    $('#serverless-form').submit(function(e){
        e.preventDefault();
        var formdata = toJSONString(this);
        console.log(formdata);
        $.ajax({
            type: "POST",
            url: URL,
            dataType: "json",
            contentType: "application/json",
            data: formdata,
            beforeSend: function(data) {
                $('#submit').attr('disabled', true);
                $('#status').addClass('alert-info');
                $('#status').html('<i class="fa fa-refresh fa-spin"></i> Enviando mensaje...').show();
                $('#serverless-form').hide();
            },
            success: function(data) {
                console.log(data);
                $('#status').removeClass('alert-info');
                $('#status').addClass('alert-success');
                $('#status').text('Mensaje enviado!').show();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#status').removeClass('alert-info');
                $('#status').addClass('alert-success');
                $('#status').text('El mensaje no pudo ser enviado, por favor contáctenos al correo info@ximil.co').show();
            }
        });
    });

    function toJSONString (form) {
		var obj = {};
		var elements = form.querySelectorAll("input, select, textarea");
		for(var i = 0; i < elements.length; ++i) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;
			if(name) {
				obj[name] = value;
			}
        }
        return JSON.stringify(obj);
    }
});
