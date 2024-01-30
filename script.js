async function fetchSkills() {
  let response = await fetch("skills.json");

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  let data = await response.json();

  const sortedSkills = data.sort((a, b) => b.level - a.level); // ChatGPT

  console.log(sortedSkills);
}

fetchSkills().catch((error) => {
  error.message;
});

fetchSkills();
