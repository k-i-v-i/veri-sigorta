const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    email : {
        type: String,
        required: [true, "Lütfen mail adresinizi girin!"],
    },
    name : {
        type: String,
        required: [true, "Lütfen araç sahibinin ismini girin!"],
    },
    surname : {
        type: String,
        required: [true, "Lütfen araç sahibinin soyismini girin!"],
    },
    license_plate : {
        type: String,
        required: [true, "Lütfen plakayı girin!"],
    },
    doc_serial_number : {
        type: String,
        required: [true, "Lütfen ruhsatta bulunan belge seri numarasını girin!"],
    },
    date_of_birth : {
        type: String,
        required: [true, "Lütfen araç sahibinin doğum tarihini girin!"],
    }
});

module.exports = mongoose.model.Clients || mongoose.model("Clients", ClientSchema);