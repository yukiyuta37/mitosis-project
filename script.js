// ===============================
// نظام أقسام الموقع
// ===============================

const sections = [
  "home",
  "introduction",
  "importance",
  "location",
  "phases",
  "result",
  "conclusion",
];

let currentSection = 0;

const navigationControls = document.getElementById("navigationControls");
const nextButton = document.getElementById("nextSection");
const previousButton = document.getElementById("previousSection");
const indicator = document.getElementById("navigationIndicator");

function showSection(index) {
  if (index < 0 || index >= sections.length) return;

  currentSection = index;

  sections.forEach((id, i) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.classList.toggle("active-section", i === index);
  });

  // تحديث مؤشر الأقسام
  if (indicator) {
    indicator.textContent = `${String(index + 1).padStart(2, "0")} / ${String(sections.length).padStart(2, "0")}`;
  }

  // إظهار أدوات التنقل داخل الأقسام فقط
  if (navigationControls) {
    navigationControls.style.display = index === 0 ? "none" : "flex";
  }

  // إخفاء السابق في المقدمة
  if (previousButton) {
    previousButton.style.visibility = index === 1 ? "hidden" : "visible";
  }

  // تغيير زر التالي عند الوصول للخاتمة
  if (nextButton) {
    nextButton.innerHTML =
      index === sections.length - 1
        ? "الرئيسية <span>⌂</span>"
        : "التالي <span>←</span>";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ===============================
// التالي
// ===============================

if (nextButton) {
  nextButton.addEventListener("click", () => {
    if (currentSection === sections.length - 1) {
      showSection(0);
    } else {
      showSection(currentSection + 1);
    }
  });
}

// ===============================
// السابق
// ===============================

if (previousButton) {
  previousButton.addEventListener("click", () => {
    showSection(currentSection - 1);
  });
}

// ===============================
// زر اكتشف الموضوع
// ===============================

const discoverButton = document.querySelector(".main-button");

if (discoverButton) {
  discoverButton.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(1);
  });
}

// ===============================
// تشغيل الموقع
// ===============================

showSection(0);
