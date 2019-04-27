$.getJSON("Models/iller.json", function (sonuc) {
    $.each(sonuc, function (index, value) {
        var row = "";
        row += '<option value="' + value.YerID + '">' + value.YerAdi + '</option>';
        $("#il").append(row);

    })
});



$("#il").on("change", function () {
    var il = $("#il").val();
    $("#ilce").attr("disabled", false).html("<option value=''>İlçe Seçiniz...</option>");
    $.getJSON("Models/ilceler.json", function (sonuc) {
        $.each(sonuc, function (index, value) {
            var row = "";
            if (value.SehirID == il) {
                row += '<option value="' + value.YerID + '">' + value.YerAdi + '</option>';
                $("#ilce").append(row);
            }
        });
    });
});

