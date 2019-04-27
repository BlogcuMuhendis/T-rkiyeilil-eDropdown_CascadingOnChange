$.ajax({
    url: 'Models/iller.json',
    dataType: 'json',
    type: 'GET',
    data: "",
    success: function (data) {
        for (row in data) {
            $('#il').append($('<option></option>').attr('value', data[row].YerID).text(data[row].YerAdi));
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        alert(errorThrown);
    }
});



$("#il").change(function () {
    $("#ilce").attr("disabled", false).html("<option value=''>İlçe Seçiniz..</option>");
    $.ajax({
        url: 'Models/ilceler.json',
        dataType: 'json',
        type: 'GET',
        data: "",
        success: function (data) {
            for (row in data) {
                if (data[row].SehirID == $("#il").val()) {
                    $('#ilce').append($('<option></option>').attr('value', data[row].YerID).text(data[row].YerAdi));
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
})
