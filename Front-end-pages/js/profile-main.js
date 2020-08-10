progress = document.getElementById("progress");
matches = document.getElementById("matches");
progress_content = document.getElementsByClassName("progress-content");
matches_content = document.getElementsByClassName("matches-content");


progress.addEventListenter('click') = function(event) {
    matches_content.style.display = "none";
    progress_content.style.display = "block";
}

matches.addEventListenter('click') = function(event) {
    progress_content.style.display = "none";
    matches_content.style.display = "block";
}