
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        alert("Nilai harus berada pada rentang 0–100!");
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", predikat);
console.log("Status:", status);

    document.getElementById("nilaiAkhir").textContent =
        akhir.toFixed(2);

    document.getElementById("predikat").textContent = predikat;
    document.getElementById("status").textContent = status;
});

document.getElementById("formNilai").addEventListener("reset", function() {
    document.getElementById("nilaiAkhir").textContent = "-";
    document.getElementById("predikat").textContent = "-";
    document.getElementById("status").textContent = "-";
});
