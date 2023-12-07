// Function to handle CV download
document.getElementById('downloadCvBtn').addEventListener('click', function () {
    downloadFile('https://docs.google.com/document/d/1uUAvmxZoPJPPeCY870c3AEaCkSMvM_qmT7bzWxln0M8/edit?usp=sharing', 'Your_CV.docx');
});

// Function to handle Project 1 download
document.getElementById('downloadCv1Btn').addEventListener('click', function () {
    downloadFile('https://docs.google.com/document/d/16W_FyXsBf5Sfrh0lHknDLt1_Jr7noSfAc5iUdahyiRo/edit?usp=sharing', 'Your_Cv1.docx');
});

// Function to handle Project 2 download
document.getElementById('downloadCv2Btn').addEventListener('click', function () {
    downloadFile('https://docs.google.com/document/d/1AsoRD6QqQ10Zx0q29gdapew5u3ZRqgPvi8BGa-3zgSk/edit?usp=sharing', 'Your_Cv2.docx');
});

// Generic function to trigger file download
function downloadFile(filePath, fileName) {
    const downloadLink = document.createElement('a');
    downloadLink.href = filePath;
    downloadLink.download = fileName;
    downloadLink.click();
}

