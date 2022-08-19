siteName = document.getElementById("sn");
siteURl = document.getElementById("su");

// var name = document.getElementById("sn").value;
// var url = document.getElementById("su").value;

var allSites;

if (localStorage.getItem("allSites") == null) {
  allSites = [];
} else {
  allSites = JSON.parse(localStorage.getItem("allSites"));
  displaysites();
}

function getSite() {
  if (validation()) {
    site = {
      name: siteName.value,
      url: siteURl.value,
    };
    allSites.push(site);
    localStorage.setItem("allSites", JSON.stringify(allSites));
    displaysites();
    clear();
  } else {
    document.getElementById("alert-error-n").style.display = "block";
    document.getElementById("alert-error-u").style.display = "block";
  }
}

function displaysites() {
  var html = "";
  for (var i = 0; i < allSites.length; i++) {
    html += `<div
      class="bookmark-list d-flex align-items-center px-4 m-auto p-4 mt-4 mb-4"
      id="bookmark" >
      <h4 class="w-25 fw-bold my-3">${allSites[i].name}</h4>
      <a href="https://${allSites[i].url}" class="btn btn-primary mx-2 my-0" target="_blank">Visit</a>
      <button class="btn btn-danger mx-3 my-0" onclick="deletElement(${i})" >Delete</button>
    </div>`;
  }
  document.getElementById("list").innerHTML = html;
  document.getElementById("alert-error-n").style.display = "none";
  document.getElementById("alert-error-u").style.display = "none";
}

function deletElement(index) {
  allSites.splice(index, 1);

  localStorage.setItem("allSites", JSON.stringify(allSites));
  displaysites();
}

function clear() {
  siteName.value = "";
  siteURl.value = "";
}


function validation() {
  if (siteName.value != "" && siteURl.value != "") {
    return true;
  }
}
