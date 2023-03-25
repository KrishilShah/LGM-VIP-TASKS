function displayInput() {
  var tb = [];
  const name = document.getElementById("name").value;
  const imageLink = document.getElementById("image").value;
  const email = document.getElementById("mail").value;
  const website = document.getElementById("website").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const studentData = document.createElement("div");
  studentData.classList.add("student-data");

  const imageElement = document.createElement("img");
  imageElement.src = imageLink;
  studentData.appendChild(imageElement);

  const webElement = document.createElement("p");
  webElement.innerHTML = "<b>Website:</b> " + website;
  studentData.appendChild(webElement);

  const emailAddress = document.createElement("p");
  emailAddress.innerHTML = "<b>Email ID</b>:" + email;
  studentData.appendChild(emailAddress);

  const genderElement = document.createElement("p");
  genderElement.innerHTML =
    "<b>Gender:</b> " + (male.checked ? "Male" : "Female");
  studentData.appendChild(genderElement);

  const studentInfo = document.getElementById("student-info");
  studentInfo.appendChild(studentData);

  document.getElementById("name").value = "";
  document.getElementById("image").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("website").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;

  return false;
}
