function swap_work_image() {
  var current_image = document.getElementById("Image_To_Switch").src;
  if (current_image == "https://cdn.glitch.com/bb534677-b1ca-4c00-8982-d15ff1862873%2FDDMS_Logo.jpg?v=1629926477534") {
    document.getElementById("Image_To_Switch").src =
      "https://cdn.glitch.com/bb534677-b1ca-4c00-8982-d15ff1862873%2FWPI_Logo.png?v=1629926564368";
  } else if (current_image == "https://cdn.glitch.com/bb534677-b1ca-4c00-8982-d15ff1862873%2FWPI_Logo.png?v=1629926564368") {
    document.getElementById("Image_To_Switch").src =
      "https://cdn.glitch.com/bb534677-b1ca-4c00-8982-d15ff1862873%2FNUWC_Logo.png?v=1629930335799";
  } else {
    document.getElementById("Image_To_Switch").src =
      "https://cdn.glitch.com/bb534677-b1ca-4c00-8982-d15ff1862873%2FDDMS_Logo.jpg?v=1629926477534";
  }
}

setInterval(swap_work_image, 2000);
