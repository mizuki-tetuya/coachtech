const school = {
  name: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
  createSentense() {
    const skill = this.skills.splice(",").join("と");
    console.log(`${this.name}は${this.month}ヶ月で${skill}を学ぶことができます`)
  },
};

console.log(school.createSentense());