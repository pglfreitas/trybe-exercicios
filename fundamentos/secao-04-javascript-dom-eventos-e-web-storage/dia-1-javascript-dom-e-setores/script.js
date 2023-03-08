
const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(0, 0, 100)"

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0]
emergencyTasks.style.backgroundColor = "rgb(255, 0, 100)"

const emergencyTasksHeaders = document.querySelectorAll(".emergency-tasks h3")
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = "rgb(165, 0, 0)"
}

const noEmergencyTasks = document.querySelector(".no-emergency-tasks")
noEmergencyTasks.style.backgroundColor = "rgb(165, 0, 94)"

const noEmergencyTasksHeaders = document.querySelectorAll(".no-emergency-tasks h3")
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = "rgb(100, 85, 55)"
}

const footer = document.getElementById("footer-container")
footer.style.backgroundColor = "rgb(230, 45, 78)"