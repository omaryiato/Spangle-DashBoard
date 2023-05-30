
const form = document.querySelector("form"),
    fileInput = form.querySelector(".file-input"),
    progressArea = document.querySelector(".progress-area"),
    uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () => {
    fileInput.click();
});

fileInput.onchange = ({ target }) => {
    let file = target.files[0];
    if (file) {
        let fileName = file.name;
        uploadedFile(fileName);
    }

}

function uploaedFile(name) {
    let xhr = new XMLHttpRequest();
    xhr.open();
    xhr.upload.addEventListener("progress", ({ loaded, total }) => {
        let fileLoaded = Math.floor((loaded / total) * 100);
        let fileTotal = Math.floor(total / 1000);
        let progressHTML = " <li class="row">
            < i class="fas fa-file-alt" ></i >
                <div class="content">
                    <div class="detailses">
                        <span class="name">image-01.png * uploading</span>
                        <span class="percent">50%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                </div>
                            </li > " ;

        progressArea.innerHTML = progressHTML;

        let uploadedHTML = "  <li class="row">
            < div class="content" >
                                    <i class="fas fa-file-alt"></i>
                                        <div class="detailses">
                                            <span class="name">image-01.png * uploaded</span>
                                            <span class="size">70 kb</span>
                                        </div>
                                    </div >
            <i class="fas fa-check"></i>
                            </li > ";
    });

    let formData = new FormData(form);
    xhr.send(formData);
}