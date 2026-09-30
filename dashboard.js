const SUPABASE_URL = "https://qpuqqtqpciftnyvxhjlv.supabase.co";

// استعمل نفس publishable key الموجودة عندك في script.js
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_XN_YvEk3bRUPiMHCjxvjuA_flOVoDK2";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

let allResponses = [];

const labels = {
  en: {
    profile: {
      "Student / pupil": "Student / pupil",
      "Employee": "Employee",
      "Parent": "Parent",
      "Self-employed / professional": "Self-employed / professional",
      "Other": "Other"
    }
  }
};


async function loadResponses() {

  const { data, error } = await supabaseClient
    .from("responses")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) {

    console.error(error);

    alert(
      "Could not load responses. Check your Supabase RLS policy."
    );

    return;
  }

  allResponses = data || [];

  renderDashboard();
}


function getAnswers(row) {
  return row.answers || {};
}


function countSingle(key) {

  const counts = {};

  allResponses.forEach(row => {

    const value = getAnswers(row)[key];

    if (!value) return;

    counts[value] = (counts[value] || 0) + 1;

  });

  return counts;
}


function countMultiple(key) {

  const counts = {};

  allResponses.forEach(row => {

    const values = getAnswers(row)[key];

    if (!Array.isArray(values)) return;

    values.forEach(value => {

      if (!value) return;

      counts[value] = (counts[value] || 0) + 1;

    });

  });

  return counts;
}


function renderBars(elementId, counts) {

  const container = document.getElementById(elementId);

  if (!container) return;

  const entries = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]);

  if (!entries.length) {

    container.innerHTML =
      '<div class="empty">No data yet.</div>';

    return;
  }

  const max = Math.max(...entries.map(item => item[1]));

  container.innerHTML = entries.map(([label, value]) => {

    const percentage =
      Math.round((value / max) * 100);

    return `
      <div class="bar-row">

        <div class="bar-info">
          <span>${escapeHtml(label)}</span>
          <strong>${value}</strong>
        </div>

        <div class="bar-background">
          <div
            class="bar"
            style="width:${percentage}%"
          ></div>
        </div>

      </div>
    `;

  }).join("");
}


function renderOverview() {

  const total = allResponses.length;

  document.getElementById("totalResponses")
    .textContent = total;

  const today = new Date();

  const todayCount = allResponses.filter(row => {

    const date = new Date(row.submitted_at);

    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );

  }).length;

  document.getElementById("todayResponses")
    .textContent = todayCount;


  const weekAgo = new Date();

  weekAgo.setDate(
    weekAgo.getDate() - 7
  );

  const weekCount = allResponses.filter(row => {

    return new Date(row.submitted_at) >= weekAgo;

  }).length;

  document.getElementById("weekResponses")
    .textContent = weekCount;


  const languages = new Set(
    allResponses.map(row => row.language)
  );

  document.getElementById("languageCount")
    .textContent = languages.size;


  document.getElementById("lastUpdate")
    .textContent =
      "Updated " +
      new Date().toLocaleTimeString();
}


function renderCharts() {

  renderBars(
    "languageChart",
    countSingle("language")
  );

  renderBars(
    "profileChart",
    countSingle("profile")
  );

  renderBars(
    "injuryChart",
    countSingle("injuryFrequency")
  );

  renderBars(
    "currentActionChart",
    countSingle("currentAction")
  );

  renderBars(
    "usefulnessChart",
    countSingle("usefulness")
  );

  renderBars(
    "formatChart",
    countSingle("format")
  );

  renderBars(
    "goodPriceChart",
    countSingle("goodPrice")
  );

  renderBars(
    "tooExpensiveChart",
    countSingle("tooExpensive")
  );

  renderBars(
    "buyIntentChart",
    countSingle("buyIntent")
  );

  renderBars(
    "purchasePlaceChart",
    countMultiple("purchasePlace")
  );

  renderBars(
    "prioritiesChart",
    countMultiple("priorities")
  );

  renderBars(
    "difficultyChart",
    countMultiple("difficulty")
  );
}


function renderOpenAnswers(showAll = false) {

  const container =
    document.getElementById("openAnswers");

  const answers = [];

  allResponses.forEach(row => {

    const data = getAnswers(row);

    if (data.expectations) {

      answers.push({
        type: "Expectation",
        text: data.expectations,
        date: row.submitted_at,
        language: row.language
      });

    }

    if (data.suggestions) {

      answers.push({
        type: "Suggestion",
        text: data.suggestions,
        date: row.submitted_at,
        language: row.language
      });

    }

  });


  const visible =
    showAll ? answers : answers.slice(0, 10);

  if (!visible.length) {

    container.innerHTML =
      '<div class="empty">No open answers yet.</div>';

    return;
  }


  container.innerHTML = visible.map(item => {

    return `
      <div class="open-answer">

        <div class="answer-meta">
          ${escapeHtml(item.type)}
          •
          ${escapeHtml(item.language)}
          •
          ${new Date(item.date).toLocaleDateString()}
        </div>

        <p>${escapeHtml(item.text)}</p>

      </div>
    `;

  }).join("");
}


function renderTable(search = "") {

  const tbody =
    document.getElementById("responsesTable");

  const query =
    search.toLowerCase().trim();


  const rows = allResponses.filter(row => {

    if (!query) return true;

    return JSON.stringify(row.answers)
      .toLowerCase()
      .includes(query);

  });


  tbody.innerHTML = rows.map(row => {

    const a = getAnswers(row);

    return `
      <tr>

        <td>
          ${new Date(row.submitted_at).toLocaleDateString()}
        </td>

        <td>
          ${escapeHtml(row.language || "-")}
        </td>

        <td>
          ${escapeHtml(a.profile || "-")}
        </td>

        <td>
          ${escapeHtml(a.injuryFrequency || "-")}
        </td>

        <td>
          ${escapeHtml(a.usefulness || "-")}
        </td>

        <td>
          ${escapeHtml(a.goodPrice || "-")}
        </td>

        <td>
          ${escapeHtml(a.buyIntent || "-")}
        </td>

      </tr>
    `;

  }).join("");
}


function renderDashboard() {

  renderOverview();

  renderCharts();

  renderOpenAnswers();

  renderTable();

}


function escapeHtml(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


document
  .getElementById("refreshBtn")
  .addEventListener("click", loadResponses);


document
  .getElementById("showAllBtn")
  .addEventListener("click", function () {

    renderOpenAnswers(true);

    this.textContent = "All answers";

  });


document
  .getElementById("searchInput")
  .addEventListener("input", function () {

    renderTable(this.value);

  });


loadResponses();