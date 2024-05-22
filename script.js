function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  function checkName() {
    var nameInput = document.getElementById("nameInput").value;
    
    if (nameInput.trim().toLowerCase() === "kaine") {
      alert("Welcome, my love!");
      window.location.href = "abouther.html";
    } else {
      alert("Who are you?");
      document.getElementById("nameInput").value = ""; // Bersihkan input field
      document.getElementById("nameInput").focus(); // Fokuskan kembali ke input field
    }
  }