document.getElementById('download').addEventListener('click', () => {
  console.log('Download button clicked'); // Debugging statement

  // Query the active tab and inject the script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) {
      console.error('No active tab found');
      return;
    }

    const tabId = tabs[0].id;
    
    // Check if chrome.scripting is available
    if (chrome.scripting) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: enableImageDownload
      }, (results) => {
        if (chrome.runtime.lastError) {
          console.error('Script injection failed: ' + chrome.runtime.lastError.message);
        } else {
          console.log('Script injection succeeded');
        }
      });
    } else {
      console.error('chrome.scripting is not available');
    }
  });
});

// Function to handle image click and download
function enableImageDownload() {
  console.log('enableImageDownload function called'); // Debugging statement
  
  // Add click event listener to all images on the page
  document.querySelectorAll('img').forEach(img => {
    img.style.border = "2px solid red"; // Highlight the images
    img.style.cursor = "pointer"; // Change cursor to pointer

    img.addEventListener("click", function handleClick(event) {
      console.log("Image clicked"); // Debugging statement

      // Prevent default action
      event.preventDefault();

      // Remove the click event listener after the first click
      img.removeEventListener("click", handleClick);

      // Reset image border
      img.style.border = "";
      img.style.cursor = "";

      // Create an anchor element to trigger the download
      const a = document.createElement("a");
      a.href = img.src;
      a.download = "downloaded_image";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      console.log("Image download triggered"); // Debugging statement
    });
  });
}



document.getElementById('feedback').addEventListener('click', () => {
  console.log('User feedback button clicked');
});

document.getElementById('share').addEventListener('click', () => {
  console.log('Share button clicked');
});

document.getElementById('reset').addEventListener('click', () => {
  console.log('Reset button clicked');
  document.getElementById('imageWidth').value = '';
  document.getElementById('imageHeight').value = '';
  document.getElementById('fontSize').value = '';
  document.getElementById('gridDisplay').checked = false;
});

// Function to handle image click and download
function enableImageDownload() {
  console.log('enableImageDownload function called'); // Debugging statement
  
  // Add click event listener to all images on the page
  document.querySelectorAll('img').forEach(img => {
    img.style.border = "2px solid red"; // Highlight the images
    img.style.cursor = "pointer"; // Change cursor to pointer

    img.addEventListener("click", function handleClick(event) {
      console.log("Image clicked"); // Debugging statement

      // Prevent default action
      event.preventDefault();

      // Remove the click event listener after the first click
      img.removeEventListener("click", handleClick);

      // Reset image border
      img.style.border = "";
      img.style.cursor = "";

      // Create an anchor element to trigger the download
      const a = document.createElement("a");
      a.href = img.src;
      a.download = "downloaded_image";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      console.log("Image download triggered"); // Debugging statement
    });
  });
}


document.getElementById('download').addEventListener('click', () => {
  console.log('Download button clicked'); // Debugging statement

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) {
      console.error('No active tab found');
      return;
    }

    const tabId = tabs[0].id;

    chrome.tabs.executeScript(tabId, {
      code: '(' + enableImageDownload.toString() + ')();'
    }, (results) => {
      if (chrome.runtime.lastError) {
        console.error('Script injection failed: ' + chrome.runtime.lastError.message);
      } else {
        console.log('Script injection succeeded');
      }
    });
  });
});

// Function to handle image click and download
function enableImageDownload() {
  console.log('enableImageDownload function called'); // Debugging statement

  // Add click event listener to all images on the page
  document.querySelectorAll('img').forEach(img => {
    img.style.border = "2px solid red"; // Highlight the images
    img.style.cursor = "pointer"; // Change cursor to pointer

    img.addEventListener("click", function handleClick(event) {
      console.log("Image clicked"); // Debugging statement

      // Prevent default action
      event.preventDefault();

      // Remove the click event listener after the first click
      img.removeEventListener("click", handleClick);

      // Reset image border
      img.style.border = "";
      img.style.cursor = "";

      // Create an anchor element to trigger the download
      const a = document.createElement("a");
      a.href = img.src;
      a.download = "downloaded_image";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      console.log("Image download triggered"); // Debugging statement
    });
  });
}