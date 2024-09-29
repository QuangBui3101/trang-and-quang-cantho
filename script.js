inputbox = document.getElementById("InputBox")
inputText = document.getElementById("NameInput")
nameSpan = document.getElementById("Name")
btnProceed = document.getElementById("proceed")
invitationView = document.getElementById("Invitation")
section4 = document.getElementById('section4')
function showInvititation() {
    invitationView.classList.toggle('d-none')
    inputbox.classList.toggle('d-none')
    document.getElementById('section4').scrollIntoView()
    nameSpan.textContent = inputText.value
}
inputText.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        showInvititation()
    }
}, false);



btnProceed.addEventListener('click', function() {
    showInvititation()
}, false)
btnBack = document.getElementById('goback')
btnBack.addEventListener('click', function() {
    invitationView.classList.toggle('d-none')
    inputbox.classList.toggle('d-none')
    nameSpan.textContent = ''
}, false)

btnSave = document.getElementById('save')

var options = {
    margin:       1,
    filename:     'isolates.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

// btnSave.addEventListener('click', function() {
//     html2pdf(invitationView, options)
// }, false)