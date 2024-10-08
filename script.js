Dropzone.options.fileDropzone = {
  autoProcessQueue: true, // Automatically upload files
  maxFilesize: 5, // Max file size in MB
  acceptedFiles: '.jpeg,.jpg,.png,.pdf', // Accepted file types
  init: function () {
    this.on('addedfile', function (file) {
      // Display file info when a file is added
      displayFileInfo(file, this);
    });
  },
};

// Function to display file information in the table
function displayFileInfo(file, dropzoneInstance) {
  var tableBody = document.querySelector('#fileInfoTable tbody');

  // Create a new row for the table
  var row = document.createElement('tr');

  // Create table cells for file name, size, type, and action (cancel)
  var fileNameCell = document.createElement('td');
  fileNameCell.textContent = file.name;

  var fileSizeCell = document.createElement('td');
  fileSizeCell.textContent = (file.size / 1024).toFixed(2); // Convert size to KB

  var fileTypeCell = document.createElement('td');
  fileTypeCell.textContent = file.type;

  // Create a cancel button
  var cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';

  // Handle cancel button click
  cancelButton.addEventListener('click', function () {
    // Remove file from Dropzone and table
    dropzoneInstance.removeFile(file);
    row.remove();
  });

  var actionCell = document.createElement('td');
  actionCell.appendChild(cancelButton);

  // Append cells to the row
  row.appendChild(fileNameCell);
  row.appendChild(fileSizeCell);
  row.appendChild(fileTypeCell);
  row.appendChild(actionCell);

  // Append the row to the table body
  tableBody.appendChild(row);
}