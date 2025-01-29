document.addEventListener("DOMContentLoaded", function () {
    // Tambahkan event listener ke semua tombol "Detail"
    document.querySelectorAll(".btn-outline-white").forEach(button => {
        button.addEventListener("click", function () {
            let parentDiv = this.closest(".pricing-entry"); // Ambil elemen utama
            let recipeTitle = parentDiv.querySelector("h3 span").textContent; // Judul makanan
            let recipeText = parentDiv.querySelector("p").textContent; // Detail resep
            let recipeImage = parentDiv.querySelector(".img").style.backgroundImage; // Gambar makanan
            
            // Menampilkan pop-up dengan informasi yang sesuai
            document.getElementById("popup-title").textContent = recipeTitle;
            document.getElementById("popup-content").textContent = recipeText;
            document.getElementById("popup-image").style.backgroundImage = recipeImage;
            document.getElementById("recipe-popup").style.display = "flex";
        });
    });

    // Menutup pop-up ketika tombol "Tutup" ditekan
    document.getElementById("close-popup").addEventListener("click", function () {
        document.getElementById("recipe-popup").style.display = "none";
    });
});
