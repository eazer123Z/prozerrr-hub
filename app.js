/**
 * PROZERRR PROJECT HUB — CORE APPLICATION LOGIC
 * Minimalist Raycast / Linear style local dev project dock & launcher
 */

const DEFAULT_PROJECTS = [
  {
    "id": "desktzy",
    "name": "DeskTzy",
    "number": 1,
    "tagline": "Desktop Widget & Dynamic Overlay System",
    "description": "Sistem widget desktop dan dynamic overlay dengan backend daemon Python dan kontrol web.",
    "category": "System",
    "tags": ["PHP", "Python", "Desktop API", "Tailwind"],
    "path": "Prozerrr/DeskTzy",
    "fullLocalPath": "C:\\laragon\\www\\Prozerrr\\DeskTzy",
    "localPath": "Prozerrr/DeskTzy",
    "vhost": "desktzy.test",
    "icon": "monitor",
    "accentColor": "#38bdf8",
    "isSuite": true,
    "featured": true
  },
  {
    "id": "downloadtzy",
    "name": "DownloadTzy",
    "number": 2,
    "tagline": "Universal Media & Video Downloader",
    "description": "Web engine downloader video/audio serbaguna bertenaga yt-dlp dengan antarmuka cepat.",
    "category": "Tools",
    "tags": ["PHP", "Python", "yt-dlp", "Media API"],
    "path": "Prozerrr/DownloadTzy",
    "fullLocalPath": "C:\\laragon\\www\\Prozerrr\\DownloadTzy",
    "localPath": "Prozerrr/DownloadTzy",
    "vhost": "downloadtzy.test",
    "icon": "download",
    "accentColor": "#f59e0b",
    "isSuite": true,
    "featured": true
  },
  {
    "id": "gametzy",
    "name": "GameTzy",
    "number": 3,
    "tagline": "Interactive Gaming Hub & Library",
    "description": "Pusat game launcher dan manajemen koleksi game lokal dengan scratch and play.",
    "category": "Entertainment",
    "tags": ["PHP", "JSON DB", "Gaming", "Vanilla JS"],
    "path": "Prozerrr/GameTzy",
    "fullLocalPath": "C:\\laragon\\www\\Prozerrr\\GameTzy",
    "localPath": "Prozerrr/GameTzy",
    "vhost": "gametzy.test",
    "icon": "gamepad-2",
    "accentColor": "#ef4444",
    "isSuite": true,
    "featured": true
  },
  {
    "id": "mustzy",
    "name": "MusTzy",
    "number": 4,
    "tagline": "Modern Music Player & Audio Engine",
    "description": "Aplikasi pemutar musik modern terintegrasi launcher desktop C# dan web audio.",
    "category": "Media",
    "tags": ["PHP", "C# WPF", "Audio", "Web Audio API"],
    "path": "Prozerrr/MusTzy",
    "fullLocalPath": "C:\\laragon\\www\\Prozerrr\\MusTzy",
    "localPath": "Prozerrr/MusTzy",
    "vhost": "mustzy.test",
    "icon": "music",
    "accentColor": "#8b5cf6",
    "isSuite": true,
    "featured": true
  },
  {
    "id": "rectzy",
    "name": "RecTzy",
    "number": 5,
    "tagline": "Screen Recording & Capture Tool",
    "description": "Perekam layar performa tinggi berbasis C# WPF, FFmpeg encoding, dan galeri web.",
    "category": "Tools",
    "tags": ["C# WPF", "FFmpeg", "PHP", "Video Capture"],
    "path": "Prozerrr/RecTzy",
    "fullLocalPath": "C:\\laragon\\www\\Prozerrr\\RecTzy",
    "localPath": "Prozerrr/RecTzy",
    "vhost": "rectzy.test",
    "icon": "video",
    "accentColor": "#ec4899",
    "isSuite": true,
    "featured": true
  },
  {
    "id": "soundtzy",
    "name": "SoundTzy",
    "number": 6,
    "tagline": "Soundboard & Virtual Audio Routing",
    "description": "Soundboard interaktif dan routing audio virtual dengan integrasi VB-Cable & Python.",
    "category": "Media",
    "tags": ["PHP", "Python", "VB-Cable", "Soundboard"],
    "path": "Prozerrr/SoundTzy",
    "fullLocalPath": "C:\\laragon\\www\\Prozerrr\\SoundTzy",
    "localPath": "Prozerrr/SoundTzy",
    "vhost": "soundtzy.test",
    "icon": "volume-2",
    "accentColor": "#10b981",
    "isSuite": true,
    "featured": true
  },
  {
    "id": "streamtzy",
    "name": "StreamTzy",
    "number": 7,
    "tagline": "Cinema Streaming & Series Portal",
    "description": "Portal streaming video film & serial dengan antarmuka sinematik dan dashboard admin.",
    "category": "Entertainment",
    "tags": ["PHP", "JSON DB", "Streaming", "Admin Portal"],
    "path": "Prozerrr/StreamTzy",
    "fullLocalPath": "C:\\laragon\\www\\Prozerrr\\StreamTzy",
    "localPath": "Prozerrr/StreamTzy",
    "vhost": "streamtzy.test",
    "icon": "tv",
    "accentColor": "#6366f1",
    "isSuite": true,
    "featured": true
  },
  {
    "id": "twetzy",
    "name": "TweTzy",
    "number": 8,
    "tagline": "Microblogging & Social Feed Engine",
    "description": "Aplikasi sosial media microblogging dengan router kustom, feed responsif, dan API.",
    "category": "Social",
    "tags": ["PHP", "Social Feed", "Routing", "Design System"],
    "path": "Prozerrr/TweTzy",
    "fullLocalPath": "C:\\laragon\\www\\Prozerrr\\TweTzy",
    "localPath": "Prozerrr/TweTzy",
    "vhost": "twetzy.test",
    "icon": "message-square",
    "accentColor": "#1d9bf0",
    "isSuite": true,
    "featured": true
  },
  {
    "id": "codetzy",
    "name": "CodeTzy",
    "tagline": "Developer Code Sandbox & Utilities",
    "description": "Environment utilitas koding dan eksperimen sintaks cepat.",
    "category": "Tools",
    "tags": ["Web", "Editor", "Code"],
    "path": "CodeTzy",
    "fullLocalPath": "C:\\laragon\\www\\CodeTzy",
    "localPath": "CodeTzy",
    "vhost": "codetzy.test",
    "icon": "code-2",
    "accentColor": "#06b6d4",
    "isSuite": false,
    "featured": false
  },
  {
    "id": "docktzy",
    "name": "DockTzy",
    "tagline": "Custom Desktop Dock & App Switcher",
    "description": "Eksperimen dock bar interaktif gaya macOS untuk desktop.",
    "category": "System",
    "tags": ["UI/UX", "Dock", "JavaScript"],
    "path": "DockTzy",
    "fullLocalPath": "C:\\laragon\\www\\DockTzy",
    "localPath": "DockTzy",
    "vhost": "docktzy.test",
    "icon": "layout-grid",
    "accentColor": "#f43f5e",
    "isSuite": false,
    "featured": false
  },
  {
    "id": "iotzy",
    "name": "IoTzy",
    "tagline": "Smart IoT Hub & Device Telemetry",
    "description": "Dashboard pemantauan sensor dan kontrol mikrokontroler IoT secara real-time.",
    "category": "Hardware/IoT",
    "tags": ["IoT", "PHP", "Telemetry", "Sensors"],
    "path": "IoTzy",
    "fullLocalPath": "C:\\laragon\\www\\IoTzy",
    "localPath": "IoTzy",
    "vhost": "iotzy.test",
    "icon": "cpu",
    "accentColor": "#14b8a6",
    "isSuite": false,
    "featured": false
  },
  {
    "id": "landtzy",
    "name": "LANDTZY",
    "tagline": "High-Conversion Product Landing Page",
    "description": "Landing page interaktif dengan tipografi tegas dan animasi halus.",
    "category": "Showcase",
    "tags": ["Landing Page", "HTML/CSS", "Design"],
    "path": "LANDTZY",
    "fullLocalPath": "C:\\laragon\\www\\LANDTZY",
    "localPath": "LANDTZY",
    "vhost": "landtzy.test",
    "icon": "sparkles",
    "accentColor": "#a855f7",
    "isSuite": false,
    "featured": false
  },
  {
    "id": "porto1",
    "name": "Porto1",
    "tagline": "Personal Developer Portfolio",
    "description": "Showcase portofolio karya, skill, dan histori proyek pengembangan web.",
    "category": "Showcase",
    "tags": ["Portfolio", "Frontend", "Showcase"],
    "path": "Porto1",
    "fullLocalPath": "C:\\laragon\\www\\Porto1",
    "localPath": "Porto1",
    "vhost": "porto1.test",
    "icon": "briefcase",
    "accentColor": "#3b82f6",
    "isSuite": false,
    "featured": false
  },
  {
    "id": "skripshit",
    "name": "SKRIPSHIT",
    "tagline": "Academic Research & Thesis Workspace",
    "description": "Workspace digital dan kompilasi data riset tugas akhir.",
    "category": "Showcase",
    "tags": ["Research", "Docs", "Academic"],
    "path": "SKRIPSHIT",
    "fullLocalPath": "C:\\laragon\\www\\SKRIPSHIT",
    "localPath": "SKRIPSHIT",
    "vhost": "skripshit.test",
    "icon": "graduation-cap",
    "accentColor": "#eab308",
    "isSuite": false,
    "featured": false
  },
  {
    "id": "room3d",
    "name": "3D Room",
    "tagline": "Interactive Three.js 3D Virtual Room",
    "description": "Eksplorasi grafis 3D interaktif pada browser berbasis WebGL/Three.js.",
    "category": "Entertainment",
    "tags": ["Three.js", "WebGL", "3D Graphic"],
    "path": "3D Room",
    "fullLocalPath": "C:\\laragon\\www\\3D Room",
    "localPath": "3D Room",
    "vhost": "3droom.test",
    "icon": "box",
    "accentColor": "#fb7185",
    "isSuite": false,
    "featured": false
  }
];

class ProzerrrHub {
  constructor() {
    this.projects = DEFAULT_PROJECTS;
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.viewMode = localStorage.getItem('prozerrr_view_mode') || 'grid';
    
    // Config state
    this.config = {
      urlMode: localStorage.getItem('prozerrr_url_mode') || 'localhost',
      customHost: localStorage.getItem('prozerrr_custom_host') || 'http://localhost',
      openNewTab: localStorage.getItem('prozerrr_open_new_tab') !== 'false'
    };

    this.initElements();
    this.initEvents();
    this.render();
    this.renderDock();
    this.applyViewMode();
    this.updateHostDisplay();
  }

  initElements() {
    this.searchInput = document.getElementById('searchInput');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.suiteGrid = document.getElementById('suiteGrid');
    this.suiteSection = document.getElementById('suiteSection');
    this.projectsContainer = document.getElementById('projectsContainer');
    this.emptyState = document.getElementById('emptyState');
    this.categoryPills = document.getElementById('categoryPills');
    this.floatingDock = document.getElementById('floatingDock');
    
    this.viewGridBtn = document.getElementById('viewGridBtn');
    this.viewListBtn = document.getElementById('viewListBtn');
    
    this.resultMeta = document.getElementById('resultMeta');
    this.countAll = document.getElementById('countAll');
    this.countSuite = document.getElementById('countSuite');
    this.currentHostDisplay = document.getElementById('currentHostDisplay');

    // Modals
    this.detailModal = document.getElementById('detailModal');
    this.settingsModal = document.getElementById('settingsModal');
    this.shortcutsModal = document.getElementById('shortcutsModal');
  }

  initEvents() {
    // Search input
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.clearSearchBtn.style.display = this.searchQuery ? 'flex' : 'none';
      this.render();
    });

    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.clearSearchBtn.style.display = 'none';
      this.searchInput.focus();
      this.render();
    });

    document.getElementById('resetSearchBtn')?.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.activeCategory = 'all';
      this.setActivePill('all');
      this.clearSearchBtn.style.display = 'none';
      this.render();
    });

    // Category pills
    this.categoryPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.pill');
      if (!pill) return;
      this.activeCategory = pill.dataset.category;
      this.setActivePill(this.activeCategory);
      this.render();
    });

    // View toggle
    this.viewGridBtn.addEventListener('click', () => this.setViewMode('grid'));
    this.viewListBtn.addEventListener('click', () => this.setViewMode('list'));

    // Config Host Modal
    document.getElementById('configHostBtn').addEventListener('click', () => this.openSettingsModal());
    document.getElementById('activeHostBadge').addEventListener('click', () => this.openSettingsModal());
    document.getElementById('closeSettingsModalBtn').addEventListener('click', () => this.closeSettingsModal());
    document.getElementById('shortcutsBtn').addEventListener('click', () => this.openShortcutsModal());
    document.getElementById('closeShortcutsModalBtn').addEventListener('click', () => this.closeShortcutsModal());
    document.getElementById('closeDetailModalBtn').addEventListener('click', () => this.closeDetailModal());

    // Settings logic
    const radioInputs = document.querySelectorAll('input[name="urlMode"]');
    radioInputs.forEach(radio => {
      radio.addEventListener('change', (e) => {
        document.getElementById('customHostInputGroup').style.display = 
          e.target.value === 'custom' ? 'flex' : 'none';
      });
    });

    document.getElementById('saveSettingsBtn').addEventListener('click', () => {
      const selectedMode = document.querySelector('input[name="urlMode"]:checked').value;
      const customHost = document.getElementById('customHostInput').value.trim() || 'http://localhost';
      const openNewTab = document.getElementById('openNewTabCheckbox').checked;

      this.config.urlMode = selectedMode;
      this.config.customHost = customHost;
      this.config.openNewTab = openNewTab;

      localStorage.setItem('prozerrr_url_mode', selectedMode);
      localStorage.setItem('prozerrr_custom_host', customHost);
      localStorage.setItem('prozerrr_open_new_tab', openNewTab);

      this.updateHostDisplay();
      this.render();
      this.renderDock();
      this.closeSettingsModal();
    });

    document.getElementById('resetSettingsBtn').addEventListener('click', () => {
      this.config = { urlMode: 'localhost', customHost: 'http://localhost', openNewTab: true };
      localStorage.removeItem('prozerrr_url_mode');
      localStorage.removeItem('prozerrr_custom_host');
      localStorage.removeItem('prozerrr_open_new_tab');
      this.updateHostDisplay();
      this.render();
      this.renderDock();
      this.closeSettingsModal();
    });

    // Modal background click close
    [this.detailModal, this.settingsModal, this.shortcutsModal].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
        }
      });
    });

    // Copy Path button inside detail modal
    document.getElementById('copyPathBtn').addEventListener('click', () => {
      const text = document.getElementById('modalPath').textContent;
      navigator.clipboard.writeText(text);
      const icon = document.getElementById('copyPathBtn').querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 'check');
        lucide.createIcons();
        setTimeout(() => {
          icon.setAttribute('data-lucide', 'copy');
          lucide.createIcons();
        }, 1500);
      }
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Cmd/Ctrl + K or / to focus search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' || (e.key === '/' && document.activeElement !== this.searchInput)) {
        e.preventDefault();
        this.searchInput.focus();
        this.searchInput.select();
        return;
      }

      // Escape to close modals or blur search
      if (e.key === 'Escape') {
        if (this.detailModal.classList.contains('open') || 
            this.settingsModal.classList.contains('open') || 
            this.shortcutsModal.classList.contains('open')) {
          this.closeAllModals();
          return;
        }
        if (document.activeElement === this.searchInput) {
          this.searchInput.value = '';
          this.searchQuery = '';
          this.clearSearchBtn.style.display = 'none';
          this.searchInput.blur();
          this.render();
          return;
        }
      }

      // Shortcuts '?'
      if (e.key === '?' && document.activeElement !== this.searchInput) {
        e.preventDefault();
        this.openShortcutsModal();
        return;
      }

      // 1 to 8 direct launch
      if (!e.ctrlKey && !e.metaKey && !e.altKey && document.activeElement !== this.searchInput) {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= 8) {
          const suiteApp = this.projects.find(p => p.number === num);
          if (suiteApp) {
            e.preventDefault();
            this.launchProject(suiteApp);
          }
        }
      }
    });

    // Mouse movement for dynamic spotlight follow
    window.addEventListener('mousemove', (e) => {
      const glow = document.getElementById('ambientGlow');
      if (glow) {
        const x = e.clientX;
        glow.style.left = `${x}px`;
      }
    });
  }

  getProjectUrl(project) {
    if (this.config.urlMode === 'vhost') {
      return `http://${project.vhost}`;
    }
    if (this.config.urlMode === 'custom') {
      const base = this.config.customHost.replace(/\/+$/, '');
      return `${base}/${project.localPath}`;
    }
    // Default localhost
    return `http://localhost/${project.localPath}`;
  }

  launchProject(project) {
    const url = this.getProjectUrl(project);
    if (this.config.openNewTab) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  }

  openInVsCode(fullPath) {
    // Windows URI handler for VS Code
    const uri = `vscode://file/${encodeURI(fullPath.replace(/\\/g, '/'))}`;
    window.location.href = uri;
  }

  updateHostDisplay() {
    if (this.config.urlMode === 'vhost') {
      this.currentHostDisplay.textContent = 'Laragon VHost (*.test)';
    } else if (this.config.urlMode === 'custom') {
      this.currentHostDisplay.textContent = this.config.customHost;
    } else {
      this.currentHostDisplay.textContent = 'http://localhost';
    }
  }

  setActivePill(category) {
    const pills = this.categoryPills.querySelectorAll('.pill');
    pills.forEach(p => {
      if (p.dataset.category === category) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  }

  setViewMode(mode) {
    this.viewMode = mode;
    localStorage.setItem('prozerrr_view_mode', mode);
    this.applyViewMode();
  }

  applyViewMode() {
    if (this.viewMode === 'list') {
      this.projectsContainer.className = 'projects-grid view-mode-list';
      this.viewListBtn.classList.add('active');
      this.viewGridBtn.classList.remove('active');
    } else {
      this.projectsContainer.className = 'projects-grid view-mode-grid';
      this.viewGridBtn.classList.add('active');
      this.viewListBtn.classList.remove('active');
    }
  }

  openSettingsModal() {
    const radio = document.querySelector(`input[name="urlMode"][value="${this.config.urlMode}"]`);
    if (radio) radio.checked = true;
    document.getElementById('customHostInput').value = this.config.customHost;
    document.getElementById('customHostInputGroup').style.display = 
      this.config.urlMode === 'custom' ? 'flex' : 'none';
    document.getElementById('openNewTabCheckbox').checked = this.config.openNewTab;
    this.settingsModal.classList.add('open');
  }

  closeSettingsModal() {
    this.settingsModal.classList.remove('open');
  }

  openShortcutsModal() {
    this.shortcutsModal.classList.add('open');
  }

  closeShortcutsModal() {
    this.shortcutsModal.classList.remove('open');
  }

  openDetailModal(project) {
    document.getElementById('modalTitle').textContent = project.name;
    document.getElementById('modalTagline').textContent = project.tagline;
    document.getElementById('modalDesc').textContent = project.description;
    document.getElementById('modalPath').textContent = project.fullLocalPath;

    const iconWrap = document.getElementById('modalIconWrap');
    iconWrap.style.color = project.accentColor;
    const modalIcon = document.getElementById('modalIcon');
    modalIcon.setAttribute('data-lucide', project.icon);

    // Tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');

    // URLs
    const localUrl = `http://localhost/${project.localPath}`;
    const vhostUrl = `http://${project.vhost}`;
    
    const localA = document.getElementById('modalLocalUrl');
    localA.textContent = localUrl;
    localA.href = localUrl;

    const vhostA = document.getElementById('modalVhostUrl');
    vhostA.textContent = vhostUrl;
    vhostA.href = vhostUrl;

    // Launch button
    const launchBtn = document.getElementById('modalLaunchBtn');
    launchBtn.href = this.getProjectUrl(project);
    if (this.config.openNewTab) {
      launchBtn.target = '_blank';
    } else {
      launchBtn.removeAttribute('target');
    }

    // VS Code button
    const vsBtn = document.getElementById('modalVsCodeBtn');
    vsBtn.onclick = () => this.openInVsCode(project.fullLocalPath);

    this.detailModal.classList.add('open');
    lucide.createIcons();
  }

  closeDetailModal() {
    this.detailModal.classList.remove('open');
  }

  closeAllModals() {
    this.detailModal.classList.remove('open');
    this.settingsModal.classList.remove('open');
    this.shortcutsModal.classList.remove('open');
  }

  filterProjects() {
    return this.projects.filter(p => {
      // Category match
      let matchCat = false;
      if (this.activeCategory === 'all') matchCat = true;
      else if (this.activeCategory === 'suite') matchCat = p.isSuite;
      else matchCat = (p.category.toLowerCase() === this.activeCategory.toLowerCase());

      if (!matchCat) return false;

      // Search match
      if (!this.searchQuery) return true;
      const query = this.searchQuery;
      const inName = p.name.toLowerCase().includes(query);
      const inTagline = p.tagline.toLowerCase().includes(query);
      const inDesc = p.description.toLowerCase().includes(query);
      const inTags = p.tags.some(t => t.toLowerCase().includes(query));
      const inPath = p.path.toLowerCase().includes(query);

      return inName || inTagline || inDesc || inTags || inPath;
    });
  }

  render() {
    const filtered = this.filterProjects();

    // Update stats
    this.countAll.textContent = this.projects.length;
    this.countSuite.textContent = this.projects.filter(p => p.isSuite).length;
    this.resultMeta.textContent = `Menampilkan ${filtered.length} dari ${this.projects.length} Project`;

    // Render Suite highlight section if applicable
    const showSuiteSection = (this.activeCategory === 'all' || this.activeCategory === 'suite') && !this.searchQuery;
    if (showSuiteSection) {
      this.suiteSection.style.display = 'block';
      const suiteProjects = this.projects.filter(p => p.isSuite);
      this.suiteGrid.innerHTML = suiteProjects.map(p => this.createSuiteCardHTML(p)).join('');
    } else {
      this.suiteSection.style.display = 'none';
    }

    // Render main projects grid
    if (filtered.length === 0) {
      this.projectsContainer.style.display = 'none';
      this.emptyState.style.display = 'block';
    } else {
      this.projectsContainer.style.display = this.viewMode === 'list' ? 'flex' : 'grid';
      this.emptyState.style.display = 'none';
      this.projectsContainer.innerHTML = filtered.map(p => this.createProjectCardHTML(p)).join('');
    }

    // Bind card action buttons
    this.bindCardEvents();

    // Re-initialize Lucide Icons
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  createSuiteCardHTML(p) {
    const targetUrl = this.getProjectUrl(p);
    return `
      <div class="suite-card" data-id="${p.id}" style="--card-accent: ${p.accentColor}">
        <div>
          <div class="card-top">
            <div class="card-icon-box">
              <i data-lucide="${p.icon}"></i>
            </div>
            <span class="card-number-badge">${p.number}</span>
          </div>
          <div class="card-info">
            <h3>${p.name}</h3>
            <p class="card-tagline">${p.tagline}</p>
          </div>
        </div>

        <div>
          <div class="card-tags">
            ${p.tags.slice(0, 3).map(t => `<span class="tag-badge">${t}</span>`).join('')}
          </div>
          <div class="card-actions">
            <a href="${targetUrl}" class="btn-launch" target="${this.config.openNewTab ? '_blank' : '_self'}">
              <i data-lucide="external-link"></i> Launch
            </a>
            <button class="btn-icon-action btn-vscode" title="Buka di VS Code" data-path="${p.fullLocalPath}">
              <i data-lucide="code-2"></i>
            </button>
            <button class="btn-icon-action btn-info" title="Detail Project" data-id="${p.id}">
              <i data-lucide="info"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  createProjectCardHTML(p) {
    const targetUrl = this.getProjectUrl(p);
    return `
      <div class="project-card" data-id="${p.id}" style="--card-accent: ${p.accentColor}">
        <div class="card-top">
          <div class="card-icon-box" style="color: ${p.accentColor}">
            <i data-lucide="${p.icon}"></i>
          </div>
        </div>

        <div class="card-info-wrap">
          <div class="card-info">
            <h3>${p.name}</h3>
            <p class="card-tagline">${p.tagline}</p>
          </div>
          <div class="card-tags">
            ${p.tags.slice(0, 2).map(t => `<span class="tag-badge">${t}</span>`).join('')}
          </div>
        </div>

        <div class="card-actions">
          <a href="${targetUrl}" class="btn-launch" target="${this.config.openNewTab ? '_blank' : '_self'}">
            <i data-lucide="play"></i> Buka
          </a>
          <button class="btn-icon-action btn-vscode" title="Buka di VS Code" data-path="${p.fullLocalPath}">
            <i data-lucide="code-2"></i>
          </button>
          <button class="btn-icon-action btn-info" title="Detail Project" data-id="${p.id}">
            <i data-lucide="info"></i>
          </button>
        </div>
      </div>
    `;
  }

  bindCardEvents() {
    // Detail click
    document.querySelectorAll('.btn-info').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const project = this.projects.find(p => p.id === id);
        if (project) this.openDetailModal(project);
      });
    });

    // VS Code click
    document.querySelectorAll('.btn-vscode').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const path = btn.dataset.path;
        this.openInVsCode(path);
      });
    });

    // Entire card click opens detail
    document.querySelectorAll('.suite-card, .project-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // don't trigger if clicked on link or button
        if (e.target.closest('a') || e.target.closest('button')) return;
        const id = card.dataset.id;
        const project = this.projects.find(p => p.id === id);
        if (project) this.openDetailModal(project);
      });
    });
  }

  renderDock() {
    const suiteProjects = this.projects.filter(p => p.isSuite);
    
    let html = suiteProjects.map(p => {
      const url = this.getProjectUrl(p);
      return `
        <a href="${url}" class="dock-item" style="--item-accent: ${p.accentColor}" target="${this.config.openNewTab ? '_blank' : '_self'}">
          <i data-lucide="${p.icon}"></i>
          <span class="dock-dot"></span>
          <span class="dock-tooltip">[${p.number}] ${p.name}</span>
        </a>
      `;
    }).join('');

    html += `
      <div class="dock-divider"></div>
      <button class="dock-item" id="dockSearchBtn" style="--item-accent: #38bdf8" title="Search (Ctrl+K)">
        <i data-lucide="search"></i>
        <span class="dock-tooltip">Search (Ctrl+K)</span>
      </button>
      <button class="dock-item" id="dockSettingsBtn" style="--item-accent: #94a3b8" title="Settings">
        <i data-lucide="settings"></i>
        <span class="dock-tooltip">Host Settings</span>
      </button>
    `;

    this.floatingDock.innerHTML = html;

    document.getElementById('dockSearchBtn')?.addEventListener('click', () => {
      this.searchInput.focus();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('dockSettingsBtn')?.addEventListener('click', () => {
      this.openSettingsModal();
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ProzerrrHub();
});
