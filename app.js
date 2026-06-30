// 90-Day Placement Prep Dashboard - Application State & Interaction Logic

// Default State Definition
const DEFAULT_STATE = {
  theme: 'dark',
  streak: 5, // starting motivating streak
  startDate: new Date().toISOString().split('T')[0],
  emergencyMode: false,
  
  // Weekly habits (Monday = index 0 to Sunday = index 6)
  habits: {
    'Wake up at 6 AM': [false, false, false, false, false, false, false],
    'Exercise (30 Min)': [false, false, false, false, false, false, false],
    'Attend College': [false, false, false, false, false, false, false],
    'Study after 5 PM': [false, false, false, false, false, false, false],
    'SQL Practice': [false, false, false, false, false, false, false],
    'Python Coding': [false, false, false, false, false, false, false],
    'Analytics Tool': [false, false, false, false, false, false, false],
    'Aptitude Practice': [false, false, false, false, false, false, false],
    'One New Learning': [false, false, false, false, false, false, false],
    'Revision Done': [false, false, false, false, false, false, false],
    'No Social Media': [false, false, false, false, false, false, false],
    'Sleep Before 11 PM': [false, false, false, false, false, false, false],
    'Water Intake (3L)': [false, false, false, false, false, false, false]
  },

  // Checklists (stores element IDs that are checked)
  checklists: {
    // Morning routine
    'morning-wake': false,
    'morning-water': false,
    'morning-exercise': false,
    'morning-freshen': false,
    'morning-breakfast': false,
    'morning-goals': false,
    'morning-leave': false,
    // College checklist
    'college-attend': false,
    'college-notes': false,
    'college-doubts': false,
    'college-revise': false,
    'college-social': false,
    // Evening study SQL
    'study-sql-learn': false,
    'study-sql-queries': false,
    'study-sql-revise': false,
    'study-sql-notes': false,
    // Evening study Python
    'study-py-var': false,
    'study-py-pandas': false,
    'study-py-numpy': false,
    'study-py-practice': false,
    // Evening study Analytics
    'study-tool-learn': false,
    'study-tool-practice': false,
    'study-tool-dashboard': false,
    // Evening study Aptitude
    'study-apt-quant': false,
    'study-apt-logical': false,
    'study-apt-verbal': false,
    'study-apt-mistakes': false,
    // Evening study Placement
    'study-place-mon': false,
    'study-place-tue': false,
    'study-place-wed': false,
    'study-place-thu': false,
    'study-place-fri': false,
    'study-place-sat': false,
    'study-place-sun': false,
    // Evening study Learning
    'study-learn-one': false,
    // Evening study Revision
    'study-rev-sql': false,
    'study-rev-py': false,
    'study-rev-tool': false,
    'study-rev-apt': false,
    'study-rev-notes': false,
    // Night checklist
    'night-update': false,
    'night-tasks': false,
    'night-tomorrow': false,
    'night-phone': false,
    'night-sleep': false,
    // Emergency mode checklist
    'em-sql': false,
    'em-python': false,
    'em-aptitude': false,
    'em-learning': false,
    'em-dashboard': false
  },

  // Tech & Placement Trackers subtopics checkboxes
  trackerTopics: {}, // Will populate dynamically based on DOM
  trackerNotes: {},  // Key-value for textareas

  // Resume & Projects tracker checklist
  resumeTrackers: {
    'resume-ats': false, 'resume-projects': false, 'resume-skills': false, 'resume-certs': false,
    'resume-achieve': false, 'resume-github': false, 'resume-linkedin': false, 'resume-portfolio': false
  },
  projectTrackers: {
    'proj-port1': false, 'proj-github1': false, 'proj-doc1': false, 'proj-linkedin1': false,
    'proj-port2': false, 'proj-github2': false, 'proj-doc2': false, 'proj-linkedin2': false
  },

  // Company Placement Database
  companies: [
    { id: 'c1', name: 'Deloitte', status: 'eligible', resumeSubmitted: true, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'applied', notes: 'Focus on business case studies and SQL joins.' },
    { id: 'c2', name: 'Accenture', status: 'eligible', resumeSubmitted: true, oa: 'passed', techRound: 'pending', hrRound: 'pending', result: 'applied', notes: 'Aptitude test completed successfully. Cognitive round coming.' },
    { id: 'c3', name: 'EY', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'Check eligibility criteria once portal opens.' },
    { id: 'c4', name: 'PwC', status: 'eligible', resumeSubmitted: true, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'applied', notes: 'Resume selected. Waiting for OA email.' },
    { id: 'c5', name: 'KPMG', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'Need to review standard BA case interview topics.' },
    { id: 'c6', name: 'Zoho', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'Focus on SQL, C++ or Java/Python and DSA basics.' },
    { id: 'c7', name: 'TCS Digital', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'Pre-placement talk attended.' },
    { id: 'c8', name: 'Cognizant', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'General placement drive preparation.' },
    { id: 'c9', name: 'Infosys', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'InfyTQ certification check.' },
    { id: 'c10', name: 'Capgemini', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'Pseudocode and game-based aptitude prep.' },
    { id: 'c11', name: 'Amazon', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'SQL window functions and complex analytics.' },
    { id: 'c12', name: 'Microsoft', status: 'eligible', resumeSubmitted: false, oa: 'pending', techRound: 'pending', hrRound: 'pending', result: 'not_applied', notes: 'Long shot, need strong Python/SQL/Stats foundation.' }
  ],

  // Daily learning logs
  dailyLearning: [
    { date: '2026-06-29', category: 'SQL', learning: 'Window Functions - DENSE_RANK vs RANK', keyTakeaway: 'DENSE_RANK doesn\'t skip rank numbers when duplicates occur, RANK does.', source: 'LeetCode / YouTube', application: 'Can rank sales performance of departments without skipping rank orders.' }
  ],

  // Reviews
  weeklyReview: {
    hours: '18',
    topics: 'SQL Window Functions, Python Pandas Basics, Excel XLOOKUP',
    achievement: 'Solved 15 LeetCode SQL medium problems.',
    weak: 'DAX expressions in Power BI need more practice.',
    companies: 'Deloitte and PwC portals open.',
    mocks: 'Practiced "Introduce yourself" mock with sibling.',
    goals: 'Learn Power BI Measures, Python OOP, do 20 SQL queries.'
  },
  monthlyReview: {
    skills: 'SQL joins, Pandas dataframes, Excel XLOOKUP/INDEX-MATCH, Statistics Mean/Hypothesis Basics',
    projects: 'Built Financial Performance dashboard in Excel.',
    certs: 'Finished Coursera Google Data Analytics Course 3.',
    interviewReady: '60',
    placementReady: '55'
  }
};

// Global App State
let state = {};

// Load State from localStorage
function loadState() {
  const saved = localStorage.getItem('placement_dashboard_state');
  if (saved) {
    try {
      state = JSON.parse(saved);
      // Fallback keys if structure changed
      if (!state.companies) state.companies = DEFAULT_STATE.companies;
      if (!state.dailyLearning) state.dailyLearning = DEFAULT_STATE.dailyLearning;
      if (!state.weeklyReview) state.weeklyReview = DEFAULT_STATE.weeklyReview;
      if (!state.monthlyReview) state.monthlyReview = DEFAULT_STATE.monthlyReview;
      if (!state.resumeTrackers) state.resumeTrackers = DEFAULT_STATE.resumeTrackers;
      if (!state.projectTrackers) state.projectTrackers = DEFAULT_STATE.projectTrackers;
    } catch (e) {
      console.error("Failed to parse saved state, loading defaults.", e);
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  } else {
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}

// Save State to localStorage
function saveState() {
  localStorage.setItem('placement_dashboard_state', JSON.stringify(state));
  updateDynamicStats();
}

// Update UI elements based on state progress computations
function updateDynamicStats() {
  // 1. Calculate progress for each tracker block
  const trackers = [
    { id: 'sql', prefix: 'track-sql' },
    { id: 'python', prefix: 'track-py' },
    { id: 'excel', prefix: 'track-ex' },
    { id: 'powerbi', prefix: 'track-pbi' },
    { id: 'tableau', prefix: 'track-tab' },
    { id: 'stats', prefix: 'track-stat' },
    { id: 'ba', prefix: 'track-ba' },
    { id: 'apt', prefix: 'track-apt' }
  ];

  let totalCompleted = 0;
  let totalSubtopics = 0;

  trackers.forEach(t => {
    // Find all checkboxes belonging to this prefix
    const checkboxes = Object.keys(state.trackerTopics).filter(k => k.startsWith(t.prefix));
    const completed = checkboxes.filter(k => state.trackerTopics[k]).length;
    const total = checkboxes.length || 1; // avoid division by zero
    
    const percentage = Math.round((completed / total) * 100);
    totalCompleted += completed;
    totalSubtopics += checkboxes.length;

    // Update individual progress bar element (width & label)
    const fillEl = document.getElementById(`${t.id}-progress-fill`);
    const labelEl = document.getElementById(`${t.id}-progress-label`);
    if (fillEl) fillEl.style.width = `${percentage}%`;
    if (labelEl) labelEl.textContent = `${completed}/${total} (${percentage}%)`;

    // Also update home dashboard progress cards
    const fillHome = document.getElementById(`home-${t.id}-progress-fill`);
    const labelHome = document.getElementById(`home-${t.id}-progress-label`);
    if (fillHome) fillHome.style.width = `${percentage}%`;
    if (labelHome) labelHome.textContent = `${percentage}%`;
  });

  // Calculate Resume progress
  const resKeys = Object.keys(state.resumeTrackers);
  const resCompleted = resKeys.filter(k => state.resumeTrackers[k]).length;
  const resPercentage = Math.round((resCompleted / resKeys.length) * 100);
  const resFill = document.getElementById('resume-progress-fill');
  const resLabel = document.getElementById('resume-progress-label');
  if (resFill) resFill.style.width = `${resPercentage}%`;
  if (resLabel) resLabel.textContent = `${resPercentage}%`;

  // Calculate Projects progress
  const projKeys = Object.keys(state.projectTrackers);
  const projCompleted = projKeys.filter(k => state.projectTrackers[k]).length;
  const projPercentage = Math.round((projCompleted / projKeys.length) * 100);
  const projFill = document.getElementById('project-progress-fill');
  const projLabel = document.getElementById('project-progress-label');
  if (projFill) projFill.style.width = `${projPercentage}%`;
  if (projLabel) projLabel.textContent = `${projPercentage}%`;

  // Calculate Overall Progress
  const overallCheckboxes = totalSubtopics + resKeys.length + projKeys.length;
  const overallCompletedCount = totalCompleted + resCompleted + projCompleted;
  const overallPercent = Math.round((overallCompletedCount / (overallCheckboxes || 1)) * 100);

  // Update overall progress indicators
  const fillGlobal = document.getElementById('global-progress-fill');
  const fillHomeGlobal = document.getElementById('home-overall-progress-fill');
  const labelHomeGlobal = document.getElementById('home-overall-progress-label');
  const labelSidebarGlobal = document.getElementById('sidebar-overall-progress-label');

  if (fillGlobal) fillGlobal.style.width = `${overallPercent}%`;
  if (fillHomeGlobal) fillHomeGlobal.style.width = `${overallPercent}%`;
  if (labelHomeGlobal) labelHomeGlobal.textContent = `${overallPercent}% Completed`;
  if (labelSidebarGlobal) labelSidebarGlobal.textContent = `${overallPercent}% Completed`;

  // Update Streak Widgets
  const streakHome = document.getElementById('home-streak-count');
  if (streakHome) streakHome.textContent = `${state.streak} Days`;

  // Update achievements card completions based on milestones
  updateAchievements(overallPercent, totalCompleted, totalSubtopics, resPercentage, projPercentage);
}

// Milestone checks for Achievement Cards
function updateAchievements(overallPercent, techCompleted, techTotal, resumePercent, projectsPercent) {
  const achievements = [
    { id: 'ach-100sql', condition: state.trackerTopics['track-sql-p1'] || state.trackerTopics['track-sql-p2'] || false }, // practiced sql queries
    { id: 'ach-py', condition: checkTrackerDone('track-py') },
    { id: 'ach-ex', condition: checkTrackerDone('track-ex') },
    { id: 'ach-pbi', condition: checkTrackerDone('track-pbi') },
    { id: 'ach-tab', condition: checkTrackerDone('track-tab') },
    { id: 'ach-stats', condition: checkTrackerDone('track-stat') },
    { id: 'ach-ba', condition: checkTrackerDone('track-ba') },
    { id: 'ach-resume', condition: resumePercent === 100 },
    { id: 'ach-portfolio', condition: projectsPercent === 100 },
    { id: 'ach-streak', condition: state.streak >= 10 },
    { id: 'ach-interview', condition: state.companies.some(c => c.result === 'technical_round' || c.result === 'hr_round' || c.result === 'offered') },
    { id: 'ach-offer', condition: state.companies.some(c => c.result === 'offered') }
  ];

  achievements.forEach(a => {
    const badgeEl = document.getElementById(a.id);
    const badgeHomeEl = document.getElementById(`home-${a.id}`);
    
    if (a.condition) {
      if (badgeEl) badgeEl.classList.add('unlocked');
      if (badgeHomeEl) badgeHomeEl.classList.add('unlocked');
    } else {
      if (badgeEl) badgeEl.classList.remove('unlocked');
      if (badgeHomeEl) badgeHomeEl.classList.remove('unlocked');
    }
  });
}

function checkTrackerDone(prefix) {
  const keys = Object.keys(state.trackerTopics).filter(k => k.startsWith(prefix));
  if (keys.length === 0) return false;
  return keys.every(k => state.trackerTopics[k]);
}

// Render Company Prep CRM Board
function renderCompanyCRM() {
  const crmContainer = document.getElementById('company-crm-table-body');
  if (!crmContainer) return;
  crmContainer.innerHTML = '';

  state.companies.forEach(company => {
    const tr = document.createElement('tr');
    tr.id = `company-row-${company.id}`;
    
    // Status text formatter
    const formatStatus = (s) => {
      const statuses = {
        'applied': '<span class="badge badge-applied">Applied</span>',
        'oa': '<span class="badge badge-oa">Online Assessment</span>',
        'technical_round': '<span class="badge badge-tech">Technical Round</span>',
        'hr_round': '<span class="badge badge-hr">HR Round</span>',
        'offered': '<span class="badge badge-offered">Offered ✔</span>',
        'rejected': '<span class="badge badge-rejected">Rejected ✘</span>',
        'not_applied': '<span class="badge badge-secondary" style="background-color: var(--border-color); color: var(--text-secondary)">Not Applied</span>'
      };
      return statuses[s] || s;
    };

    tr.innerHTML = `
      <td style="font-weight:700;">🏢 ${company.name}</td>
      <td>
        <select class="notion-select company-status-select" data-id="${company.id}" style="padding: 4px 8px; font-size:12px;">
          <option value="not_applied" ${company.result === 'not_applied' ? 'selected' : ''}>Not Applied</option>
          <option value="applied" ${company.result === 'applied' ? 'selected' : ''}>Applied</option>
          <option value="oa" ${company.result === 'oa' ? 'selected' : ''}>OA (Online Test)</option>
          <option value="technical_round" ${company.result === 'technical_round' ? 'selected' : ''}>Technical Round</option>
          <option value="hr_round" ${company.result === 'hr_round' ? 'selected' : ''}>HR Round</option>
          <option value="offered" ${company.result === 'offered' ? 'selected' : ''}>Offered ✔</option>
          <option value="rejected" ${company.result === 'rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </td>
      <td>
        <input type="checkbox" class="custom-checkbox company-checkbox" data-id="${company.id}" data-field="resumeSubmitted" ${company.resumeSubmitted ? 'checked' : ''}>
      </td>
      <td>
        <select class="notion-select company-oa-select" data-id="${company.id}" data-field="oa" style="padding: 2px 6px; font-size:11px;">
          <option value="pending" ${company.oa === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="passed" ${company.oa === 'passed' ? 'selected' : ''}>Passed</option>
          <option value="failed" ${company.oa === 'failed' ? 'selected' : ''}>Failed</option>
        </select>
      </td>
      <td>
        <select class="notion-select company-tech-select" data-id="${company.id}" data-field="techRound" style="padding: 2px 6px; font-size:11px;">
          <option value="pending" ${company.techRound === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="passed" ${company.techRound === 'passed' ? 'selected' : ''}>Passed</option>
          <option value="failed" ${company.techRound === 'failed' ? 'selected' : ''}>Failed</option>
        </select>
      </td>
      <td>
        <input type="text" class="notion-input company-notes-input" data-id="${company.id}" value="${company.notes || ''}" style="width:100%; padding: 4px 8px; font-size:12px;" placeholder="Add details...">
      </td>
      <td>
        <button class="notion-btn notion-btn-danger btn-delete-company" data-id="${company.id}" style="padding: 4px 8px; font-size: 11px;">Delete</button>
      </td>
    `;
    crmContainer.appendChild(tr);
  });

  // Attach dynamic CRM listeners
  crmContainer.querySelectorAll('.company-status-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      const comp = state.companies.find(c => c.id === id);
      if (comp) {
        comp.result = e.target.value;
        saveState();
        renderCompanyDashboardList(); // Update home list too
      }
    });
  });

  crmContainer.querySelectorAll('.company-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      const comp = state.companies.find(c => c.id === id);
      if (comp) {
        comp.resumeSubmitted = e.target.checked;
        saveState();
      }
    });
  });

  crmContainer.querySelectorAll('.company-oa-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      const comp = state.companies.find(c => c.id === id);
      if (comp) {
        comp.oa = e.target.value;
        saveState();
      }
    });
  });

  crmContainer.querySelectorAll('.company-tech-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      const comp = state.companies.find(c => c.id === id);
      if (comp) {
        comp.techRound = e.target.value;
        saveState();
      }
    });
  });

  crmContainer.querySelectorAll('.company-notes-input').forEach(inp => {
    inp.addEventListener('blur', (e) => {
      const id = e.target.getAttribute('data-id');
      const comp = state.companies.find(c => c.id === id);
      if (comp) {
        comp.notes = e.target.value;
        saveState();
      }
    });
  });

  crmContainer.querySelectorAll('.btn-delete-company').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      state.companies = state.companies.filter(c => c.id !== id);
      saveState();
      renderCompanyCRM();
      renderCompanyDashboardList();
    });
  });
}

// Render company summaries on Home Dashboard
function renderCompanyDashboardList() {
  const homeCompanyContainer = document.getElementById('home-dream-companies');
  if (!homeCompanyContainer) return;
  homeCompanyContainer.innerHTML = '';

  const activeCompanies = state.companies.filter(c => c.result !== 'not_applied');
  if (activeCompanies.length === 0) {
    homeCompanyContainer.innerHTML = '<div style="font-size:12px; color: var(--text-secondary);">No applications in progress. Update status in Company Preparation.</div>';
    return;
  }

  activeCompanies.forEach(comp => {
    const chip = document.createElement('div');
    chip.className = 'dream-company-chip';
    
    let emoji = '⚪';
    if (comp.result === 'applied') emoji = '✉';
    if (comp.result === 'oa') emoji = '💻';
    if (comp.result === 'technical_round') emoji = '🧠';
    if (comp.result === 'hr_round') emoji = '🤝';
    if (comp.result === 'offered') emoji = '🎉';
    if (comp.result === 'rejected') emoji = '❌';

    chip.innerHTML = `${emoji} <strong>${comp.name}</strong>: <span style="text-transform: capitalize;">${comp.result.replace('_', ' ')}</span>`;
    homeCompanyContainer.appendChild(chip);
  });
}

// Render Habit Tracker cells
function renderHabits() {
  const habitContainer = document.getElementById('habit-tracker-rows');
  if (!habitContainer) return;
  habitContainer.innerHTML = '';

  const dayHeaders = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  Object.keys(state.habits).forEach(habitName => {
    const row = document.createElement('div');
    row.className = 'habit-row';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'habit-title';
    titleDiv.textContent = habitName;
    row.appendChild(titleDiv);

    const daysDiv = document.createElement('div');
    daysDiv.className = 'habit-days';

    state.habits[habitName].forEach((completed, dayIdx) => {
      const cell = document.createElement('div');
      cell.className = `habit-day-cell ${completed ? 'completed' : ''}`;
      cell.textContent = dayHeaders[dayIdx];
      cell.setAttribute('data-habit', habitName);
      cell.setAttribute('data-day', dayIdx);
      
      cell.addEventListener('click', () => {
        const hName = cell.getAttribute('data-habit');
        const dIdx = parseInt(cell.getAttribute('data-day'));
        state.habits[hName][dIdx] = !state.habits[hName][dIdx];
        
        if (state.habits[hName][dIdx]) {
          cell.classList.add('completed');
        } else {
          cell.classList.remove('completed');
        }
        saveState();
        updateStreak();
      });

      daysDiv.appendChild(cell);
    });

    row.appendChild(daysDiv);
    habitContainer.appendChild(row);
  });
}

// Simple streak calculator (adds a day if student logs activity)
function updateStreak() {
  // To keep it motivating, we'll let user increment streak manually or calculate based on habit completion count.
  const streakHome = document.getElementById('home-streak-count');
  if (streakHome) streakHome.textContent = `${state.streak} Days`;
}

// Render Daily Learning Log items
function renderLearningLogs() {
  const listEl = document.getElementById('journal-list');
  if (!listEl) return;
  listEl.innerHTML = '';

  if (state.dailyLearning.length === 0) {
    listEl.innerHTML = '<div style="font-size:13px; color: var(--text-secondary); text-align:center; padding: 20px;">No entries logged yet. Capture your learning below!</div>';
    return;
  }

  // Reverse list to show newest first
  [...state.dailyLearning].reverse().forEach(entry => {
    const card = document.createElement('div');
    card.className = 'journal-entry-card';
    card.innerHTML = `
      <div class="journal-entry-header">
        <span style="font-weight:700; color:var(--accent-hover);">📚 ${entry.category}</span>
        <span>📅 ${entry.date}</span>
      </div>
      <div class="journal-entry-title">${entry.learning}</div>
      <div class="journal-entry-detail" style="margin-top: 10px;"><strong>Key Takeaway:</strong> ${entry.keyTakeaway}</div>
      <div class="journal-entry-detail"><strong>Where learned:</strong> ${entry.source}</div>
      <div class="journal-entry-detail"><strong>Application:</strong> ${entry.application}</div>
    `;
    listEl.appendChild(card);
  });

  // Update Recent Learning ticker on Home Page
  const homeLearningText = document.getElementById('home-recent-learning');
  if (homeLearningText) {
    if (state.dailyLearning.length > 0) {
      const latest = state.dailyLearning[state.dailyLearning.length - 1];
      homeLearningText.innerHTML = `🌟 <strong>${latest.category}</strong>: ${latest.learning} <br><small style="color:var(--text-secondary);">Takeaway: ${latest.keyTakeaway}</small>`;
    } else {
      homeLearningText.textContent = "No recent learning logs yet.";
    }
  }
}

// Emergency Mode toggle functionality
function setupEmergencyMode() {
  const emToggle = document.getElementById('emergency-mode-toggle');
  const emHeaderBanner = document.getElementById('emergency-banner-alert');
  const plannerPage = document.getElementById('page-planner');

  if (!emToggle) return;

  const setEmergencyState = (active) => {
    state.emergencyMode = active;
    emToggle.checked = active;

    if (active) {
      if (emHeaderBanner) emHeaderBanner.style.display = 'flex';
      // Highlight planner emergency sections, collapse or gray out regular routines
      if (plannerPage) plannerPage.classList.add('emergency-active');
    } else {
      if (emHeaderBanner) emHeaderBanner.style.display = 'none';
      if (plannerPage) plannerPage.classList.remove('emergency-active');
    }
  };

  // Initial state check
  setEmergencyState(state.emergencyMode);

  emToggle.addEventListener('change', (e) => {
    setEmergencyState(e.target.checked);
    saveState();
  });
}

// Set up general event listeners
function setupListeners() {
  // Navigation tabs switcher
  const navItems = document.querySelectorAll('.nav-item, .quick-nav-btn');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('data-target') || item.getAttribute('href')?.substring(1);
      if (!targetId) return;

      // Switch active view
      document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
      const activePage = document.getElementById(`page-${targetId}`);
      if (activePage) activePage.classList.add('active');

      // Update sidebar nav highlights
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      const matchingNav = document.querySelector(`.nav-item[data-target="${targetId}"]`);
      if (matchingNav) matchingNav.classList.add('active');

      // Update page cover and breadcrumbs
      const iconEl = document.getElementById('header-title-icon');
      const titleEl = document.getElementById('header-title-text');
      
      const pageIcons = {
        'home': '🏠', 'planner': '📅', 'habits': '🔥', 'progress': '📊',
        'sql': '🗄', 'python': '🐍', 'excel': '📈', 'powerbi': '📊',
        'tableau': '📉', 'stats': '📚', 'ba': '💼', 'apt': '🧠',
        'resume': '📄', 'projects': '💻', 'company': '🏢', 'interview': '🎤',
        'learning': '📖', 'weekly': '📅', 'monthly': '📆', 'achievements': '🏆',
        'emergency': '🚨'
      };

      const pageTitles = {
        'home': 'Placement Dashboard', 'planner': 'Daily Study Planner',
        'habits': 'Daily Habit Board', 'progress': 'Placement Progress Metrics',
        'sql': 'SQL Command Tracker', 'python': 'Python Core & Analytics Tracker',
        'excel': 'Excel Analytics Master', 'powerbi': 'Power BI Tracker',
        'tableau': 'Tableau Analytics Tracker', 'stats': 'Statistics & Probability Tracker',
        'ba': 'Business Analyst Track', 'apt': 'Placement Aptitude Skills',
        'resume': 'ATS Resume & Profile Builder', 'projects': 'Portfolio Project Hub',
        'company': 'Company Placement Board', 'interview': 'Interview Prep Guide',
        'learning': 'Daily Learning Journal', 'weekly': 'Weekly Retro & Review',
        'monthly': 'Monthly Placement Evaluation', 'achievements': 'Placement Achievement Board',
        'emergency': 'Emergency High-Priority Mode'
      };

      if (iconEl && pageIcons[targetId]) iconEl.textContent = pageIcons[targetId];
      if (titleEl && pageTitles[targetId]) titleEl.textContent = pageTitles[targetId];

      // Scroll content to top
      const mainContent = document.querySelector('.main-content');
      if (mainContent) mainContent.scrollTop = 0;

      // Close mobile menu if open
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) sidebar.classList.remove('mobile-open');
    });
  });

  // Mobile Menu Toggle click
  const burgerBtn = document.getElementById('menu-toggle-btn');
  const sidebar = document.querySelector('.sidebar');
  if (burgerBtn && sidebar) {
    burgerBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

  // Dark/Light Theme toggler
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Set initial icon
    themeToggle.textContent = state.theme === 'dark' ? '☀' : '🌙';
    themeToggle.addEventListener('click', () => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      state.theme = nextTheme;
      document.body.setAttribute('data-theme', nextTheme);
      themeToggle.textContent = nextTheme === 'dark' ? '☀' : '🌙';
      saveState();
    });
    // Set active attribute on body
    document.body.setAttribute('data-theme', state.theme);
  }

  // Bind checkboxes in checklists
  const checkBoxes = document.querySelectorAll('input.custom-checkbox[data-type="checklist"]');
  checkBoxes.forEach(cb => {
    const id = cb.id;
    // Set initial status
    cb.checked = state.checklists[id] || false;
    if (cb.checked) {
      cb.closest('.checklist-item')?.classList.add('checked');
    }

    cb.addEventListener('change', (e) => {
      state.checklists[id] = e.target.checked;
      if (e.target.checked) {
        cb.closest('.checklist-item')?.classList.add('checked');
      } else {
        cb.closest('.checklist-item')?.classList.remove('checked');
      }
      saveState();
    });
  });

  // Bind checkboxes in Tech & Placement Trackers
  const trackerCBs = document.querySelectorAll('input.custom-checkbox[data-type="tracker-checkbox"]');
  trackerCBs.forEach(cb => {
    const id = cb.id;
    // Load from state or initialize
    if (state.trackerTopics[id] === undefined) {
      state.trackerTopics[id] = false;
    }
    cb.checked = state.trackerTopics[id];
    if (cb.checked) {
      cb.closest('.checklist-item')?.classList.add('checked');
    }

    cb.addEventListener('change', (e) => {
      state.trackerTopics[id] = e.target.checked;
      if (e.target.checked) {
        cb.closest('.checklist-item')?.classList.add('checked');
      } else {
        cb.closest('.checklist-item')?.classList.remove('checked');
      }
      saveState();
    });
  });

  // Bind checkboxes in Resume & Projects checklists
  const resCBs = document.querySelectorAll('input.custom-checkbox[data-type="resume-checkbox"]');
  resCBs.forEach(cb => {
    const id = cb.id;
    cb.checked = state.resumeTrackers[id] || false;
    cb.addEventListener('change', (e) => {
      state.resumeTrackers[id] = e.target.checked;
      saveState();
    });
  });

  const projCBs = document.querySelectorAll('input.custom-checkbox[data-type="project-checkbox"]');
  projCBs.forEach(cb => {
    const id = cb.id;
    cb.checked = state.projectTrackers[id] || false;
    cb.addEventListener('change', (e) => {
      state.projectTrackers[id] = e.target.checked;
      saveState();
    });
  });

  // Bind Textareas for Notes
  const textareas = document.querySelectorAll('textarea.tracker-notes-field');
  textareas.forEach(ta => {
    const id = ta.id;
    ta.value = state.trackerNotes[id] || '';
    ta.addEventListener('blur', (e) => {
      state.trackerNotes[id] = e.target.value;
      saveState();
    });
  });

  // Add Company Form Submit
  const addCompanyForm = document.getElementById('add-company-form');
  if (addCompanyForm) {
    addCompanyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInp = document.getElementById('new-company-name');
      const statusSel = document.getElementById('new-company-status');
      const notesInp = document.getElementById('new-company-notes');

      if (!nameInp.value) return;

      const newCompany = {
        id: 'c_' + Date.now(),
        name: nameInp.value,
        status: 'eligible',
        resumeSubmitted: false,
        oa: 'pending',
        techRound: 'pending',
        hrRound: 'pending',
        result: statusSel.value,
        notes: notesInp.value || ''
      };

      state.companies.push(newCompany);
      saveState();
      renderCompanyCRM();
      renderCompanyDashboardList();

      // Reset form
      nameInp.value = '';
      notesInp.value = '';
    });
  }

  // Add Daily Learning Form Submit
  const addLearningForm = document.getElementById('add-learning-form');
  if (addLearningForm) {
    addLearningForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const category = document.getElementById('learn-category').value;
      const learning = document.getElementById('learn-topic').value;
      const keyTakeaway = document.getElementById('learn-takeaway').value;
      const source = document.getElementById('learn-source').value;
      const application = document.getElementById('learn-application').value;

      if (!learning || !keyTakeaway) return;

      const newEntry = {
        date: new Date().toISOString().split('T')[0],
        category,
        learning,
        keyTakeaway,
        source,
        application
      };

      state.dailyLearning.push(newEntry);
      saveState();
      renderLearningLogs();

      // Reset fields
      document.getElementById('learn-topic').value = '';
      document.getElementById('learn-takeaway').value = '';
      document.getElementById('learn-source').value = '';
      document.getElementById('learn-application').value = '';
    });
  }

  // Weekly review form fields
  const wHours = document.getElementById('weekly-hours');
  const wTopics = document.getElementById('weekly-topics');
  const wAch = document.getElementById('weekly-ach');
  const wWeak = document.getElementById('weekly-weak');
  const wComp = document.getElementById('weekly-comp');
  const wMock = document.getElementById('weekly-mock');
  const wGoals = document.getElementById('weekly-goals');

  const populateWeeklyReview = () => {
    if (wHours) wHours.value = state.weeklyReview.hours || '';
    if (wTopics) wTopics.value = state.weeklyReview.topics || '';
    if (wAch) wAch.value = state.weeklyReview.achievement || '';
    if (wWeak) wWeak.value = state.weeklyReview.weak || '';
    if (wComp) wComp.value = state.weeklyReview.companies || '';
    if (wMock) wMock.value = state.weeklyReview.mocks || '';
    if (wGoals) wGoals.value = state.weeklyReview.goals || '';
  };
  populateWeeklyReview();

  const bindWeeklyField = (el, key) => {
    if (el) {
      el.addEventListener('blur', (e) => {
        state.weeklyReview[key] = e.target.value;
        saveState();
      });
    }
  };
  bindWeeklyField(wHours, 'hours');
  bindWeeklyField(wTopics, 'topics');
  bindWeeklyField(wAch, 'achievement');
  bindWeeklyField(wWeak, 'weak');
  bindWeeklyField(wComp, 'companies');
  bindWeeklyField(wMock, 'mocks');
  bindWeeklyField(wGoals, 'goals');

  // Monthly review form fields
  const mSkills = document.getElementById('monthly-skills');
  const mProjects = document.getElementById('monthly-projects');
  const mCerts = document.getElementById('monthly-certs');
  const mReadyInt = document.getElementById('monthly-readiness-interview');
  const mReadyPlace = document.getElementById('monthly-readiness-place');

  const populateMonthlyReview = () => {
    if (mSkills) mSkills.value = state.monthlyReview.skills || '';
    if (mProjects) mProjects.value = state.monthlyReview.projects || '';
    if (mCerts) mCerts.value = state.monthlyReview.certs || '';
    if (mReadyInt) mReadyInt.value = state.monthlyReview.interviewReady || '0';
    if (mReadyPlace) mReadyPlace.value = state.monthlyReview.placementReady || '0';
  };
  populateMonthlyReview();

  const bindMonthlyField = (el, key) => {
    if (el) {
      el.addEventListener('blur', (e) => {
        state.monthlyReview[key] = e.target.value;
        saveState();
      });
      el.addEventListener('change', (e) => {
        state.monthlyReview[key] = e.target.value;
        saveState();
      });
    }
  };
  bindMonthlyField(mSkills, 'skills');
  bindMonthlyField(mProjects, 'projects');
  bindMonthlyField(mCerts, 'certs');
  bindMonthlyField(mReadyInt, 'interviewReady');
  bindMonthlyField(mReadyPlace, 'placementReady');

  // FAQ Expand/Collapse
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.faq-item').classList.toggle('open');
    });
  });

  // Manual streak increment button on Home Page for motivation
  const btnIncStreak = document.getElementById('btn-inc-streak');
  if (btnIncStreak) {
    btnIncStreak.addEventListener('click', () => {
      state.streak += 1;
      saveState();
      updateStreak();
    });
  }

  // Manual streak reset button
  const btnResetStreak = document.getElementById('btn-reset-streak');
  if (btnResetStreak) {
    btnResetStreak.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset your streak to 0?')) {
        state.streak = 0;
        saveState();
        updateStreak();
      }
    });
  }

  // Context-aware Reset Button
  const clearDailyBtn = document.getElementById('btn-clear-daily');
  if (clearDailyBtn) {
    clearDailyBtn.addEventListener('click', () => {
      const activePage = document.querySelector('.page-view.active');
      if (!activePage) return;

      const pageName = document.getElementById('header-title-text').textContent;
      
      let warningText = `Do you want to reset all progress for ${pageName}?`;
      if (activePage.id === 'page-learning') warningText = `WARNING: Are you sure you want to delete ALL your Daily Learning Logs? This cannot be undone.`;
      if (activePage.id === 'page-company') warningText = `WARNING: Are you sure you want to delete ALL Target Companies from your CRM? This cannot be undone.`;

      if (confirm(warningText)) {
        
        // 1. Handle pages with checkboxes
        const pageCheckboxes = activePage.querySelectorAll('input.custom-checkbox');
        pageCheckboxes.forEach(cb => {
          const id = cb.id;
          if (!id) return;

          cb.checked = false;
          cb.closest('.checklist-item')?.classList.remove('checked');

          const type = cb.getAttribute('data-type');
          if (type === 'checklist') {
            state.checklists[id] = false;
          } else if (type === 'tracker-checkbox') {
            state.trackerTopics[id] = false;
          } else if (type === 'resume-checkbox') {
            state.resumeTrackers[id] = false;
          } else if (type === 'project-checkbox') {
            state.projectTrackers[id] = false;
          }
        });

        // 2. Handle Habit Board
        if (activePage.id === 'page-habits') {
          Object.keys(state.habits).forEach(habit => {
            state.habits[habit] = [false, false, false, false, false, false, false];
          });
          renderHabits();
        }

        // 3. Handle Weekly/Monthly Reviews
        if (activePage.id === 'page-weekly') {
          Object.keys(state.weeklyReview).forEach(key => state.weeklyReview[key] = '');
          activePage.querySelectorAll('input, textarea').forEach(el => el.value = '');
        }
        
        if (activePage.id === 'page-monthly') {
          Object.keys(state.monthlyReview).forEach(key => state.monthlyReview[key] = '');
          activePage.querySelectorAll('input, textarea').forEach(el => {
            if (el.tagName === 'INPUT') el.value = '0';
            else el.value = '';
          });
        }

        // 4. Handle Learning Logs
        if (activePage.id === 'page-learning') {
          state.dailyLearning = [];
          renderLearningLogs();
        }

        // 5. Handle Company CRM
        if (activePage.id === 'page-company') {
          state.companies = [];
          renderCompanyCRM();
          renderCompanyDashboardList();
        }

        saveState();
        updateDynamicStats();
      }
    });
  }
}

// Motivational Quotes Pool
const QUOTES = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "Don't wish it were easier. Wish you were better.", author: "Jim Rohn" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
  { text: "Consistency is what transforms average into excellence.", author: "Unknown" },
  { text: "One hour of focused work beats three hours of distracted study.", author: "Cal Newport" },
  { text: "Every expert was once a beginner. Every professional was once an amateur.", author: "Robin Sharma" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "It's not about having time. It's about making time.", author: "Unknown" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" }
];

// Render a random motivational quote on the home page
function renderMotivationalQuote() {
  const quoteEl = document.getElementById('motivational-quote-text');
  const authorEl = document.getElementById('motivational-quote-author');
  if (!quoteEl || !authorEl) return;
  
  const todayIdx = new Date().getDate() % QUOTES.length;
  quoteEl.textContent = `"${QUOTES[todayIdx].text}"`;
  authorEl.textContent = `— ${QUOTES[todayIdx].author}`;
}

// Calculate and display 90-day countdown
function render90DayCountdown() {
  const countdownEl = document.getElementById('days-remaining-count');
  const dateDisplayEl = document.getElementById('current-date-display');
  if (!countdownEl && !dateDisplayEl) return;

  const startDate = new Date(state.startDate);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 90);
  const today = new Date();
  
  const diffMs = endDate - today;
  const daysRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const daysPassed = 90 - daysRemaining;
  
  if (countdownEl) {
    countdownEl.textContent = `${daysRemaining}`;
  }
  
  const daysPassedEl = document.getElementById('days-passed-count');
  if (daysPassedEl) {
    daysPassedEl.textContent = `Day ${Math.min(daysPassed + 1, 90)} of 90`;
  }

  if (dateDisplayEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplayEl.textContent = today.toLocaleDateString('en-IN', options);
  }
}

// Highlight today's rotation subject in the planner
function highlightTodayRotation() {
  const dayOfWeek = new Date().getDay(); // 0=Sunday, 1=Monday...
  const todayToolEl = document.getElementById('today-tool-rotation');
  const todayPrepEl = document.getElementById('today-prep-rotation');

  const toolRotation = ['Excel', 'Power BI', 'Tableau', 'Excel', 'Power BI', 'Tableau', 'Dashboard Practice'];
  const prepRotation = ['Resume', 'Mock Interview', 'HR Questions', 'Company Research', 'Business Case Study', 'Portfolio Project', 'Weekly Revision'];

  // Convert Sunday=0 to index 6, Monday=1 to index 0, etc.
  const rotIdx = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  if (todayToolEl) todayToolEl.textContent = `Today's Focus: ${toolRotation[rotIdx]}`;
  if (todayPrepEl) todayPrepEl.textContent = `Today's Focus: ${prepRotation[rotIdx]}`;
}

// DOM fully loaded entrypoint
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  setupListeners();
  setupEmergencyMode();
  renderHabits();
  renderCompanyCRM();
  renderCompanyDashboardList();
  renderLearningLogs();
  updateDynamicStats();
  renderMotivationalQuote();
  render90DayCountdown();
  highlightTodayRotation();
});
