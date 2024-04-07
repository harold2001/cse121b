const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  enrollStudent: function (sectionNum) {
    const sectionExists = this.sections.find(sec => sec.sectionNum == sectionNum)

    if (sectionExists) {
      sectionExists.enrolled++;
      renderSections(this.sections);
    }
  },
  changeEnrollment: function (sectionNum, add = true) {
    const sectionExists = this.sections.find(sec => sec.sectionNum == sectionNum)

    if (sectionExists) {
      add ? sectionExists.enrolled++ : sectionExists.enrolled--;
      renderSections(this.sections);
    }
  }
};

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const coursecode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  coursecode.textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
})

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
})

setCourseInfo(aCourse);
renderSections(aCourse.sections);