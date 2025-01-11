// static/js
function deleteNote(noteId) {
    fetch('/delete-note', {
        method: 'POST',
        body: new URLSearchParams({
            'note_id': noteId // Send the note_id as form data
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((_res) => {
        window.location.href = "/";  // Reload the page after deleting the note
    });
}