function showSection(sectionId) {
    // Menyembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Menampilkan section yang dipilih
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Menampilkan section Home secara default saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Sembunyikan semua bagian
    });
    document.getElementById(sectionId).style.display = 'block'; // Tampilkan bagian yang dipilih
}

function openModal(imageSrc, captionText) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");

    // modal.style.display = "block";
    // modalImg.src = imageSrc;
    // caption.innerHTML = captionText;
    if (modal && modalImg && caption) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        caption.innerHTML = captionText;
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}


