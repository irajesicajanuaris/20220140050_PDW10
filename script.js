function kirimData() {
  var name = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var tanggal = document.getElementById("tanggal").value;
  var alamat = document.getElementById("alamat").value;
  var angkatan = document.getElementById("angkatan").value;
  var peminatan = document.querySelector(
    "input[name='peminatan']:checked"
  ).value;

  alert(
    "Nama: " +
      name +
      "\nNIM: " +
      nim +
      "\nTanggal Lahir: " +
      tanggal +
      "\nAlamat: " +
      alamat +
      "\nAngkatan: " +
      angkatan +
      "\nPeminatan: " +
      peminatan
  );
}
