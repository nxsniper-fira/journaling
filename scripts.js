document.getElementById('journal-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const position = document.getElementById('position').value;
    const status = document.getElementById('status').value;
    const entryText = document.getElementById('entry').value;

    const entryList = document.getElementById('entry-list');
    const listItem = document.createElement('li');

    listItem.textContent = `Date: ${date}, Position: ${position}, Status: ${status}, Entry: ${entryText}`;
    entryList.appendChild(listItem);

    // Clear form fields after submission
    document.getElementById('journal-form').reset();
});
