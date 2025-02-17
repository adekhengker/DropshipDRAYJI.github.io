let angkaRahasia = Math.floor(Math.random() * 10) + 1;
let percobaan = 3;

function cekTebakan() {
    let tebakan = document.getElementById("tebakan").value;
    let hasil = document.getElementById("hasil");

    if (percobaan > 0) {
        if (tebakan == angkaRahasia) {
            hasil.textContent = "🎉 Selamat! Tebakanmu benar! Diskon 0,001%";
            hasil.style.color = "green";
            disableInput();
        } else {
            percobaan--;
            if (tebakan < angkaRahasia) {
                hasil.textContent = `❌ Terlalu kecil! Sisa percobaan: ${percobaan}`;
            } else {
                hasil.textContent = `❌ Terlalu besar! Sisa percobaan: ${percobaan}`;
            }
            hasil.style.color = "red";
        }
    }

    if (percobaan == 0) {
        hasil.textContent = `😢 Game Over! Angka yang benar: ${angkaRahasia}`;
        hasil.style.color = "black";
        disableInput();
    }
}

function disableInput() {
    document.getElementById("tebakan").disabled = true;
}

function resetGame() {
    angkaRahasia = Math.floor(Math.random() * 10) + 1;
    percobaan = 3;
    document.getElementById("hasil").textContent = "";
    document.getElementById("tebakan").value = "";
    document.getElementById("tebakan").disabled = false;
}
