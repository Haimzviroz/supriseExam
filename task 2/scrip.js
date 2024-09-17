const container = document.querySelector("h3");

async function GetUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  let name = data.results[0].name.first;
  name += " " + data.results[0].name.last;
  container.textContent = name;
}
GetUser();
