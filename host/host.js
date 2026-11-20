// Ci Sto Host Web Platform - Desktop Interaction Logic
document.addEventListener('DOMContentLoaded', () => {
  // Navigation elements
  const stepOnboarding = document.getElementById('step-onboarding');
  const stepSetup = document.getElementById('step-setup');
  const stepFilters = document.getElementById('step-filters');

  const tab1 = document.getElementById('tab-1');
  const tab2 = document.getElementById('tab-2');
  const tab3 = document.getElementById('tab-3');

  function showStep(step) {
    stepOnboarding.classList.remove('active');
    stepSetup.classList.remove('active');
    stepFilters.classList.remove('active');

    tab1.classList.remove('active');
    tab2.classList.remove('active');
    tab3.classList.remove('active');

    if (step === 1) {
      stepOnboarding.classList.add('active');
      tab1.classList.add('active');
    } else if (step === 2) {
      stepSetup.classList.add('active');
      tab2.classList.add('active');
    } else if (step === 3) {
      stepFilters.classList.add('active');
      tab3.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Desktop Tab Click Events
  tab1.addEventListener('click', () => showStep(1));
  tab2.addEventListener('click', () => showStep(2));
  tab3.addEventListener('click', () => showStep(3));

  // Form progression buttons
  document.getElementById('btn-to-step-2').addEventListener('click', () => {
    const venueName = document.getElementById('venue-name').value.trim();
    if (!venueName) {
      alert('Please enter your venue or business name');
      return;
    }
    const previewName = document.getElementById('preview-venue-name');
    if (previewName) previewName.textContent = venueName;
    showStep(2);
  });

  document.getElementById('btn-back-to-1').addEventListener('click', () => {
    showStep(1);
  });

  document.getElementById('btn-to-step-3').addEventListener('click', () => {
    showStep(3);
  });

  document.getElementById('btn-back-to-setup').addEventListener('click', () => {
    showStep(2);
  });

  document.getElementById('btn-save-filters').addEventListener('click', () => {
    alert('Filter preferences saved successfully for your venue!');
  });

  // Dynamic preview synchronization
  const perkTitleInput = document.getElementById('perk-title');
  const previewPerkBadge = document.getElementById('preview-perk-badge');
  if (perkTitleInput && previewPerkBadge) {
    perkTitleInput.addEventListener('input', (e) => {
      previewPerkBadge.textContent = e.target.value.trim() || '−20% with Ci Sto Plus';
    });
  }

  // Chip selection helper (single-select per group)
  function setupChipGroup(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;

      container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  }

  setupChipGroup('chips-category');
  setupChipGroup('chips-capacity');
  setupChipGroup('chips-time');
  setupChipGroup('filter-lang');
  setupChipGroup('filter-faculty');
  setupChipGroup('filter-budget');
});
