const startButton = document.getElementById('startButton');
const output = document.getElementById('output');
const copyButton = document.getElementById('copyButton');
const clearButton = document.getElementById('clearButton');
const viewPdfButton = document.getElementById('viewPdfButton');
const recordingStatus = document.getElementById('recordingStatus');
const { jsPDF } = window.jspdf;

let recognition = null; // Variable to hold SpeechRecognition instance
let isRecording = false; // Flag to track recording state

copyButton.onclick = function() {
    const textToCopy = output.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

clearButton.onclick = function() {
    output.innerText = '';
};

// Function to start or stop recording
function toggleRecording() {
    if (!recognition) {
        window.SpeechRecognition = window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.interimResults = true;

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            output.innerHTML = transcript;

            console.log(transcript);
        });

        recognition.addEventListener('start', () => {
            startButton.classList.add('recording');
            recordingStatus.innerText = 'Recording...';
        });

        recognition.addEventListener('end', () => {
            startButton.classList.remove('recording');
            recordingStatus.innerText = 'Tap to Record';
        });
    }

    if (isRecording) {
        recognition.stop();
        isRecording = false;
    } else {
        recognition.start();
        isRecording = true;
    }
}

startButton.addEventListener('click', function() {
    toggleRecording();
});


viewPdfButton.onclick = function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(output.innerText, 180); 

    doc.text(10, 10, lines);;
    const pdfBlob = doc.output('blob');
    
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
};
