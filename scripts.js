function uploadFile() {
    const fileInput = document.getElementById('apkFile');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const downloadLink = document.getElementById('downloadLink');
            const downloadUrl = document.getElementById('downloadUrl');
            downloadUrl.href = e.target.result;
            downloadUrl.download = file.name;
            downloadLink.classList.remove('hidden');
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please choose a file to upload.');
    }
}
