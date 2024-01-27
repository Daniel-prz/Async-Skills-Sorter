async function fetchSkills() {
  let data = await fetch("skills.json");

  if (!data.ok) {
    const message = `An error has occured: ${data.status}`;
    throw new Error(message);
  }
  let skills = await data.json();

  const sortedSkills = skills.sort((a, b) => b.level - a.level); // ChatGPT

  console.log(sortedSkills);
}

fetchSkills().catch((error) => {
  error.message;
});

fetchSkills();
