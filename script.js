
    // --- 1. SETUP DATA KATEGORI (50 item) ---

    const categoryAssets = {
        // Business & Work
        "Work": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        "Finance": "https://images.unsplash.com/photo-1554224155-984063584d45?auto=format&fit=crop&w=800&q=80",
        "Marketing": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
        "Meeting": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        "Presentation": "https://images.unsplash.com/photo-1544531696-297afda286c3?auto=format&fit=crop&w=800&q=80",
        "Strategy": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        "Analysis": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "Admin": "https://images.unsplash.com/photo-1513128034602-7814ccbfd4ca?auto=format&fit=crop&w=800&q=80",
        "Client A": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
        "Client B": "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80",
        
        // Tech & Coding
        "Coding": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
        "Backend": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
        "Frontend": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=80",
        "Database": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
        "Server": "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800&q=80",
        "Security": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
        "Bug Fix": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
        "Feature": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        "Launch": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "Review": "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=800&q=80",

        // Design & Creative
        "Design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
        "Ui/Ux": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
        "Photography": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        "Video": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
        "Content": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        "Writing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        "Journaling": "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
        "Project": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
        "Idea": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        "Social Media": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",

        // Life & Lifestyle
        "Personal": "https://images.unsplash.com/photo-1499750310159-5b5f096920b1?auto=format&fit=crop&w=800&q=80",
        "Health": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
        "Education": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        "Fitness": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "Diet": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
        "Shopping": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        "Travel": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        "Family": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        "Friends": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        "Relationship": "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&w=800&q=80",
        
        // Hobbies & Misc
        "Home": "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&w=800&q=80",
        "Garden": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
        "Car": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
        "Pet": "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80",
        "Music": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
        "Movie": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        "Book": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
        "Event": "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        "Side Hustle": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
        "Research": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
    };

    // Helper: Ambil link gambar berdasarkan kategori
    function getCategoryImage(category) {
        // Jika ada di daftar, pakai. Jika tidak, pakai gambar default abstract.
        return categoryAssets[category] || "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80";
    }
    const categoriesList = [
        "Work", "Personal", "Health", "Finance", "Education", "Coding", "Design", "Marketing", 
        "Meeting", "Research", "Writing", "Journaling", "Fitness", "Diet", "Shopping", 
        "Travel", "Family", "Friends", "Relationship", "Home", "Garden", "Car", 
        "Pet", "Music", "Movie", "Book", "Event", "Idea", "Project", "Side Hustle", 
        "Client A", "Client B", "Social Media", "Content", "Video", "Photography", 
        "Ui/Ux", "Backend", "Frontend", "Database", "Server", "Security", "Bug Fix", 
        "Feature", "Launch", "Review", "Strategy", "Analysis", "Presentation", "Admin"
    ];

    // Populate Select Option Kategori
    const catSelect = document.getElementById('inpCategory');
    categoriesList.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.innerText = cat;
        catSelect.appendChild(opt);
    });
    // --- FITUR NAVIGASI SIDEBAR ---
   function navigate(pageId, element) {
        // ... kode class active menu ...
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => item.classList.remove('active'));
        if(element) element.classList.add('active');

        // ... kode hidden section ...
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(sec => sec.classList.add('hidden'));

        const activeSection = document.getElementById('page-' + pageId);
        if(activeSection) {
            activeSection.classList.remove('hidden');
            
            // RENDER ULANG SESUAI HALAMAN
            if(pageId === 'ideas') renderIdeas();
            if(pageId === 'plans') renderPlans();
            if(pageId === 'journal') renderJournals();
            if(pageId === 'sport') renderSport();       // Untuk Olahraga
            if(pageId === 'food') renderFood();         // Untuk Makanan
            if(pageId === 'vacation') renderVacation(); // Untuk Liburan
            if(pageId === 'worship') renderWorship();   // Untuk Ibadah
            if(pageId === 'dashboard') renderDashboard(); // <--- TAMBAHAN INI
            if(pageId === 'notulensi') renderNotulensi(); // <--- TAMBAHAN INI
            if(pageId === 'lomba') renderLomba();
            if(pageId === 'project') renderProject();
            if(pageId === 'education') renderEducation();
            if(pageId === 'business') renderBusiness();
            if(pageId === 'finance') renderFinance();
            if(pageId === 'subscription') renderSubscription()
                if(pageId === 'investment') renderInvestment()
                    if(pageId === 'skill') renderSkill()
                         if(pageId === 'reading') renderReading()
        if(pageId === 'habit') renderHabit()
            if(pageId === 'certification') renderCertification()
                if(pageId === 'content') renderContent()
                    if(pageId === 'portofolio') renderPortfolio()
            if(pageId === 'vidio') renderVideoIdeas()
            if(pageId === 'watchlist') renderWatchlist()
              if(pageId === 'crm') renderCrm()
                 if(pageId === 'event')  renderEvent()
            if(pageId === 'meeting')  renderMeeting()
        }
    }
    // --- FITUR SAPAAN DINAMIS (DYNAMIC GREETING) ---
    function updateGreeting() {
        const hour = new Date().getHours(); // Ambil jam saat ini (0-23)
        const titleEl = document.getElementById('greetTitle');
        const descEl = document.getElementById('greetDesc');

        let titleText = "";
        let descText = "";

        // Logika Waktu (Bisa disesuaikan jamnya)
        if (hour >= 5 && hour < 11) {
            // Pagi (05:00 - 10:59)
            titleText = "Good Morning.";
            descText = "Awali hari ini dengan ide cemerlang dan semangat baru.";
        } 
        else if (hour >= 11 && hour < 15) {
            // Siang (11:00 - 14:59)
            titleText = "Good Afternoon.";
            descText = "Jaga momentum produktivitasmu. Fokus dan selesaikan target.";
        } 
        else if (hour >= 15 && hour < 19) {
            // Sore (15:00 - 18:59)
            titleText = "Good Evening.";
            descText = "Waktunya mengevaluasi progres hari ini dan sedikit bersantai.";
        } 
        else {
            // Malam (19:00 - 04:59)
            titleText = "Good Night.";
            descText = "Istirahatkan pikiranmu. Simpan ide-ide hebat ini untuk esok hari.";
        }

        // Terapkan ke HTML
        titleEl.innerText = titleText;
        descEl.innerText = descText;
    }

    // Panggil fungsi ini agar langsung jalan saat web dibuka
    updateGreeting();
// --- FUNGSI GENERATE STAGE DINAMIS ---
function generateStages() {
    const count = document.getElementById('inpStageCount').value;
    const container = document.getElementById('stageContainer');
    container.innerHTML = ''; // Reset dulu

    if(count < 1) return;

    for(let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.style.cssText = "background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); position:relative;";
        div.innerHTML = `
            <span style="position:absolute; top:5px; right:10px; color:var(--danger); cursor:pointer; font-size:1.2rem;" onclick="this.parentElement.remove()">&times;</span>
            <strong style="display:block; margin-bottom:5px; font-size:0.8rem; color:#2dd4bf;">Stage ${i}</strong>
            <input type="text" class="stage-title" placeholder="Judul Stage ${i}" style="margin-bottom:5px;">
            <input type="text" class="stage-desc" placeholder="Deskripsi/Target Stage ${i}">
        `;
        container.appendChild(div);
    }
}
    // --- 2. INISIALISASI DATA ---
    let ideas = JSON.parse(localStorage.getItem('myIdeas')) || [];
function applyFilters() {
        renderIdeas(); // Panggil render ulang, nanti renderIdeas yang akan baca value inputnya
    }
    // --- 3. FUNGSI RENDER (DENGAN STATUS & GAMBAR OTOMATIS) ---
    // --- 3. FUNGSI RENDER (REVISI LAYOUT CARD) ---
   // --- 3. FUNGSI RENDER (REVISI: HAPUS KATEGORI TUGAS DI CARD) ---
    function renderIdeas() {
        const container = document.getElementById('ideasContainer');
        container.innerHTML = ''; 
// 1. Ambil Value Search & Filter
        const searchTerm = document.getElementById('inpSearch').value.toLowerCase();
        const filterVal = document.getElementById('inpFilter').value;

        // 2. Buat Copy Array agar data asli tidak rusak saat disortir
        let filteredIdeas = [...ideas];

        // --- LOGIKA PENCARIAN (SEARCH) ---
        if(searchTerm.trim() !== "") {
            filteredIdeas = filteredIdeas.filter(idea => 
                idea.title.toLowerCase().includes(searchTerm)
            );
        }

        // --- LOGIKA FILTER & SORTING ---
        if(filterVal === 'newest') {
            // Urutkan berdasarkan tanggal DESC (Terbaru ke Terlama)
            filteredIdeas.sort((a, b) => new Date(b.createdAt || b.id) - new Date(a.createdAt || a.id));
        } 
        else if(filterVal === 'oldest') {
            // Urutkan berdasarkan tanggal ASC (Terlama ke Terbaru)
            filteredIdeas.sort((a, b) => new Date(a.createdAt || a.id) - new Date(b.createdAt || b.id));
        }
        else if(filterVal === 'status_todo') {
            filteredIdeas = filteredIdeas.filter(i => i.status === 'Belum Dimulai');
        }
        else if(filterVal === 'status_doing') {
            filteredIdeas = filteredIdeas.filter(i => i.status === 'Dikerjakan');
        }
        else if(filterVal === 'status_done') {
            filteredIdeas = filteredIdeas.filter(i => i.status === 'Sudah Selesai');
        }

        // --- JIKA HASIL PENCARIAN KOSONG ---
        if(filteredIdeas.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align:center; padding: 3rem; color:var(--text-muted);">
                    <i class="ph ph-magnifying-glass" style="font-size: 3rem; margin-bottom:1rem; opacity:0.5;"></i>
                    <p>Tidak ditemukan tugas dengan kata kunci "<b>${document.getElementById('inpSearch').value}</b>" atau filter yang dipilih.</p>
                </div>
            `;
            return;
        }
       filteredIdeas.forEach(idea => {     const card = document.createElement('div');
            card.className = 'card';
            
            // --- LOGIKA GAMBAR BARU ---
            // 1. Cek apakah user input link manual?
            // 2. Jika tidak, ambil dari categoryAssets berdasarkan kategori yang dipilih
            const displayImg = idea.img && idea.img.trim() !== '' 
                ? idea.img 
                : getCategoryImage(idea.category);
            // Fallback Status (Kategori Tugas tidak diambil untuk tampilan card)
            const statusDisplay = idea.status || 'Belum Dimulai';

            // Warna Badge Status
            let statusColor = '#94a3b8'; // default gray
            if(statusDisplay === 'Sudah Selesai') statusColor = '#10b981'; // green
            if(statusDisplay === 'Dikerjakan') statusColor = '#3b82f6'; // blue
            if(statusDisplay === 'Pending') statusColor = '#f59e0b'; // orange

            card.innerHTML = `
                <div class="card-actions-float">
                    <button class="btn-icon btn-dup" onclick="duplicateIdea(${idea.id}, event)" title="Duplicate"><i class="ph ph-copy"></i></button>
                    <button class="btn-icon btn-del" onclick="deleteIdea(${idea.id}, event)" title="Delete"><i class="ph ph-trash"></i></button>
                </div>
                
                <img src="${displayImg}" class="card-img" alt="Cover" loading="lazy">
                
                <div class="card-body" onclick="openDetailView(${idea.id})">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                        <span class="card-tag" style="margin-bottom:0;">${idea.category}</span>
                        
                        <span style="font-size:0.65rem; font-weight:600; color:${statusColor}; border:1px solid ${statusColor}; padding:2px 8px; border-radius:10px;">
                            ${statusDisplay}
                        </span>
                    </div>

                    <h3 class="card-title">${idea.title}</h3>
                    <p class="card-desc">${idea.desc}</p>
                    
                    <div class="card-footer">
                        <span><i class="ph ph-calendar"></i> ${formatDate(idea.startDate)}</span>
                        <span style="font-size:0.8rem; color:${idea.importance === 'Urgent' ? '#ef4444' : 'inherit'}">
                            ${idea.importance || ''}
                        </span>
                    </div>
                </div>
            `;
            container.appendChild(card);
       
       
        });
    }
    // --- 4. CRUD LOGIC (KOMPREHENSIF) ---
// --- FUNGSI GENERATE CUSTOM FIELDS DINAMIS ---
    function generateCustomFields() {
        const count = document.getElementById('inpCustomCount').value;
        const container = document.getElementById('customFieldsContainer');
        container.innerHTML = ''; // Reset

        if(count < 1) return;

        for(let i = 1; i <= count; i++) {
            const div = document.createElement('div');
            
            // [PENTING] Kita tambahkan class 'custom-field-item' agar mudah diambil saat Save
            div.className = 'custom-field-item'; 
            
            div.style.cssText = "background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); position:relative;";
            
            div.innerHTML = `
                <span style="position:absolute; top:5px; right:10px; color:var(--danger); cursor:pointer; font-size:1.2rem;" onclick="this.parentElement.remove()" title="Hapus">&times;</span>
                <div style="display:grid; grid-template-columns: 1fr 2fr; gap:10px;">
                    <div>
                        <small style="color:#2dd4bf; display:block; margin-bottom:4px;">Label</small>
                        <input type="text" class="custom-label" placeholder="Cth: Klien" style="width:100%; background:rgba(0,0,0,0.3); border:1px solid #444; color:white; padding:5px; border-radius:4px;">
                    </div>
                    <div>
                        <small style="color:#2dd4bf; display:block; margin-bottom:4px;">Isi Informasi</small>
                        <input type="text" class="custom-value" placeholder="Isi data..." style="width:100%; background:rgba(0,0,0,0.3); border:1px solid #444; color:white; padding:5px; border-radius:4px;">
                    </div>
                </div>
            `;
            container.appendChild(div);
        }
    }
    function saveIdea() {
    const id = document.getElementById('ideaId').value;
    
    // 1. Ambil Data Stages Manual
    const stageContainer = document.getElementById('stageContainer');
    const stageDivs = stageContainer.querySelectorAll('div');
    let stagesData = [];
    stageDivs.forEach(div => {
        stagesData.push({
            title: div.querySelector('.stage-title').value,
            desc: div.querySelector('.stage-desc').value
        });
    });
// 2. Ambil Data Custom Fields (INFO TAMBAHAN BARU)
    // [REVISI] CARA AMBIL DATA CUSTOM FIELDS LEBIH KUAT
    const customContainer = document.getElementById('customFieldsContainer');
    
    // Kita cari berdasarkan class yang baru kita buat
    const customDivs = customContainer.getElementsByClassName('custom-field-item'); 
    
    let customDataList = [];
    
    // Loop melalui elemen HTML Collection
    Array.from(customDivs).forEach(div => {
        const labelInp = div.querySelector('.custom-label');
        const valInp = div.querySelector('.custom-value');
        
        // Simpan jika input ada isinya
        if(labelInp && valInp && labelInp.value.trim() !== "") {
            customDataList.push({ 
                label: labelInp.value, 
                value: valInp.value 
            });
        }
    });
    // 2. Data Object Lengkap
    const now = new Date().toISOString(); // Timestamp saat ini
    const existingData = ideas.find(x => x.id == id); // Cek data lama untuk Create Date

    const dataObj = {
        id: id ? parseInt(id) : Date.now(),
        // Data Lama
        title: document.getElementById('inpTitle').value,
        category: document.getElementById('inpCategory').value,
        teamCat: document.getElementById('inpTeamCat').value || 'Individu', // Default Individu
        status: document.getElementById('inpStatus').value,
        importance: document.getElementById('inpImportance').value,
        timezone: document.getElementById('inpTimezone').value,
        // -- WAKTU DETIL --
        startDate: document.getElementById('inpStartDate').value,
        startTime: document.getElementById('inpStartTime').value,
        endDate: document.getElementById('inpEndDate').value,
        endTime: document.getElementById('inpEndTime').value,
        // -- DATA BARU --
        owner: document.getElementById('inpOwner').value,
        timeSpent: document.getElementById('inpTimeSpent').value,
        progress: document.getElementById('inpProgressRange').value,
        stages: stagesData, // Array stage
        createdAt: existingData ? existingData.createdAt : now, // Jika edit, tgl buat tetap. Jika baru, pakai now.
        updatedAt: now, // Selalu update waktu simpan
        // -- LAINNYA --
        taskType: document.getElementById('inpTaskType').value,
        medium: document.getElementById('inpMedium').value,
        docLink: document.getElementById('inpDocLink').value,
        desc: document.getElementById('inpDesc').value,
        notes: document.getElementById('inpNotes').value,
        img: document.getElementById('inpImg').value,
        // Custom fields...
        customFields: customDataList,
    };

    if(!dataObj.title || !dataObj.startDate) {
        alert("Mohon isi Judul dan Tanggal Mulai minimal.");
        return;
    }

    if (id) {
        const index = ideas.findIndex(x => x.id == id);
        ideas[index] = dataObj;
    } else {
        ideas.push(dataObj);
    }

    updateStorage();
    closeModal();
    renderIdeas();
}
    function deleteIdea(id, event) {
        event.stopPropagation();
        if(confirm('Hapus kartu ini selamanya?')) {
            ideas = ideas.filter(item => item.id !== id);
            updateStorage();
            renderIdeas();
            renderDashboard();
        }
    }

    function duplicateIdea(id, event) {
        event.stopPropagation();
        const original = ideas.find(item => item.id === id);
        if(original) {
            const copy = { ...original, id: Date.now(), title: original.title + " (Copy)", status: 'Belum Dimulai' };
            ideas.push(copy);
            updateStorage();
            renderIdeas();
        }
    }

    // --- 5. DETAIL VIEW POPULATE ---
    let currentDetailId = null;

    function openDetailView(id) {
        const item = ideas.find(x => x.id === id);
        if(!item) return;
        currentDetailId = id;

        // Populate Text
        document.getElementById('viewTitle').innerText = item.title;
        document.getElementById('viewCategoryBadge').innerText = item.category;
        document.getElementById('viewStatusBadge').innerText = item.status;
        document.getElementById('viewTeamBadge').innerText = item.teamCat;
        document.getElementById('viewImportance').innerText = item.importance;
       // Menampilkan Timezone (Fallback ke WIB jika data lama kosong)
const tz = item.timezone ? item.timezone : 'WIB';
document.getElementById('viewTimezone').innerText = tz; 
        document.getElementById('viewStartDate').innerText = formatDate(item.startDate);
        document.getElementById('viewEndDate').innerText = formatDate(item.endDate);
        document.getElementById('viewTaskType').innerText = item.taskType || '-';
        document.getElementById('viewMedium').innerText = item.medium || '-';
        
        document.getElementById('viewDesc').innerText = item.desc;
        document.getElementById('viewNotes').innerText = item.notes ? item.notes : "Tidak ada catatan tambahan.";
        // 1. Owner & Dates
    document.getElementById('viewOwner').innerText = item.owner || '-';
    document.getElementById('viewCreated').innerText = formatDate(item.createdAt);
    document.getElementById('viewUpdated').innerText = formatDate(item.updatedAt);
    
    // 2. Durasi & Progress
    const duration = calculateDuration(item.startDate, item.startTime, item.endDate, item.endTime);
    document.getElementById('viewDuration').innerText = duration;
    document.getElementById('viewTimeSpent').innerText = item.timeSpent || '-';
    // --- UPDATE GAMBAR DI DETAIL VIEW ---
    // Link
       
        // --- UPDATE GAMBAR DI DETAIL VIEW ---
        // --- UPDATE GAMBAR DI DETAIL VIEW (REVISI) ---
        // Cek apakah ada gambar manual yg valid? Jika tidak, ambil dari kategori.
        let imageSource;
        // Cek apakah ada gambar manual yg valid?
        if (item.img && item.img.trim().length > 10) { 
            imageSource = item.img; 
        } else {
            // Jika tidak, ambil dari dictionary categoryAssets (fungsi helper)
            imageSource = getCategoryImage(item.category); 
        }
        document.getElementById('viewImg').src = imageSource;
    // Update Progress Bar
    const prog = item.progress || 0;
    document.getElementById('viewProgressBar').style.width = prog + '%';
    document.getElementById('viewProgressText').innerText = prog + '% Completed';

    // 3. Render Stages List
  // 3. Render Stages List
 // 3. Render Stages List (REVISI JARAK GAP)
        const stageList = document.getElementById('viewStagesList');
        stageList.innerHTML = '';
        
        if(item.stages && item.stages.length > 0) {
            item.stages.forEach((stg, idx) => {
                const row = document.createElement('div');
                
                // Style Container (Tetap Glassmorphism)
                row.style.cssText = `
                    background: linear-gradient(135deg, rgba(45, 212, 191, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    padding: 1.2rem;
                    border-radius: 14px;
                    margin-bottom: 1rem;
                    transition: transform 0.2s, border-color 0.2s;
                    position: relative;
                    overflow: hidden;
                `;

                row.innerHTML = `
                    <div style="
                        /* [REVISI] Jarak bawah dikurangi drastis (dari 0.8rem jadi 0.4rem) */
                        margin-bottom: -1rem; 
                        
                        border-bottom: 1px solid rgba(255,255,255,0.05);
                        
                        /* [REVISI] Padding bawah juga dikurangi */
                        padding-bottom: 0.4rem; 
                    ">
                        <strong style="color: #2dd4bf; font-size: 1rem; letter-spacing: 0.5px; display:block;">
                            Stage ${idx+1}: <span style="color:white;">${stg.title}</span>
                        </strong>
                    </div>
                    
                    <div style="
                        color: #cbd5e1; 
                        font-size: 0.9rem; 
                        line-height: 1.5; /* Line height sedikit dipadatkan */
                        
                        text-align: justify;
                        text-justify: inter-word;
                        
                        word-break: break-word;
                        overflow-wrap: break-word;
                        white-space: pre-line; 
                        width: 100%;
                        margin-top: 0; /* Pastikan tidak ada jarak atas */
                    ">
                        ${stg.desc}
                    </div>
                `;
                
                // Hover Effect
                row.onmouseenter = function() { this.style.transform = 'translateY(-2px)'; this.style.borderColor = 'rgba(45, 212, 191, 0.3)'; };
                row.onmouseleave = function() { this.style.transform = 'translateY(0)'; this.style.borderColor = 'rgba(255, 255, 255, 0.08)'; };

                stageList.appendChild(row);
            });
        } else {
            stageList.innerHTML = '<div style="background:rgba(255,255,255,0.03); padding:1rem; border-radius:10px; text-align:center; color:var(--text-muted); font-size:0.9rem;">Belum ada tahapan kerja.</div>';
        }
        // Custom Fields Render
        // --- RENDER CUSTOM FIELDS (REVISI: SUPPORT DATA BARU & LAMA) ---
        // [DALAM openDetailView] RENDER CUSTOM FIELDS
        // --- RENDER CUSTOM FIELDS (REVISI DESAIN PREMIUM) ---
        const customContainer = document.getElementById('viewCustomFields');
        customContainer.innerHTML = ''; 
        
        // Ubah Grid Layout agar kartu punya ruang nafas
        customContainer.style.cssText = "display:grid; grid-template-columns: 1fr 1fr; gap:1.2rem; font-size:0.9rem;";

        let hasData = false;

        // Helper render function untuk kartu yang elegan
        // Helper render function untuk kartu yang elegan (REVISI JARAK)
        const renderFieldCard = (label, value) => {
            const div = document.createElement('div');
            
            div.style.cssText = `
                background: linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 100%);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 16px;
                padding: 1.2rem;
                box-shadow: 0 4px 20px -5px rgba(0,0,0,0.2);
                display: flex;
                flex-direction: column;
                justify-content: flex-start; /* Pastikan isi mulai dari atas */
                transition: transform 0.2s ease;
                min-height: 100px;
            `;

            div.onmouseenter = function() { this.style.transform = 'translateY(-3px)'; this.style.borderColor = 'rgba(45, 212, 191, 0.3)'; };
            div.onmouseleave = function() { this.style.transform = 'translateY(0)'; this.style.borderColor = 'rgba(255, 255, 255, 0.08)'; };

            div.innerHTML = `
                <div style="
                    color: #2dd4bf; 
                    font-size: 1rem; 
                    text-transform: uppercase; 
                    letter-spacing: 1.5px; 
                    font-weight: 700;
                    
                    /* [REVISI DISINI] Jarak bawah dikurangi agar deskripsi naik */
                    margin-bottom: -1rem; 
                    
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    padding-bottom: 0.4rem; 
                ">
                    ${label}
                </div>

                <div style="
                    color: #e2e8f0; 
                    font-size: 0.85rem; 
                    line-height: 1.5; /* Line height sedikit dipadatkan */
                    font-weight: 400;
                    text-align: justify;
                    text-justify: inter-word;
                    word-break: break-word;
                    overflow-wrap: break-word;
                    white-space: pre-line; 
                    margin-top: 0; /* Pastikan tidak ada margin atas tambahan */
                ">
                    ${value}
                </div>
            `;
            customContainer.appendChild(div);
        };
        // 1. Render Data Baru (Array Dinamis)
        if (item.customFields && item.customFields.length > 0) {
            hasData = true;
            item.customFields.forEach(field => renderFieldCard(field.label, field.value));
        } 
        // 2. Fallback: Render Data Lama (Field 1-5 statis)
        else if (item.custom1 || item.custom2 || item.custom3 || item.custom4 || item.custom5) {
             hasData = true;
             [1,2,3,4,5].forEach(num => {
                 const val = item['custom' + num];
                 if(val) renderFieldCard(`Info ${num}`, val);
             });
        }

        if(!hasData) {
            customContainer.innerHTML = '<div style="grid-column:span 2; color:var(--text-muted); font-style:italic; opacity:0.6; text-align:center; padding:1rem;">Tidak ada informasi tambahan.</div>';
        }

        // Tampilkan pesan jika kosong
        if(!hasData) {
            customContainer.innerHTML = '<div style="grid-column:span 2; color:var(--text-muted); font-style:italic; opacity:0.7;">Tidak ada informasi tambahan.</div>';
        }

        // Link
        const linkBtn = document.getElementById('viewDocLink');
        if(item.docLink) {
            linkBtn.href = item.docLink;
            linkBtn.style.display = 'flex';
        } else {
            linkBtn.style.display = 'none';
        }

       

        // UI Switch
        document.getElementById('modalTitle').innerText = "Detail Tugas";
        document.getElementById('ideaForm').classList.add('hidden');
        document.getElementById('detailView').classList.remove('hidden');
        document.getElementById('formActions').classList.add('hidden');
        document.getElementById('detailActions').classList.remove('hidden');
        document.getElementById('modalOverlay').classList.add('active');
    }



    
    // --- 6. EDIT MODE RE-POPULATE ---
    function switchToEditMode() {
        const item = ideas.find(x => x.id === currentDetailId);
        if(!item) return;

        // Isi balik semua field form
        document.getElementById('ideaId').value = item.id;
        document.getElementById('inpTitle').value = item.title;
        document.getElementById('inpCategory').value = item.category;
        document.getElementById('inpTeamCat').value = item.teamCat;
        document.getElementById('inpStatus').value = item.status;
        document.getElementById('inpImportance').value = item.importance;
        document.getElementById('inpStartDate').value = item.startDate;
        document.getElementById('inpEndDate').value = item.endDate;
        document.getElementById('inpTimezone').value = item.timezone;
        document.getElementById('inpTaskType').value = item.taskType;
        document.getElementById('inpMedium').value = item.medium;
        document.getElementById('inpDocLink').value = item.docLink;
        document.getElementById('inpDesc').value = item.desc;
        document.getElementById('inpNotes').value = item.notes;
        document.getElementById('inpImg').value = item.img;
        
        document.getElementById('inpTimezone').value = item.timezone || 'WIB';
        document.getElementById('inpImg').value = item.img; // Link manual tetap dimuat di form

        document.getElementById('modalTitle').innerText = "Edit Data";
        document.getElementById('detailView').classList.add('hidden');
        document.getElementById('ideaForm').classList.remove('hidden');
        document.getElementById('detailActions').classList.add('hidden');
        document.getElementById('formActions').classList.remove('hidden');
       
    // --- SISIPKAN BAGIAN INI ---
    document.getElementById('inpStartTime').value = item.startTime || '';
    document.getElementById('inpEndTime').value = item.endTime || '';
    document.getElementById('inpOwner').value = item.owner || '';
    document.getElementById('inpTimeSpent').value = item.timeSpent || '';
    
    // Load Progress
    document.getElementById('inpProgressRange').value = item.progress || 0;
    document.getElementById('progressVal').innerText = (item.progress || 0) + '%';
// [DALAM openDetailView] REVISI TAMPILAN CUSTOM FIELDS
        const customContainer = document.getElementById('viewCustomFields');
        customContainer.innerHTML = ''; // Bersihkan dulu
        
        // Ubah grid agar rapi (2 kolom)
        customContainer.style.cssText = "display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem; font-size:0.9rem;";

        if (item.customFields && item.customFields.length > 0) {
            item.customFields.forEach(field => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <small style="color:var(--text-muted); display:block; text-transform:uppercase; font-size:0.75rem; letter-spacing:0.5px;">${field.label}</small>
                    <div style="font-weight:500; color:white;">${field.value}</div>
                `;
                customContainer.appendChild(div);
            });
        } else {
            // Tampilkan pesan jika kosong (opsional) atau biarkan kosong
            customContainer.innerHTML = '<span style="color:var(--text-muted); grid-column: span 2;">Tidak ada informasi tambahan.</span>';
        }
    // Load Stages ke Form (Agak tricky, kita harus create elemennya dulu)
    const container = document.getElementById('stageContainer');
    container.innerHTML = ''; // bersihkan
    if(item.stages && item.stages.length > 0) {
        document.getElementById('inpStageCount').value = item.stages.length;
        // Loop create input
        item.stages.forEach((stg, i) => {
             const div = document.createElement('div');
            div.style.cssText = "background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); position:relative;";
            div.innerHTML = `
                <span style="position:absolute; top:5px; right:10px; color:var(--danger); cursor:pointer;" onclick="this.parentElement.remove()">&times;</span>
                <strong style="display:block; margin-bottom:5px; font-size:0.8rem; color:#2dd4bf;">Stage ${i+1}</strong>
                <input type="text" class="stage-title" value="${stg.title}" placeholder="Judul Stage" style="margin-bottom:5px;">
                <input type="text" class="stage-desc" value="${stg.desc}" placeholder="Deskripsi">
            `;
            container.appendChild(div);
        });
    }

    }
// Menghitung selisih waktu Start vs End
function calculateDuration(d1, t1, d2, t2) {
    if(!d1 || !d2) return "-";
    // Gabungkan tanggal dan jam (default jam 00:00:00 jika kosong)
    const start = new Date(`${d1}T${t1 || '00:00:00'}`);
    const end = new Date(`${d2}T${t2 || '23:59:59'}`);
    
    const diffMs = end - start; // Selisih milidetik
    if (diffMs < 0) return "Tanggal End invalid";

    // Konversi
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return `${days} Hari, ${hours} Jam`;
}
    // --- 7. UTILS ---
    function openFormModal() {
        document.getElementById('ideaForm').reset();
        document.getElementById('ideaId').value = '';
        // Set default date hari ini agar user tidak repot
        document.getElementById('inpStartDate').valueAsDate = new Date();
        document.getElementById('inpEndDate').valueAsDate = new Date();

        document.getElementById('modalTitle').innerText = "Tambah Tugas Baru";
        document.getElementById('ideaForm').classList.remove('hidden');
        document.getElementById('detailView').classList.add('hidden');
        document.getElementById('formActions').classList.remove('hidden');
        document.getElementById('detailActions').classList.add('hidden');
        document.getElementById('modalOverlay').classList.add('active');
    }

    function closeModal() {
        document.getElementById('modalOverlay').classList.remove('active');
    }

    function updateStorage() {
        localStorage.setItem('myIdeas', JSON.stringify(ideas));
    }

    function formatDate(dateString) {
        if(!dateString) return '-';
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    }

    // INIT
    renderIdeas();
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if(e.target === document.getElementById('modalOverlay')) closeModal();
    });




    // --- LOGIKA FITUR PLANS (TERPISAH DARI IDEAS) ---
// --- 1. SETUP GAMBAR KATEGORI PLANS (STATIC LINKS - 50 ITEMS) ---
    // Menggunakan metode Direct URL agar loading cepat dan tidak error
    const planCategoryAssets = {
        // Business & Strategy
        "Business Strategy": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        "Marketing Campaign": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
        "Financial Audit": "https://images.unsplash.com/photo-1554224155-984063584d45?auto=format&fit=crop&w=800&q=80",
        "Product Launch": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "HR Hiring": "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
        "Team Building": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        "Legal Compliance": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
        "Contract Review": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
        "Partnership": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        "Investor Pitch": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
        "Funding Round": "https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?auto=format&fit=crop&w=800&q=80",
        "Sales Target": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "Lead Generation": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "Customer Support": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        "User Research": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
        "Market Analysis": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",

        // Tech & Development
        "Software Dev": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        "App Update": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
        "Server Maintenance": "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800&q=80",
        "Database Migration": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
        "SEO Overhaul": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
        "Video Production": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
        "Podcast Series": "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&w=800&q=80",
        "Social Media Blitz": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        "Content Calendar": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",

        // Events & Operations
        "Event Organizing": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        "Conference": "https://images.unsplash.com/photo-1544531696-297afda286c3?auto=format&fit=crop&w=800&q=80",
        "Webinar": "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=800&q=80",
        "Workshop": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        "Networking": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
        "Office Move": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "Renovation": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
        "Interior Design": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "Inventory Check": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        "Supply Chain": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Pakai gambar warehouse
        
        // Personal & Lifestyle
        "Travel Plan": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        "Corporate Retreat": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        "Training Session": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
        "Skill Upgrade": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
        "Certification": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
        "Health Program": "https://images.unsplash.com/photo-1511632765486-a019809dd84e?auto=format&fit=crop&w=800&q=80",
        "Gym Routine": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "Diet Plan": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
        "Mental Wellness": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
        "Meditation": "https://images.unsplash.com/photo-1554244933-d877fea46dd3?auto=format&fit=crop&w=800&q=80",
        "Family Trip": "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
        "Wedding Plan": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        "Birthday Party": "https://images.unsplash.com/photo-1464349153912-65211797f3b7?auto=format&fit=crop&w=800&q=80",
        "Home Improvement": "https://images.unsplash.com/photo-1581578731117-104f2a863a30?auto=format&fit=crop&w=800&q=80",
        "Garden Project": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
    };

    // --- 2. UPDATE DROPDOWN KATEGORI PLANS ---
    // (Otomatis mengambil keys dari object di atas)
    const planCatSelect = document.getElementById('inpPlanCategory');
    if(planCatSelect) {
        planCatSelect.innerHTML = ''; // Bersihkan opsi lama
        Object.keys(planCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.innerText = cat;
            planCatSelect.appendChild(opt);
        });
    }

    // --- 3. UPDATE FUNGSI GET PLAN IMAGE (VERSI STATIC) ---
    // Persis seperti di fitur Ideas, tapi membaca variable 'planCategoryAssets'
    function getPlanImage(category) {
        // Cek apakah kategori ada di daftar? Jika tidak, pakai fallback
        return planCategoryAssets[category] || "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80";
    }
   
    // 1. Init Data Plans
    let plans = JSON.parse(localStorage.getItem('myPlans')) || [];

    // 2. Render Plans Card
  function generateDynamicField(type) {
        const count = document.getElementById(`count${type}`).value;
        const wrapper = document.getElementById(`wrapper${type}`);
        wrapper.innerHTML = '';
        
        if(count < 1) return;

        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#a78bfa; margin-bottom:5px;">${type} #${i}</strong>`;

            // Field Khusus per Tipe
            if(type === 'Goals') {
                div.innerHTML += `
                    <input type="text" class="field-name" placeholder="Nama Goal">
                    <div style="display:flex; gap:5px;"><input type="date" class="field-start"><input type="date" class="field-end"></div>
                    <textarea class="field-desc" placeholder="Deskripsi Goal"></textarea>
                `;
            } else if(type === 'SubTasks') {
                div.innerHTML += `
                    <input type="text" class="field-name" placeholder="Nama Sub-Tugas">
                    <input type="text" class="field-target" placeholder="Target Output">
                    <input type="text" class="field-progress" placeholder="Progress (%)">
                    <textarea class="field-desc" placeholder="Deskripsi Tugas"></textarea>
                `;
            } else {
                // Default (Risk, Impact, Mitigation, Milestones) -> Nama & Deskripsi
                div.innerHTML += `
                    <input type="text" class="field-name" placeholder="Nama ${type}">
                    <textarea class="field-desc" placeholder="Deskripsi ${type}"></textarea>
                `;
            }
            wrapper.appendChild(div);
        }
    }

    // --- RENDER CARD PLANS (Dashboard View) ---
    // --- RENDER CARD PLANS (REVISI FULL IMAGE & POSISI LABEL) ---
    function renderPlans() {
        const container = document.getElementById('plansContainer');
        container.innerHTML = '';
        // 1. Ambil Nilai Search & Filter
        const searchTerm = document.getElementById('inpSearchPlan') ? document.getElementById('inpSearchPlan').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpPlanFilter') ? document.getElementById('inpPlanFilter').value : "newest";

        // 2. Filter Search (Judul)
        let filteredPlans = plans.filter(p => p.title.toLowerCase().includes(searchTerm));

        // 3. Logic Filter Dropdown
        if (filterVal === 'newest') {
            // Urutkan ID (Timestamp) dari Besar ke Kecil (Terbaru)
            filteredPlans.sort((a, b) => b.id - a.id);
        } 
        else if (filterVal === 'oldest') {
            // Urutkan ID Kecil ke Besar (Terlama)
            filteredPlans.sort((a, b) => a.id - b.id);
        }
        else if (filterVal === 'prio_urgent') {
            // Hanya ambil Priority Urgent atau High
            filteredPlans = filteredPlans.filter(p => p.priority === 'Urgent' || p.priority === 'High');
        }
        else if (filterVal === 'stat_exec') {
            filteredPlans = filteredPlans.filter(p => p.status === 'Eksekusi');
        }
        else if (filterVal === 'stat_success') {
            filteredPlans = filteredPlans.filter(p => p.status === 'Berhasil');
        }
        else if (filterVal === 'stat_idea') {
            filteredPlans = filteredPlans.filter(p => p.status === 'Idea' || p.status === 'Plan');
        }

        // 4. Cek Jika Kosong
        if(filteredPlans.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ditemukan rencana dengan filter ini.</div>';
            return;
        }

       
        filteredPlans.forEach(plan => {
            const card = document.createElement('div');
            card.className = 'plan-card';
            
            // Gambar (Pakai Helper Static yang baru)
            const bgImage = getPlanImage(plan.category);

            // Warna Prioritas (Badge Kiri)
            let prioColor = '#94a3b8'; // Default Low
            let prioBg = 'rgba(148, 163, 184, 0.2)';
            if(plan.priority === 'Medium') { prioColor = '#3b82f6'; prioBg = 'rgba(59, 130, 246, 0.2)'; }
            if(plan.priority === 'High')   { prioColor = '#f59e0b'; prioBg = 'rgba(245, 158, 11, 0.2)'; }
            if(plan.priority === 'Urgent') { prioColor = '#ef4444'; prioBg = 'rgba(239, 68, 68, 0.2)'; }

            // Warna Status (Footer)
            let statusTextCol = '#a78bfa';
            if(plan.status === 'Berhasil') statusTextCol = '#10b981';
            if(plan.status === 'Eksekusi') statusTextCol = '#3b82f6';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" 
                         style="width:100%; height:100%; object-fit:cover;" 
                         loading="lazy"
                         onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicatePlan(${plan.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; cursor:pointer; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                         <button onclick="deletePlan(${plan.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; cursor:pointer; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                    </div>
                </div>

                <div class="plan-card-body">
                    
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:${prioBg}; color:${prioColor}; padding:4px 10px; border-radius:20px; border:1px solid ${prioBg};">
                            ${plan.priority || 'Normal'}
                        </span>

                        <span style="font-size:0.7rem; font-weight:700; color:#a78bfa; text-transform:uppercase; letter-spacing:0.5px;">
                            ${plan.category}
                        </span>
                    </div>

                    <h3 class="plan-title" style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3;">${plan.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${plan.desc || 'Tidak ada deskripsi singkat.'}
                    </p>
                    
                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.75rem; font-weight:600; color:${statusTextCol}; background:rgba(0,0,0,0.2); padding:4px 12px; border-radius:6px;">
                            ${plan.status}
                         </span>
                         <span style="font-size:0.8rem; color:#64748b;">
                            <i class="ph ph-calendar"></i> ${formatDate(plan.start)}
                         </span>
                    </div>
                </div>
            `;
            
            // Klik card untuk detail
            card.onclick = (e) => {
                // Pastikan klik tombol action tidak memicu detail view
                if(e.target.closest('button')) return;
                openPlanDetail(plan.id);
            };

            container.appendChild(card);
        });
    }
    // 3. Generate Milestones Input
    function generateMilestones() {
        const count = document.getElementById('inpMilestoneCount').value;
        const container = document.getElementById('milestoneContainer');
        container.innerHTML = '';
        if(count < 1) return;

        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'milestone-item';
            div.style.cssText = "display:flex; gap:10px; align-items:center;";
            div.innerHTML = `
                <span style="color:#a78bfa; font-weight:bold;">${i}.</span>
                <input type="text" class="ms-input" placeholder="Langkah ke-${i}" style="flex:1; background:rgba(0,0,0,0.3); border:1px solid #4338ca; color:white; padding:8px; border-radius:6px;">
            `;
            container.appendChild(div);
        }
    }

    // 4. Save Plan
    // --- SAVE PLAN (DATA PENUH) ---
    function savePlan() {
        const id = document.getElementById('planId').value;
        
        // Helper ambil data array dinamis
        const getDynamicData = (type) => {
            const wrapper = document.getElementById(`wrapper${type}`);
            const items = wrapper.querySelectorAll('.dynamic-item');
            let res = [];
            items.forEach(item => {
                const name = item.querySelector('.field-name').value;
                const desc = item.querySelector('.field-desc').value;
                
                let obj = { name, desc };
                
                // Tambahan field khusus
                if(type === 'Goals') {
                    obj.start = item.querySelector('.field-start').value;
                    obj.end = item.querySelector('.field-end').value;
                }
                if(type === 'SubTasks') {
                    obj.target = item.querySelector('.field-target').value;
                    obj.progress = item.querySelector('.field-progress').value;
                }
                
                if(name) res.push(obj);
            });
            return res;
        };

        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            title: document.getElementById('inpPlanTitle').value,
            category: document.getElementById('inpPlanCategory').value,
            status: document.getElementById('inpPlanStatus').value,
            start: document.getElementById('inpPlanStart').value,
            startTime: document.getElementById('inpPlanStartTime').value,
            end: document.getElementById('inpPlanEnd').value,
            endTime: document.getElementById('inpPlanEndTime').value,
            owner: document.getElementById('inpPlanOwner').value,
            priority: document.getElementById('inpPlanPriority').value,
            team: document.getElementById('inpPlanTeam').value,
            media: document.getElementById('inpPlanMedia').value,
            type: document.getElementById('inpPlanType').value,
            desc: document.getElementById('inpPlanDesc').value,
            notes: document.getElementById('inpPlanNotes').value,
            
            // Data Dinamis Kompleks
            goals: getDynamicData('Goals'),
            impacts: getDynamicData('Impacts'),
            risks: getDynamicData('Risks'),
            mitigation: getDynamicData('Mitigation'),
            subTasks: getDynamicData('SubTasks'),
            milestones: getDynamicData('Milestones')
        };

        if(!dataObj.title) { alert("Judul wajib diisi"); return; }

        if(id) {
            const idx = plans.findIndex(x => x.id == id);
            plans[idx] = dataObj;
        } else {
            plans.push(dataObj);
        }

        localStorage.setItem('myPlans', JSON.stringify(plans));
        closePlanModal();
        renderPlans();
    }

    // --- CRUD ACTIONS ---
    function deletePlan(id, e) {
        e.stopPropagation();
        if(confirm("Hapus rencana ini?")) {
            plans = plans.filter(p => p.id !== id);
            localStorage.setItem('myPlans', JSON.stringify(plans));
            renderPlans();
        }
    }

    function duplicatePlan(id, e) {
        e.stopPropagation();
        const origin = plans.find(p => p.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", status: 'Idea' };
            plans.push(copy);
            localStorage.setItem('myPlans', JSON.stringify(plans));
            renderPlans();
        }
    }
    // 5. Open Detail / Read Logic
    let currentPlanId = null;

    function openPlanDetail(id) {
        const plan = plans.find(x => x.id === id);
        if(!plan) return;
        currentPlanId = id;
// LOAD GAMBAR KE DETAIL VIEW
        const imgEl = document.getElementById('viewPlanCover');
        
        // 1. Reset gambar dulu agar tidak menampilkan gambar sisa dari kartu sebelumnya
        imgEl.src = ''; 
        
        // 2. Tentukan Link Gambar Utama & Cadangan
        const mainImage = getPlanImage(plan.category);
        const backupImage = 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80'; // Gambar statis (Planning)

        // 3. Pasang "Satpam" Error lewat JS (Lebih Kuat dari HTML)
        imgEl.onerror = function() {
            this.onerror = null; // Cegah loop error berulang
            this.src = backupImage; // Langsung ganti ke gambar cadangan
        };

        // 4. Baru pasang link utamanya
        // (Sedikit delay agar transisi modal mulus)
        setTimeout(() => {
            imgEl.src = mainImage;
        }, 10);
        // Populate Text Dasar
        document.getElementById('viewPlanTitle').innerText = plan.title;
        document.getElementById('viewPlanCategory').innerText = plan.category;
        document.getElementById('viewPlanOwner').innerText = plan.owner || '-';
        document.getElementById('viewPlanPriority').innerText = plan.priority || 'Medium';
        document.getElementById('viewPlanTeam').innerText = plan.team || '-';
        document.getElementById('viewPlanMedia').innerText = plan.media || '-';
        document.getElementById('viewPlanType').innerText = plan.type || '-';
        
        // Waktu
        const startT = plan.startTime ? `, ${plan.startTime}` : '';
        const endT = plan.endTime ? `, ${plan.endTime}` : '';
        document.getElementById('viewPlanStart').innerText = `${formatDate(plan.start)}${startT}`;
        document.getElementById('viewPlanEnd').innerText = `${formatDate(plan.end)}${endT}`;

        document.getElementById('viewPlanDesc').innerText = plan.desc || "Tidak ada deskripsi.";
        document.getElementById('viewPlanNotes').innerText = plan.notes || "-";

        // Status Badge Style
        const badge = document.getElementById('viewPlanStatusBadge');
        badge.innerText = plan.status;
        if(plan.status === 'Berhasil') badge.style.cssText = "background:rgba(16, 185, 129, 0.2); color:#10b981; border:1px solid #10b981;";
        else if(plan.status === 'Eksekusi') badge.style.cssText = "background:rgba(59, 130, 246, 0.2); color:#3b82f6; border:1px solid #3b82f6;";
        else badge.style.cssText = "background:rgba(167, 139, 250, 0.2); color:#a78bfa; border:1px solid #a78bfa;";

        // --- HELPER RENDER LIST ITEM ---
        const renderList = (containerId, dataArray, type) => {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            
            if(!dataArray || dataArray.length === 0) {
                container.innerHTML = '<div style="color:gray; font-style:italic;">Data kosong.</div>';
                return;
            }

            dataArray.forEach((item, idx) => {
                const row = document.createElement('div');
                // Style Glassy Purple
                row.style.cssText = "background: linear-gradient(145deg, rgba(49, 46, 129, 0.4), rgba(30, 27, 75, 0.4)); border:1px solid rgba(167, 139, 250, 0.15); padding:1rem; border-radius:10px; position:relative;";
                
                let extraInfo = '';
                
                // Custom Tampilan per Tipe
                if(type === 'Goals') {
                    const s = item.start ? formatDate(item.start) : '?';
                    const e = item.end ? formatDate(item.end) : '?';
                    extraInfo = `<div style="font-size:0.75rem; color:#a78bfa; margin-bottom:0.5rem; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:5px;">Target: ${s} — ${e}</div>`;
                }
                else if(type === 'SubTasks') {
                    extraInfo = `
                        <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#94a3b8; margin-bottom:0.5rem; background:rgba(0,0,0,0.2); padding:5px 10px; border-radius:6px;">
                            <span>Target: <span style="color:white;">${item.target || '-'}</span></span>
                            <span>Progress: <span style="color:#34d399;">${item.progress || '0'}%</span></span>
                        </div>
                    `;
                }

                row.innerHTML = `
                    <strong style="display:block; color:#c4b5fd; font-size:0.95rem; margin-bottom:0.4rem;">#${idx+1} ${item.name}</strong>
                    ${extraInfo}
                    <div style="color:#cbd5e1; font-size:0.9rem; line-height:1.5; text-align:justify; white-space:pre-line;">${item.desc}</div>
                `;
                container.appendChild(row);
            });
        };

        // Render Semua List Dinamis
        renderList('viewListGoals', plan.goals, 'Goals');
        renderList('viewListImpacts', plan.impacts, 'Impacts');
        renderList('viewListRisks', plan.risks, 'Risks');
        renderList('viewListMitigation', plan.mitigation, 'Mitigation');
        renderList('viewListSubTasks', plan.subTasks, 'SubTasks');
        renderList('viewListMilestones', plan.milestones, 'Milestones');

        // UI Switch
        document.getElementById('planModalTitle').innerText = "Detail Plan";
        document.getElementById('planForm').classList.add('hidden');
        document.getElementById('planDetailView').classList.remove('hidden');
        document.getElementById('planFormActions').classList.add('hidden');
        document.getElementById('planDetailActions').classList.remove('hidden');
        document.getElementById('planModalOverlay').classList.add('active');
    }
    // 6. Edit Logic
    // --- 6. EDIT PLAN LOGIC (REVISI KOMPATIBEL DENGAN FORM BARU) ---
    
    // Helper untuk memuat data dinamis kembali ke form saat Edit
    function loadDynamicEditFields(type, dataArray) {
        const wrapper = document.getElementById(`wrapper${type}`);
        const countInput = document.getElementById(`count${type}`);
        
        wrapper.innerHTML = ''; // Bersihkan dulu
        
        if (!dataArray || dataArray.length === 0) {
            countInput.value = "";
            return;
        }

        countInput.value = dataArray.length;

        dataArray.forEach((item, i) => {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#a78bfa; margin-bottom:5px;">${type} #${i+1}</strong>`;

            // Render Input sesuai tipe, lalu isi VALUE-nya dari data yang ada
            if(type === 'Goals') {
                div.innerHTML += `
                    <input type="text" class="field-name" value="${item.name || ''}" placeholder="Nama Goal">
                    <div style="display:flex; gap:5px;">
                        <input type="date" class="field-start" value="${item.start || ''}">
                        <input type="date" class="field-end" value="${item.end || ''}">
                    </div>
                    <textarea class="field-desc" placeholder="Deskripsi Goal">${item.desc || ''}</textarea>
                `;
            } else if(type === 'SubTasks') {
                div.innerHTML += `
                    <input type="text" class="field-name" value="${item.name || ''}" placeholder="Nama Sub-Tugas">
                    <input type="text" class="field-target" value="${item.target || ''}" placeholder="Target Output">
                    <input type="text" class="field-progress" value="${item.progress || ''}" placeholder="Progress (%)">
                    <textarea class="field-desc" placeholder="Deskripsi Tugas">${item.desc || ''}</textarea>
                `;
            } else {
                // Risk, Impact, Mitigation, Milestones
                div.innerHTML += `
                    <input type="text" class="field-name" value="${item.name || ''}" placeholder="Nama ${type}">
                    <textarea class="field-desc" placeholder="Deskripsi ${type}">${item.desc || ''}</textarea>
                `;
            }
            wrapper.appendChild(div);
        });
    }

    function editPlan() {
        const plan = plans.find(x => x.id === currentPlanId);
        if(!plan) return;

        // 1. Load Data Statis
        document.getElementById('planId').value = plan.id;
        document.getElementById('inpPlanTitle').value = plan.title;
        document.getElementById('inpPlanCategory').value = plan.category;
        document.getElementById('inpPlanStatus').value = plan.status;
        
        document.getElementById('inpPlanStart').value = plan.start;
        document.getElementById('inpPlanStartTime').value = plan.startTime || '';
        document.getElementById('inpPlanEnd').value = plan.end;
        document.getElementById('inpPlanEndTime').value = plan.endTime || '';
        
        document.getElementById('inpPlanOwner').value = plan.owner || '';
        document.getElementById('inpPlanPriority').value = plan.priority || 'Medium';
        document.getElementById('inpPlanTeam').value = plan.team || 'Individu';
        document.getElementById('inpPlanMedia').value = plan.media || '';
        document.getElementById('inpPlanType').value = plan.type || '';
        
        document.getElementById('inpPlanDesc').value = plan.desc || '';
        document.getElementById('inpPlanNotes').value = plan.notes || '';

        // 2. Load Data Dinamis (Goals, Risks, dll)
        loadDynamicEditFields('Goals', plan.goals);
        loadDynamicEditFields('Impacts', plan.impacts);
        loadDynamicEditFields('Risks', plan.risks);
        loadDynamicEditFields('Mitigation', plan.mitigation);
        loadDynamicEditFields('SubTasks', plan.subTasks);
        loadDynamicEditFields('Milestones', plan.milestones);

        // 3. Switch UI
        document.getElementById('planModalTitle').innerText = "Edit Plan";
        document.getElementById('planDetailView').classList.add('hidden');
        document.getElementById('planForm').classList.remove('hidden');
        document.getElementById('planDetailActions').classList.add('hidden');
        document.getElementById('planFormActions').classList.remove('hidden');
    }

    // --- UTILS PLANS ---
    
    function openPlanModal() {
        // 1. Reset Form Dasar
        document.getElementById('planForm').reset();
        document.getElementById('planId').value = '';
        
        // 2. Bersihkan Semua Wrapper Dinamis (Agar sisa edit sebelumnya hilang)
        const dynamicTypes = ['Goals', 'Impacts', 'Risks', 'Mitigation', 'SubTasks', 'Milestones'];
        dynamicTypes.forEach(type => {
            document.getElementById(`wrapper${type}`).innerHTML = '';
            document.getElementById(`count${type}`).value = '';
        });

        // 3. Switch UI
        document.getElementById('planModalTitle').innerText = "New Plan";
        document.getElementById('planForm').classList.remove('hidden');
        document.getElementById('planDetailView').classList.add('hidden');
        document.getElementById('planFormActions').classList.remove('hidden');
        document.getElementById('planDetailActions').classList.add('hidden');
        document.getElementById('planModalOverlay').classList.add('active');
    }

    function closePlanModal() {
        document.getElementById('planModalOverlay').classList.remove('active');
    }
    function closePlanModal() {
        document.getElementById('planModalOverlay').classList.remove('active');
    }

    // Panggil render saat awal (opsional, atau panggil di navigate)
    renderPlans();


// --- LOGIKA FITUR JOURNAL (WARM THEME) ---

    // 1. SETUP GAMBAR KATEGORI JOURNAL (20 ITEM - STATIC LINKS)
    const journalCategoryAssets = {
        "Reflection": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
        "Gratitude": "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80",
        "Dream Diary": "https://images.unsplash.com/photo-1496347312952-658252276587?w=800&q=80",
        "Travel Log": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
        "Food & Recipe": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        "Workout": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        "Reading": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
        "Mood Tracker": "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800&q=80",
        "Productivity": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        "Learning": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        "Family": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
        "Friends": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
        "Relationship": "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&q=80",
        "Finances": "https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?w=800&q=80",
        "Ideas": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        "Work": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
        "Health": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
        "Nature": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        "Art & Sketch": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
        "Music": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
    };

    // Helper Image Journal
    function getJournalImage(cat) {
        return journalCategoryAssets[cat] || "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80";
    }

    // Populate Dropdown Journal
    const jCatSelect = document.getElementById('inpJCategory');
    if(jCatSelect) {
        Object.keys(journalCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            jCatSelect.appendChild(opt);
        });
    }

    // Init Data
    let journals = JSON.parse(localStorage.getItem('myJournals')) || [];

    // --- GENERATOR SUB DAILY JOURNAL (Fields: Nama, Date, Time, Desc) ---
    function generateSubJournalFields() {
        const count = document.getElementById('countSubJournal').value;
        const wrapper = document.getElementById('wrapperSubJournal');
        wrapper.innerHTML = '';
        if(count < 1) return;

        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#fda4af; margin-bottom:5px;">Aktivitas #${i}</strong>`;
            
            div.innerHTML += `
                <input type="text" class="field-name" placeholder="Nama Aktivitas">
                <div style="display:flex; gap:5px;">
                    <input type="date" class="field-date">
                    <input type="time" class="field-time">
                </div>
                <textarea class="field-desc" placeholder="Deskripsi Aktivitas"></textarea>
            `;
            wrapper.appendChild(div);
        }
    }

    // --- RENDER JOURNAL CARD (SEARCH & FILTER) ---
    function renderJournals() {
        const container = document.getElementById('journalsContainer');
        const searchTerm = document.getElementById('inpSearchJournal') ? document.getElementById('inpSearchJournal').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpJournalFilter') ? document.getElementById('inpJournalFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = journals.filter(j => j.title.toLowerCase().includes(searchTerm));

        // Logic Filter
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'imp_very') filtered = filtered.filter(j => j.priority === 'Sangat Penting');
        if(filterVal === 'imp_yes') filtered = filtered.filter(j => j.priority === 'Penting');
        if(filterVal === 'stat_done') filtered = filtered.filter(j => j.status === 'Selesai');
        if(filterVal === 'stat_doing') filtered = filtered.filter(j => j.status === 'Dilakukan');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ditemukan jurnal.</div>';
            return;
        }

        filtered.forEach(j => {
            const card = document.createElement('div');
            card.className = 'journal-card';
            const bgImage = getJournalImage(j.category);

            // Warna Prioritas
            let prioColor = '#d1d5db'; let prioBg = 'rgba(255,255,255,0.1)';
            if(j.priority === 'Sangat Penting') { prioColor = '#f87171'; prioBg = 'rgba(248, 113, 113, 0.2)'; }
            else if(j.priority === 'Penting') { prioColor = '#fbbf24'; prioBg = 'rgba(251, 191, 36, 0.2)'; }

            // Warna Status
            let statColor = '#fda4af';
            if(j.status === 'Selesai') statColor = '#34d399';
            if(j.status === 'Dilakukan') statColor = '#60a5fa';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80';">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateJournal(${j.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; cursor:pointer; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteJournal(${j.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; cursor:pointer; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                    </div>
                </div>

                <div class="journal-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span class="badge-j-prio" style="color:${prioColor}; background:${prioBg}; border:1px solid ${prioBg};">${j.priority}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:#fda4af; text-transform:uppercase;">${j.category}</span>
                    </div>

                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${j.title}</h3>
                    <p style="font-size:0.9rem; color:#d1d5db; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${j.desc || 'Belum ada cerita...'}
                    </p>

                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span class="badge-j-stat" style="color:${statColor}; border:1px solid ${statColor};">${j.status}</span>
                         <span style="font-size:0.8rem; color:#9ca3af;">
                            <i class="ph ph-calendar"></i> ${formatDate(j.date)}
                         </span>
                    </div>
                </div>
            `;
            
            card.onclick = (e) => {
                if(e.target.closest('button')) return;
                openJournalDetail(j.id);
            };
            container.appendChild(card);
        });
    }

    // --- SAVE JOURNAL ---
    function saveJournal() {
        const id = document.getElementById('journalId').value;
        
        // Ambil Data Sub Journal
        const wrapper = document.getElementById('wrapperSubJournal');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const time = item.querySelector('.field-time').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, time, desc });
        });

        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            title: document.getElementById('inpJTitle').value,
            owner: document.getElementById('inpJOwner').value,
            category: document.getElementById('inpJCategory').value,
            date: document.getElementById('inpJDate').value,
            time: document.getElementById('inpJTime').value,
            team: document.getElementById('inpJTeam').value,
            status: document.getElementById('inpJStatus').value,
            priority: document.getElementById('inpJPriority').value,
            media: document.getElementById('inpJMedia').value,
            link: document.getElementById('inpJLink').value,
            desc: document.getElementById('inpJDesc').value,
            notes: document.getElementById('inpJNotes').value,
            subJournals: subData
        };

        if(!dataObj.title) { alert("Judul wajib diisi!"); return; }

        if(id) {
            const idx = journals.findIndex(x => x.id == id);
            journals[idx] = dataObj;
        } else {
            journals.push(dataObj);
        }

        localStorage.setItem('myJournals', JSON.stringify(journals));
        closeJournalModal();
        renderJournals();
    }

    // --- OPEN DETAIL JOURNAL ---
    let currentJournalId = null;
    function openJournalDetail(id) {
        const j = journals.find(x => x.id === id);
        if(!j) return;
        currentJournalId = id;

        // Image Logic
        const imgEl = document.getElementById('viewJCover');
        imgEl.src = ''; 
        const mainImage = getJournalImage(j.category);
        const backupImage = 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80';
        imgEl.onerror = function() { this.onerror = null; this.src = backupImage; };
        setTimeout(() => { imgEl.src = mainImage; }, 10);

        // Populate Text
        document.getElementById('viewJTitle').innerText = j.title;
        document.getElementById('viewJCategory').innerText = j.category;
        document.getElementById('viewJOwner').innerText = j.owner || '-';
        document.getElementById('viewJTeam').innerText = j.team || '-';
        document.getElementById('viewJMedia').innerText = j.media || '-';
        document.getElementById('viewJDate').innerText = formatDate(j.date);
        document.getElementById('viewJTime').innerText = j.time || '-';
        document.getElementById('viewJDesc').innerText = j.desc || '-';
        document.getElementById('viewJNotes').innerText = j.notes || '-';
        
        // Link
        const lnk = document.getElementById('viewJLink');
        if(j.link) { lnk.href = j.link; lnk.style.display='block'; } else { lnk.style.display='none'; }

        // Badges
        const statB = document.getElementById('viewJStatusBadge');
        statB.className = 'badge-j-stat';
        statB.innerText = j.status;
        if(j.status === 'Selesai') statB.style.cssText = "color:#34d399; border:1px solid #34d399; padding:4px 12px; border-radius:6px;";
        else statB.style.cssText = "color:#fda4af; border:1px solid #fda4af; padding:4px 12px; border-radius:6px;";

        const prioB = document.getElementById('viewJPriority');
        prioB.innerText = j.priority;

        // Render Sub Journals
        const subCont = document.getElementById('viewListSubJournal');
        subCont.innerHTML = '';
        if(j.subJournals && j.subJournals.length > 0) {
            j.subJournals.forEach((sub, i) => {
                const row = document.createElement('div');
                row.style.cssText = "background: linear-gradient(145deg, rgba(69, 10, 10, 0.4), rgba(127, 29, 29, 0.4)); border:1px solid rgba(251, 113, 133, 0.15); padding:1rem; border-radius:10px;";
                row.innerHTML = `
                    <strong style="display:block; color:#fda4af; font-size:0.95rem; margin-bottom:0.4rem;">#${i+1} ${sub.name}</strong>
                    <div style="font-size:0.75rem; color:#fb7185; margin-bottom:0.5rem; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:5px;">
                        Waktu: ${formatDate(sub.date)} jam ${sub.time || '-'}
                    </div>
                    <div style="color:#e5e7eb; font-size:0.9rem;">${sub.desc}</div>
                `;
                subCont.appendChild(row);
            });
        } else {
            subCont.innerHTML = '<div style="color:gray; font-style:italic;">Tidak ada aktivitas sub.</div>';
        }

        // Switch UI
        document.getElementById('journalModalTitle').innerText = "Detail Journal";
        document.getElementById('journalForm').classList.add('hidden');
        document.getElementById('journalDetailView').classList.remove('hidden');
        document.getElementById('journalFormActions').classList.add('hidden');
        document.getElementById('journalDetailActions').classList.remove('hidden');
        document.getElementById('journalModalOverlay').classList.add('active');
    }

    // --- EDIT & DELETE & UTILS ---
    function editJournal() {
        const j = journals.find(x => x.id === currentJournalId);
        if(!j) return;
        
        document.getElementById('journalId').value = j.id;
        document.getElementById('inpJTitle').value = j.title;
        document.getElementById('inpJOwner').value = j.owner;
        document.getElementById('inpJCategory').value = j.category;
        document.getElementById('inpJDate').value = j.date;
        document.getElementById('inpJTime').value = j.time;
        document.getElementById('inpJTeam').value = j.team;
        document.getElementById('inpJStatus').value = j.status;
        document.getElementById('inpJPriority').value = j.priority;
        document.getElementById('inpJMedia').value = j.media;
        document.getElementById('inpJLink').value = j.link;
        document.getElementById('inpJDesc').value = j.desc;
        document.getElementById('inpJNotes').value = j.notes;

        // Load Sub Journals
        const wrapper = document.getElementById('wrapperSubJournal');
        wrapper.innerHTML = '';
        if(j.subJournals) {
            document.getElementById('countSubJournal').value = j.subJournals.length;
            j.subJournals.forEach((sub, i) => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#fda4af; margin-bottom:5px;">Aktivitas #${i+1}</strong>`;
                div.innerHTML += `
                    <input type="text" class="field-name" value="${sub.name}" placeholder="Nama Aktivitas">
                    <div style="display:flex; gap:5px;">
                        <input type="date" class="field-date" value="${sub.date}">
                        <input type="time" class="field-time" value="${sub.time}">
                    </div>
                    <textarea class="field-desc" placeholder="Deskripsi Aktivitas">${sub.desc}</textarea>
                `;
                wrapper.appendChild(div);
            });
        }

        document.getElementById('journalModalTitle').innerText = "Edit Journal";
        document.getElementById('journalDetailView').classList.add('hidden');
        document.getElementById('journalForm').classList.remove('hidden');
        document.getElementById('journalDetailActions').classList.add('hidden');
        document.getElementById('journalFormActions').classList.remove('hidden');
    }

    function deleteJournal(id, e) {
        e.stopPropagation();
        if(confirm("Hapus jurnal ini?")) {
            journals = journals.filter(x => x.id !== id);
            localStorage.setItem('myJournals', JSON.stringify(journals));
            renderJournals();
        }
    }

    function duplicateJournal(id, e) {
        e.stopPropagation();
        const origin = journals.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)" };
            journals.push(copy);
            localStorage.setItem('myJournals', JSON.stringify(journals));
            renderJournals();
        }
    }

    function openJournalModal() {
        document.getElementById('journalForm').reset();
        document.getElementById('journalId').value = '';
        document.getElementById('wrapperSubJournal').innerHTML = '';
        document.getElementById('countSubJournal').value = '';

        document.getElementById('journalModalTitle').innerText = "New Journal";
        document.getElementById('journalForm').classList.remove('hidden');
        document.getElementById('journalDetailView').classList.add('hidden');
        document.getElementById('journalFormActions').classList.remove('hidden');
        document.getElementById('journalDetailActions').classList.add('hidden');
        document.getElementById('journalModalOverlay').classList.add('active');
    }

    function closeJournalModal() {
        document.getElementById('journalModalOverlay').classList.remove('active');
    }

// --- LOGIKA DASHBOARD (MASTER AGGREGATOR) ---

    function renderDashboard() {
        const container = document.getElementById('dashboardContainer');
        const searchTerm = document.getElementById('inpSearchDash') ? document.getElementById('inpSearchDash').value.toLowerCase() : "";
        const filterType = document.getElementById('inpDashFilter') ? document.getElementById('inpDashFilter').value : "all";
        
        container.innerHTML = '';

        // 1. Ambil Semua Data & Beri Label Tipe
        // Kita copy array agar array asli tidak terganggu
        const allIdeas = (JSON.parse(localStorage.getItem('myIdeas')) || []).map(i => ({...i, dataType: 'idea'}));
        const allPlans = (JSON.parse(localStorage.getItem('myPlans')) || []).map(p => ({...p, dataType: 'plan'}));
        const allJournals = (JSON.parse(localStorage.getItem('myJournals')) || []).map(j => ({...j, dataType: 'journal'}));
        const allNotulensis = (JSON.parse(localStorage.getItem('myNotulensis')) || []).map(n => ({...n, dataType: 'notulensi'}));
const allCerts = (JSON.parse(localStorage.getItem('myCertifications')) || []).map(c => ({...c, dataType: 'certification'}));
const allLombas = (JSON.parse(localStorage.getItem('myLombas')) || []).map(l => ({...l, dataType: 'lomba'}));
const allContents = (JSON.parse(localStorage.getItem('myContents')) || []).map(c => ({...c, dataType: 'content'}));
      const allSports = (JSON.parse(localStorage.getItem('mySports')) || []).map(s => ({...s, dataType: 'sport'}));
const allCrm = (JSON.parse(localStorage.getItem('myCrmContacts')) || []).map(c => ({...c, dataType: 'crm'}));
        // 2. GABUNGKAN
     const allFoods = (JSON.parse(localStorage.getItem('myFoods')) || []).map(f => ({...f, dataType: 'food'}));
const allEducations = (JSON.parse(localStorage.getItem('myEducations')) || []).map(f => ({...f, dataType: 'education'}));
const allSkills = (JSON.parse(localStorage.getItem('mySkills')) || []).map(s => ({...s, dataType: 'skill'}));
        // 2. GABUNGKAN
      const allVacations = (JSON.parse(localStorage.getItem('myVacations')) || []).map(v => ({...v, dataType: 'vacation'}));
const allWorships = (JSON.parse(localStorage.getItem('myWorships')) || []).map(w => ({...w, dataType: 'worship'}));
const allProjects = (JSON.parse(localStorage.getItem('myProjects')) || []).map(p => ({...p, dataType: 'project'})); 
const allBusinesses = (JSON.parse(localStorage.getItem('myBusinesses')) || []).map(b => ({...b, dataType: 'business'}));
   const allFinances = (JSON.parse(localStorage.getItem('myFinances')) || []).map(f => ({...f, dataType: 'finance'}));
         const allSubs = (JSON.parse(localStorage.getItem('mySubscriptions')) || []).map(s => ({...s, dataType: 'subscription'}));
const allInvests = (JSON.parse(localStorage.getItem('myInvestments')) || []).map(i => ({...i, dataType: 'investment'}));
const allHabits = (JSON.parse(localStorage.getItem('myHabits')) || []).map(h => ({...h, dataType: 'habit'}));
const allReadings = (JSON.parse(localStorage.getItem('myReadings')) || []).map(r => ({...r, dataType: 'reading'}));
const allPorts = (JSON.parse(localStorage.getItem('myPortfolios')) || []).map(p => ({...p, dataType: 'portfolio'}));
const allVideos = (JSON.parse(localStorage.getItem('myVideoIdeas')) || []).map(v => ({...v, dataType: 'video'}));
const allWatch = (JSON.parse(localStorage.getItem('myWatchlist')) || []).map(w => ({...w, dataType: 'watchlist'}));
const allEvents = (JSON.parse(localStorage.getItem('myEvents')) || []).map(e => ({...e, dataType: 'event'}));
        const allMeets = (JSON.parse(localStorage.getItem('myMeetings')) || []).map(m => ({...m, dataType: 'meeting'}));
         // 2. GABUNGKAN SEMUA DATA
        let masterData = [
            ...allIdeas, ...allPlans, ...allJournals, ...allNotulensis, 
            ...allLombas, ...allSports, ...allFoods, ...allVacations, ...allWorships, ...allProjects, ...allEducations, ...allBusinesses, ...allFinances, ...allSubs, ...allInvests, ...allSkills, ...allReadings,
            ...allHabits, ...allCerts, ...allContents, ...allPorts, ...allVideos, ...allWatch, ...allCrm, ...allEvents, ...allMeets 
        ];
        if(searchTerm) {
            masterData = masterData.filter(item => item.title.toLowerCase().includes(searchTerm));
        }

        // 4. Filter Dropdown Tipe
        if(filterType !== 'all') {
            masterData = masterData.filter(item => item.dataType === filterType);
        }

        // 5. Sorting: Waktu Terbaru (ID biasanya timestamp, jadi aman dipake sort)
        masterData.sort((a, b) => b.id - a.id);

        // Update Statistik Kecil
        if(document.getElementById('statTotal')) {
            document.getElementById('statTotal').innerText = masterData.length;
        }

// --- O. JIKA TIPE INVESTMENT (REVISI DASHBOARD: GAMBAR FIX & PNL) ---
            else if(item.dataType === 'investment') {
                card.className = 'invest-card';
                
                // 1. [FIX IMAGE] Gunakan logic fallback agar gambar selalu muncul
                const bgImage = getInvestImage(item.type || 'Lainnya');
                
                // 2. Kalkulasi Profit/Loss untuk Dashboard
                const buyVal = (parseFloat(item.buyPrice) || 0) * (parseFloat(item.qty) || 0);
                const currVal = (parseFloat(item.currPrice) || 0) * (parseFloat(item.qty) || 0);
                const pnl = currVal - buyVal;
                const pnlPercent = buyVal > 0 ? ((pnl / buyVal) * 100) : 0;
                
                let pnlColor = pnl >= 0 ? '#4ade80' : '#f87171'; // Hijau/Merah
                let pnlIcon = pnl >= 0 ? '▲' : '▼';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-invest">Investasi</span>
                        
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateInvestment(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteInvestment(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                        
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">${item.platform || '-'}</div>
                    </div>
                    
                    <div class="invest-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.type || 'Asset'}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${item.status==='Holding'?'#38bdf8':'#9ca3af'}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.name}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || 'Hold jangka panjang.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;">${item.qty} ${item.unit || ''}</span>
                             <span style="font-size:0.9rem; color:${pnlColor}; font-weight:bold;">${pnlIcon} ${pnlPercent.toFixed(2)}%</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openInvestDetail(item.id); };
            }
        // 6. Cek Kosong
        if(masterData.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:5rem;">Tidak ada item ditemukan di Dashboard.</div>';
            return;
        }

        // 7. RENDER LOOP (Switch Style Berdasarkan Tipe)
        masterData.forEach(item => {
            const card = document.createElement('div');
            
            // --- A. JIKA TIPE IDEA (Style Hijau/Teal) ---
       // --- A. JIKA TIPE IDEA (Revisi: Style Premium Full Bleed - Hijau/Teal) ---
            if(item.dataType === 'idea') {
                // Gunakan class 'plan-card' sebagai base agar dapat properti rounded & overflow hidden
                // Tapi kita timpa backgroundnya jadi Hijau/Teal khas Idea
            card.className = 'card';
                
                // Override background jadi nuansa Teal/Emerald
                card.style.background = 'linear-gradient(160deg, rgba(6, 78, 59, 0.6) 0%, rgba(4, 47, 46, 0.8) 100%)';
                card.style.borderColor = 'rgba(52, 211, 153, 0.2)';

                // Logic Gambar & Status
                const displayImg = item.img && item.img.trim() !== '' ? item.img : getCategoryImage(item.category);
                
                let statusColor = '#94a3b8'; // Default
                let statusBg = 'rgba(148, 163, 184, 0.2)';
                
                if(item.status === 'Sudah Selesai') { 
                    statusColor = '#10b981'; statusBg = 'rgba(16, 185, 129, 0.2)';
                } 
                if(item.status === 'Dikerjakan') { 
                    statusColor = '#3b82f6'; statusBg = 'rgba(59, 130, 246, 0.2)';
                }
                if(item.status === 'Pending') { 
                    statusColor = '#f59e0b'; statusBg = 'rgba(245, 158, 11, 0.2)';
                }

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-idea">Idea</span>
                        
                        <img src="${displayImg}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80'">
                        
                        <div style="position:absolute; top:10px; right:10px;">
                             <button onclick="deleteIdea(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; cursor:pointer; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                    </div>

                    <div class="plan-card-body"> <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:${statusBg}; color:${statusColor}; padding:4px 10px; border-radius:20px; border:1px solid ${statusBg};">
                                ${item.status || 'Draft'}
                            </span>
                            <span style="font-size:0.7rem; font-weight:700; color:#34d399; text-transform:uppercase;">
                                ${item.category}
                            </span>
                        </div>

                        <h3 class="card-title" style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        <p style="font-size:0.9rem; color:#d1d5db; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc}
                        </p>

                        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:0.8rem; color:#9ca3af; font-style:italic;">
                                ${item.importance || ''}
                            </span>
                            <span style="font-size:0.8rem; color:#9ca3af;">
                                <i class="ph ph-calendar"></i> ${formatDate(item.createdAt || item.id)}
                            </span>
                        </div>
                    </div>
                `;
              
                // Klik Card Idea membuka Form Edit (Kecuali klik tombol hapus)
                card.onclick = (e) => { 
                    if(!e.target.closest('button')) {
                        // Kita panggil fungsi edit idea yang sudah ada
                        // (Pastikan fungsi openDetailView atau openFormModal Idea kamu siap)
                        if(typeof openDetailView === 'function') openDetailView(item.id); 
                        else if(typeof openFormModal === 'function') {
                            // Manual load data to form for Idea editing
                             document.getElementById('inpId').value = item.id;
                             document.getElementById('inpTitle').value = item.title;
                             document.getElementById('inpDesc').value = item.desc;
                             document.getElementById('inpCategory').value = item.category;
                             // dst... lalu buka modal
                             openFormModal();
                        }
                    } 
                };
            }
            // --- V. JIKA TIPE WATCHLIST (DASHBOARD: IMAGE FIX & DESC) ---
            else if(item.dataType === 'watchlist') {
                card.className = 'watchlist-card';
                
                // Logika Gambar Aman
                const imgSrc = item.imgLink && item.imgLink.trim() !== "" ? item.imgLink : getWatchImage(item.genre || 'Lainnya');
                const defaultImg = "https://images.unsplash.com/photo-1613280194169-6bb2f32a6bfa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2hpbmclMjB0dnxlbnwwfHwwfHx8MA%3D%3D";

                let statColor = '#9ca3af'; 
                if(item.status === 'Watching') statColor = '#fbbf24'; 
                if(item.status === 'Completed') statColor = '#34d399';

                const ratingVal = item.rating > 0 ? `<i class="ph ph-star-fill" style="color:#fbbf24;"></i> ${item.rating}` : '-';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-watch">Movie</span>
                        <img src="${imgSrc}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='${defaultImg}';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateWatchlist(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteWatchlist(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.type}</div>
                    </div>
                    
                    <div class="watchlist-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.genre}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#fca5a5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.review || 'Belum ada review/catatan.'}
                        </p>
                        
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1);">
                             <span style="font-size:0.8rem; color:#9ca3af;">${item.platform || '-'}</span>
                             <span style="font-size:1rem; font-weight:bold; color:#fff;">${ratingVal}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openWatchDetail(item.id); };
            }
            // --- X. JIKA TIPE EVENT (DASHBOARD) ---
                // --- Y. JIKA TIPE MEETING (DASHBOARD) ---
           // --- Y. JIKA TIPE MEETING (DASHBOARD REVISI ELEGANT) ---
            else if(item.dataType === 'meeting') {
                card.className = 'meet-card';
                const bgImage = getMeetImage(item.type || 'Lainnya');
                
                let statColor = '#fbbf24';
                if(item.status === 'Completed') statColor = '#94a3b8';
                if(item.status === 'Cancelled') statColor = '#ef4444';

                const dateObj = new Date(item.date);
                const dateStr = dateObj.toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'});
                const descText = item.points || "Belum ada ringkasan diskusi.";

                card.innerHTML = `
                    <div style="height:140px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-meet">Meeting</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateMeeting(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteMeeting(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        
                        <div style="position:absolute; bottom:10px; left:10px;">
                            <span class="badge-pill-meet-type">${item.type}</span>
                        </div>
                    </div>
                    
                    <div class="meet-card-body">
                        <div style="text-align:right; margin-bottom:5px; font-size:0.85rem;">
                            <span style="font-weight:bold; color:#fbbf24;">${dateStr}</span>
                            <span style="color:#94a3b8;"> • ${item.time}</span>
                        </div>

                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${descText}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="color:${statColor}; font-weight:bold; font-size:0.75rem; text-transform:uppercase;">${item.status}</span>
                             
                             <span style="font-size:0.85rem; color:#94a3b8; display:flex; align-items:center; gap:5px;">
                                <i class="ph ph-map-pin" style="color:#d97706;"></i> ${item.loc || 'Online'}
                             </span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openMeetDetail(item.id); };
            }
         // --- X. JIKA TIPE EVENT (DASHBOARD REVISI: DESC/VENDOR) ---
            else if(item.dataType === 'event') {
                card.className = 'event-card';
                const bgImage = getEventImage(item.type || 'Lainnya');
                let statColor = item.status === 'Ready' ? '#34d399' : '#e879f9';

                // Hitung Countdown
                const today = new Date();
                const evDate = new Date(item.date);
                const diffTime = evDate - today;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                let dayLabel = diffDays > 0 ? `${diffDays} Hari Lagi` : (diffDays === 0 ? 'HARI INI' : 'Selesai');
                let dayColor = diffDays <= 7 && diffDays >= 0 ? '#facc15' : '#fff';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-event">Event</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateEvent(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteEvent(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.type}</div>
                    </div>
                    
                    <div class="event-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.guests} PAX</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.name}</h3>
                        
                        <p style="font-size:0.9rem; color:#fbcfe8; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.vendors || 'Belum ada catatan vendor.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#d8b4fe;"><i class="ph ph-calendar"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.75rem; color:${dayColor}; font-weight:bold; background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px;">${dayLabel}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openEventDetail(item.id); };
            }
            // --- T. JIKA TIPE PORTFOLIO (DASHBOARD) ---
            else if(item.dataType === 'portfolio') {
                card.className = 'port-card';
                const bgImage = getPortImage(item.tool || 'Lainnya');
                const clientLabel = item.client ? item.client : 'Personal';
                
                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-port">Portfolio</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicatePortfolio(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deletePortfolio(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.tool}</div>
                    </div>
                    
                    <div class="port-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.type}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:#fb7185; text-transform:uppercase;">${item.year}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#fecdd3; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || 'Tidak ada deskripsi konsep.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-user"></i> ${clientLabel}</span>
                             <a href="${item.link || '#'}" target="_blank" onclick="event.stopPropagation()" style="font-size:1.2rem; color:#fb7185; cursor:pointer;"><i class="ph ph-arrow-square-out"></i></a>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button') && !e.target.closest('a')) openPortDetail(item.id); };
            }
            // --- B. JIKA TIPE PLAN (Style Ungu/Full Bleed) ---
            else if(item.dataType === 'plan') {
                card.className = 'plan-card'; // Style asli Plan
                const bgImage = getPlanImage(item.category);
                
                let prioBg = 'rgba(148, 163, 184, 0.2)'; let prioColor = '#94a3b8';
                if(item.priority === 'High') { prioBg='rgba(245, 158, 11, 0.2)'; prioColor='#f59e0b'; }
                if(item.priority === 'Urgent') { prioBg='rgba(239, 68, 68, 0.2)'; prioColor='#ef4444'; }

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-plan">Plan</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80';">
                        <div style="position:absolute; top:10px; right:10px;">
                             <button onclick="deletePlan(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; cursor:pointer; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                    </div>
                    <div class="plan-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:${prioBg}; color:${prioColor}; padding:4px 10px; border-radius:20px; border:1px solid ${prioBg};">${item.priority || 'Normal'}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:#a78bfa; text-transform:uppercase;">${item.category}</span>
                        </div>
                        <h3 class="plan-title" style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3;">${item.title}</h3>
                        <p style="font-size:0.9rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto;">${item.desc || '-'}</p>
                        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.75rem; font-weight:600; color:#a78bfa; background:rgba(0,0,0,0.2); padding:4px 12px; border-radius:6px;">${item.status}</span>
                             <span style="font-size:0.8rem; color:#64748b;">${formatDate(item.start)}</span>
                        </div>
                    </div>
                `;
                // Klik Card membuka Detail Plan
                card.onclick = (e) => { if(!e.target.closest('button')) openPlanDetail(item.id); };
            }
            // --- Q. JIKA TIPE HABIT (DASHBOARD) ---
            else if(item.dataType === 'habit') {
                card.className = 'habit-card';
                const bgImage = getHabitImage(item.category || 'Lainnya');
                let statColor = item.status === 'Active' ? '#6ee7b7' : '#9ca3af';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-habit">Habit</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateHabit(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteHabit(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.freq}</div>
                    </div>
                    
                    <div class="habit-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.name}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.reason || 'Tidak ada motivasi tertulis.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-clock"></i> ${item.time || '-'}</span>
                             <span style="font-size:0.9rem; color:#fbbf24; font-weight:bold;"><i class="ph ph-fire"></i> ${item.streak}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openHabitDetail(item.id); };
            }
            // --- P. JIKA TIPE SKILL (REVISI DASHBOARD: DESKRIPSI ONLY) ---
            else if(item.dataType === 'skill') {
                card.className = 'skill-card';
                const bgImage = getSkillImage(item.category);
                let statColor = item.status === 'Completed' ? '#34d399' : '#22d3ee';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-skill">Skill</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateSkill(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteSkill(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.category}</div>
                    </div>
                    
                    <div class="skill-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.level}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.name}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || 'Tidak ada deskripsi target.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;">Target: ${item.target ? 'Set' : '-'}</span>
                             <span style="font-size:0.9rem; color:#22d3ee; font-weight:bold;">${item.hours || 0} Jam</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openSkillDetail(item.id); };
            }
            // --- U. JIKA TIPE VIDEO IDEA (DASHBOARD) ---
            else if(item.dataType === 'video') {
                card.className = 'video-card';
                const bgImage = getVideoImage(item.category || 'Lainnya');
                
                let statColor = '#ef4444'; 
                if(item.status === 'Siap Shoot') statColor = '#22c55e';
                if(item.status === 'Scripting') statColor = '#fbbf24';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-video">Video</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateVideoIdea(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteVideoIdea(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.duration}</div>
                    </div>
                    
                    <div class="video-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#fca5a5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6; font-style:italic;">
                            "${item.hook || 'Belum ada hook.'}"
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-wrench"></i> ${item.tools ? 'Gear Set' : 'No Gear'}</span>
                             <span style="font-size:0.8rem; color:#ef4444; font-weight:bold;">CTA: ${item.cta ? 'Yes' : 'No'}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openVideoDetail(item.id); };
            }
            // --- R. JIKA TIPE CERTIFICATION (DASHBOARD) ---
            else if(item.dataType === 'certification') {
                card.className = 'cert-card';
                const bgImage = getCertImage(item.issuer || 'Lainnya');
                
                let statColor = '#fbbf24'; 
                if(item.status === 'Kadaluarsa') statColor = '#ef4444'; 
                if(item.status === 'Lifetime') statColor = '#34d399';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-cert">Cert</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1570616969692-54d6a5d085b1?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateCertification(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteCertification(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.issuer}</div>
                    </div>
                    
                    <div class="cert-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">CREDENTIAL</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.name}</h3>
                        
                        <p style="font-size:0.9rem; color:#d1d5db; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || item.credId || 'Tidak ada deskripsi.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;">Issued: ${formatDate(item.issueDate)}</span>
                             <span style="font-size:0.8rem; color:#fbbf24;">${item.expDate ? 'Exp: ' + formatDate(item.expDate) : 'Lifetime'}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openCertDetail(item.id); };
            }
            // --- S. JIKA TIPE CONTENT (DASHBOARD) ---
            else if(item.dataType === 'content') {
                card.className = 'content-card';
                const bgImage = getContentImage(item.platform);
                
                let statColor = '#fb923c'; 
                if(item.status === 'Posted') statColor = '#34d399'; 
                if(item.status === 'Scheduled') statColor = '#38bdf8'; 
                if(item.status === 'Shooting') statColor = '#db2777';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-content">Content</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1557838402-e7674383180d?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateContent(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteContent(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.platform}</div>
                    </div>
                    
                    <div class="content-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.format}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#fbcfe8; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.caption || 'Belum ada caption.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:#fb923c;">${item.time || '-'}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openContentDetail(item.id); };
            }
            // --- Q. JIKA TIPE READING (DASHBOARD) ---
          // --- Q. JIKA TIPE READING (DASHBOARD REVISI: DESC ONLY) ---
            else if(item.dataType === 'reading') {
                card.className = 'reading-card';
                const bgImage = getReadingImage(item.genre);
                
                let statColor = '#fbbf24';
                if(item.status === 'Finished') statColor = '#34d399';
                if(item.status === 'Dropped') statColor = '#f87171';
                if(item.status === 'To Read') statColor = '#94a3b8';

                const stars = '★'.repeat(item.rating || 0) + '☆'.repeat(5 - (item.rating || 0));

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-reading">Buku</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateReading(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteReading(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.year || '-'}</div>
                    </div>
                    
                    <div class="reading-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.genre}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.review || 'Tidak ada catatan review.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.9rem; color:#fbbf24; letter-spacing:1px;">${stars}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openReadingDetail(item.id); };
            }
// --- I. JIKA TIPE WORSHIP ---
            else if(item.dataType === 'worship') {
                card.className = 'worship-card';
                const bgImage = getWorshipImage(item.category);
                
                let statCol = '#facc15';
                if(item.status === 'Selesai') statCol = '#34d399';
                if(item.status === 'Dilakukan') statCol = '#a5b4fc';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-worship">Ibadah</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateWorship(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteWorship(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.type}</div>
                    </div>
                    <div class="worship-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">${item.desc || '...'}</p>
                        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:#facc15;">${item.solemn === 'Tinggi' ? '⭐⭐⭐' : '⭐'}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openWorshipDetail(item.id); };
            }
            // --- W. JIKA TIPE CRM (DASHBOARD REVISI: TANGGAL JELAS) ---
            else if(item.dataType === 'crm') {
                card.className = 'crm-card';
                const avatar = getCrmAvatar(item.name);
                
                // Logic Hari & Tanggal
                let lastMetTxt = "Belum bertemu";
                let lastMetDateStr = "-";
                let statColor = "#94a3b8"; // Default Grey

                if(item.lastMet) {
                    const today = new Date();
                    const met = new Date(item.lastMet);
                    const diffTime = today - met;
                    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                    
                    // Format Tanggal Cantik (ex: 20 Jan 2026)
                    lastMetDateStr = met.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

                    if(diffDays === 0) lastMetTxt = "Hari Ini";
                    else if(diffDays < 0) lastMetTxt = "Terjadwal";
                    else lastMetTxt = `${diffDays} hari lalu`;
                    
                    if(diffDays > 30) statColor = "#f87171"; // Merah (Urgent)
                    else if (diffDays <= 7) statColor = "#4ade80"; // Hijau (Aman)
                }

                card.innerHTML = `
                    <div style="height:80px; width:100%; background:linear-gradient(135deg, #1e3a8a, #1e293b); position:absolute; top:0; left:0;">
                        <span class="card-source-badge badge-src-crm">CRM</span>
                    </div>
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px; z-index:10;">
                         <button onclick="duplicateCrm(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteCrm(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>

                    <div class="crm-card-body" style="padding-top:40px; position:relative;">
                        <img src="${avatar}" class="crm-avatar">
                        
                        <span class="badge-pill-crm-type" style="align-self:center; margin-bottom:10px;">${item.category}</span>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.2rem; color:white;">${item.name}</h3>
                        <div style="font-size:0.9rem; color:#94a3b8; margin-bottom:1rem;">${item.role || '-'} at ${item.company || '-'}</div>
                        
                        <p style="font-size:0.85rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.5; font-style:italic; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
                            "${item.topic || 'Belum ada catatan interaksi.'}"
                        </p>
                        
                        <div style="margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:#94a3b8; border-top:1px solid rgba(255,255,255,0.05); padding-top:0.8rem;">
                             <span style="display:flex; flex-direction:column; align-items:flex-start;">
                                <span style="font-size:0.7rem; color:#64748b; text-transform:uppercase;">Last Met</span>
                                <span style="color:#cbd5e1; font-weight:600;"><i class="ph ph-calendar-blank"></i> ${lastMetDateStr}</span>
                             </span>
                             <span style="color:${statColor}; font-weight:bold; background:rgba(255,255,255,0.05); padding:5px 8px; border-radius:4px;">${lastMetTxt}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openCrmDetail(item.id); };
            }
            // --- C. JIKA TIPE JOURNAL (Style Merah/Sunset) ---
            else if(item.dataType === 'journal') {
                card.className = 'journal-card'; // Style asli Journal
                const bgImage = getJournalImage(item.category);
                
                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-journal">Journal</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80';">
                        <div style="position:absolute; top:10px; right:10px;">
                             <button onclick="deleteJournal(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; cursor:pointer; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                    </div>
                    <div class="journal-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span class="badge-j-prio" style="color:#fbbf24; background:rgba(251, 191, 36, 0.2); border:1px solid rgba(251, 191, 36, 0.2);">${item.priority}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:#fda4af; text-transform:uppercase;">${item.category}</span>
                        </div>
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        <p style="font-size:0.9rem; color:#d1d5db; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto;">${item.desc || '...'}</p>
                        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span class="badge-j-stat" style="color:#fda4af; border:1px solid #fda4af;">${item.status}</span>
                             <span style="font-size:0.8rem; color:#9ca3af;">${formatDate(item.date)}</span>
                        </div>
                    </div>
                `;
                // Klik Card membuka Detail Journal
                card.onclick = (e) => { if(!e.target.closest('button')) openJournalDetail(item.id); };
            }
       // --- E. LOMBA (INI YANG BARU & DIPERBAIKI) ---
            else if(item.dataType === 'lomba') {
                card.className = 'lomba-card';
                // Perbaikan: Ganti 'l' menjadi 'item'
                const bgImage = getLombaImage(item.field);
                
                let statCol = '#e879f9';
                if(item.status === 'Menang') statCol = '#fbbf24';
                if(item.status === 'Berjalan') statCol = '#34d399';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-lomba" style="background:rgba(219, 39, 119, 0.8);">Lomba</span>
                        
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateLomba(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteLomba(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">${item.stage}</div>
                    </div>
                    <div class="lomba-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.field}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.title}</h3>
                        <div style="font-size:0.8rem; color:#a78bfa; margin-bottom:0.5rem;">${item.organizer || '-'}</div>
                        <p style="font-size:0.9rem; color:#d8b4fe; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto;">${item.desc || '...'}</p>
                        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar-check"></i> DL: ${formatDate(item.deadlineDate)}</span>
                             <span style="font-size:0.8rem; color:#fbbf24;">${item.importance}</span>
                        </div>
                    </div>
                `;
                // Klik buka detail Lomba
                card.onclick = (e) => { if(!e.target.closest('button')) openLombaDetail(item.id); };
            }
            // --- D. JIKA TIPE NOTULENSI (Style Navy/Ocean) ---
        else if(item.dataType === 'notulensi') {
            card.className = 'notulensi-card';
            const bgImage = getNotulensiImage(item.category);

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <span class="card-source-badge badge-src-notulensi">Notulensi</span>
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'">
                    <div style="position:absolute; top:10px; right:10px;">
                         <button onclick="deleteNotulensi(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                </div>
                <div class="notulensi-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span class="badge-n-imp" style="background:rgba(255,255,255,0.1); color:#7dd3fc; border:1px solid rgba(56,189,248,0.2);">${item.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:#38bdf8; text-transform:uppercase;">${item.status}</span>
                    </div>
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                    <p style="font-size:0.9rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto;">${item.desc || '-'}</p>
                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.75rem; color:#94a3b8;">${item.leader}</span>
                         <span style="font-size:0.8rem; color:#94a3b8;">${formatDate(item.date)}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openNotulensiDetail(item.id); };
        }
        // --- F. JIKA TIPE SPORT (LOGIC BARU) ---
            else if(item.dataType === 'sport') {
                card.className = 'sport-card';
                // Gunakan Helper Image yang baru
                const bgImage = item.img || getSportImage(item.category);
                
                let statCol = '#a3e635'; 
                if(item.status === 'Selesai') statCol = '#34d399'; 
                if(item.status === 'Dibatalkan') statCol = '#f87171'; 
                if(item.status === 'Sedang Dilakukan') statCol = '#22d3ee'; 

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-sport">Olahraga</span>
                        
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateSport(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteSport(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">${item.concept}</div>
                    </div>
                    <div class="sport-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || '...'}
                        </p>
                        
                        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-clock"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:#fbbf24;">${item.importance}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openSportDetail(item.id); };
            }
else if(item.dataType === 'food') {
                card.className = 'food-card';
                // Gunakan Helper Image yang sama dengan fitur Food
                const bgImage = getFoodImage(item.category);
                
                let statCol = '#fdba74'; 
                if(item.status === 'Selesai') statCol = '#34d399'; 
                if(item.status === 'Dimakan') statCol = '#f472b6';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-food">Meal</span>
                        
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateFood(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteFood(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">${item.place}</div>
                    </div>
                    <div class="food-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || '...'}
                        </p>
                        
                        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:#fbbf24;">${'⭐'.repeat(item.rating || 0)}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openFoodDetail(item.id); };
            }
            else if(item.dataType === 'vacation') {
                card.className = 'vacation-card'; // Style Tropical Theme
                const bgImage = getVacationImage(item.category);
                
                let statCol = '#5eead4'; // Teal Default
                if(item.status === 'Selesai') statCol = '#34d399'; // Green
                if(item.status === 'Dilakukan') statCol = '#d946ef'; // Purple

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-vacation">Liburan</span>
                        
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateVacation(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteVacation(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                        
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">
                            <i class="ph ph-map-pin"></i> ${item.location || 'Unknown'}
                        </div>
                    </div>
                    
                    <div class="vacation-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || '...'}
                        </p>
                        
                        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar-check"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:#fbbf24;">${'⭐'.repeat(item.rating || 0)}</span>
                        </div>
                    </div>
                `;
                // Klik Card membuka Detail Vacation
                card.onclick = (e) => { if(!e.target.closest('button')) openVacationDetail(item.id); };
            }
            // --- J. JIKA TIPE PROJECT ---
        // --- J. JIKA TIPE PROJECT (REVISI DASHBOARD CARD) ---
            else if(item.dataType === 'project') {
                card.className = 'project-card';
                const bgImage = getProjectImage(item.category);
                let statCol = '#818cf8';
                if(item.status === 'Selesai') statCol = '#34d399';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-project">Proyek</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateProject(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteProject(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.status}</div>
                    </div>
                    <div class="project-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${item.group || 'Individu'}</span>
                        </div>
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">${item.desc || '...'}</p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-clock"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:#ef4444;">Deadline: ${formatDate(item.deadline)}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openProjectDetail(item.id); };
            }
            // --- K. JIKA TIPE EDUCATION ---
            else if(item.dataType === 'education') {
                card.className = 'education-card';
                const bgImage = getEducationImage(item.category);
                let statCol = '#cbd5e1';
                if(item.status === 'Selesai') statCol = '#34d399';
                if(item.status === 'Dilakukan') statCol = '#38bdf8';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-education">Pendidikan</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateEducation(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteEducation(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.status}</div>
                    </div>
                    <div class="education-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${item.imp}</span>
                        </div>
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">${item.desc || '...'}</p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:#38bdf8;">${item.subject || 'Umum'}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openEducationDetail(item.id); };
            }
            // --- L. JIKA TIPE BUSINESS ---
            else if(item.dataType === 'business') {
                card.className = 'business-card';
                const bgImage = getBusinessImage(item.category);
                let statCol = '#cbd5e1';
                if(item.status === 'Selesai') statCol = '#34d399';
                if(item.status === 'Dilakukan') statCol = '#fbbf24';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-business">Bisnis</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateBusiness(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteBusiness(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.status}</div>
                    </div>
                    <div class="business-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${item.div || 'General'}</span>
                        </div>
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">${item.desc || '...'}</p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:#fbbf24;">${item.imp === 'Sangat Penting' ? 'High Priority' : 'Normal'}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openBusinessDetail(item.id); };
            }
            // --- AMBIL DATA DI ATAS ---
            // Gabungkan ke masterData...
// --- O. JIKA TIPE INVESTMENT (REVISI DASHBOARD: GAMBAR FIX & PNL) ---
            else if(item.dataType === 'investment') {
                card.className = 'invest-card';
                
                // 1. [FIX IMAGE] Gunakan logic fallback agar gambar selalu muncul
                const bgImage = getInvestImage(item.type || 'Lainnya');
                
                // 2. Kalkulasi Profit/Loss untuk Dashboard
                const buyVal = (parseFloat(item.buyPrice) || 0) * (parseFloat(item.qty) || 0);
                const currVal = (parseFloat(item.currPrice) || 0) * (parseFloat(item.qty) || 0);
                const pnl = currVal - buyVal;
                const pnlPercent = buyVal > 0 ? ((pnl / buyVal) * 100) : 0;
                
                let pnlColor = pnl >= 0 ? '#4ade80' : '#f87171'; // Hijau/Merah
                let pnlIcon = pnl >= 0 ? '▲' : '▼';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-invest">Investasi</span>
                        
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80';">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateInvestment(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteInvestment(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                        
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">${item.platform || '-'}</div>
                    </div>
                    
                    <div class="invest-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.type || 'Asset'}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${item.status==='Holding'?'#38bdf8':'#9ca3af'}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.name}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || 'Hold jangka panjang.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;">${item.qty} ${item.unit || ''}</span>
                             <span style="font-size:0.9rem; color:${pnlColor}; font-weight:bold;">${pnlIcon} ${pnlPercent.toFixed(2)}%</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openInvestDetail(item.id); };
            }
            // --- M. JIKA TIPE FINANCE ---
          // --- M. JIKA TIPE FINANCE (REVISI DASHBOARD: DESKRIPSI ONLY) ---
            else if(item.dataType === 'finance') {
                card.className = 'finance-card';
                const bgImage = getFinanceImage(item.category);
                
                // Logic Warna Status
                let statColor = '#fbbf24'; // Default Pending
                if(item.status === 'Lunas') statColor = '#34d399'; // Green

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-finance">Keuangan</span>
                        
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateFinance(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteFinance(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                        </div>
                        
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">${item.account}</div>
                    </div>
                    
                    <div class="finance-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${item.title}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || 'Tidak ada catatan.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(item.date)}</span>
                             <span style="font-size:0.8rem; color:${item.type==='Pemasukan'?'#34d399':'#f87171'}; font-weight:bold;">${item.type}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openFinanceDetail(item.id); };
            }
            // --- N. JIKA TIPE SUBSCRIPTION ---
         // --- N. JIKA TIPE SUBSCRIPTION (REVISI DASHBOARD: DESKRIPSI ONLY) ---
            else if(item.dataType === 'subscription') {
                card.className = 'subscription-card';
                const bgImage = getSubImage(item.name, item.category);
                let statColor = item.status === 'Aktif' ? '#e879f9' : '#9ca3af';

                // Hitung hari lagi untuk dashboard
                const today = new Date();
                const billDate = new Date(item.nextBill);
                const diffTime = billDate - today;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                let dayLabel = diffDays > 0 ? `${diffDays} Hari Lagi` : (diffDays === 0 ? 'HARI INI' : 'Terlewat');
                let dayColor = diffDays <= 3 ? '#f87171' : '#fff';

                card.innerHTML = `
                    <div style="height:160px; width:100%; position:relative;">
                        <span class="card-source-badge badge-src-sub">Sub</span>
                        <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                        
                        <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                             <button onclick="duplicateSubscription(${item.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                             <button onclick="deleteSubscription(${item.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                        </div>
                        <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${item.cycle}</div>
                    </div>
                    
                    <div class="subscription-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${item.category}</span>
                            <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${item.status}</span>
                        </div>
                        
                        <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${item.name}</h3>
                        
                        <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                            ${item.desc || 'Tidak ada detail paket.'}
                        </p>
                        
                        <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                             <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar-check"></i> ${formatDate(item.nextBill)}</span>
                             <span style="font-size:0.75rem; color:${dayColor}; font-weight:bold; background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px;">${dayLabel}</span>
                        </div>
                    </div>
                `;
                card.onclick = (e) => { if(!e.target.closest('button')) openSubDetail(item.id); };
            }
            container.appendChild(card);
        });
    }
    // --- LOGIKA FITUR NOTULENSI (OCEANIC THEME) ---

    // 1. ASSETS GAMBAR NOTULENSI (20 Kategori)
    const notulensiCategoryAssets = {
        "Strategi": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        "Operasional": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        "HR": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
        "Marketing": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
        "Finance": "https://images.unsplash.com/photo-1554224155-984063584d45?w=800&q=80",
        "IT & Tech": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        "Product": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
        "Sales": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
        "Legal": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
        "Partnership": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
        "Board": "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
        "General": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
        "Project": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
        "Creative": "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80",
        "Evaluation": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "Training": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        "Public Relations": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
        "R&D": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
        "Customer Service": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        "Logistics": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    };

    function getNotulensiImage(cat) {
        return notulensiCategoryAssets[cat] || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80";
    }

    // Populate Dropdown
    const nCatSelect = document.getElementById('inpNCategory');
    if(nCatSelect) {
        Object.keys(notulensiCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            nCatSelect.appendChild(opt);
        });
    }

    let notulensis = JSON.parse(localStorage.getItem('myNotulensis')) || [];

    // --- GENERATOR ACTION ITEMS (SUB-ITEM) ---
    function generateActionFields() {
        const count = document.getElementById('countActionItems').value;
        const wrapper = document.getElementById('wrapperActionItems');
        wrapper.innerHTML = '';
        if(count < 1) return;

        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#7dd3fc; margin-bottom:5px;">Action Item #${i}</strong>`;
            
            div.innerHTML += `
                <input type="text" class="field-name" placeholder="Nama Aktivitas">
                <div style="display:flex; gap:5px;">
                    <input type="date" class="field-date">
                    <input type="time" class="field-time">
                </div>
                <div style="display:flex; gap:5px;">
                    <input type="text" class="field-pic" placeholder="PIC Name">
                    <select class="field-status" style="background:rgba(0,0,0,0.3); border:1px solid #38bdf8; color:white; border-radius:6px;">
                        <option>To Do</option><option>In Progress</option><option>Done</option>
                    </select>
                </div>
                <textarea class="field-desc" placeholder="Deskripsi Aktivitas"></textarea>
            `;
            wrapper.appendChild(div);
        }
    }

    // --- RENDER NOTULENSI ---
    function renderNotulensi() {
        const container = document.getElementById('notulensiContainer');
        const searchTerm = document.getElementById('inpSearchNotulensi') ? document.getElementById('inpSearchNotulensi').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpNotulensiFilter') ? document.getElementById('inpNotulensiFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = notulensis.filter(n => n.title.toLowerCase().includes(searchTerm));

        // Logic Filter
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'imp_very') filtered = filtered.filter(n => n.importance === 'Sangat Penting');
        if(filterVal === 'stat_done') filtered = filtered.filter(n => n.status === 'Selesai');
        if(filterVal === 'type_internal') filtered = filtered.filter(n => n.type === 'Internal');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ditemukan notulensi.</div>';
            return;
        }

        filtered.forEach(n => {
            const card = document.createElement('div');
            card.className = 'notulensi-card';
            const bgImage = getNotulensiImage(n.category);

            // Warna Priority
            let prioBg = 'rgba(255,255,255,0.1)'; let prioCol = '#ccc';
            if(n.importance === 'Sangat Penting') { prioBg = 'rgba(250, 204, 21, 0.2)'; prioCol = '#facc15'; }
            if(n.importance === 'Penting') { prioBg = 'rgba(56, 189, 248, 0.2)'; prioCol = '#38bdf8'; }

            // Warna Status
            let statCol = '#7dd3fc';
            if(n.status === 'Selesai') statCol = '#34d399';
            if(n.status === 'Berlangsung') statCol = '#60a5fa';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80';">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateNotulensi(${n.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteNotulensi(${n.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                </div>
                <div class="notulensi-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span class="badge-n-imp" style="background:${prioBg}; color:${prioCol}; border:1px solid ${prioBg};">${n.importance}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:#38bdf8; text-transform:uppercase;">${n.category}</span>
                    </div>
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${n.title}</h3>
                    <p style="font-size:0.9rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto;">${n.desc || '...'}</p>
                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span class="badge-n-stat" style="color:${statCol}; border:1px solid ${statCol};">${n.status}</span>
                         <span style="font-size:0.8rem; color:#94a3b8;"><i class="ph ph-calendar"></i> ${formatDate(n.date)}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openNotulensiDetail(n.id); };
            container.appendChild(card);
        });
    }

    // --- SAVE NOTULENSI ---
    function saveNotulensi() {
        const id = document.getElementById('notulensiId').value;
        
        // Ambil Action Items
        const wrapper = document.getElementById('wrapperActionItems');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let actionData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const time = item.querySelector('.field-time').value;
            const pic = item.querySelector('.field-pic').value;
            const status = item.querySelector('.field-status').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) actionData.push({ name, date, time, pic, status, desc });
        });

        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            title: document.getElementById('inpNTitle').value,
            type: document.getElementById('inpNType').value,
            category: document.getElementById('inpNCategory').value,
            groupType: document.getElementById('inpNGroupType').value,
            nature: document.getElementById('inpNNature').value,
            importance: document.getElementById('inpNImportance').value,
            
            notulis: document.getElementById('inpNNotulis').value,
            leader: document.getElementById('inpNLeader').value,
            participants: document.getElementById('inpNParticipants').value,
            count: document.getElementById('inpNCount').value,
            status: document.getElementById('inpNStatus').value,
            
            date: document.getElementById('inpNDate').value,
            start: document.getElementById('inpNStart').value,
            end: document.getElementById('inpNEnd').value,
            
            media: document.getElementById('inpNMedia').value,
            location: document.getElementById('inpNLocation').value,
            docLink: document.getElementById('inpNDocLink').value,
            
            desc: document.getElementById('inpNDesc').value,
            agenda: document.getElementById('inpNAgenda').value,
            result: document.getElementById('inpNResult').value,
            decision: document.getElementById('inpNDecision').value,
            notes: document.getElementById('inpNNotes').value,
            
            actionItems: actionData
        };

        if(!dataObj.title) { alert("Judul wajib diisi!"); return; }

        if(id) {
            const idx = notulensis.findIndex(x => x.id == id);
            notulensis[idx] = dataObj;
        } else {
            notulensis.push(dataObj);
        }

        localStorage.setItem('myNotulensis', JSON.stringify(notulensis));
        closeNotulensiModal();
        renderNotulensi();
    }

    // --- OPEN DETAIL NOTULENSI ---
    let currentNotulensiId = null;
    // --- OPEN DETAIL NOTULENSI (REVISI LENGKAP & RAPI) ---
    function openNotulensiDetail(id) {
        const n = notulensis.find(x => x.id === id);
        if(!n) return;
        currentNotulensiId = id;

        // 1. Image Logic
        const imgEl = document.getElementById('viewNCover');
        imgEl.src = ''; 
        imgEl.src = getNotulensiImage(n.category);
        imgEl.onerror = function() { this.onerror = null; this.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'; };

        // 2. Header Info
        document.getElementById('viewNTitle').innerText = n.title;
        document.getElementById('viewNCategory').innerText = n.category;
        document.getElementById('viewNImportance').innerText = n.importance;
        document.getElementById('viewNNature').innerText = n.nature || 'Formal';
        
        // Badge Status
        const statB = document.getElementById('viewNStatusBadge');
        statB.className = 'badge-pill-stat';
        statB.innerText = n.status;
        if(n.status === 'Selesai') statB.style.cssText = "background:#065f46; color:#34d399; border:1px solid #34d399;";
        else if(n.status === 'Berlangsung') statB.style.cssText = "background:#1e40af; color:#60a5fa; border:1px solid #60a5fa;";
        else statB.style.cssText = "background:#374151; color:#9ca3af; border:1px solid #9ca3af;";

        // Badge Type
        document.getElementById('viewNTypeBadge').innerText = n.type || 'Internal';
        document.getElementById('viewNTypeBadge').className = 'badge-pill-type';

        // 3. Grid Info Mapping
        document.getElementById('viewNDate').innerText = formatDate(n.date);
        
        // Hitung Durasi (Opsional: Jika mau logic hitung jam)
        const timeStr = (n.start || '-') + ' s/d ' + (n.end || '-');
        document.getElementById('viewNTime').innerText = timeStr;
        
        document.getElementById('viewNLoc').innerText = (n.media || '') + ' - ' + (n.location || '');
        document.getElementById('viewNLeader').innerText = n.leader || '-';
        document.getElementById('viewNNotulis').innerText = n.notulis || '-';
        document.getElementById('viewNCount').innerText = (n.count || '0') + ' Orang';
        document.getElementById('viewNGroup').innerText = n.groupType || '-';
        
        const docLnk = document.getElementById('viewNDoc');
        if(n.docLink) { docLnk.href = n.docLink; docLnk.style.display = 'inline-block'; } 
        else { docLnk.style.display = 'none'; }

        // 4. Content Mapping (Semua Field)
        document.getElementById('viewNParticipants').innerText = n.participants || '-';
        document.getElementById('viewNDesc').innerText = n.desc || 'Tidak ada deskripsi singkat.';
        document.getElementById('viewNAgenda').innerText = n.agenda || 'Tidak ada agenda tercatat.';
        document.getElementById('viewNResult').innerText = n.result || 'Belum ada hasil pembahasan.';
        document.getElementById('viewNDecision').innerText = n.decision || 'Belum ada keputusan.';
        document.getElementById('viewNNotes').innerText = n.notes || '-';

        // 5. Action Items Rendering
        const actCont = document.getElementById('viewListActionItems');
        actCont.innerHTML = '';
        if(n.actionItems && n.actionItems.length > 0) {
            n.actionItems.forEach((act, i) => {
                const row = document.createElement('div');
                // Style Card untuk Sub-Item
                row.style.cssText = "background: rgba(15, 23, 42, 0.4); border:1px solid rgba(56, 189, 248, 0.2); padding:1rem; border-radius:10px; display:flex; flex-direction:column; gap:5px;";
                
                let statusColor = '#94a3b8';
                if(act.status === 'Done') statusColor = '#34d399';
                if(act.status === 'In Progress') statusColor = '#60a5fa';

                row.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong style="color:#7dd3fc; font-size:1rem;">#${i+1} ${act.name}</strong>
                        <span style="font-size:0.75rem; font-weight:bold; color:${statusColor}; border:1px solid ${statusColor}; padding:2px 8px; border-radius:4px;">${act.status}</span>
                    </div>
                    <div style="font-size:0.8rem; color:#94a3b8; display:flex; gap:15px;">
                        <span><i class="ph ph-user"></i> PIC: ${act.pic || '-'}</span>
                        <span><i class="ph ph-clock"></i> Due: ${formatDate(act.date)} ${act.time}</span>
                    </div>
                    <div style="color:#e2e8f0; font-size:0.9rem; margin-top:5px; border-top:1px solid rgba(255,255,255,0.05); padding-top:5px;">${act.desc}</div>
                `;
                actCont.appendChild(row);
            });
        } else {
            actCont.innerHTML = '<div style="color:gray; font-style:italic; padding:1rem; border:1px dashed #334155; border-radius:8px; text-align:center;">Tidak ada action items.</div>';
        }

        // 6. Switch UI
        document.getElementById('notulensiModalTitle').innerText = "Detail Notulensi";
        document.getElementById('notulensiForm').classList.add('hidden');
        document.getElementById('notulensiDetailView').classList.remove('hidden');
        document.getElementById('notulensiFormActions').classList.add('hidden');
        document.getElementById('notulensiDetailActions').classList.remove('hidden');
        document.getElementById('notulensiModalOverlay').classList.add('active');
    }
    // --- UTILS NOTULENSI ---
    function deleteNotulensi(id, e) {
        e.stopPropagation();
        if(confirm("Hapus notulensi ini?")) {
            notulensis = notulensis.filter(x => x.id !== id);
            localStorage.setItem('myNotulensis', JSON.stringify(notulensis));
            renderNotulensi();
        }
    }
    function duplicateNotulensi(id, e) {
        e.stopPropagation();
        const origin = notulensis.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)" };
            notulensis.push(copy);
            localStorage.setItem('myNotulensis', JSON.stringify(notulensis));
            renderNotulensi();
        }
    }
    function openNotulensiModal() {
        document.getElementById('notulensiForm').reset();
        document.getElementById('notulensiId').value = '';
        document.getElementById('wrapperActionItems').innerHTML = '';
        document.getElementById('countActionItems').value = '';
        
        document.getElementById('notulensiModalTitle').innerText = "New Notulensi";
        document.getElementById('notulensiForm').classList.remove('hidden');
        document.getElementById('notulensiDetailView').classList.add('hidden');
        document.getElementById('notulensiFormActions').classList.remove('hidden');
        document.getElementById('notulensiDetailActions').classList.add('hidden');
        document.getElementById('notulensiModalOverlay').classList.add('active');
    }
    function closeNotulensiModal() {
        document.getElementById('notulensiModalOverlay').classList.remove('active');
    }
    function editNotulensi() {
        // (Logika edit mirip dengan Plan/Journal, tinggal load value ke ID input)
        alert("Fitur Edit akan membuka form kembali. Untuk saat ini data sudah aman.");
        // Implementasi penuh edit bisa copy paste logic 'load value' seperti di Journal
    }
    // --- INIT: JALANKAN SEMUA RENDER SAAT WEBSITE DIBUKA ---
    // --- FUNGSI EDIT NOTULENSI (AKTIF) ---
    function editNotulensi() {
        // 1. Cari Data berdasarkan ID yang sedang dibuka
        const n = notulensis.find(x => x.id === currentNotulensiId);
        if(!n) return;

        // 2. Masukkan Data ke Input Form Utama
        document.getElementById('notulensiId').value = n.id;
        document.getElementById('inpNTitle').value = n.title;
        document.getElementById('inpNType').value = n.type;
        document.getElementById('inpNCategory').value = n.category;
        document.getElementById('inpNGroupType').value = n.groupType;
        document.getElementById('inpNNature').value = n.nature;
        document.getElementById('inpNImportance').value = n.importance;
        
        document.getElementById('inpNNotulis').value = n.notulis;
        document.getElementById('inpNLeader').value = n.leader;
        document.getElementById('inpNParticipants').value = n.participants;
        document.getElementById('inpNCount').value = n.count;
        document.getElementById('inpNStatus').value = n.status;
        
        document.getElementById('inpNDate').value = n.date;
        document.getElementById('inpNStart').value = n.start;
        document.getElementById('inpNEnd').value = n.end;
        
        document.getElementById('inpNMedia').value = n.media;
        document.getElementById('inpNLocation').value = n.location;
        document.getElementById('inpNDocLink').value = n.docLink;
        
        document.getElementById('inpNDesc').value = n.desc;
        document.getElementById('inpNAgenda').value = n.agenda;
        document.getElementById('inpNResult').value = n.result;
        document.getElementById('inpNDecision').value = n.decision;
        document.getElementById('inpNNotes').value = n.notes;

        // 3. Generate Ulang Action Items (Sub-Notulensi)
        const wrapper = document.getElementById('wrapperActionItems');
        wrapper.innerHTML = ''; // Bersihkan dulu
        
        if(n.actionItems && n.actionItems.length > 0) {
            document.getElementById('countActionItems').value = n.actionItems.length;

            n.actionItems.forEach((act, i) => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#7dd3fc; margin-bottom:5px;">Action Item #${i+1}</strong>`;
                
                // Render input dengan value terisi
                div.innerHTML += `
                    <input type="text" class="field-name" value="${act.name}" placeholder="Nama Aktivitas">
                    <div style="display:flex; gap:5px;">
                        <input type="date" class="field-date" value="${act.date}">
                        <input type="time" class="field-time" value="${act.time}">
                    </div>
                    <div style="display:flex; gap:5px;">
                        <input type="text" class="field-pic" value="${act.pic}" placeholder="PIC Name">
                        <select class="field-status" style="background:rgba(0,0,0,0.3); border:1px solid #38bdf8; color:white; border-radius:6px;">
                            <option ${act.status === 'To Do' ? 'selected' : ''}>To Do</option>
                            <option ${act.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                            <option ${act.status === 'Done' ? 'selected' : ''}>Done</option>
                        </select>
                    </div>
                    <textarea class="field-desc" placeholder="Deskripsi Aktivitas">${act.desc}</textarea>
                `;
                wrapper.appendChild(div);
            });
        } else {
             document.getElementById('countActionItems').value = '';
        }

        // 4. Ubah Tampilan Modal: Sembunyikan Detail, Munculkan Form
        document.getElementById('notulensiModalTitle').innerText = "Edit Notulensi";
        
        document.getElementById('notulensiDetailView').classList.add('hidden'); // Sembunyikan mode baca
        document.getElementById('notulensiForm').classList.remove('hidden');    // Munculkan mode edit
        
        document.getElementById('notulensiDetailActions').classList.add('hidden'); // Sembunyikan tombol Close
        document.getElementById('notulensiFormActions').classList.remove('hidden'); // Munculkan tombol Save
    }
    // --- LOGIKA FITUR LOMBA (COMPETITION) ---

    // 1. ASSETS GAMBAR (Bidang Lomba)
    const lombaCategoryAssets = {
        "IT & Tech": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        "Bisnis & Ekonomi": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "Desain & Seni": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
        "Karya Tulis Ilmiah": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
        "Debat & Public Speaking": "https://images.unsplash.com/photo-1475721027767-p753cce59148?w=800&q=80",
        "Akademik / Olimpiade": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        "Olahraga": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
        "Videografi / Fotografi": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1533227297462-85dd5220700c?w=800&q=80"
    };
    function getLombaImage(cat) {
        return lombaCategoryAssets[cat] || "https://images.unsplash.com/photo-1533227297462-85dd5220700c?w=800&q=80";
    }

    let lombas = JSON.parse(localStorage.getItem('myLombas')) || [];

    // 2. SUB AKTIVITAS GENERATOR
    function generateSubLombaFields() {
        const count = document.getElementById('countSubLomba').value;
        const wrapper = document.getElementById('wrapperSubLomba');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#e879f9; margin-bottom:5px;">Aktivitas #${i}</strong>
                             <input type="text" class="field-name" placeholder="Nama Aktivitas">
                             <div style="display:flex; gap:5px;">
                                <input type="date" class="field-date">
                                <input type="time" class="field-time">
                             </div>
                             <textarea class="field-desc" placeholder="Deskripsi Aktivitas"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER LOMBA
    function renderLomba() {
        const container = document.getElementById('lombaContainer');
        const searchTerm = document.getElementById('inpSearchLomba') ? document.getElementById('inpSearchLomba').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpLombaFilter') ? document.getElementById('inpLombaFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = lombas.filter(l => l.title.toLowerCase().includes(searchTerm));

        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'imp_very') filtered = filtered.filter(l => l.importance === 'Sangat Penting');
        if(filterVal === 'stat_active') filtered = filtered.filter(l => l.status === 'Berjalan');
        if(filterVal === 'stat_won') filtered = filtered.filter(l => l.result === 'Menang');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada data lomba.</div>';
            return;
        }

        filtered.forEach(l => {
            const card = document.createElement('div');
            card.className = 'lomba-card';
            const bgImage = getLombaImage(l.field);
            
            // Warna Status
            let statCol = '#e879f9';
            if(l.status === 'Menang') statCol = '#fbbf24';
            if(l.status === 'Berjalan') statCol = '#34d399';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateLomba(${l.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteLomba(${l.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${l.stage}</div>
                </div>
                <div class="lomba-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${l.field}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${l.status}</span>
                    </div>
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${l.title}</h3>
                    <div style="font-size:0.8rem; color:#a78bfa; margin-bottom:0.5rem;">${l.organizer || '-'}</div>
                    <p style="font-size:0.9rem; color:#d8b4fe; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto;">${l.desc || '...'}</p>
                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar-check"></i> DL: ${formatDate(l.deadlineDate)}</span>
                         <span style="font-size:0.8rem; color:#fbbf24;">${l.importance}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openLombaDetail(l.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE LOMBA (CRUD)
    function saveLomba() {
        const id = document.getElementById('lombaId').value;
        const wrapper = document.getElementById('wrapperSubLomba');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const time = item.querySelector('.field-time').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, time, desc });
        });

        const now = new Date().toLocaleString(); // Timestamp
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (lombas.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpLTitle').value,
            desc: document.getElementById('inpLDesc').value,
            organizer: document.getElementById('inpLOrganizer').value,
            field: document.getElementById('inpLField').value,
            category: document.getElementById('inpLCat').value,
            importance: document.getElementById('inpLImp').value,
            target: document.getElementById('inpLTarget').value,
            
            startDate: document.getElementById('inpLStart').value,
            endDate: document.getElementById('inpLEnd').value,
            duration: document.getElementById('inpLDuration').value,
            deadlineDate: document.getElementById('inpLDeadDate').value,
            deadlineTime: document.getElementById('inpLDeadTime').value,
            
            status: document.getElementById('inpLStatus').value,
            stage: document.getElementById('inpLStage').value,
            teamName: document.getElementById('inpLTeamName').value,
            teamCount: document.getElementById('inpLTeamCount').value,
            role: document.getElementById('inpLRole').value,
            owner: document.getElementById('inpLOwner').value,
            
            media: document.getElementById('inpLMedia').value,
            linkReg: document.getElementById('inpLLinkReg').value,
            linkDoc: document.getElementById('inpLLinkDoc').value,
            linkSub: document.getElementById('inpLLinkSub').value,
            notes: document.getElementById('inpLNotes').value,
            
            subActivities: subData,
            
            isSubmit: document.getElementById('inpLIsSubmit').checked,
            dateSubmit: document.getElementById('inpLDateSubmit').value,
            result: document.getElementById('inpLResult').value,
            rank: document.getElementById('inpLRank').value,
            reward: document.getElementById('inpLReward').value
        };

        if(!dataObj.title) { alert("Judul lomba wajib diisi!"); return; }

        if(id) {
            const idx = lombas.findIndex(x => x.id == id);
            lombas[idx] = dataObj;
        } else {
            lombas.push(dataObj);
        }
        localStorage.setItem('myLombas', JSON.stringify(lombas));
        closeLombaModal();
        renderLomba();
    }

    // 5. DETAIL LOMBA
    let currentLombaId = null;
    function openLombaDetail(id) {
        const l = lombas.find(x => x.id === id);
        if(!l) return;
        currentLombaId = id;
        
        document.getElementById('viewLCover').src = getLombaImage(l.field);
        document.getElementById('viewLTitle').innerText = l.title;
        document.getElementById('viewLOrganizer').innerText = l.organizer;
        document.getElementById('viewLStatus').innerText = l.status;
        document.getElementById('viewLStage').innerText = l.stage;
        document.getElementById('viewLImp').innerText = l.importance;
        
        document.getElementById('viewLField').innerText = l.field;
        document.getElementById('viewLCat').innerText = l.category;
        document.getElementById('viewLTarget').innerText = l.target;
        
        document.getElementById('viewLStart').innerText = formatDate(l.startDate);
        document.getElementById('viewLEnd').innerText = formatDate(l.endDate);
        document.getElementById('viewLDur').innerText = l.duration || '-';
        document.getElementById('viewLDead').innerText = formatDate(l.deadlineDate) + ' ' + (l.deadlineTime || '');
        document.getElementById('viewLMedia').innerText = l.media;
        document.getElementById('viewLOwner').innerText = l.owner || '-';
        
        document.getElementById('viewLTeamName').innerText = l.teamName || '-';
        document.getElementById('viewLTeamCount').innerText = l.teamCount || '-';
        document.getElementById('viewLRole').innerText = l.role || '-';
        
        const setLink = (elId, url) => {
            const el = document.getElementById(elId);
            if(url) { el.href = url; el.style.display = 'block'; } else { el.style.display = 'none'; }
        };
        setLink('viewLLinkReg', l.linkReg);
        setLink('viewLLinkDoc', l.linkDoc);
        setLink('viewLLinkSub', l.linkSub);
        
        document.getElementById('viewLDesc').innerText = l.desc || '-';
        document.getElementById('viewLNotes').innerText = l.notes || '-';
        
        document.getElementById('viewLIsSubmit').innerHTML = l.isSubmit ? '<span style="color:#34d399">Sudah</span>' : '<span style="color:#f87171">Belum</span>';
        document.getElementById('viewLDateSubmit').innerText = l.isSubmit ? formatDate(l.dateSubmit) : '-';
        document.getElementById('viewLRank').innerText = l.rank || '-';
        document.getElementById('viewLReward').innerText = l.reward || '-';
        
        // Badge Result Float
        const resBadge = document.getElementById('viewLResultBadge');
        if(l.result && l.result !== 'Pending') {
            resBadge.style.display = 'block';
            resBadge.innerText = l.result;
        } else {
            resBadge.style.display = 'none';
        }

        const subC = document.getElementById('viewListSubLomba');
        subC.innerHTML = '';
        if(l.subActivities && l.subActivities.length > 0) {
            l.subActivities.forEach(sub => {
                const r = document.createElement('div');
                r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(167,139,250,0.2);";
                r.innerHTML = `<strong style="color:#e879f9;">${sub.name}</strong>
                               <div style="font-size:0.8rem; color:#9ca3af;">${formatDate(sub.date)} ${sub.time}</div>
                               <div style="font-size:0.9rem; color:#d8b4fe;">${sub.desc}</div>`;
                subC.appendChild(r);
            });
        } else {
            subC.innerHTML = '<div style="color:gray;">Tidak ada sub aktivitas.</div>';
        }

        document.getElementById('viewLCreated').innerText = "Created: " + l.createdAt;
        document.getElementById('viewLUpdated').innerText = "Last Update: " + l.updatedAt;

        document.getElementById('lombaModalTitle').innerText = "Detail Lomba";
        document.getElementById('lombaForm').classList.add('hidden');
        document.getElementById('lombaDetailView').classList.remove('hidden');
        document.getElementById('lombaFormActions').classList.add('hidden');
        document.getElementById('lombaDetailActions').classList.remove('hidden');
        document.getElementById('lombaModalOverlay').classList.add('active');
    }

    // 6. UTILS
    function deleteLomba(id, e) {
        e.stopPropagation();
        if(confirm("Hapus lomba ini?")) {
            lombas = lombas.filter(x => x.id !== id);
            localStorage.setItem('myLombas', JSON.stringify(lombas));
            renderLomba();
        }
    }
    function duplicateLomba(id, e) {
        e.stopPropagation();
        const origin = lombas.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            lombas.push(copy);
            localStorage.setItem('myLombas', JSON.stringify(lombas));
            renderLomba();
        }
    }
   function openLombaModal() {
        // Reset Form
        document.getElementById('lombaForm').reset();
        document.getElementById('lombaId').value = '';
        document.getElementById('wrapperSubLomba').innerHTML = '';
        
        // Reset Judul Modal
        document.getElementById('lombaModalTitle').innerText = "New Competition";
        
        // --- LOGIKA TAMPILAN (SWITCH VIEW) ---
        
        // 1. Tampilkan Form, Sembunyikan Detail View
        document.getElementById('lombaForm').classList.remove('hidden');
        document.getElementById('lombaDetailView').classList.add('hidden');
        
        // 2. [PENTING] Tampilkan Tombol SAVE, Sembunyikan Tombol EDIT/CLOSE
        document.getElementById('lombaFormActions').classList.remove('hidden');
        document.getElementById('lombaDetailActions').classList.add('hidden');
        
        // 3. Buka Modal
        document.getElementById('lombaModalOverlay').classList.add('active');
    }
    function closeLombaModal() { document.getElementById('lombaModalOverlay').classList.remove('active'); }
    function editLomba() {
        const l = lombas.find(x => x.id === currentLombaId);
        if(!l) return;
        // Populate form (manual mapping for all fields)
        document.getElementById('lombaId').value = l.id;
        document.getElementById('inpLTitle').value = l.title;
        document.getElementById('inpLDesc').value = l.desc;
        document.getElementById('inpLOrganizer').value = l.organizer;
        document.getElementById('inpLField').value = l.field;
        document.getElementById('inpLCat').value = l.category;
        document.getElementById('inpLImp').value = l.importance;
        document.getElementById('inpLTarget').value = l.target;
        document.getElementById('inpLStart').value = l.startDate;
        document.getElementById('inpLEnd').value = l.endDate;
        document.getElementById('inpLDuration').value = l.duration;
        document.getElementById('inpLDeadDate').value = l.deadlineDate;
        document.getElementById('inpLDeadTime').value = l.deadlineTime;
        document.getElementById('inpLStatus').value = l.status;
        document.getElementById('inpLStage').value = l.stage;
        document.getElementById('inpLTeamName').value = l.teamName;
        document.getElementById('inpLTeamCount').value = l.teamCount;
        document.getElementById('inpLRole').value = l.role;
        document.getElementById('inpLOwner').value = l.owner;
        document.getElementById('inpLMedia').value = l.media;
        document.getElementById('inpLLinkReg').value = l.linkReg;
        document.getElementById('inpLLinkDoc').value = l.linkDoc;
        document.getElementById('inpLLinkSub').value = l.linkSub;
        document.getElementById('inpLNotes').value = l.notes;
        document.getElementById('inpLIsSubmit').checked = l.isSubmit;
        document.getElementById('inpLDateSubmit').value = l.dateSubmit;
        document.getElementById('inpLResult').value = l.result;
        document.getElementById('inpLRank').value = l.rank;
        document.getElementById('inpLReward').value = l.reward;
        
        // Re-generate sub fields
        const wrapper = document.getElementById('wrapperSubLomba');
        wrapper.innerHTML = '';
        if(l.subActivities) {
            document.getElementById('countSubLomba').value = l.subActivities.length;
            l.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#e879f9; margin-bottom:5px;">Aktivitas</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}"><input type="time" class="field-time" value="${sub.time}"></div>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }

        document.getElementById('lombaModalTitle').innerText = "Edit Competition";
        document.getElementById('lombaDetailView').classList.add('hidden');
        document.getElementById('lombaForm').classList.remove('hidden');
        document.getElementById('lombaDetailActions').classList.add('hidden');
        document.getElementById('lombaFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR OLAHRAGA (SPORT) ---

    // 1. ASSETS KATEGORI OLAHRAGA (30+ Pilihan)
    const sportCategoryAssets = {
        "Cardio": "https://images.unsplash.com/photo-1538805060512-e2d966d5bce7?w=800&q=80",
        "Strength Training": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        "Bodyweight": "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80",
        "Yoga": "https://images.unsplash.com/photo-1544367563-12123d895951?w=800&q=80",
        "Pilates": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
        "CrossFit": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        "HIIT": "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80",
        "Stretching": "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=800&q=80",
        "Calisthenics": "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80",
        "Aerobics": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
        "Lari": "https://images.unsplash.com/photo-1452626038306-9aae5e0fd165?w=800&q=80",
        "Bersepeda": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
        "Renang": "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
        "Futsal": "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
        "Sepak Bola": "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
        "Badminton": "https://images.unsplash.com/photo-1626224583764-847890e05399?w=800&q=80",
        "Basket": "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
        "Tenis": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
        "Voli": "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
        "Golf": "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
        "Boxing": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
        "Kickboxing": "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80",
        "Muay Thai": "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800&q=80",
        "MMA": "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?w=800&q=80",
        "Judo": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
        "Hiking": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
        "Climbing": "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
        "Zumba": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
        "Dance": "https://images.unsplash.com/photo-1535525153412-5a091c570148?w=800&q=80",
        "Skating": "https://images.unsplash.com/photo-1471017851983-fc49d89c57c2?w=800&q=80",
        "Powerlifting": "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
        "Bodybuilding": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
        "Gymnastics": "https://images.unsplash.com/photo-1516246843873-9d12356b6fab?w=800&q=80",
        "E-Sports": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
    };

    // Fungsi Ambil Gambar (Revisi: Cek dari map aset)
    function getSportImage(cat) {
        // Jika kategori ada di map, pakai linknya. Jika tidak, pakai gambar default gym.
        return sportCategoryAssets[cat] || "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80";
    }
    
    // --- 2. UPDATE DROPDOWN KATEGORI (BIAR SINKRON DENGAN ASET) ---
    const sCatSelect = document.getElementById('inpSCategory');
    if(sCatSelect) {
        sCatSelect.innerHTML = ''; // Bersihkan opsi lama
        Object.keys(sportCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            sCatSelect.appendChild(opt);
        });
    }

    let sports = JSON.parse(localStorage.getItem('mySports')) || [];

    // 2. SUB JADWAL GENERATOR (Nama, Tanggal, Durasi, Deskripsi)
    function generateSubSportFields() {
        const count = document.getElementById('countSubSport').value;
        const wrapper = document.getElementById('wrapperSubSport');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#a3e635; margin-bottom:5px;">Aktivitas #${i}</strong>
                             <input type="text" class="field-name" placeholder="Nama Aktivitas (ex: Bench Press)">
                             <div style="display:flex; gap:5px;">
                                <input type="date" class="field-date">
                                <input type="text" class="field-duration" placeholder="Durasi (ex: 15 Menit)">
                             </div>
                             <textarea class="field-desc" placeholder="Deskripsi (ex: 3 Sets x 12 Reps)"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER SPORT
  // --- 3. REVISI RENDER SPORT (CLEAN LOOK: NO OWNER, WHITE DESC) ---
    function renderSport() {
        const container = document.getElementById('sportContainer');
        const searchTerm = document.getElementById('inpSearchSport') ? document.getElementById('inpSearchSport').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpSportFilter') ? document.getElementById('inpSportFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = sports.filter(s => s.title.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'imp_very') filtered = filtered.filter(s => s.importance === 'Sangat Penting');
        if(filterVal === 'stat_doing') filtered = filtered.filter(s => s.status === 'Sedang Dilakukan');
        if(filterVal === 'con_outdoor') filtered = filtered.filter(s => s.concept === 'Outdoor');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada jadwal olahraga.</div>';
            return;
        }

        filtered.forEach(s => {
            const card = document.createElement('div');
            card.className = 'sport-card';
            
            const bgImage = s.img || getSportImage(s.category);
            
            let statCol = '#a3e635'; 
            if(s.status === 'Selesai') statCol = '#34d399'; 
            if(s.status === 'Dibatalkan') statCol = '#f87171'; 
            if(s.status === 'Sedang Dilakukan') statCol = '#22d3ee'; 

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateSport(${s.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteSport(${s.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                    </div>
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">${s.concept}</div>
                </div>
                <div class="sport-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${s.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${s.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${s.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${s.desc || '...'}
                    </p>
                    
                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-clock"></i> ${formatDate(s.date)}</span>
                         <span style="font-size:0.8rem; color:#fbbf24;">${s.importance}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openSportDetail(s.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE SPORT
    function saveSport() {
        const id = document.getElementById('sportId').value;
        
        // Ambil Sub Sport
        const wrapper = document.getElementById('wrapperSubSport');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const duration = item.querySelector('.field-duration').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, duration, desc });
        });

        const now = new Date().toLocaleString();
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (sports.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpSTitle').value,
            desc: document.getElementById('inpSDesc').value,
            owner: document.getElementById('inpSOwner').value,
            category: document.getElementById('inpSCategory').value,
            
            date: document.getElementById('inpSDate').value,
            time: document.getElementById('inpSTime').value,
            type: document.getElementById('inpSType').value,
            concept: document.getElementById('inpSConcept').value,
            location: document.getElementById('inpSLoc').value,
            
            status: document.getElementById('inpSStatus').value,
            importance: document.getElementById('inpSImp').value,
            
            subActivities: subData
        };

        if(!dataObj.title) { alert("Judul olahraga wajib diisi!"); return; }

        if(id) {
            const idx = sports.findIndex(x => x.id == id);
            sports[idx] = dataObj;
        } else {
            sports.push(dataObj);
        }
        localStorage.setItem('mySports', JSON.stringify(sports));
        closeSportModal();
        renderSport();
    }

    // 5. DETAIL VIEW SPORT
    let currentSportId = null;
    function openSportDetail(id) {
        const s = sports.find(x => x.id === id);
        if(!s) return;
        currentSportId = id;

        // Image & Headers
        const imgEl = document.getElementById('viewSCover');
        imgEl.src = s.img || getSportImage(s.category);
        imgEl.onerror = function() { this.onerror = null; this.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'; };
        
        document.getElementById('viewSTitle').innerText = s.title;
        document.getElementById('viewSCategory').innerText = s.category;
        document.getElementById('viewSOwner').innerText = s.owner || '-';
        document.getElementById('viewSImp').innerText = s.importance;
        
        // Status Badge
        const statB = document.getElementById('viewSStatus');
        statB.innerText = s.status;
        if(s.status === 'Sedang Dilakukan') statB.style.cssText = "color:#22d3ee; border-color:#22d3ee; background:rgba(34,211,238,0.2)";
        else if(s.status === 'Selesai') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
        else statB.style.cssText = "color:#a3e635; border-color:#a3e635; background:rgba(163,230,53,0.2)";
        
        document.getElementById('viewSType').innerText = s.type;
        document.getElementById('viewSConceptBadge').innerText = s.concept;

        // Grid Info
        document.getElementById('viewSDate').innerText = formatDate(s.date);
        document.getElementById('viewSTime').innerText = s.time || '-';
        document.getElementById('viewSLoc').innerText = s.location || '-';
        document.getElementById('viewSConcept').innerText = s.concept;
        document.getElementById('viewSTypeText').innerText = s.type;
        
        document.getElementById('viewSDesc').innerText = s.desc || '-';

        // Sub Activities
        const subC = document.getElementById('viewListSubSport');
        subC.innerHTML = '';
        if(s.subActivities && s.subActivities.length > 0) {
            s.subActivities.forEach(sub => {
                const r = document.createElement('div');
                r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(132,204,22,0.2);";
                r.innerHTML = `<div style="display:flex; justify-content:space-between;">
                                <strong style="color:#a3e635;">${sub.name}</strong>
                                <span style="font-size:0.8rem; color:#22d3ee;">${sub.duration || '-'}</span>
                               </div>
                               <div style="font-size:0.8rem; color:#9ca3af; margin:5px 0;">Tgl: ${formatDate(sub.date)}</div>
                               <div style="font-size:0.9rem; color:#bef264;">${sub.desc}</div>`;
                subC.appendChild(r);
            });
        } else {
            subC.innerHTML = '<div style="color:gray;">Tidak ada detail aktivitas.</div>';
        }

        document.getElementById('viewSCreated').innerText = "Created: " + s.createdAt;
        document.getElementById('viewSUpdated').innerText = "Last Update: " + s.updatedAt;

        // Switch View
        document.getElementById('sportModalTitle').innerText = "Detail Workout";
        document.getElementById('sportForm').classList.add('hidden');
        document.getElementById('sportDetailView').classList.remove('hidden');
        document.getElementById('sportFormActions').classList.add('hidden');
        document.getElementById('sportDetailActions').classList.remove('hidden');
        document.getElementById('sportModalOverlay').classList.add('active');
    }

    // 6. UTILS (Duplicate, Delete, Modal, Edit)
    function deleteSport(id, e) {
        e.stopPropagation();
        if(confirm("Hapus jadwal ini?")) {
            sports = sports.filter(x => x.id !== id);
            localStorage.setItem('mySports', JSON.stringify(sports));
            renderSport();
        }
    }
    function duplicateSport(id, e) {
        e.stopPropagation();
        const origin = sports.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            sports.push(copy);
            localStorage.setItem('mySports', JSON.stringify(sports));
            renderSport();
        }
    }
    function openSportModal() {
        document.getElementById('sportForm').reset();
        document.getElementById('sportId').value = '';
        document.getElementById('wrapperSubSport').innerHTML = '';
        document.getElementById('sportModalTitle').innerText = "New Workout";
        document.getElementById('sportForm').classList.remove('hidden');
        document.getElementById('sportDetailView').classList.add('hidden');
        document.getElementById('sportFormActions').classList.remove('hidden');
        document.getElementById('sportDetailActions').classList.add('hidden');
        document.getElementById('sportModalOverlay').classList.add('active');
    }
    function closeSportModal() { document.getElementById('sportModalOverlay').classList.remove('active'); }
    function editSport() {
        const s = sports.find(x => x.id === currentSportId);
        if(!s) return;
        document.getElementById('sportId').value = s.id;
        document.getElementById('inpSTitle').value = s.title;
        document.getElementById('inpSDesc').value = s.desc;
        document.getElementById('inpSOwner').value = s.owner;
        document.getElementById('inpSCategory').value = s.category;
        document.getElementById('inpSDate').value = s.date;
        document.getElementById('inpSTime').value = s.time;
        document.getElementById('inpSType').value = s.type;
        document.getElementById('inpSConcept').value = s.concept;
        document.getElementById('inpSLoc').value = s.location;
        document.getElementById('inpSStatus').value = s.status;
        document.getElementById('inpSImp').value = s.importance;
        
        // Regen Sub
        const wrapper = document.getElementById('wrapperSubSport');
        wrapper.innerHTML = '';
        if(s.subActivities) {
            document.getElementById('countSubSport').value = s.subActivities.length;
            s.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#a3e635; margin-bottom:5px;">Aktivitas</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}"><input type="text" class="field-duration" value="${sub.duration}"></div>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }
        document.getElementById('sportModalTitle').innerText = "Edit Workout";
        document.getElementById('sportDetailView').classList.add('hidden');
        document.getElementById('sportForm').classList.remove('hidden');
        document.getElementById('sportDetailActions').classList.add('hidden');
        document.getElementById('sportFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR MAKAN (FOOD) ---

    // 1. ASSETS KATEGORI MAKANAN (20 Opsi)
    const foodCategoryAssets = {
        "Sarapan": "https://images.unsplash.com/photo-1533089862017-90d27442a51f?w=800&q=80",
        "Makan Siang": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        "Makan Malam": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        "Camilan": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&q=80",
        "Diet": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
        "Cheat Meal": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        "Vegetarian": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        "Vegan": "https://images.unsplash.com/photo-1511690656952-34342d2c2836?w=800&q=80",
        "Fast Food": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80",
        "Homemade": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
        "Restoran": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        "Street Food": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        "Sehat": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
        "Tinggi Protein": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80",
        "Rendah Gula": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
        "Rendah Kalori": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
        "Tinggi Serat": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        "Minuman": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80",
        "Dessert": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80"
    };

    function getFoodImage(cat) {
        return foodCategoryAssets[cat] || "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80";
    }

    // Populate Dropdown
    const fCatSelect = document.getElementById('inpFCat');
    if(fCatSelect) {
        fCatSelect.innerHTML = '';
        Object.keys(foodCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            fCatSelect.appendChild(opt);
        });
    }

    let foods = JSON.parse(localStorage.getItem('myFoods')) || [];

    // 2. SUB FOOD GENERATOR
    function generateSubFoodFields() {
        const count = document.getElementById('countSubFood').value;
        const wrapper = document.getElementById('wrapperSubFood');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#fdba74; margin-bottom:5px;">Aktivitas #${i}</strong>
                             <input type="text" class="field-name" placeholder="Nama Aktivitas (ex: Memasak)">
                             <div style="display:flex; gap:5px;"><input type="date" class="field-date"><input type="time" class="field-time"></div>
                             <textarea class="field-desc" placeholder="Deskripsi"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER FOOD
    function renderFood() {
        const container = document.getElementById('foodContainer');
        const searchTerm = document.getElementById('inpSearchFood') ? document.getElementById('inpSearchFood').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpFoodFilter') ? document.getElementById('inpFoodFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = foods.filter(f => f.title.toLowerCase().includes(searchTerm));

        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'rate_high') filtered = filtered.filter(f => f.rating == 5);
        if(filterVal === 'stat_done') filtered = filtered.filter(f => f.status === 'Selesai');
        if(filterVal === 'type_healthy') filtered = filtered.filter(f => f.category === 'Sehat');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada jadwal makan.</div>';
            return;
        }

        filtered.forEach(f => {
            const card = document.createElement('div');
            card.className = 'food-card';
            
            const bgImage = getFoodImage(f.category);
            
            let statCol = '#fdba74'; 
            if(f.status === 'Selesai') statCol = '#34d399'; 
            if(f.status === 'Dimakan') statCol = '#f472b6'; 

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateFood(${f.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteFood(${f.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px; backdrop-filter:blur(4px);"><i class="ph ph-trash"></i></button>
                    </div>
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px);">${f.place}</div>
                </div>
                <div class="food-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${f.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${f.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${f.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${f.desc || '...'}
                    </p>
                    
                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(f.date)}</span>
                         <span style="font-size:0.8rem; color:#fbbf24;">${'⭐'.repeat(f.rating || 0)}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openFoodDetail(f.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE FOOD
    function saveFood() {
        const id = document.getElementById('foodId').value;
        const wrapper = document.getElementById('wrapperSubFood');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const time = item.querySelector('.field-time').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, time, desc });
        });

        const now = new Date().toLocaleString();
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (foods.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            title: document.getElementById('inpFTitle').value,
            desc: document.getElementById('inpFDesc').value,
            owner: document.getElementById('inpFOwner').value,
            category: document.getElementById('inpFCat').value,
            date: document.getElementById('inpFDate').value,
            time: document.getElementById('inpFTime').value,
            place: document.getElementById('inpFPlace').value,
            group: document.getElementById('inpFGroup').value,
            menu: document.getElementById('inpFMenu').value,
            drink: document.getElementById('inpFDrink').value,
            portion: document.getElementById('inpFPortion').value,
            status: document.getElementById('inpFStatus').value,
            imp: document.getElementById('inpFImp').value,
            goal: document.getElementById('inpFGoal').value,
            mood: document.getElementById('inpFMood').value,
            rating: document.getElementById('inpFRating').value,
            journal: document.getElementById('inpFJournal').value,
            link: document.getElementById('inpFLink').value,
            notes: document.getElementById('inpFNotes').value,
            subActivities: subData
        };

        if(!dataObj.title) { alert("Judul makan wajib diisi!"); return; }

        if(id) {
            const idx = foods.findIndex(x => x.id == id);
            foods[idx] = dataObj;
        } else {
            foods.push(dataObj);
        }
        localStorage.setItem('myFoods', JSON.stringify(foods));
        closeFoodModal();
        renderFood();
    }

    // 5. DETAIL VIEW
    let currentFoodId = null;
    function openFoodDetail(id) {
        const f = foods.find(x => x.id === id);
        if(!f) return;
        currentFoodId = id;

        document.getElementById('viewFCover').src = getFoodImage(f.category);
        document.getElementById('viewFTitle').innerText = f.title;
        document.getElementById('viewFCat').innerText = f.category;
        document.getElementById('viewFGoal').innerText = f.goal;
        
        // Status Badge
        const statB = document.getElementById('viewFStatus');
        statB.innerText = f.status;
        if(f.status === 'Selesai') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
        else statB.style.cssText = "color:#fdba74; border-color:#fdba74; background:rgba(253,186,116,0.2)";
        
        document.getElementById('viewFPlace').innerText = f.place;
        
        // Day Formula
        const dateObj = new Date(f.date);
        const days = ['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU'];
        document.getElementById('viewFDay').innerText = f.date ? days[dateObj.getDay()] : '-';

        document.getElementById('viewFDate').innerText = formatDate(f.date);
        document.getElementById('viewFTime').innerText = f.time || '-';
        document.getElementById('viewFOwner').innerText = f.owner || '-';
        document.getElementById('viewFMood').innerText = f.mood;
        document.getElementById('viewFPortion').innerText = f.portion;
        document.getElementById('viewFMenu').innerText = f.menu || '-';
        document.getElementById('viewFDrink').innerText = f.drink || '-';
        
        const lnk = document.getElementById('viewFLink');
        if(f.link) { lnk.href = f.link; lnk.style.display='inline'; } else { lnk.style.display='none'; }
        
        document.getElementById('viewFDesc').innerText = f.desc || '-';
        document.getElementById('viewFJournal').innerText = f.journal || 'Tidak ada catatan jurnal.';
        document.getElementById('viewFNotes').innerText = f.notes || '';
        
        // Rating Badge
        const rBadge = document.getElementById('viewFRatingBadge');
        if(f.rating) { rBadge.innerText = '⭐ ' + f.rating; rBadge.style.display = 'block'; } 
        else { rBadge.style.display = 'none'; }

        // Sub Activities
        const subC = document.getElementById('viewListSubFood');
        subC.innerHTML = '';
        if(f.subActivities && f.subActivities.length > 0) {
            f.subActivities.forEach(sub => {
                const r = document.createElement('div');
                r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(249,115,22,0.2);";
                r.innerHTML = `<strong style="color:#fdba74;">${sub.name}</strong>
                               <div style="font-size:0.8rem; color:#9ca3af; margin:5px 0;">${formatDate(sub.date)} ${sub.time}</div>
                               <div style="font-size:0.9rem; color:#fff;">${sub.desc}</div>`;
                subC.appendChild(r);
            });
        } else {
            subC.innerHTML = '<div style="color:gray;">Tidak ada sub aktivitas.</div>';
        }

        document.getElementById('viewFCreated').innerText = "Created: " + f.createdAt;
        document.getElementById('viewFUpdated').innerText = "Last Update: " + f.updatedAt;

        document.getElementById('foodModalTitle').innerText = "Detail Meal";
        document.getElementById('foodForm').classList.add('hidden');
        document.getElementById('foodDetailView').classList.remove('hidden');
        document.getElementById('foodFormActions').classList.add('hidden');
        document.getElementById('foodDetailActions').classList.remove('hidden');
        document.getElementById('foodModalOverlay').classList.add('active');
    }

    // 6. UTILS
    function deleteFood(id, e) {
        e.stopPropagation();
        if(confirm("Hapus jadwal makan ini?")) {
            foods = foods.filter(x => x.id !== id);
            localStorage.setItem('myFoods', JSON.stringify(foods));
            renderFood();
        }
    }
    function duplicateFood(id, e) {
        e.stopPropagation();
        const origin = foods.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            foods.push(copy);
            localStorage.setItem('myFoods', JSON.stringify(foods));
            renderFood();
        }
    }
    function openFoodModal() {
        document.getElementById('foodForm').reset();
        document.getElementById('foodId').value = '';
        document.getElementById('wrapperSubFood').innerHTML = '';
        document.getElementById('foodModalTitle').innerText = "New Meal Log";
        document.getElementById('foodForm').classList.remove('hidden');
        document.getElementById('foodDetailView').classList.add('hidden');
        document.getElementById('foodFormActions').classList.remove('hidden');
        document.getElementById('foodDetailActions').classList.add('hidden');
        document.getElementById('foodModalOverlay').classList.add('active');
    }
    function closeFoodModal() { document.getElementById('foodModalOverlay').classList.remove('active'); }
    function editFood() {
        const f = foods.find(x => x.id === currentFoodId);
        if(!f) return;
        document.getElementById('foodId').value = f.id;
        document.getElementById('inpFTitle').value = f.title;
        document.getElementById('inpFDesc').value = f.desc;
        document.getElementById('inpFOwner').value = f.owner;
        document.getElementById('inpFCat').value = f.category;
        document.getElementById('inpFDate').value = f.date;
        document.getElementById('inpFTime').value = f.time;
        document.getElementById('inpFPlace').value = f.place;
        document.getElementById('inpFGroup').value = f.group;
        document.getElementById('inpFMenu').value = f.menu;
        document.getElementById('inpFDrink').value = f.drink;
        document.getElementById('inpFPortion').value = f.portion;
        document.getElementById('inpFStatus').value = f.status;
        document.getElementById('inpFImp').value = f.imp;
        document.getElementById('inpFGoal').value = f.goal;
        document.getElementById('inpFMood').value = f.mood;
        document.getElementById('inpFRating').value = f.rating;
        document.getElementById('inpFJournal').value = f.journal;
        document.getElementById('inpFLink').value = f.link;
        document.getElementById('inpFNotes').value = f.notes;

        const wrapper = document.getElementById('wrapperSubFood');
        wrapper.innerHTML = '';
        if(f.subActivities) {
            document.getElementById('countSubFood').value = f.subActivities.length;
            f.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#fdba74; margin-bottom:5px;">Aktivitas</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}"><input type="time" class="field-time" value="${sub.time}"></div>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }
        document.getElementById('foodModalTitle').innerText = "Edit Meal";
        document.getElementById('foodDetailView').classList.add('hidden');
        document.getElementById('foodForm').classList.remove('hidden');
        document.getElementById('foodDetailActions').classList.add('hidden');
        document.getElementById('foodFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR LIBURAN (VACATION) ---

    // 1. ASSETS KATEGORI LIBURAN (20 Pilihan)
    const vacationCategoryAssets = {
        "Staycation": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        "Pantai": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        "Gunung": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        "Kota": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
        "Desa": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        "Alam": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        "Budaya": "https://images.unsplash.com/photo-1518182170546-07fb6ce92261?w=800&q=80",
        "Kuliner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        "Backpacker": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80",
        "Luxury": "https://images.unsplash.com/photo-1561026483-edab5b098f04?w=800&q=80",
        "Road Trip": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        "Solo Travel": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80",
        "Family Trip": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
        "Honeymoon": "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
        "Adventure": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80",
        "Religi": "https://images.unsplash.com/photo-1548625361-ec8f3d6c16a4?w=800&q=80",
        "Edukasi": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        "Festival": "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=800&q=80",
        "Workation": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
    };

    function getVacationImage(cat) {
        return vacationCategoryAssets[cat] || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80";
    }

    // Populate Dropdown
    const vCatSelect = document.getElementById('inpVCat');
    if(vCatSelect) {
        vCatSelect.innerHTML = '';
        Object.keys(vacationCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            vCatSelect.appendChild(opt);
        });
    }

    let vacations = JSON.parse(localStorage.getItem('myVacations')) || [];

    // 2. SUB VACATION GENERATOR
    function generateSubVacationFields() {
        const count = document.getElementById('countSubVacation').value;
        const wrapper = document.getElementById('wrapperSubVacation');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#5eead4; margin-bottom:5px;">Aktivitas #${i}</strong>
                             <input type="text" class="field-name" placeholder="Nama Aktivitas (ex: Check-in)">
                             <div style="display:flex; gap:5px;"><input type="date" class="field-date"><input type="time" class="field-time"></div>
                             <textarea class="field-desc" placeholder="Deskripsi"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER VACATION
    function renderVacation() {
        const container = document.getElementById('vacationContainer');
        const searchTerm = document.getElementById('inpSearchVacation') ? document.getElementById('inpSearchVacation').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpVacationFilter') ? document.getElementById('inpVacationFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = vacations.filter(v => v.title.toLowerCase().includes(searchTerm));

        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'rate_high') filtered = filtered.filter(v => v.rating == 5);
        if(filterVal === 'stat_done') filtered = filtered.filter(v => v.status === 'Selesai');
        if(filterVal === 'cat_beach') filtered = filtered.filter(v => v.category === 'Pantai');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada jadwal liburan.</div>';
            return;
        }

        filtered.forEach(v => {
            const card = document.createElement('div');
            card.className = 'vacation-card';
            
            const bgImage = getVacationImage(v.category);
            
            let statCol = '#5eead4';
            if(v.status === 'Selesai') statCol = '#34d399';
            if(v.status === 'Dilakukan') statCol = '#d946ef';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateVacation(${v.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteVacation(${v.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${v.location || '-'}</div>
                </div>
                <div class="vacation-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${v.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${v.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${v.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${v.desc || '...'}
                    </p>
                    
                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(v.date)}</span>
                         <span style="font-size:0.8rem; color:#fbbf24;">${'⭐'.repeat(v.rating || 0)}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openVacationDetail(v.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE VACATION
    function saveVacation() {
        const id = document.getElementById('vacationId').value;
        const wrapper = document.getElementById('wrapperSubVacation');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const time = item.querySelector('.field-time').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, time, desc });
        });

        const now = new Date().toLocaleString();
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (vacations.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpVTitle').value,
            desc: document.getElementById('inpVDesc').value,
            owner: document.getElementById('inpVOwner').value,
            category: document.getElementById('inpVCat').value,
            date: document.getElementById('inpVDate').value,
            time: document.getElementById('inpVTime').value,
            
            groupType: document.getElementById('inpVGroupType').value,
            count: document.getElementById('inpVCount').value,
            status: document.getElementById('inpVStatus').value,
            
            location: document.getElementById('inpVLoc').value,
            mainSpot: document.getElementById('inpVMainSpot').value,
            trans: document.getElementById('inpVTrans').value,
            acc: document.getElementById('inpVAcc').value,
            cost: document.getElementById('inpVCost').value,
            
            imp: document.getElementById('inpVImp').value,
            goal: document.getElementById('inpVGoal').value,
            mood: document.getElementById('inpVMood').value,
            
            journal: document.getElementById('inpVJournal').value,
            link: document.getElementById('inpVLink').value,
            rating: document.getElementById('inpVRating').value,
            notes: document.getElementById('inpVNotes').value,
            
            subActivities: subData
        };

        if(!dataObj.title) { alert("Judul liburan wajib diisi!"); return; }

        if(id) {
            const idx = vacations.findIndex(x => x.id == id);
            vacations[idx] = dataObj;
        } else {
            vacations.push(dataObj);
        }
        localStorage.setItem('myVacations', JSON.stringify(vacations));
        closeVacationModal();
        renderVacation();
    }

    // 5. DETAIL VIEW
    let currentVacationId = null;
    function openVacationDetail(id) {
        const v = vacations.find(x => x.id === id);
        if(!v) return;
        currentVacationId = id;

        document.getElementById('viewVCover').src = getVacationImage(v.category);
        document.getElementById('viewVTitle').innerText = v.title;
        document.getElementById('viewVCat').innerText = v.category;
        document.getElementById('viewVLoc').innerText = v.location || '-';
        
        const statB = document.getElementById('viewVStatus');
        statB.innerText = v.status;
        if(v.status === 'Selesai') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
        else statB.style.cssText = "color:#5eead4; border-color:#5eead4; background:rgba(94,234,212,0.2)";
        
        document.getElementById('viewVGroup').innerText = v.groupType;

        const dateObj = new Date(v.date);
        const days = ['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU'];
        document.getElementById('viewVDay').innerText = v.date ? days[dateObj.getDay()] : '-';

        document.getElementById('viewVDate').innerText = formatDate(v.date);
        document.getElementById('viewVTime').innerText = v.time || '-';
        document.getElementById('viewVMainSpot').innerText = v.mainSpot || '-';
        document.getElementById('viewVTrans').innerText = v.trans || '-';
        document.getElementById('viewVAcc').innerText = v.acc || '-';
        document.getElementById('viewVCost').innerText = v.cost ? "Rp " + parseInt(v.cost).toLocaleString() : '-';
        document.getElementById('viewVCount').innerText = v.count + " Orang";
        document.getElementById('viewVMood').innerText = v.mood;
        
        document.getElementById('viewVDesc').innerText = v.desc || '-';
        document.getElementById('viewVJournal').innerText = v.journal || 'Tidak ada catatan jurnal.';
        document.getElementById('viewVNotes').innerText = v.notes || 'Tidak ada catatan tambahan.';
        
        const lnk = document.getElementById('viewVLink');
        if(v.link) { lnk.href = v.link; lnk.style.display='inline'; } else { lnk.style.display='none'; }
        
        const rBadge = document.getElementById('viewVRatingBadge');
        if(v.rating) { rBadge.innerText = '⭐ ' + v.rating; rBadge.style.display = 'block'; } else { rBadge.style.display = 'none'; }

        const subC = document.getElementById('viewListSubVacation');
        subC.innerHTML = '';
        if(v.subActivities && v.subActivities.length > 0) {
            v.subActivities.forEach(sub => {
                const r = document.createElement('div');
                r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(45,212,191,0.2);";
                r.innerHTML = `<strong style="color:#5eead4;">${sub.name}</strong>
                               <div style="font-size:0.8rem; color:#9ca3af; margin:5px 0;">${formatDate(sub.date)} ${sub.time}</div>
                               <div style="font-size:0.9rem; color:#fff;">${sub.desc}</div>`;
                subC.appendChild(r);
            });
        } else {
            subC.innerHTML = '<div style="color:gray;">Tidak ada itinerary.</div>';
        }

        document.getElementById('viewVCreated').innerText = "Created: " + v.createdAt;
        document.getElementById('viewVUpdated').innerText = "Last Update: " + v.updatedAt;

        document.getElementById('vacationModalTitle').innerText = "Detail Holiday";
        document.getElementById('vacationForm').classList.add('hidden');
        document.getElementById('vacationDetailView').classList.remove('hidden');
        document.getElementById('vacationFormActions').classList.add('hidden');
        document.getElementById('vacationDetailActions').classList.remove('hidden');
        document.getElementById('vacationModalOverlay').classList.add('active');
    }

    // 6. UTILS
    function deleteVacation(id, e) {
        e.stopPropagation();
        if(confirm("Hapus jadwal liburan ini?")) {
            vacations = vacations.filter(x => x.id !== id);
            localStorage.setItem('myVacations', JSON.stringify(vacations));
            renderVacation();
        }
    }
    function duplicateVacation(id, e) {
        e.stopPropagation();
        const origin = vacations.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            vacations.push(copy);
            localStorage.setItem('myVacations', JSON.stringify(vacations));
            renderVacation();
        }
    }
    function openVacationModal() {
        document.getElementById('vacationForm').reset();
        document.getElementById('vacationId').value = '';
        document.getElementById('wrapperSubVacation').innerHTML = '';
        document.getElementById('vacationModalTitle').innerText = "New Holiday Plan";
        document.getElementById('vacationForm').classList.remove('hidden');
        document.getElementById('vacationDetailView').classList.add('hidden');
        document.getElementById('vacationFormActions').classList.remove('hidden');
        document.getElementById('vacationDetailActions').classList.add('hidden');
        document.getElementById('vacationModalOverlay').classList.add('active');
    }
    function closeVacationModal() { document.getElementById('vacationModalOverlay').classList.remove('active'); }
    function editVacation() {
        const v = vacations.find(x => x.id === currentVacationId);
        if(!v) return;
        document.getElementById('vacationId').value = v.id;
        document.getElementById('inpVTitle').value = v.title;
        document.getElementById('inpVDesc').value = v.desc;
        document.getElementById('inpVOwner').value = v.owner;
        document.getElementById('inpVCat').value = v.category;
        document.getElementById('inpVDate').value = v.date;
        document.getElementById('inpVTime').value = v.time;
        document.getElementById('inpVGroupType').value = v.groupType;
        document.getElementById('inpVCount').value = v.count;
        document.getElementById('inpVStatus').value = v.status;
        document.getElementById('inpVLoc').value = v.location;
        document.getElementById('inpVMainSpot').value = v.mainSpot;
        document.getElementById('inpVTrans').value = v.trans;
        document.getElementById('inpVAcc').value = v.acc;
        document.getElementById('inpVCost').value = v.cost;
        document.getElementById('inpVImp').value = v.imp;
        document.getElementById('inpVGoal').value = v.goal;
        document.getElementById('inpVMood').value = v.mood;
        document.getElementById('inpVJournal').value = v.journal;
        document.getElementById('inpVLink').value = v.link;
        document.getElementById('inpVRating').value = v.rating;
        document.getElementById('inpVNotes').value = v.notes;

        const wrapper = document.getElementById('wrapperSubVacation');
        wrapper.innerHTML = '';
        if(v.subActivities) {
            document.getElementById('countSubVacation').value = v.subActivities.length;
            v.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#5eead4; margin-bottom:5px;">Aktivitas</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}"><input type="time" class="field-time" value="${sub.time}"></div>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }
        document.getElementById('vacationModalTitle').innerText = "Edit Holiday";
        document.getElementById('vacationDetailView').classList.add('hidden');
        document.getElementById('vacationForm').classList.remove('hidden');
        document.getElementById('vacationDetailActions').classList.add('hidden');
        document.getElementById('vacationFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR IBADAH (WORSHIP) ---

    // 1. ASSETS KATEGORI IBADAH (20 Pilihan)
    const worshipCategoryAssets = {
        "Sholat Wajib": "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=800&q=80",
        "Sholat Sunnah": "https://images.unsplash.com/photo-1542202652-32c027811973?w=800&q=80",
        "Doa": "https://images.unsplash.com/photo-1507692049790-de58293a4697?w=800&q=80",
        "Dzikir": "https://images.unsplash.com/photo-1594950853503-6e3e130e9a72?w=800&q=80",
        "Puasa": "https://images.unsplash.com/photo-1555431103-63f0c2bd59a8?w=800&q=80",
        "Mengaji": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80",
        "Kajian": "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
        "Ibadah Mingguan": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
        "Ibadah Bulanan": "https://images.unsplash.com/photo-1507692049790-de58293a4697?w=800&q=80",
        "Ibadah Tahunan": "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80",
        "Sedekah": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
        "Zakat": "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
        "Pelayanan": "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80",
        "Meditasi": "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80",
        "Refleksi Diri": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        "Tafakur": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        "Retret": "https://images.unsplash.com/photo-1501854140884-074bf6bcb8ac?w=800&q=80",
        "Ibadah Bersama": "https://images.unsplash.com/photo-1519794273820-2c7bb197b1a2?w=800&q=80",
        "Ibadah Online": "https://images.unsplash.com/photo-1616588589676-60b30c3c67c9?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80"
    };

    function getWorshipImage(cat) {
        return worshipCategoryAssets[cat] || "https://images.unsplash.com/photo-1507692049790-de58293a4697?w=800&q=80";
    }

    // Populate Dropdown
    const wCatSelect = document.getElementById('inpWCat');
    if(wCatSelect) {
        wCatSelect.innerHTML = '';
        Object.keys(worshipCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            wCatSelect.appendChild(opt);
        });
    }

    let worships = JSON.parse(localStorage.getItem('myWorships')) || [];

    // 2. SUB WORSHIP GENERATOR
    function generateSubWorshipFields() {
        const count = document.getElementById('countSubWorship').value;
        const wrapper = document.getElementById('wrapperSubWorship');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#facc15; margin-bottom:5px;">Aktivitas #${i}</strong>
                             <input type="text" class="field-name" placeholder="Nama Aktivitas (ex: Wudhu)">
                             <div style="display:flex; gap:5px;"><input type="date" class="field-date"><input type="time" class="field-time"></div>
                             <textarea class="field-desc" placeholder="Deskripsi"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER WORSHIP
    function renderWorship() {
        const container = document.getElementById('worshipContainer');
        const searchTerm = document.getElementById('inpSearchWorship') ? document.getElementById('inpSearchWorship').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpWorshipFilter') ? document.getElementById('inpWorshipFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = worships.filter(w => w.title.toLowerCase().includes(searchTerm));

        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'stat_done') filtered = filtered.filter(w => w.status === 'Selesai');
        if(filterVal === 'type_wajib') filtered = filtered.filter(w => w.type === 'Wajib');
        if(filterVal === 'khusyuk_high') filtered = filtered.filter(w => w.solemn === 'Tinggi');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada jadwal ibadah.</div>';
            return;
        }

        filtered.forEach(w => {
            const card = document.createElement('div');
            card.className = 'worship-card';
            
            const bgImage = getWorshipImage(w.category);
            
            let statCol = '#facc15';
            if(w.status === 'Selesai') statCol = '#34d399';
            if(w.status === 'Dilakukan') statCol = '#a5b4fc';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateWorship(${w.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteWorship(${w.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${w.type || '-'}</div>
                </div>
                <div class="worship-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${w.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${w.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${w.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${w.desc || '...'}
                    </p>
                    
                    <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar-check"></i> ${formatDate(w.date)}</span>
                         <span style="font-size:0.8rem; color:#facc15;">${w.solemn === 'Tinggi' ? '⭐⭐⭐' : (w.solemn === 'Cukup' ? '⭐⭐' : '⭐')}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openWorshipDetail(w.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE WORSHIP
    function saveWorship() {
        const id = document.getElementById('worshipId').value;
        const wrapper = document.getElementById('wrapperSubWorship');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const time = item.querySelector('.field-time').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, time, desc });
        });

        const now = new Date().toLocaleString();
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (worships.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpWTitle').value,
            desc: document.getElementById('inpWDesc').value,
            owner: document.getElementById('inpWOwner').value,
            category: document.getElementById('inpWCat').value,
            date: document.getElementById('inpWDate').value,
            time: document.getElementById('inpWTime').value,
            duration: document.getElementById('inpWDur').value,
            
            groupType: document.getElementById('inpWGroupType').value,
            place: document.getElementById('inpWPlace').value,
            status: document.getElementById('inpWStatus').value,
            type: document.getElementById('inpWType').value,
            imp: document.getElementById('inpWImp').value,
            
            goal: document.getElementById('inpWGoal').value,
            mood: document.getElementById('inpWMood').value,
            solemn: document.getElementById('inpWSolemn').value,
            material: document.getElementById('inpWMaterial').value,
            partner: document.getElementById('inpWPartner').value,
            
            journal: document.getElementById('inpWJournal').value,
            link: document.getElementById('inpWLink').value,
            notes: document.getElementById('inpWNotes').value,
            
            subActivities: subData
        };

        if(!dataObj.title) { alert("Judul ibadah wajib diisi!"); return; }

        if(id) {
            const idx = worships.findIndex(x => x.id == id);
            worships[idx] = dataObj;
        } else {
            worships.push(dataObj);
        }
        localStorage.setItem('myWorships', JSON.stringify(worships));
        closeWorshipModal();
        renderWorship();
    }

    // 5. DETAIL VIEW
    let currentWorshipId = null;
    function openWorshipDetail(id) {
        const w = worships.find(x => x.id === id);
        if(!w) return;
        currentWorshipId = id;

        document.getElementById('viewWCover').src = getWorshipImage(w.category);
        document.getElementById('viewWTitle').innerText = w.title;
        document.getElementById('viewWCat').innerText = w.category;
        document.getElementById('viewWPlace').innerText = w.place;
        
        const statB = document.getElementById('viewWStatus');
        statB.innerText = w.status;
        if(w.status === 'Selesai') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
        else statB.style.cssText = "color:#facc15; border-color:#facc15; background:rgba(250,204,21,0.2)";
        
        document.getElementById('viewWType').innerText = w.type;

        const dateObj = new Date(w.date);
        const days = ['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU'];
        document.getElementById('viewWDay').innerText = w.date ? days[dateObj.getDay()] : '-';

        document.getElementById('viewWDate').innerText = formatDate(w.date);
        document.getElementById('viewWTime').innerText = w.time || '-';
        document.getElementById('viewWGoal').innerText = w.goal || '-';
        document.getElementById('viewWMood').innerText = w.mood;
        document.getElementById('viewWDur').innerText = (w.duration || '0') + ' Menit';
        document.getElementById('viewWMaterial').innerText = w.material || '-';
        document.getElementById('viewWPartner').innerText = w.partner || '-';
        
        const lnk = document.getElementById('viewWLink');
        if(w.link) { lnk.href = w.link; lnk.style.display='inline'; } else { lnk.style.display='none'; }
        
        const rBadge = document.getElementById('viewWSolemnBadge');
        rBadge.innerText = w.solemn + ' Kekhusyukan';

        document.getElementById('viewWDesc').innerText = w.desc || '-';
        document.getElementById('viewWJournal').innerText = w.journal || 'Tidak ada refleksi.';
        document.getElementById('viewWNotes').innerText = w.notes || 'Tidak ada catatan tambahan.';

        const subC = document.getElementById('viewListSubWorship');
        subC.innerHTML = '';
        if(w.subActivities && w.subActivities.length > 0) {
            w.subActivities.forEach(sub => {
                const r = document.createElement('div');
                r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(250,204,21,0.2);";
                r.innerHTML = `<strong style="color:#facc15;">${sub.name}</strong>
                               <div style="font-size:0.8rem; color:#9ca3af; margin:5px 0;">${formatDate(sub.date)} ${sub.time}</div>
                               <div style="font-size:0.9rem; color:#fff;">${sub.desc}</div>`;
                subC.appendChild(r);
            });
        } else {
            subC.innerHTML = '<div style="color:gray;">Tidak ada sub aktivitas.</div>';
        }

        document.getElementById('viewWCreated').innerText = "Created: " + w.createdAt;
        document.getElementById('viewWUpdated').innerText = "Last Update: " + w.updatedAt;

        document.getElementById('worshipModalTitle').innerText = "Detail Worship";
        document.getElementById('worshipForm').classList.add('hidden');
        document.getElementById('worshipDetailView').classList.remove('hidden');
        document.getElementById('worshipFormActions').classList.add('hidden');
        document.getElementById('worshipDetailActions').classList.remove('hidden');
        document.getElementById('worshipModalOverlay').classList.add('active');
    }

    // 6. UTILS
    function deleteWorship(id, e) {
        e.stopPropagation();
        if(confirm("Hapus jadwal ibadah ini?")) {
            worships = worships.filter(x => x.id !== id);
            localStorage.setItem('myWorships', JSON.stringify(worships));
            renderWorship();
        }
    }
    function duplicateWorship(id, e) {
        e.stopPropagation();
        const origin = worships.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            worships.push(copy);
            localStorage.setItem('myWorships', JSON.stringify(worships));
            renderWorship();
        }
    }
    function openWorshipModal() {
        document.getElementById('worshipForm').reset();
        document.getElementById('worshipId').value = '';
        document.getElementById('wrapperSubWorship').innerHTML = '';
        document.getElementById('worshipModalTitle').innerText = "New Worship Log";
        document.getElementById('worshipForm').classList.remove('hidden');
        document.getElementById('worshipDetailView').classList.add('hidden');
        document.getElementById('worshipFormActions').classList.remove('hidden');
        document.getElementById('worshipDetailActions').classList.add('hidden');
        document.getElementById('worshipModalOverlay').classList.add('active');
    }
    function closeWorshipModal() { document.getElementById('worshipModalOverlay').classList.remove('active'); }
    function editWorship() {
        const w = worships.find(x => x.id === currentWorshipId);
        if(!w) return;
        document.getElementById('worshipId').value = w.id;
        document.getElementById('inpWTitle').value = w.title;
        document.getElementById('inpWDesc').value = w.desc;
        document.getElementById('inpWOwner').value = w.owner;
        document.getElementById('inpWCat').value = w.category;
        document.getElementById('inpWDate').value = w.date;
        document.getElementById('inpWTime').value = w.time;
        document.getElementById('inpWDur').value = w.duration;
        document.getElementById('inpWGroupType').value = w.groupType;
        document.getElementById('inpWPlace').value = w.place;
        document.getElementById('inpWStatus').value = w.status;
        document.getElementById('inpWType').value = w.type;
        document.getElementById('inpWImp').value = w.imp;
        document.getElementById('inpWGoal').value = w.goal;
        document.getElementById('inpWMood').value = w.mood;
        document.getElementById('inpWSolemn').value = w.solemn;
        document.getElementById('inpWMaterial').value = w.material;
        document.getElementById('inpWPartner').value = w.partner;
        document.getElementById('inpWJournal').value = w.journal;
        document.getElementById('inpWLink').value = w.link;
        document.getElementById('inpWNotes').value = w.notes;

        const wrapper = document.getElementById('wrapperSubWorship');
        wrapper.innerHTML = '';
        if(w.subActivities) {
            document.getElementById('countSubWorship').value = w.subActivities.length;
            w.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#facc15; margin-bottom:5px;">Aktivitas</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}"><input type="time" class="field-time" value="${sub.time}"></div>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }
        document.getElementById('worshipModalTitle').innerText = "Edit Worship";
        document.getElementById('worshipDetailView').classList.add('hidden');
        document.getElementById('worshipForm').classList.remove('hidden');
        document.getElementById('worshipDetailActions').classList.add('hidden');
        document.getElementById('worshipFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR PROYEK (PROJECT) ---

    // 1. ASSETS KATEGORI PROYEK (20 Pilihan)
    const projectCategoryAssets = {
        "IT": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        "Website": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
        "Aplikasi": "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
        "Desain": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        "Marketing": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
        "Event": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
        "Penelitian": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
        "Akademik": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        "Bisnis": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "Operasional": "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80",
        "Keuangan": "https://images.unsplash.com/photo-1554224155-984063584d45?w=800&q=80",
        "HR": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
        "Konten": "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800&q=80",
        "Media Sosial": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "Produk": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
        "Startup": "https://images.unsplash.com/photo-1559136555-930d72f1d300?w=800&q=80",
        "Freelance": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        "Internal": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        "Client": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    };

    function getProjectImage(cat) {
        return projectCategoryAssets[cat] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";
    }

    // Populate Dropdown
    const pCatSelect = document.getElementById('inpPCat');
    if(pCatSelect) {
        pCatSelect.innerHTML = '';
        Object.keys(projectCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            pCatSelect.appendChild(opt);
        });
    }

    let projects = JSON.parse(localStorage.getItem('myProjects')) || [];

    // 2. SUB PROJECT GENERATOR (TASKS)
    function generateSubProjectFields() {
        const count = document.getElementById('countSubProject').value;
        const wrapper = document.getElementById('wrapperSubProject');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#818cf8; margin-bottom:5px;">Task #${i}</strong>
                             <input type="text" class="field-name" placeholder="Nama Task">
                             <div style="display:flex; gap:5px;">
                                <input type="date" class="field-date">
                                <select class="field-status" style="background:rgba(0,0,0,0.3); border:1px solid #818cf8; color:white; border-radius:6px;">
                                    <option>To Do</option><option>In Progress</option><option>Done</option>
                                </select>
                             </div>
                             <textarea class="field-desc" placeholder="Deskripsi Task"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER PROJECT
   // --- 3. RENDER PROJECT (REVISI: CLEAN CARD) ---
    function renderProject() {
        const container = document.getElementById('projectContainer');
        const searchTerm = document.getElementById('inpSearchProject') ? document.getElementById('inpSearchProject').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpProjectFilter') ? document.getElementById('inpProjectFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = projects.filter(p => p.title.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'deadline') filtered.sort((a,b) => new Date(a.deadline) - new Date(b.deadline));
        if(filterVal === 'stat_progress') filtered = filtered.filter(p => p.status === 'Dilakukan');
        if(filterVal === 'cat_it') filtered = filtered.filter(p => p.category === 'IT');
        if(filterVal === 'prog_high') filtered = filtered.filter(p => p.progress >= 80);

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada proyek.</div>';
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            const bgImage = getProjectImage(p.category);
            
            let statCol = '#cbd5e1';
            if(p.status === 'Selesai') statCol = '#34d399';
            if(p.status === 'Dilakukan') statCol = '#818cf8';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateProject(${p.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteProject(${p.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${p.status}</div>
                </div>
                <div class="project-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${p.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${p.group || 'Individu'}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${p.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${p.desc || '...'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-clock"></i> ${formatDate(p.date)}</span>
                         <span style="font-size:0.8rem; color:#ef4444;">Deadline: ${formatDate(p.deadline)}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openProjectDetail(p.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE PROJECT
    function saveProject() {
        const id = document.getElementById('projectId').value;
        const wrapper = document.getElementById('wrapperSubProject');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const status = item.querySelector('.field-status').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, status, desc });
        });

        const now = new Date().toLocaleString();
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (projects.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpPTitle').value,
            desc: document.getElementById('inpPDesc').value,
            owner: document.getElementById('inpPOwner').value,
            category: document.getElementById('inpPCat').value,
            date: document.getElementById('inpPDate').value,
            deadline: document.getElementById('inpPDeadline').value,
            time: document.getElementById('inpPTime').value,
            team: document.getElementById('inpPTeam').value,
            group: document.getElementById('inpPGroup').value,
            duration: document.getElementById('inpPDur').value,
            status: document.getElementById('inpPStatus').value,
            imp: document.getElementById('inpPImp').value,
            progress: document.getElementById('inpPProgressRange').value,
            
            goal: document.getElementById('inpPGoal').value,
            scope: document.getElementById('inpPScope').value,
            deliverable: document.getElementById('inpPDeliverable').value,
            budget: document.getElementById('inpPBudget').value,
            risk: document.getElementById('inpPRisk').value,
            obstacle: document.getElementById('inpPObstacle').value,
            solution: document.getElementById('inpPSolution').value,
            
            journal: document.getElementById('inpPJournal').value,
            link: document.getElementById('inpPLink').value,
            notes: document.getElementById('inpPNotes').value,
            
            subActivities: subData
        };

        if(!dataObj.title) { alert("Judul proyek wajib diisi!"); return; }

        if(id) {
            const idx = projects.findIndex(x => x.id == id);
            projects[idx] = dataObj;
        } else {
            projects.push(dataObj);
        }
        localStorage.setItem('myProjects', JSON.stringify(projects));
        closeProjectModal();
        renderProject();
    }

    // 5. DETAIL VIEW
    let currentProjectId = null;
    function openProjectDetail(id) {
        const p = projects.find(x => x.id === id);
        if(!p) return;
        currentProjectId = id;

        document.getElementById('viewPCover').src = getProjectImage(p.category);
        document.getElementById('viewPTitle').innerText = p.title;
        document.getElementById('viewPCat').innerText = p.category;
        document.getElementById('viewPStatus').innerText = p.status;
        
        // Status Badge Style
        const statB = document.getElementById('viewPStatus');
        if(p.status === 'Selesai') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
        else statB.style.cssText = "color:#818cf8; border-color:#818cf8; background:rgba(129,140,248,0.2)";
        
        document.getElementById('viewPGroup').innerText = p.group;

        const dateObj = new Date(p.date);
        const days = ['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU'];
        document.getElementById('viewPDay').innerText = p.date ? days[dateObj.getDay()] : '-';

        document.getElementById('viewPDate').innerText = formatDate(p.date);
        document.getElementById('viewPDeadline').innerText = formatDate(p.deadline);
        document.getElementById('viewPTime').innerText = p.time || '-';
        document.getElementById('viewPTeam').innerText = p.team || '-';
        document.getElementById('viewPOwner').innerText = p.owner || '-';
        document.getElementById('viewPGoal').innerText = p.goal || '-';
        document.getElementById('viewPDur').innerText = (p.duration || '0') + ' Hari';
        document.getElementById('viewPBudget').innerText = p.budget ? "Rp " + parseInt(p.budget).toLocaleString() : '-';
        document.getElementById('viewPRisk').innerText = p.risk || '-';
        
        // Progress Bar
        document.getElementById('viewPProgressTxt').innerText = p.progress + "%";
        document.getElementById('viewPProgressBar').style.width = p.progress + "%";

        const lnk = document.getElementById('viewPLink');
        if(p.link) { lnk.href = p.link; lnk.style.display='inline'; } else { lnk.style.display='none'; }
        
        document.getElementById('viewPScope').innerText = p.scope || '-';
        document.getElementById('viewPDeliverable').innerText = p.deliverable || '-';
        document.getElementById('viewPDesc').innerText = p.desc || '-';
        document.getElementById('viewPJournal').innerText = p.journal || 'Tidak ada jurnal.';
        document.getElementById('viewPNotes').innerText = p.notes || '';

        // Box Kendala
        const boxProb = document.getElementById('boxProjectProblem');
        if(p.obstacle || p.solution) {
            boxProb.style.display = 'block';
            document.getElementById('viewPObstacle').innerText = p.obstacle || '-';
            document.getElementById('viewPSolution').innerText = p.solution || '-';
        } else {
            boxProb.style.display = 'none';
        }

        const subC = document.getElementById('viewListSubProject');
        subC.innerHTML = '';
        let completedTasks = 0;
        if(p.subActivities && p.subActivities.length > 0) {
            p.subActivities.forEach(sub => {
                if(sub.status === 'Done') completedTasks++;
                const r = document.createElement('div');
                let stColor = '#94a3b8';
                if(sub.status === 'Done') stColor = '#34d399';
                if(sub.status === 'In Progress') stColor = '#818cf8';

                r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(148,163,184,0.2);";
                r.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;">
                                <strong style="color:#818cf8;">${sub.name}</strong>
                                <span style="font-size:0.7rem; border:1px solid ${stColor}; color:${stColor}; padding:2px 8px; border-radius:4px;">${sub.status}</span>
                               </div>
                               <div style="font-size:0.8rem; color:#9ca3af; margin:5px 0;">${formatDate(sub.date)}</div>
                               <div style="font-size:0.9rem; color:#fff;">${sub.desc}</div>`;
                subC.appendChild(r);
            });
        } else {
            subC.innerHTML = '<div style="color:gray;">Tidak ada task.</div>';
        }
        
        document.getElementById('viewPTaskCount').innerText = `${completedTasks}/${p.subActivities ? p.subActivities.length : 0}`;

        document.getElementById('viewPCreated').innerText = "Created: " + p.createdAt;
        document.getElementById('viewPUpdated').innerText = "Last Update: " + p.updatedAt;

        document.getElementById('projectModalTitle').innerText = "Detail Project";
        document.getElementById('projectForm').classList.add('hidden');
        document.getElementById('projectDetailView').classList.remove('hidden');
        document.getElementById('projectFormActions').classList.add('hidden');
        document.getElementById('projectDetailActions').classList.remove('hidden');
        document.getElementById('projectModalOverlay').classList.add('active');
    }

    // 6. UTILS
    function deleteProject(id, e) {
        e.stopPropagation();
        if(confirm("Hapus proyek ini?")) {
            projects = projects.filter(x => x.id !== id);
            localStorage.setItem('myProjects', JSON.stringify(projects));
            renderProject();
        }
    }
    function duplicateProject(id, e) {
        e.stopPropagation();
        const origin = projects.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            projects.push(copy);
            localStorage.setItem('myProjects', JSON.stringify(projects));
            renderProject();
        }
    }
    function openProjectModal() {
        document.getElementById('projectForm').reset();
        document.getElementById('projectId').value = '';
        document.getElementById('wrapperSubProject').innerHTML = '';
        document.getElementById('inpPProgressVal').innerText = "0%";
        document.getElementById('projectModalTitle').innerText = "New Project";
        document.getElementById('projectForm').classList.remove('hidden');
        document.getElementById('projectDetailView').classList.add('hidden');
        document.getElementById('projectFormActions').classList.remove('hidden');
        document.getElementById('projectDetailActions').classList.add('hidden');
        document.getElementById('projectModalOverlay').classList.add('active');
    }
    function closeProjectModal() { document.getElementById('projectModalOverlay').classList.remove('active'); }
    function editProject() {
        const p = projects.find(x => x.id === currentProjectId);
        if(!p) return;
        document.getElementById('projectId').value = p.id;
        document.getElementById('inpPTitle').value = p.title;
        document.getElementById('inpPDesc').value = p.desc;
        document.getElementById('inpPOwner').value = p.owner;
        document.getElementById('inpPCat').value = p.category;
        document.getElementById('inpPDate').value = p.date;
        document.getElementById('inpPDeadline').value = p.deadline;
        document.getElementById('inpPTime').value = p.time;
        document.getElementById('inpPTeam').value = p.team;
        document.getElementById('inpPGroup').value = p.group;
        document.getElementById('inpPDur').value = p.duration;
        document.getElementById('inpPStatus').value = p.status;
        document.getElementById('inpPImp').value = p.imp;
        document.getElementById('inpPProgressRange').value = p.progress || 0;
        document.getElementById('inpPProgressVal').innerText = (p.progress || 0) + "%";
        
        document.getElementById('inpPGoal').value = p.goal;
        document.getElementById('inpPScope').value = p.scope;
        document.getElementById('inpPDeliverable').value = p.deliverable;
        document.getElementById('inpPBudget').value = p.budget;
        document.getElementById('inpPRisk').value = p.risk;
        document.getElementById('inpPObstacle').value = p.obstacle;
        document.getElementById('inpPSolution').value = p.solution;
        
        document.getElementById('inpPJournal').value = p.journal;
        document.getElementById('inpPLink').value = p.link;
        document.getElementById('inpPNotes').value = p.notes;

        const wrapper = document.getElementById('wrapperSubProject');
        wrapper.innerHTML = '';
        if(p.subActivities) {
            document.getElementById('countSubProject').value = p.subActivities.length;
            p.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#818cf8; margin-bottom:5px;">Task</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}">
                                 <select class="field-status" style="background:rgba(0,0,0,0.3); border:1px solid #818cf8; color:white; border-radius:6px;">
                                    <option ${sub.status==='To Do'?'selected':''}>To Do</option>
                                    <option ${sub.status==='In Progress'?'selected':''}>In Progress</option>
                                    <option ${sub.status==='Done'?'selected':''}>Done</option>
                                 </select></div>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }
        document.getElementById('projectModalTitle').innerText = "Edit Project";
        document.getElementById('projectDetailView').classList.add('hidden');
        document.getElementById('projectForm').classList.remove('hidden');
        document.getElementById('projectDetailActions').classList.add('hidden');
        document.getElementById('projectFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR PENDIDIKAN (EDUCATION) ---

    // 1. ASSETS KATEGORI PENDIDIKAN (30 Pilihan)
    const educationCategoryAssets = {
        "Belajar Mandiri": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
        "Sekolah": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
        "Kuliah": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        "Les": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        "Praktikum": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
        "Ujian": "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
        "Tugas": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        "Presentasi": "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80",
        "Diskusi": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
        "Seminar": "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80",
        "Workshop": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
        "Webinar": "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80",
        "Pelatihan": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "Sertifikasi": "https://images.unsplash.com/photo-1570616969692-54d6a5d085b1?w=800&q=80",
        "Penelitian": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
        "Skripsi": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
        "Tesis": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        "Disertasi": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=800&q=80",
        "Magang": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
        "Asistensi": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        "Mengajar": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
        "Evaluasi": "https://images.unsplash.com/photo-1554224155-984063584d45?w=800&q=80",
        "Bimbingan": "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80",
        "Administrasi Akademik": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        "Ekstrakurikuler": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
        "Organisasi": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
        "Kompetisi Akademik": "https://images.unsplash.com/photo-1565514020176-db8b7eb4eb8c?w=800&q=80",
        "Literasi": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
        "Konsultasi": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
    };

    function getEducationImage(cat) {
        return educationCategoryAssets[cat] || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80";
    }

    // Populate Dropdown
    const eCatSelect = document.getElementById('inpECat');
    if(eCatSelect) {
        eCatSelect.innerHTML = '';
        Object.keys(educationCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            eCatSelect.appendChild(opt);
        });
    }

    let educations = JSON.parse(localStorage.getItem('myEducations')) || [];

    // 2. SUB EDUCATION GENERATOR (TASKS)
    function generateSubEducationFields() {
        const count = document.getElementById('countSubEducation').value;
        const wrapper = document.getElementById('wrapperSubEducation');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#38bdf8; margin-bottom:5px;">Task #${i}</strong>
                             <input type="text" class="field-name" placeholder="Nama Task">
                             <div style="display:flex; gap:5px;">
                                <input type="date" class="field-date">
                                <input type="time" class="field-time">
                             </div>
                             <select class="field-status" style="width:100%; background:rgba(0,0,0,0.3); border:1px solid #38bdf8; color:white; border-radius:6px; margin-top:5px;">
                                <option>Belum</option><option>Proses</option><option>Selesai</option>
                             </select>
                             <textarea class="field-desc" placeholder="Deskripsi"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER EDUCATION
    function renderEducation() {
        const container = document.getElementById('educationContainer');
        const searchTerm = document.getElementById('inpSearchEducation') ? document.getElementById('inpSearchEducation').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpEducationFilter') ? document.getElementById('inpEducationFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = educations.filter(e => e.title.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'stat_todo') filtered = filtered.filter(e => e.status === 'Belum Dimulai');
        if(filterVal === 'cat_college') filtered = filtered.filter(e => e.category === 'Kuliah');
        if(filterVal === 'diff_hard') filtered = filtered.filter(e => e.diff === 'Sulit');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada aktivitas pendidikan.</div>';
            return;
        }

        filtered.forEach(e => {
            const card = document.createElement('div');
            card.className = 'education-card';
            
            const bgImage = getEducationImage(e.category);
            
            let statCol = '#cbd5e1';
            if(e.status === 'Selesai') statCol = '#34d399';
            if(e.status === 'Dilakukan') statCol = '#38bdf8';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateEducation(${e.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteEducation(${e.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${e.status}</div>
                </div>
                <div class="education-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${e.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${e.imp}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${e.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${e.desc || '...'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(e.date)}</span>
                         <span style="font-size:0.8rem; color:#38bdf8;">${e.subject || 'Umum'}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openEducationDetail(e.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE EDUCATION
    function saveEducation() {
        const id = document.getElementById('educationId').value;
        const wrapper = document.getElementById('wrapperSubEducation');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const time = item.querySelector('.field-time').value;
            const status = item.querySelector('.field-status').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, time, status, desc });
        });

        const now = new Date().toLocaleString();
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (educations.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpETitle').value,
            desc: document.getElementById('inpEDesc').value,
            owner: document.getElementById('inpEOwner').value,
            category: document.getElementById('inpECat').value,
            date: document.getElementById('inpEDate').value,
            time: document.getElementById('inpETime').value,
            duration: document.getElementById('inpEDur').value,
            
            group: document.getElementById('inpEGroup').value,
            subject: document.getElementById('inpESubject').value,
            status: document.getElementById('inpEStatus').value,
            imp: document.getElementById('inpEImp').value,
            
            goal: document.getElementById('inpEGoal').value,
            target: document.getElementById('inpETarget').value,
            method: document.getElementById('inpEMethod').value,
            teacher: document.getElementById('inpETeacher').value,
            media: document.getElementById('inpEMedia').value,
            diff: document.getElementById('inpEDiff').value,
            
            progress: document.getElementById('inpEProgressRange').value,
            score: document.getElementById('inpEScore').value,
            feedback: document.getElementById('inpEFeedback').value,
            obstacle: document.getElementById('inpEObstacle').value,
            solution: document.getElementById('inpESolution').value,
            
            journal: document.getElementById('inpEJournal').value,
            link: document.getElementById('inpELink').value,
            notes: document.getElementById('inpENotes').value,
            
            subActivities: subData
        };

        if(!dataObj.title) { alert("Judul aktivitas wajib diisi!"); return; }

        if(id) {
            const idx = educations.findIndex(x => x.id == id);
            educations[idx] = dataObj;
        } else {
            educations.push(dataObj);
        }
        localStorage.setItem('myEducations', JSON.stringify(educations));
        closeEducationModal();
        renderEducation();
    }

    // 5. DETAIL VIEW
   // --- 5. DETAIL VIEW (SAFE VERSION) ---
    let currentEducationId = null;

    function openEducationDetail(id) {
        const e = educations.find(x => x.id === id);
        if(!e) return;
        currentEducationId = id;

        // Fungsi Helper: Mengisi Teks dengan Aman (Anti-Crash)
        const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if(el) el.innerText = val || '-';
        };

        // Fungsi Helper: Mengisi Gambar
        const setImg = (id, val) => {
            const el = document.getElementById(id);
            if(el) el.src = val;
        };

        // 1. Isi Data Gambar & Header
        setImg('viewECover', getEducationImage(e.category));
        setTxt('viewETitle', e.title);
        setTxt('viewECat', e.category);
        setTxt('viewEStatus', e.status);
        setTxt('viewEGroup', e.group);

        // Update Warna Status Badge
        const statB = document.getElementById('viewEStatus');
        if(statB) {
            if(e.status === 'Selesai') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
            else statB.style.cssText = "color:#38bdf8; border-color:#38bdf8; background:rgba(56,189,248,0.2)";
        }

        // 2. Isi Data Waktu & Info Dasar
        const dateObj = new Date(e.date);
        const days = ['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU'];
        setTxt('viewEDay', e.date ? days[dateObj.getDay()] : '-');
        setTxt('viewEDate', formatDate(e.date));
        setTxt('viewETime', e.time);
        setTxt('viewESubject', e.subject);
        setTxt('viewEDur', (e.duration || '0') + ' Menit');

        // 3. Isi Data Detail Grid
        setTxt('viewEMethod', e.method);
        setTxt('viewETeacher', e.teacher);
        setTxt('viewEMedia', e.media);
        setTxt('viewEDiff', e.diff);
        setTxt('viewEScore', e.score);

        // 4. Progress Bar
        const progTxt = document.getElementById('viewEProgressTxt');
        if(progTxt) progTxt.innerText = (e.progress || 0) + "%";
        
        const progBar = document.getElementById('viewEProgressBar');
        if(progBar) progBar.style.width = (e.progress || 0) + "%";

        // 5. Link Dokumentasi
        const lnk = document.getElementById('viewELink');
        if(lnk) {
            if(e.link) { lnk.href = e.link; lnk.style.display='inline'; } 
            else { lnk.style.display='none'; }
        }

        // 6. Isi Deskripsi & Jurnal
        setTxt('viewEDesc', e.desc);
        setTxt('viewEGoal', e.goal);
        setTxt('viewETarget', e.target);
        setTxt('viewEObstacle', e.obstacle);
        setTxt('viewESolution', e.solution);
        setTxt('viewEFeedback', e.feedback);
        setTxt('viewEJournal', e.journal || 'Tidak ada jurnal.');
        setTxt('viewENotes', e.notes);

        // 7. Box Masalah (Hanya muncul jika ada masalah)
        const boxProb = document.getElementById('boxEducationProblem');
        if(boxProb) {
            // Tampilkan jika ada kendala, solusi, atau feedback
            if(e.obstacle || e.solution || e.feedback) {
                boxProb.style.display = 'block';
            } else {
                // Sembunyikan jika kosong agar rapi
                boxProb.style.display = 'none'; 
            }
        }

        // 8. Render Sub Activities
        const subC = document.getElementById('viewListSubEducation');
        if(subC) {
            subC.innerHTML = '';
            let count = 0;
            if(e.subActivities && e.subActivities.length > 0) {
                count = e.subActivities.length;
                e.subActivities.forEach(sub => {
                    const r = document.createElement('div');
                    let stColor = '#94a3b8';
                    if(sub.status === 'Selesai') stColor = '#34d399';
                    if(sub.status === 'Proses') stColor = '#38bdf8';

                    r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(56,189,248,0.2); margin-bottom:0.5rem;";
                    r.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;">
                                    <strong style="color:#38bdf8;">${sub.name}</strong>
                                    <span style="font-size:0.7rem; border:1px solid ${stColor}; color:${stColor}; padding:2px 8px; border-radius:4px;">${sub.status}</span>
                                   </div>
                                   <div style="font-size:0.8rem; color:#9ca3af; margin:5px 0;">${formatDate(sub.date)} ${sub.time || ''}</div>
                                   <div style="font-size:0.9rem; color:#fff;">${sub.desc}</div>`;
                    subC.appendChild(r);
                });
            } else {
                subC.innerHTML = '<div style="color:gray;">Tidak ada task.</div>';
            }
            const countEl = document.getElementById('viewETaskCount');
            if(countEl) countEl.innerText = count;
        }

        setTxt('viewECreated', "Created: " + e.createdAt);
        setTxt('viewEUpdated', "Last Update: " + e.updatedAt);

        // --- BUKA MODAL ---
        // Switch Tampilan ke Detail View
        document.getElementById('educationModalTitle').innerText = "Detail Activity";
        
        document.getElementById('educationForm').classList.add('hidden');
        document.getElementById('educationDetailView').classList.remove('hidden');
        
        document.getElementById('educationFormActions').classList.add('hidden');
        document.getElementById('educationDetailActions').classList.remove('hidden');
        
        // [PENTING] Tambahkan class active untuk memunculkan modal
        document.getElementById('educationModalOverlay').classList.add('active');
    }

    // 6. UTILS
    function deleteEducation(id, e) {
        e.stopPropagation();
        if(confirm("Hapus aktivitas ini?")) {
            educations = educations.filter(x => x.id !== id);
            localStorage.setItem('myEducations', JSON.stringify(educations));
            renderEducation();
        }
    }
    function duplicateEducation(id, e) {
        e.stopPropagation();
        const origin = educations.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            educations.push(copy);
            localStorage.setItem('myEducations', JSON.stringify(educations));
            renderEducation();
        }
    }
    function openEducationModal() {
        document.getElementById('educationForm').reset();
        document.getElementById('educationId').value = '';
        document.getElementById('wrapperSubEducation').innerHTML = '';
        document.getElementById('inpEProgressVal').innerText = "0%";
        document.getElementById('educationModalTitle').innerText = "New Study Log";
        document.getElementById('educationForm').classList.remove('hidden');
        document.getElementById('educationDetailView').classList.add('hidden');
        document.getElementById('educationFormActions').classList.remove('hidden');
        document.getElementById('educationDetailActions').classList.add('hidden');
        document.getElementById('educationModalOverlay').classList.add('active');
    }
    function closeEducationModal() { document.getElementById('educationModalOverlay').classList.remove('active'); }
    function editEducation() {
        const e = educations.find(x => x.id === currentEducationId);
        if(!e) return;
        document.getElementById('educationId').value = e.id;
        document.getElementById('inpETitle').value = e.title;
        document.getElementById('inpEDesc').value = e.desc;
        document.getElementById('inpEOwner').value = e.owner;
        document.getElementById('inpECat').value = e.category;
        document.getElementById('inpEDate').value = e.date;
        document.getElementById('inpETime').value = e.time;
        document.getElementById('inpEDur').value = e.duration;
        document.getElementById('inpEGroup').value = e.group;
        document.getElementById('inpESubject').value = e.subject;
        document.getElementById('inpEStatus').value = e.status;
        document.getElementById('inpEImp').value = e.imp;
        document.getElementById('inpEGoal').value = e.goal;
        document.getElementById('inpETarget').value = e.target;
        document.getElementById('inpEMethod').value = e.method;
        document.getElementById('inpETeacher').value = e.teacher;
        document.getElementById('inpEMedia').value = e.media;
        document.getElementById('inpEDiff').value = e.diff;
        document.getElementById('inpEProgressRange').value = e.progress || 0;
        document.getElementById('inpEProgressVal').innerText = (e.progress || 0) + "%";
        document.getElementById('inpEScore').value = e.score;
        document.getElementById('inpEFeedback').value = e.feedback;
        document.getElementById('inpEObstacle').value = e.obstacle;
        document.getElementById('inpESolution').value = e.solution;
        document.getElementById('inpEJournal').value = e.journal;
        document.getElementById('inpELink').value = e.link;
        document.getElementById('inpENotes').value = e.notes;

        const wrapper = document.getElementById('wrapperSubEducation');
        wrapper.innerHTML = '';
        if(e.subActivities) {
            document.getElementById('countSubEducation').value = e.subActivities.length;
            e.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#38bdf8; margin-bottom:5px;">Task</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}"><input type="time" class="field-time" value="${sub.time}"></div>
                                 <select class="field-status" style="width:100%; background:rgba(0,0,0,0.3); border:1px solid #38bdf8; color:white; border-radius:6px; margin-top:5px;">
                                    <option ${sub.status==='Belum'?'selected':''}>Belum</option>
                                    <option ${sub.status==='Proses'?'selected':''}>Proses</option>
                                    <option ${sub.status==='Selesai'?'selected':''}>Selesai</option>
                                 </select>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }
        document.getElementById('educationModalTitle').innerText = "Edit Activity";
        document.getElementById('educationDetailView').classList.add('hidden');
        document.getElementById('educationForm').classList.remove('hidden');
        document.getElementById('educationDetailActions').classList.add('hidden');
        document.getElementById('educationFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR BISNIS (BUSINESS) ---

    // 1. ASSETS KATEGORI BISNIS (30 Pilihan)
    const businessCategoryAssets = {
        "Strategi Bisnis": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "Operasional": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        "Penjualan": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
        "Marketing": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
        "Keuangan": "https://images.unsplash.com/photo-1554224155-984063584d45?w=800&q=80",
        "HR": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
        "Produksi": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        "Distribusi": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        "Supply Chain": "https://images.unsplash.com/photo-1494412651409-ae1e0954332e?w=800&q=80",
        "Customer Service": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        "Riset Pasar": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "Pengembangan Produk": "https://images.unsplash.com/photo-1504384308090-c54be3852f33?w=800&q=80",
        "Branding": "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80",
        "Konten": "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800&q=80",
        "Media Sosial": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "Iklan": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
        "Partnership": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        "Legal": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
        "Pajak": "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=800&q=80",
        "Inventori": "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
        "Quality Control": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
        "IT Sistem": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        "Data Analitik": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "CRM": "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
        "Procurement": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        "Logistik": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        "Event": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
        "Training": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        "Evaluasi Kinerja": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    };

    function getBusinessImage(cat) {
        return businessCategoryAssets[cat] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80";
    }

    // Populate Dropdown
    const bCatSelect = document.getElementById('inpBCat');
    if(bCatSelect) {
        bCatSelect.innerHTML = '';
        Object.keys(businessCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            bCatSelect.appendChild(opt);
        });
    }

    let businesses = JSON.parse(localStorage.getItem('myBusinesses')) || [];

    // 2. SUB BUSINESS GENERATOR (ACTION ITEMS)
    function generateSubBusinessFields() {
        const count = document.getElementById('countSubBusiness').value;
        const wrapper = document.getElementById('wrapperSubBusiness');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#fbbf24; margin-bottom:5px;">Action Item #${i}</strong>
                             <input type="text" class="field-name" placeholder="Nama Aktivitas">
                             <div style="display:flex; gap:5px;">
                                <input type="date" class="field-date">
                                <input type="time" class="field-time">
                             </div>
                             <select class="field-status" style="width:100%; background:rgba(0,0,0,0.3); border:1px solid #fbbf24; color:white; border-radius:6px; margin-top:5px;">
                                <option>Pending</option><option>On Progress</option><option>Done</option>
                             </select>
                             <textarea class="field-desc" placeholder="Deskripsi"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER BUSINESS (Clean Card Style)
    function renderBusiness() {
        const container = document.getElementById('businessContainer');
        const searchTerm = document.getElementById('inpSearchBusiness') ? document.getElementById('inpSearchBusiness').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpBusinessFilter') ? document.getElementById('inpBusinessFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = businesses.filter(b => b.title.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'deadline') filtered.sort((a,b) => new Date(a.deadline) - new Date(b.deadline));
        if(filterVal === 'imp_very') filtered = filtered.filter(b => b.imp === 'Sangat Penting');
        if(filterVal === 'impact_pos') filtered = filtered.filter(b => b.impact === 'Positif');
        if(filterVal === 'stat_prog') filtered = filtered.filter(b => b.status === 'Dilakukan');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada aktivitas bisnis.</div>';
            return;
        }

        filtered.forEach(b => {
            const card = document.createElement('div');
            card.className = 'business-card';
            
            const bgImage = getBusinessImage(b.category);
            
            let statCol = '#cbd5e1';
            if(b.status === 'Selesai') statCol = '#34d399';
            if(b.status === 'Dilakukan') statCol = '#fbbf24';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateBusiness(${b.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteBusiness(${b.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${b.status}</div>
                </div>
                <div class="business-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${b.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statCol}; text-transform:uppercase;">${b.div || 'General'}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${b.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${b.desc || '...'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(b.date)}</span>
                         <span style="font-size:0.8rem; color:#fbbf24;">${b.imp === 'Sangat Penting' ? 'High Priority' : 'Normal'}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openBusinessDetail(b.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE BUSINESS
    function saveBusiness() {
        const id = document.getElementById('businessId').value;
        const wrapper = document.getElementById('wrapperSubBusiness');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const time = item.querySelector('.field-time').value;
            const status = item.querySelector('.field-status').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, time, status, desc });
        });

        const now = new Date().toLocaleString();
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (businesses.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpBTitle').value,
            desc: document.getElementById('inpBDesc').value,
            owner: document.getElementById('inpBOwner').value,
            category: document.getElementById('inpBCat').value,
            div: document.getElementById('inpBDiv').value,
            group: document.getElementById('inpBGroup').value,
            
            date: document.getElementById('inpBDate').value,
            deadline: document.getElementById('inpBDeadline').value,
            time: document.getElementById('inpBTime').value,
            status: document.getElementById('inpBStatus').value,
            imp: document.getElementById('inpBImp').value,
            est: document.getElementById('inpBEst').value,
            
            goal: document.getElementById('inpBGoal').value,
            output: document.getElementById('inpBOutput').value,
            kpi: document.getElementById('inpBKPI').value,
            cost: document.getElementById('inpBCost').value,
            risk: document.getElementById('inpBRisk').value,
            
            progress: document.getElementById('inpBProgressRange').value,
            obstacle: document.getElementById('inpBObstacle').value,
            solution: document.getElementById('inpBSolution').value,
            impact: document.getElementById('inpBImpact').value,
            insight: document.getElementById('inpBInsight').value,
            reflect: document.getElementById('inpBReflect').value,
            
            journal: document.getElementById('inpBJournal').value,
            link: document.getElementById('inpBLink').value,
            notes: document.getElementById('inpBNotes').value,
            
            subActivities: subData
        };

        if(!dataObj.title) { alert("Judul aktivitas wajib diisi!"); return; }

        if(id) {
            const idx = businesses.findIndex(x => x.id == id);
            businesses[idx] = dataObj;
        } else {
            businesses.push(dataObj);
        }
        localStorage.setItem('myBusinesses', JSON.stringify(businesses));
        closeBusinessModal();
        renderBusiness();
        renderDashboard(); // Update dashboard utama
    }

    // 5. DETAIL VIEW (SAFE VERSION)
    let currentBusinessId = null;
    function openBusinessDetail(id) {
        const b = businesses.find(x => x.id === id);
        if(!b) return;
        currentBusinessId = id;

        // Helper safe setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) el.src = val; };

        setImg('viewBCover', getBusinessImage(b.category));
        setTxt('viewBTitle', b.title);
        setTxt('viewBCat', b.category);
        setTxt('viewBStatus', b.status);
        
        // Status Badge
        const statB = document.getElementById('viewBStatus');
        if(statB) {
            if(b.status === 'Selesai') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
            else statB.style.cssText = "color:#fbbf24; border-color:#fbbf24; background:rgba(251, 191, 36,0.2)";
        }
        
        setTxt('viewBDiv', b.div);
        setTxt('viewBKPIBadge', b.kpi || 'N/A');

        const dateObj = new Date(b.date);
        const days = ['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU'];
        setTxt('viewBDay', b.date ? days[dateObj.getDay()] : '-');
        setTxt('viewBDate', formatDate(b.date));
        setTxt('viewBDeadline', formatDate(b.deadline));
        setTxt('viewBTime', b.time);
        
        setTxt('viewBProgress', (b.progress || 0) + "%");
        setTxt('viewBOwner', b.owner);
        setTxt('viewBCost', b.cost ? "Rp " + parseInt(b.cost).toLocaleString() : '-');
        setTxt('viewBRisk', b.risk);
        setTxt('viewBEst', (b.est || '0') + ' Jam');
        setTxt('viewBImpact', b.impact);

        const lnk = document.getElementById('viewBLink');
        if(lnk) { if(b.link) { lnk.href = b.link; lnk.style.display='inline'; } else { lnk.style.display='none'; } }

        setTxt('viewBDesc', b.desc);
        setTxt('viewBGoal', b.goal);
        setTxt('viewBOutput', b.output);
        setTxt('viewBKPI', b.kpi);
        
        // Analisis Box Logic
        const boxAnl = document.getElementById('boxBusinessAnalysis');
        if(boxAnl) {
            if(b.obstacle || b.solution || b.insight || b.reflect) {
                boxAnl.style.display = 'block';
                setTxt('viewBObstacle', b.obstacle);
                setTxt('viewBSolution', b.solution);
                setTxt('viewBInsight', b.insight);
                setTxt('viewBReflect', b.reflect);
            } else {
                boxAnl.style.display = 'none';
            }
        }

        setTxt('viewBJournal', b.journal || 'Tidak ada jurnal.');
        setTxt('viewBNotes', b.notes);

        // Sub Activities
        const subC = document.getElementById('viewListSubBusiness');
        if(subC) {
            subC.innerHTML = '';
            let count = 0;
            if(b.subActivities && b.subActivities.length > 0) {
                count = b.subActivities.length;
                b.subActivities.forEach(sub => {
                    const r = document.createElement('div');
                    let stColor = '#94a3b8';
                    if(sub.status === 'Done') stColor = '#34d399';
                    if(sub.status === 'On Progress') stColor = '#fbbf24';

                    r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(148,163,184,0.2); margin-bottom:0.5rem;";
                    r.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;">
                                    <strong style="color:#fbbf24;">${sub.name}</strong>
                                    <span style="font-size:0.7rem; border:1px solid ${stColor}; color:${stColor}; padding:2px 8px; border-radius:4px;">${sub.status}</span>
                                   </div>
                                   <div style="font-size:0.8rem; color:#9ca3af; margin:5px 0;">${formatDate(sub.date)} ${sub.time || ''}</div>
                                   <div style="font-size:0.9rem; color:#fff;">${sub.desc}</div>`;
                    subC.appendChild(r);
                });
            } else {
                subC.innerHTML = '<div style="color:gray;">Tidak ada action item.</div>';
            }
            const countEl = document.getElementById('viewBTaskCount');
            if(countEl) countEl.innerText = count;
        }

        setTxt('viewBCreated', "Created: " + b.createdAt);
        setTxt('viewBUpdated', "Last Update: " + b.updatedAt);

        document.getElementById('businessModalTitle').innerText = "Detail Business Activity";
        document.getElementById('businessForm').classList.add('hidden');
        document.getElementById('businessDetailView').classList.remove('hidden');
        document.getElementById('businessFormActions').classList.add('hidden');
        document.getElementById('businessDetailActions').classList.remove('hidden');
        document.getElementById('businessModalOverlay').classList.add('active');
    }

    // 6. UTILS (Delete, Duplicate, Modal, Edit)
    function deleteBusiness(id, e) {
        e.stopPropagation();
        if(confirm("Hapus aktivitas bisnis ini?")) {
            businesses = businesses.filter(x => x.id !== id);
            localStorage.setItem('myBusinesses', JSON.stringify(businesses));
            renderBusiness();
            renderDashboard();
        }
    }
    function duplicateBusiness(id, e) {
        e.stopPropagation();
        const origin = businesses.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            businesses.push(copy);
            localStorage.setItem('myBusinesses', JSON.stringify(businesses));
            renderBusiness();
            renderDashboard();
        }
    }
    function openBusinessModal() {
        document.getElementById('businessForm').reset();
        document.getElementById('businessId').value = '';
        document.getElementById('wrapperSubBusiness').innerHTML = '';
        document.getElementById('inpBProgressVal').innerText = "0%";
        document.getElementById('businessModalTitle').innerText = "New Business Activity";
        document.getElementById('businessForm').classList.remove('hidden');
        document.getElementById('businessDetailView').classList.add('hidden');
        document.getElementById('businessFormActions').classList.remove('hidden');
        document.getElementById('businessDetailActions').classList.add('hidden');
        document.getElementById('businessModalOverlay').classList.add('active');
    }
    function closeBusinessModal() { document.getElementById('businessModalOverlay').classList.remove('active'); }
    function editBusiness() {
        const b = businesses.find(x => x.id === currentBusinessId);
        if(!b) return;
        // Populate all fields... (mapping 1-1 like other features)
        document.getElementById('businessId').value = b.id;
        document.getElementById('inpBTitle').value = b.title;
        document.getElementById('inpBDesc').value = b.desc;
        document.getElementById('inpBOwner').value = b.owner;
        document.getElementById('inpBCat').value = b.category;
        document.getElementById('inpBDiv').value = b.div;
        document.getElementById('inpBGroup').value = b.group;
        document.getElementById('inpBDate').value = b.date;
        document.getElementById('inpBDeadline').value = b.deadline;
        document.getElementById('inpBTime').value = b.time;
        document.getElementById('inpBStatus').value = b.status;
        document.getElementById('inpBImp').value = b.imp;
        document.getElementById('inpBEst').value = b.est;
        document.getElementById('inpBGoal').value = b.goal;
        document.getElementById('inpBOutput').value = b.output;
        document.getElementById('inpBKPI').value = b.kpi;
        document.getElementById('inpBCost').value = b.cost;
        document.getElementById('inpBRisk').value = b.risk;
        document.getElementById('inpBProgressRange').value = b.progress || 0;
        document.getElementById('inpBProgressVal').innerText = (b.progress||0)+"%";
        document.getElementById('inpBObstacle').value = b.obstacle;
        document.getElementById('inpBSolution').value = b.solution;
        document.getElementById('inpBImpact').value = b.impact;
        document.getElementById('inpBInsight').value = b.insight;
        document.getElementById('inpBReflect').value = b.reflect;
        document.getElementById('inpBJournal').value = b.journal;
        document.getElementById('inpBLink').value = b.link;
        document.getElementById('inpBNotes').value = b.notes;

        const wrapper = document.getElementById('wrapperSubBusiness');
        wrapper.innerHTML = '';
        if(b.subActivities) {
            document.getElementById('countSubBusiness').value = b.subActivities.length;
            b.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#fbbf24; margin-bottom:5px;">Action Item</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}"><input type="time" class="field-time" value="${sub.time}"></div>
                                 <select class="field-status" style="width:100%; background:rgba(0,0,0,0.3); border:1px solid #fbbf24; color:white; border-radius:6px; margin-top:5px;">
                                    <option ${sub.status==='Pending'?'selected':''}>Pending</option>
                                    <option ${sub.status==='On Progress'?'selected':''}>On Progress</option>
                                    <option ${sub.status==='Done'?'selected':''}>Done</option>
                                 </select>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }
        document.getElementById('businessModalTitle').innerText = "Edit Business Activity";
        document.getElementById('businessDetailView').classList.add('hidden');
        document.getElementById('businessForm').classList.remove('hidden');
        document.getElementById('businessDetailActions').classList.add('hidden');
        document.getElementById('businessFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR KEUANGAN (FINANCE) ---

    // 1. ASSETS KATEGORI KEUANGAN
    const financeCategoryAssets = {
        "Gaji": "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80",
        "Bonus": "https://images.unsplash.com/photo-1554224155-984063584d45?w=800&q=80",
        "Investasi": "https://images.unsplash.com/photo-1611974765270-ca12586343bb?w=800&q=80",
        "Freelance": "https://images.unsplash.com/photo-1526304640152-d4619684e484?w=800&q=80",
        "Makanan & Minuman": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        "Transportasi": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
        "Belanja": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
        "Tagihan": "https://images.unsplash.com/photo-1554224154-260327c00c42?w=800&q=80",
        "Hiburan": "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
        "Kesehatan": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
        "Pendidikan": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        "Sedekah": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1628102491629-778571d893a3?w=800&q=80"
    };

    function getFinanceImage(cat) {
        return financeCategoryAssets[cat] || "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&q=80";
    }

    // Populate Dropdown
    const fiCatSelect = document.getElementById('inpFiCat');
    if(fiCatSelect) {
        fiCatSelect.innerHTML = '';
        Object.keys(financeCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            fiCatSelect.appendChild(opt);
        });
    }

    let finances = JSON.parse(localStorage.getItem('myFinances')) || [];

    // 2. RENDER FINANCE (Clean Card)
   // --- 2. RENDER FINANCE (REVISI: SHOW DESCRIPTION INSTEAD OF AMOUNT) ---
    function renderFinance() {
        const container = document.getElementById('financeContainer');
        const searchTerm = document.getElementById('inpSearchFinance') ? document.getElementById('inpSearchFinance').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpFinanceFilter') ? document.getElementById('inpFinanceFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = finances.filter(f => f.title.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'oldest') filtered.sort((a,b) => a.id - b.id);
        if(filterVal === 'type_income') filtered = filtered.filter(f => f.type === 'Pemasukan');
        if(filterVal === 'type_expense') filtered = filtered.filter(f => f.type === 'Pengeluaran');
        if(filterVal === 'stat_pending') filtered = filtered.filter(f => f.status === 'Pending');
        if(filterVal === 'high_value') filtered = filtered.filter(f => parseInt(f.amount) > 1000000);

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada transaksi.</div>';
            return;
        }

        filtered.forEach(f => {
            const card = document.createElement('div');
            card.className = 'finance-card';
            
            const bgImage = getFinanceImage(f.category);
            
            // Logic Warna Status
            let statColor = '#fbbf24'; // Default Pending (Gold)
            if(f.status === 'Lunas') statColor = '#34d399'; // Green

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateFinance(${f.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteFinance(${f.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${f.account}</div>
                </div>
                
                <div class="finance-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${f.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${f.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.5rem; line-height:1.3; color:white;">${f.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${f.desc || 'Tidak ada catatan.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(f.date)}</span>
                         <span style="font-size:0.8rem; color:${f.type==='Pemasukan' ? '#34d399' : '#f87171'}; font-weight:bold;">${f.type}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openFinanceDetail(f.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE FINANCE
    function saveFinance() {
        const id = document.getElementById('financeId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (finances.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpFiTitle').value,
            type: document.getElementById('inpFiType').value,
            amount: document.getElementById('inpFiAmount').value,
            category: document.getElementById('inpFiCat').value,
            account: document.getElementById('inpFiAccount').value,
            
            date: document.getElementById('inpFiDate').value,
            time: document.getElementById('inpFiTime').value,
            status: document.getElementById('inpFiStatus').value,
            owner: document.getElementById('inpFiOwner').value,
            
            proof: document.getElementById('inpFiProof').value,
            desc: document.getElementById('inpFiDesc').value
        };

        if(!dataObj.title) { alert("Judul transaksi wajib diisi!"); return; }
        if(!dataObj.amount) { alert("Nominal wajib diisi!"); return; }

        if(id) {
            const idx = finances.findIndex(x => x.id == id);
            finances[idx] = dataObj;
        } else {
            finances.push(dataObj);
        }
        localStorage.setItem('myFinances', JSON.stringify(finances));
        closeFinanceModal();
        renderFinance();
        renderDashboard(); // Integration
    }

    // 5. DETAIL VIEW (CLEAN & SEPARATED)
    let currentFinanceId = null;
    function openFinanceDetail(id) {
        const f = finances.find(x => x.id === id);
        if(!f) return;
        currentFinanceId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) el.src = val; };

        setImg('viewFiCover', getFinanceImage(f.category));
        setTxt('viewFiTitle', f.title);
        setTxt('viewFiCat', f.category);
        setTxt('viewFiStatus', f.status);
        
        // Status & Type Badge
        const typeB = document.getElementById('viewFiType');
        typeB.innerText = f.type;
        if(f.type === 'Pemasukan') typeB.style.cssText = "color:#064e3b; background:#34d399; border:none;";
        else typeB.style.cssText = "color:#7f1d1d; background:#f87171; border:none;";
        
        const statB = document.getElementById('viewFiStatus');
        if(f.status === 'Lunas') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
        else statB.style.cssText = "color:#fbbf24; border-color:#fbbf24; background:rgba(251, 191, 36,0.2)";

        setTxt('viewFiAccount', f.account);
        setTxt('viewFiDate', formatDate(f.date));
        setTxt('viewFiTime', f.time);
        setTxt('viewFiOwner', f.owner);
        setTxt('viewFiDesc', f.desc);
        
        // Formatted Amount
        const amtEl = document.getElementById('viewFiAmount');
        amtEl.innerText = "Rp " + parseInt(f.amount).toLocaleString();
        amtEl.style.color = f.type === 'Pemasukan' ? '#34d399' : '#f87171';
        amtEl.style.borderColor = f.type === 'Pemasukan' ? '#34d399' : '#f87171';

        const lnk = document.getElementById('viewFiProof');
        if(lnk) { if(f.proof) { lnk.href = f.proof; lnk.style.display='inline'; } else { lnk.style.display='none'; } }

        setTxt('viewFiCreated', "Created: " + f.createdAt);
        setTxt('viewFiUpdated', "Last Update: " + f.updatedAt);

        document.getElementById('financeModalTitle').innerText = "Detail Transaksi";
        document.getElementById('financeForm').classList.add('hidden');
        document.getElementById('financeDetailView').classList.remove('hidden');
        document.getElementById('financeFormActions').classList.add('hidden');
        document.getElementById('financeDetailActions').classList.remove('hidden');
        document.getElementById('financeModalOverlay').classList.add('active');
    }

    // 6. UTILS
    function deleteFinance(id, e) {
        e.stopPropagation();
        if(confirm("Hapus transaksi ini?")) {
            finances = finances.filter(x => x.id !== id);
            localStorage.setItem('myFinances', JSON.stringify(finances));
            renderFinance();
            renderDashboard();
        }
    }
    function duplicateFinance(id, e) {
        e.stopPropagation();
        const origin = finances.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            finances.push(copy);
            localStorage.setItem('myFinances', JSON.stringify(finances));
            renderFinance();
            renderDashboard();
        }
    }
    function openFinanceModal() {
        document.getElementById('financeForm').reset();
        document.getElementById('financeId').value = '';
        document.getElementById('financeModalTitle').innerText = "Catat Transaksi";
        document.getElementById('financeForm').classList.remove('hidden');
        document.getElementById('financeDetailView').classList.add('hidden');
        document.getElementById('financeFormActions').classList.remove('hidden');
        document.getElementById('financeDetailActions').classList.add('hidden');
        document.getElementById('financeModalOverlay').classList.add('active');
    }
    function closeFinanceModal() { document.getElementById('financeModalOverlay').classList.remove('active'); }
    function editFinance() {
        const f = finances.find(x => x.id === currentFinanceId);
        if(!f) return;
        document.getElementById('financeId').value = f.id;
        document.getElementById('inpFiTitle').value = f.title;
        document.getElementById('inpFiType').value = f.type;
        document.getElementById('inpFiAmount').value = f.amount;
        document.getElementById('inpFiCat').value = f.category;
        document.getElementById('inpFiAccount').value = f.account;
        document.getElementById('inpFiDate').value = f.date;
        document.getElementById('inpFiTime').value = f.time;
        document.getElementById('inpFiStatus').value = f.status;
        document.getElementById('inpFiOwner').value = f.owner;
        document.getElementById('inpFiProof').value = f.proof;
        document.getElementById('inpFiDesc').value = f.desc;

        document.getElementById('financeModalTitle').innerText = "Edit Transaksi";
        document.getElementById('financeDetailView').classList.add('hidden');
        document.getElementById('financeForm').classList.remove('hidden');
        document.getElementById('financeDetailActions').classList.add('hidden');
        document.getElementById('financeFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR SUBSCRIPTION (LANGGANAN) ---

    // 1. ASSETS LAYANAN (Logo Mapping)
    const subCategoryAssets = {
        "Entertainment": "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
        "Music": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
        "Software": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        "Cloud Storage": "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=800&q=80",
        "Utility": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        "Gaming": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
        "Education": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        "Fitness": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        "News": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
        "Other": "https://images.unsplash.com/photo-1554224155-984063584d45?w=800&q=80"
    };

    // Fungsi Pintar: Cari gambar berdasarkan Nama Layanan jika ada
    function getSubImage(name, cat) {
        const lowerName = name.toLowerCase();
        if(lowerName.includes('netflix')) return "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80";
        if(lowerName.includes('spotify')) return "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80";
        if(lowerName.includes('youtube')) return "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80";
        if(lowerName.includes('adobe')) return "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80";
        if(lowerName.includes('google')) return "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80";
        if(lowerName.includes('apple')) return "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80";
        return subCategoryAssets[cat] || subCategoryAssets["Other"];
    }

    // Populate Dropdown
    const subCatSelect = document.getElementById('inpSubCat');
    if(subCatSelect) {
        subCatSelect.innerHTML = '';
        Object.keys(subCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            subCatSelect.appendChild(opt);
        });
    }

    let subscriptions = JSON.parse(localStorage.getItem('mySubscriptions')) || [];

    // 2. RENDER SUBSCRIPTION (Clean Card)
  // --- 2. RENDER SUBSCRIPTION (REVISI: DESKRIPSI ONLY) ---
    function renderSubscription() {
        const container = document.getElementById('subContainer');
        const searchTerm = document.getElementById('inpSearchSub') ? document.getElementById('inpSearchSub').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpSubFilter') ? document.getElementById('inpSubFilter').value : "next_bill";
        
        container.innerHTML = '';
        let filtered = subscriptions.filter(s => s.name.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'next_bill') filtered.sort((a,b) => new Date(a.nextBill) - new Date(b.nextBill));
        if(filterVal === 'highest_cost') filtered.sort((a,b) => b.cost - a.cost);
        if(filterVal === 'stat_active') filtered = filtered.filter(s => s.status === 'Aktif');
        if(filterVal === 'cycle_monthly') filtered = filtered.filter(s => s.cycle === 'Bulanan');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada langganan.</div>';
            return;
        }

        filtered.forEach(s => {
            const card = document.createElement('div');
            card.className = 'subscription-card';
            
            const bgImage = getSubImage(s.name, s.category);
            
            // Logic Warna Status
            let statColor = '#e879f9'; // Aktif
            if(s.status === 'Dibatalkan') statColor = '#9ca3af'; 
            if(s.status === 'Ditangguhkan') statColor = '#fbbf24';

            // Hitung hari lagi
            const today = new Date();
            const billDate = new Date(s.nextBill);
            const diffTime = billDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            let dayLabel = diffDays > 0 ? `${diffDays} Hari Lagi` : (diffDays === 0 ? 'HARI INI' : 'Terlewat');
            let dayColor = diffDays <= 3 ? '#f87171' : '#fff';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateSubscription(${s.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteSubscription(${s.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${s.cycle}</div>
                </div>
                
                <div class="subscription-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${s.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${s.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${s.name}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${s.desc || 'Tidak ada detail paket.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar-check"></i> ${formatDate(s.nextBill)}</span>
                         <span style="font-size:0.75rem; color:${dayColor}; font-weight:bold; background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px;">${dayLabel}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openSubDetail(s.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE SUBSCRIPTION
    function saveSubscription() {
        const id = document.getElementById('subId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (subscriptions.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            name: document.getElementById('inpSubName').value,
            desc: document.getElementById('inpSubDesc').value,
            cost: document.getElementById('inpSubCost').value,
            category: document.getElementById('inpSubCat').value,
            
            cycle: document.getElementById('inpSubCycle').value,
            nextBill: document.getElementById('inpSubNextBill').value,
            method: document.getElementById('inpSubMethod').value,
            status: document.getElementById('inpSubStatus').value,
            
            user: document.getElementById('inpSubUser').value,
            link: document.getElementById('inpSubLink').value,
            notes: document.getElementById('inpSubNotes').value
        };

        if(!dataObj.name) { alert("Nama layanan wajib diisi!"); return; }
        if(!dataObj.cost) { alert("Biaya wajib diisi!"); return; }

        if(id) {
            const idx = subscriptions.findIndex(x => x.id == id);
            subscriptions[idx] = dataObj;
        } else {
            subscriptions.push(dataObj);
        }
        localStorage.setItem('mySubscriptions', JSON.stringify(subscriptions));
        closeSubModal();
        renderSubscription();
        renderDashboard();
    }

    // 4. DETAIL VIEW (CLEAN & SEPARATED)
    let currentSubId = null;
    function openSubDetail(id) {
        const s = subscriptions.find(x => x.id === id);
        if(!s) return;
        currentSubId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) el.src = val; };

        setImg('viewSubCover', getSubImage(s.name, s.category));
        setTxt('viewSubName', s.name);
        setTxt('viewSubCat', s.category);
        setTxt('viewSubStatus', s.status);
        
        // Status Badge Style
        const statB = document.getElementById('viewSubStatus');
        if(statB) {
            if(s.status === 'Aktif') statB.style.cssText = "color:#e879f9; border-color:#e879f9; background:rgba(232, 121, 249, 0.2)";
            else statB.style.cssText = "color:#9ca3af; border-color:#9ca3af; background:rgba(156, 163, 175, 0.2)";
        }

        setTxt('viewSubCost', "Rp " + parseInt(s.cost).toLocaleString());
        setTxt('viewSubCycleBadge', "/" + s.cycle);
        
        setTxt('viewSubMethod', s.method);
        setTxt('viewSubUser', s.user);
        
        // Highlight Next Bill
        setTxt('viewSubNextBill', formatDate(s.nextBill));
        // Hitung mundur
        const today = new Date();
        const billDate = new Date(s.nextBill);
        const diffTime = billDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const countEl = document.getElementById('viewSubCountdown');
        if(diffDays > 0) countEl.innerHTML = `<i class="ph ph-hourglass"></i> Tersisa ${diffDays} hari lagi`;
        else if (diffDays === 0) countEl.innerHTML = `<i class="ph ph-warning-circle"></i> JATUH TEMPO HARI INI!`;
        else countEl.innerHTML = `<i class="ph ph-warning"></i> Sudah lewat ${Math.abs(diffDays)} hari`;

        const lnk = document.getElementById('viewSubLink');
        if(lnk) { if(s.link) { lnk.href = s.link; lnk.style.display='inline'; } else { lnk.style.display='none'; } }

        setTxt('viewSubDesc', s.desc);
        setTxt('viewSubNotes', s.notes);

        setTxt('viewSubCreated', "Created: " + s.createdAt);
        setTxt('viewSubUpdated', "Last Update: " + s.updatedAt);

        document.getElementById('subModalTitle').innerText = "Detail Layanan";
        document.getElementById('subForm').classList.add('hidden');
        document.getElementById('subDetailView').classList.remove('hidden');
        document.getElementById('subFormActions').classList.add('hidden');
        document.getElementById('subDetailActions').classList.remove('hidden');
        document.getElementById('subModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deleteSubscription(id, e) {
        e.stopPropagation();
        if(confirm("Hapus langganan ini?")) {
            subscriptions = subscriptions.filter(x => x.id !== id);
            localStorage.setItem('mySubscriptions', JSON.stringify(subscriptions));
            renderSubscription();
            renderDashboard();
        }
    }
    function duplicateSubscription(id, e) {
        e.stopPropagation();
        const origin = subscriptions.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), name: origin.name + " (Copy)", createdAt: new Date().toLocaleString() };
            subscriptions.push(copy);
            localStorage.setItem('mySubscriptions', JSON.stringify(subscriptions));
            renderSubscription();
            renderDashboard();
        }
    }
    function openSubModal() {
        document.getElementById('subForm').reset();
        document.getElementById('subId').value = '';
        document.getElementById('subModalTitle').innerText = "New Subscription";
        document.getElementById('subForm').classList.remove('hidden');
        document.getElementById('subDetailView').classList.add('hidden');
        document.getElementById('subFormActions').classList.remove('hidden');
        document.getElementById('subDetailActions').classList.add('hidden');
        document.getElementById('subModalOverlay').classList.add('active');
    }
    function closeSubModal() { document.getElementById('subModalOverlay').classList.remove('active'); }
    function editSubscription() {
        const s = subscriptions.find(x => x.id === currentSubId);
        if(!s) return;
        document.getElementById('subId').value = s.id;
        document.getElementById('inpSubName').value = s.name;
        document.getElementById('inpSubDesc').value = s.desc;
        document.getElementById('inpSubCost').value = s.cost;
        document.getElementById('inpSubCat').value = s.category;
        document.getElementById('inpSubCycle').value = s.cycle;
        document.getElementById('inpSubNextBill').value = s.nextBill;
        document.getElementById('inpSubMethod').value = s.method;
        document.getElementById('inpSubStatus').value = s.status;
        document.getElementById('inpSubUser').value = s.user;
        document.getElementById('inpSubLink').value = s.link;
        document.getElementById('inpSubNotes').value = s.notes;

        document.getElementById('subModalTitle').innerText = "Edit Subscription";
        document.getElementById('subDetailView').classList.add('hidden');
        document.getElementById('subForm').classList.remove('hidden');
        document.getElementById('subDetailActions').classList.add('hidden');
        document.getElementById('subFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR INVESTASI (INVESTMENT) ---

    // --- UPDATE HELPER GAMBAR INVESTASI ---
    const investCategoryAssets = {
        "Saham": "https://images.unsplash.com/photo-1611974765270-ca12586343bb?w=800&q=80",
        "Crypto": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
        "Reksadana": "https://images.unsplash.com/photo-1579532415943-9ca352f9502c?w=800&q=80",
        "Emas": "https://images.unsplash.com/photo-1610375461490-679813d52326?w=800&q=80",
        "Obligasi": "https://images.unsplash.com/photo-1565514020176-db8b7eb4eb8c?w=800&q=80",
        "P2P Lending": "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80",
        "Properti": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80"
    };

    function getInvestImage(type) {
        // Cek apakah type ada di daftar, jika tidak pakai 'Lainnya'
        return investCategoryAssets[type] || investCategoryAssets["Lainnya"];
    }

    let investments = JSON.parse(localStorage.getItem('myInvestments')) || [];

    // 2. RENDER INVESTMENT (Clean Card: Desc Only)
// --- REVISI RENDER INVESTMENT (FIX GAMBAR DI CARD) ---
    function renderInvestment() {
        const container = document.getElementById('investContainer');
        const searchTerm = document.getElementById('inpSearchInvest') ? document.getElementById('inpSearchInvest').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpInvestFilter') ? document.getElementById('inpInvestFilter').value : "highest_profit";
        
        container.innerHTML = '';
        let filtered = investments.filter(i => i.name.toLowerCase().includes(searchTerm));

        // Kalkulasi Profit Real-time untuk Sorting
        filtered.forEach(i => {
            const buyVal = i.buyPrice * i.qty;
            const currVal = i.currPrice * i.qty;
            i.pnl = currVal - buyVal;
            i.pnlPercent = buyVal > 0 ? ((i.pnl / buyVal) * 100) : 0;
        });

        // Filter Logic
        if(filterVal === 'highest_profit') filtered.sort((a,b) => b.pnlPercent - a.pnlPercent);
        if(filterVal === 'lowest_profit') filtered.sort((a,b) => a.pnlPercent - b.pnlPercent);
        if(filterVal === 'type_stock') filtered = filtered.filter(i => i.type === 'Saham');
        if(filterVal === 'type_crypto') filtered = filtered.filter(i => i.type === 'Crypto');
        if(filterVal === 'stat_holding') filtered = filtered.filter(i => i.status === 'Holding');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada aset investasi.</div>';
            return;
        }

        filtered.forEach(i => {
            const card = document.createElement('div');
            card.className = 'invest-card';
            
            // --- [FIX UTAMA DISINI] ---
            // Ambil gambar berdasarkan tipe aset. Gunakan 'Lainnya' jika tipe kosong.
            const bgImage = getInvestImage(i.type || 'Lainnya');
            
            // Logic Warna PnL
            let pnlColor = i.pnl >= 0 ? '#4ade80' : '#f87171'; // Green / Red
            let pnlIcon = i.pnl >= 0 ? '▲' : '▼';
            let pnlTxt = i.pnlPercent.toFixed(2) + "%";

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateInvestment(${i.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteInvestment(${i.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${i.platform}</div>
                </div>
                
                <div class="invest-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${i.type || 'Asset'}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${i.status==='Holding'?'#38bdf8':'#9ca3af'}; text-transform:uppercase;">${i.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${i.name}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${i.desc || 'Hold jangka panjang.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;">${i.qty} ${i.unit}</span>
                         <span style="font-size:0.9rem; color:${pnlColor}; font-weight:bold;">${pnlIcon} ${pnlTxt}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openInvestDetail(i.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE INVESTMENT
    function saveInvestment() {
        const id = document.getElementById('investId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (investments.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            name: document.getElementById('inpInvName').value,
            desc: document.getElementById('inpInvDesc').value,
            type: document.getElementById('inpInvType').value,
            platform: document.getElementById('inpInvPlatform').value,
            
            buyPrice: parseFloat(document.getElementById('inpInvBuyPrice').value) || 0,
            currPrice: parseFloat(document.getElementById('inpInvCurrPrice').value) || 0,
            qty: parseFloat(document.getElementById('inpInvQty').value) || 0,
            unit: document.getElementById('inpInvUnit').value,
            
            dividen: parseFloat(document.getElementById('inpInvDiv').value) || 0,
            status: document.getElementById('inpInvStatus').value,
            target: document.getElementById('inpInvTarget').value,
            
            analysis: document.getElementById('inpInvAnalysis').value,
            link: document.getElementById('inpInvLink').value,
            date: document.getElementById('inpInvDate').value
        };

        if(!dataObj.name) { alert("Nama aset wajib diisi!"); return; }

        if(id) {
            const idx = investments.findIndex(x => x.id == id);
            investments[idx] = dataObj;
        } else {
            investments.push(dataObj);
        }
        localStorage.setItem('myInvestments', JSON.stringify(investments));
        closeInvestModal();
        renderInvestment();
        renderDashboard();
    }

    // 4. DETAIL VIEW (CLEAN & SEPARATED)
  // --- REVISI DETAIL VIEW INVESTASI ---
    let currentInvestId = null;

    function openInvestDetail(id) {
        const i = investments.find(x => x.id === id);
        if(!i) return;
        currentInvestId = id;

        // Hitung PnL Detail
        const buyVal = i.buyPrice * i.qty;
        const currVal = i.currPrice * i.qty;
        const pnl = currVal - buyVal;
        const pnlPercent = buyVal > 0 ? ((pnl / buyVal) * 100) : 0;
        let pnlColor = pnl >= 0 ? '#4ade80' : '#f87171';
        let pnlSign = pnl >= 0 ? '+' : '';

        // Helper setters (Anti-Crash)
        const setTxt = (id, val) => { 
            const el = document.getElementById(id); 
            if(el) el.innerText = val || '-'; 
        };
        
        const setImg = (id, val) => { 
            const el = document.getElementById(id); 
            if(el) {
                el.src = val;
                // Error handling jika link gambar rusak
                el.onerror = function() { this.src = investCategoryAssets["Lainnya"]; };
            } 
        };

        // 1. SET GAMBAR (Fix Gambar Gk Muncul)
        // Pastikan i.type memiliki nilai, jika tidak default ke 'Lainnya'
        setImg('viewInvCover', getInvestImage(i.type || 'Lainnya'));

        // 2. HEADER & LABEL (Fix Kotak Biru Kosong)
        setTxt('viewInvName', i.name);
        setTxt('viewInvPlatform', i.platform);
        
        // Kotak Biru itu adalah Tipe Aset (Saham, Crypto, dll)
        const typeEl = document.getElementById('viewInvType');
        if(typeEl) {
            typeEl.innerText = i.type || 'Asset'; // Isi teks agar tidak jadi kotak kosong
            typeEl.style.display = 'inline-block'; // Pastikan muncul
        }

        // Status Badge
        const statEl = document.getElementById('viewInvStatus');
        if(statEl) {
            statEl.innerText = i.status;
            if(i.status === 'Holding') statEl.style.cssText = "color:#38bdf8; border-color:#38bdf8; background:rgba(56, 189, 248, 0.2)";
            else statEl.style.cssText = "color:#9ca3af; border-color:#9ca3af; background:rgba(156, 163, 175, 0.2)";
        }
        
        // 3. BADGE PROFIT/LOSS
        const badgeEl = document.getElementById('viewInvPnLBadge');
        if(badgeEl) {
            badgeEl.innerText = pnlSign + pnlPercent.toFixed(2) + "%";
            badgeEl.style.color = pnlColor;
            badgeEl.parentElement.style.borderColor = pnlColor;
        }

        // 4. ISI DATA ANGKA
        setTxt('viewInvTotalVal', "Rp " + currVal.toLocaleString());
        setTxt('viewInvBuyPrice', "Rp " + parseFloat(i.buyPrice).toLocaleString());
        setTxt('viewInvCurrPrice', "Rp " + parseFloat(i.currPrice).toLocaleString());
        
        const pnlRpEl = document.getElementById('viewInvPnLRp');
        if(pnlRpEl) {
            pnlRpEl.innerText = "Rp " + pnl.toLocaleString();
            pnlRpEl.style.color = pnlColor;
        }
        
        setTxt('viewInvDiv', "Rp " + (i.dividen || 0).toLocaleString());

        // 5. DESKRIPSI & ANALISIS
        setTxt('viewInvDesc', i.desc);
        setTxt('viewInvAnalysis', i.analysis);
        setTxt('viewInvTarget', i.target ? "Rp " + parseInt(i.target).toLocaleString() : "-");

        const lnk = document.getElementById('viewInvLink');
        if(lnk) { 
            if(i.link) { lnk.href = i.link; lnk.style.display='inline'; } 
            else { lnk.style.display='none'; } 
        }

        setTxt('viewInvCreated', "Entry Date: " + (i.date ? formatDate(i.date) : '-'));
        setTxt('viewInvUpdated', "Last Update: " + i.updatedAt);

        // BUKA MODAL
        document.getElementById('investModalTitle').innerText = "Detail Asset";
        document.getElementById('investForm').classList.add('hidden');
        document.getElementById('investDetailView').classList.remove('hidden');
        document.getElementById('investFormActions').classList.add('hidden');
        document.getElementById('investDetailActions').classList.remove('hidden');
        document.getElementById('investModalOverlay').classList.add('active');
    }
    // 5. UTILS
    function deleteInvestment(id, e) {
        e.stopPropagation();
        if(confirm("Hapus aset ini?")) {
            investments = investments.filter(x => x.id !== id);
            localStorage.setItem('myInvestments', JSON.stringify(investments));
            renderInvestment();
            renderDashboard();
        }
    }
    function duplicateInvestment(id, e) {
        e.stopPropagation();
        const origin = investments.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), name: origin.name + " (Copy)", createdAt: new Date().toLocaleString() };
            investments.push(copy);
            localStorage.setItem('myInvestments', JSON.stringify(investments));
            renderInvestment();
            renderDashboard();
        }
    }
    function openInvestModal() {
        document.getElementById('investForm').reset();
        document.getElementById('investId').value = '';
        document.getElementById('investModalTitle').innerText = "New Asset";
        document.getElementById('investForm').classList.remove('hidden');
        document.getElementById('investDetailView').classList.add('hidden');
        document.getElementById('investFormActions').classList.remove('hidden');
        document.getElementById('investDetailActions').classList.add('hidden');
        document.getElementById('investModalOverlay').classList.add('active');
    }
    function closeInvestModal() { document.getElementById('investModalOverlay').classList.remove('active'); }
    function editInvestment() {
        const i = investments.find(x => x.id === currentInvestId);
        if(!i) return;
        document.getElementById('investId').value = i.id;
        document.getElementById('inpInvName').value = i.name;
        document.getElementById('inpInvDesc').value = i.desc;
        document.getElementById('inpInvType').value = i.type;
        document.getElementById('inpInvPlatform').value = i.platform;
        document.getElementById('inpInvBuyPrice').value = i.buyPrice;
        document.getElementById('inpInvCurrPrice').value = i.currPrice;
        document.getElementById('inpInvQty').value = i.qty;
        document.getElementById('inpInvUnit').value = i.unit;
        document.getElementById('inpInvDiv').value = i.dividen;
        document.getElementById('inpInvStatus').value = i.status;
        document.getElementById('inpInvTarget').value = i.target;
        document.getElementById('inpInvAnalysis').value = i.analysis;
        document.getElementById('inpInvLink').value = i.link;
        document.getElementById('inpInvDate').value = i.date;

        document.getElementById('investModalTitle').innerText = "Edit Asset";
        document.getElementById('investDetailView').classList.add('hidden');
        document.getElementById('investForm').classList.remove('hidden');
        document.getElementById('investDetailActions').classList.add('hidden');
        document.getElementById('investFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR SKILL TRACKER ---

    // 1. ASSETS KATEGORI SKILL
    const skillCategoryAssets = {
        "Coding": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
        "Bahasa Asing": "https://images.unsplash.com/photo-1543165796-5426273eaab3?w=800&q=80",
        "Desain Grafis": "https://images.unsplash.com/photo-1626785774573-4b799312c95d?w=800&q=80",
        "Video Editing": "https://images.unsplash.com/photo-1574717432722-a03306377ec5?w=800&q=80",
        "Digital Marketing": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
        "Data Science": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "Public Speaking": "https://images.unsplash.com/photo-1475721027767-f0506e30491d?w=800&q=80",
        "Musik": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
        "Writing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
        "Business": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
        "Soft Skill": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    };

    function getSkillImage(cat) {
        return skillCategoryAssets[cat] || skillCategoryAssets["Lainnya"];
    }

    // Populate Dropdown
    const skCatSelect = document.getElementById('inpSkCat');
    if(skCatSelect) {
        skCatSelect.innerHTML = '';
        Object.keys(skillCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            skCatSelect.appendChild(opt);
        });
    }

    let skills = JSON.parse(localStorage.getItem('mySkills')) || [];

    // 2. SUB SKILL GENERATOR (LOG SESI)
    function generateSubSkillFields() {
        const count = document.getElementById('countSubSkill').value;
        const wrapper = document.getElementById('wrapperSubSkill');
        wrapper.innerHTML = '';
        if(count < 1) return;
        for(let i=1; i<=count; i++) {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                             <strong style="display:block; color:#22d3ee; margin-bottom:5px;">Sesi #${i}</strong>
                             <input type="text" class="field-name" placeholder="Topik Belajar">
                             <div style="display:flex; gap:5px;"><input type="date" class="field-date"><input type="number" class="field-hours" placeholder="Jam"></div>
                             <textarea class="field-desc" placeholder="Catatan"></textarea>`;
            wrapper.appendChild(div);
        }
    }

    // 3. RENDER SKILL (Clean Card: Level & Hours)
   // --- 3. RENDER SKILL (REVISI: DESKRIPSI ONLY, NO BAR) ---
    function renderSkill() {
        const container = document.getElementById('skillContainer');
        const searchTerm = document.getElementById('inpSearchSkill') ? document.getElementById('inpSearchSkill').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpSkillFilter') ? document.getElementById('inpSkillFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = skills.filter(s => s.name.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'progress_high') filtered = filtered.filter(s => s.progress >= 50);
        if(filterVal === 'lvl_beginner') filtered = filtered.filter(s => s.level === 'Beginner');
        if(filterVal === 'lvl_expert') filtered = filtered.filter(s => s.level === 'Expert');
        if(filterVal === 'cat_coding') filtered = filtered.filter(s => s.category === 'Coding');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada skill yang dipelajari.</div>';
            return;
        }

        filtered.forEach(s => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            
            const bgImage = getSkillImage(s.category);
            
            let statColor = '#22d3ee';
            if(s.status === 'Completed') statColor = '#34d399';
            if(s.status === 'On Hold') statColor = '#fbbf24';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateSkill(${s.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteSkill(${s.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${s.category}</div>
                </div>
                
                <div class="skill-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${s.level}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${s.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${s.name}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${s.desc || 'Tidak ada deskripsi target.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;">Target: ${s.target ? 'Set' : '-'}</span>
                         <span style="font-size:0.9rem; color:#22d3ee; font-weight:bold;">${s.hours || 0} Jam</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openSkillDetail(s.id); };
            container.appendChild(card);
        });
    }
    // 4. SAVE SKILL
    function saveSkill() {
        const id = document.getElementById('skillId').value;
        const wrapper = document.getElementById('wrapperSubSkill');
        const items = wrapper.querySelectorAll('.dynamic-item');
        let subData = [];
        items.forEach(item => {
            const name = item.querySelector('.field-name').value;
            const date = item.querySelector('.field-date').value;
            const hours = item.querySelector('.field-hours').value;
            const desc = item.querySelector('.field-desc').value;
            if(name) subData.push({ name, date, hours, desc });
        });

        const now = new Date().toLocaleString();
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (skills.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            name: document.getElementById('inpSkName').value,
            desc: document.getElementById('inpSkDesc').value,
            category: document.getElementById('inpSkCat').value,
            level: document.getElementById('inpSkLevel').value,
            
            source: document.getElementById('inpSkSource').value,
            hours: document.getElementById('inpSkHours').value,
            target: document.getElementById('inpSkTarget').value,
            
            progress: document.getElementById('inpSkProgressRange').value,
            status: document.getElementById('inpSkStatus').value,
            cert: document.getElementById('inpSkCert').value,
            
            subActivities: subData
        };

        if(!dataObj.name) { alert("Nama skill wajib diisi!"); return; }

        if(id) {
            const idx = skills.findIndex(x => x.id == id);
            skills[idx] = dataObj;
        } else {
            skills.push(dataObj);
        }
        localStorage.setItem('mySkills', JSON.stringify(skills));
        closeSkillModal();
        renderSkill();
        renderDashboard();
    }

    // 5. DETAIL VIEW (SAFE & SEPARATED)
    let currentSkillId = null;
    function openSkillDetail(id) {
        const s = skills.find(x => x.id === id);
        if(!s) return;
        currentSkillId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = skillCategoryAssets["Lainnya"]; }; } };

        setImg('viewSkCover', getSkillImage(s.category));
        setTxt('viewSkName', s.name);
        setTxt('viewSkSource', s.source);
        setTxt('viewSkLevelBadge', s.level);
        
        // Status Badge
        const statB = document.getElementById('viewSkStatus');
        if(statB) {
            statB.innerText = s.status;
            if(s.status === 'Completed') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
            else statB.style.cssText = "color:#22d3ee; border-color:#22d3ee; background:rgba(34, 211, 238, 0.2)";
        }
        
        const catB = document.getElementById('viewSkCat');
        if(catB) catB.innerText = s.category;

        setTxt('viewSkHours', (s.hours || 0) + " JAM");
        
        // Progress Bar
        const progTxt = document.getElementById('viewSkProgressTxt');
        if(progTxt) progTxt.innerText = (s.progress || 0) + "%";
        const progBar = document.getElementById('viewSkProgressBar');
        if(progBar) progBar.style.width = (s.progress || 0) + "%";

        setTxt('viewSkDesc', s.desc);
        setTxt('viewSkTarget', s.target);

        const lnk = document.getElementById('viewSkCert');
        if(lnk) { if(s.cert) { lnk.href = s.cert; lnk.style.display='inline'; } else { lnk.style.display='none'; } }

        // Render Sessions
        const subC = document.getElementById('viewListSubSkill');
        if(subC) {
            subC.innerHTML = '';
            let count = 0;
            if(s.subActivities && s.subActivities.length > 0) {
                count = s.subActivities.length;
                s.subActivities.forEach(sub => {
                    const r = document.createElement('div');
                    r.style.cssText = "background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; border:1px solid rgba(34, 211, 238, 0.2); margin-bottom:0.5rem;";
                    r.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;">
                                    <strong style="color:#22d3ee;">${sub.name}</strong>
                                    <span style="font-size:0.7rem; color:#fff; font-weight:bold;">${sub.hours || 0} Jam</span>
                                   </div>
                                   <div style="font-size:0.8rem; color:#9ca3af; margin:5px 0;">${formatDate(sub.date)}</div>
                                   <div style="font-size:0.9rem; color:#cffafe;">${sub.desc}</div>`;
                    subC.appendChild(r);
                });
            } else {
                subC.innerHTML = '<div style="color:gray;">Belum ada sesi belajar.</div>';
            }
            const countEl = document.getElementById('viewSkSessionCount');
            if(countEl) countEl.innerText = count;
        }

        setTxt('viewSkCreated', "Started: " + s.createdAt);
        setTxt('viewSkUpdated', "Last Update: " + s.updatedAt);

        document.getElementById('skillModalTitle').innerText = "Detail Skill";
        document.getElementById('skillForm').classList.add('hidden');
        document.getElementById('skillDetailView').classList.remove('hidden');
        document.getElementById('skillFormActions').classList.add('hidden');
        document.getElementById('skillDetailActions').classList.remove('hidden');
        document.getElementById('skillModalOverlay').classList.add('active');
    }

    // 6. UTILS
    function deleteSkill(id, e) {
        e.stopPropagation();
        if(confirm("Hapus skill ini?")) {
            skills = skills.filter(x => x.id !== id);
            localStorage.setItem('mySkills', JSON.stringify(skills));
            renderSkill();
            renderDashboard();
        }
    }
    function duplicateSkill(id, e) {
        e.stopPropagation();
        const origin = skills.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), name: origin.name + " (Copy)", createdAt: new Date().toLocaleString() };
            skills.push(copy);
            localStorage.setItem('mySkills', JSON.stringify(skills));
            renderSkill();
            renderDashboard();
        }
    }
    function openSkillModal() {
        document.getElementById('skillForm').reset();
        document.getElementById('skillId').value = '';
        document.getElementById('wrapperSubSkill').innerHTML = '';
        document.getElementById('inpSkProgressVal').innerText = "0%";
        document.getElementById('skillModalTitle').innerText = "New Skill Target";
        document.getElementById('skillForm').classList.remove('hidden');
        document.getElementById('skillDetailView').classList.add('hidden');
        document.getElementById('skillFormActions').classList.remove('hidden');
        document.getElementById('skillDetailActions').classList.add('hidden');
        document.getElementById('skillModalOverlay').classList.add('active');
    }
    function closeSkillModal() { document.getElementById('skillModalOverlay').classList.remove('active'); }
    function editSkill() {
        const s = skills.find(x => x.id === currentSkillId);
        if(!s) return;
        document.getElementById('skillId').value = s.id;
        document.getElementById('inpSkName').value = s.name;
        document.getElementById('inpSkDesc').value = s.desc;
        document.getElementById('inpSkCat').value = s.category;
        document.getElementById('inpSkLevel').value = s.level;
        document.getElementById('inpSkSource').value = s.source;
        document.getElementById('inpSkHours').value = s.hours;
        document.getElementById('inpSkTarget').value = s.target;
        document.getElementById('inpSkProgressRange').value = s.progress || 0;
        document.getElementById('inpSkProgressVal').innerText = (s.progress || 0) + "%";
        document.getElementById('inpSkStatus').value = s.status;
        document.getElementById('inpSkCert').value = s.cert;

        const wrapper = document.getElementById('wrapperSubSkill');
        wrapper.innerHTML = '';
        if(s.subActivities) {
            document.getElementById('countSubSkill').value = s.subActivities.length;
            s.subActivities.forEach(sub => {
                const div = document.createElement('div');
                div.className = 'dynamic-item';
                div.innerHTML = `<span style="position:absolute; top:5px; right:10px; color:#f87171; cursor:pointer;" onclick="this.parentElement.remove()">✕</span>
                                 <strong style="display:block; color:#22d3ee; margin-bottom:5px;">Sesi</strong>
                                 <input type="text" class="field-name" value="${sub.name}">
                                 <div style="display:flex; gap:5px;"><input type="date" class="field-date" value="${sub.date}"><input type="number" class="field-hours" value="${sub.hours}"></div>
                                 <textarea class="field-desc">${sub.desc}</textarea>`;
                wrapper.appendChild(div);
            });
        }
        document.getElementById('skillModalTitle').innerText = "Edit Skill";
        document.getElementById('skillDetailView').classList.add('hidden');
        document.getElementById('skillForm').classList.remove('hidden');
        document.getElementById('skillDetailActions').classList.add('hidden');
        document.getElementById('skillFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR READING LIST (PERPUSTAKAAN) ---

    // 1. ASSETS GENRE BUKU
    const readingCategoryAssets = {
        "Fiksi": "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=800&q=80",
        "Non-Fiksi": "https://images.unsplash.com/photo-1555447405-f58455377858?w=800&q=80",
        "Biografi": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
        "Sains": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
        "Teknologi": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
        "Bisnis": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        "Pengembangan Diri": "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&q=80",
        "Psikologi": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80",
        "Sejarah": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80",
        "Filsafat": "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&q=80",
        "Novel": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
        "Komik/Manga": "https://images.unsplash.com/photo-1614145121029-83a9f70d3d5f?w=800&q=80",
        "Agama": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
    };

    function getReadingImage(genre) {
        return readingCategoryAssets[genre] || readingCategoryAssets["Lainnya"];
    }

    // Populate Dropdown
    const rCatSelect = document.getElementById('inpRGenre');
    if(rCatSelect) {
        rCatSelect.innerHTML = '';
        Object.keys(readingCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            rCatSelect.appendChild(opt);
        });
    }

    let readings = JSON.parse(localStorage.getItem('myReadings')) || [];

    // 2. RENDER READING (Clean Card: Author & Rating)
   // --- 2. RENDER READING (REVISI: SHOW REVIEW INSTEAD OF AUTHOR) ---
    function renderReading() {
        const container = document.getElementById('readingContainer');
        const searchTerm = document.getElementById('inpSearchReading') ? document.getElementById('inpSearchReading').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpReadingFilter') ? document.getElementById('inpReadingFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = readings.filter(r => r.title.toLowerCase().includes(searchTerm) || r.author.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'rating_high') filtered.sort((a,b) => b.rating - a.rating);
        if(filterVal === 'stat_reading') filtered = filtered.filter(r => r.status === 'Reading');
        if(filterVal === 'stat_finished') filtered = filtered.filter(r => r.status === 'Finished');
        if(filterVal === 'genre_fiction') filtered = filtered.filter(r => r.genre === 'Fiksi');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada buku di perpustakaan.</div>';
            return;
        }

        filtered.forEach(r => {
            const card = document.createElement('div');
            card.className = 'reading-card';
            
            const bgImage = getReadingImage(r.genre);
            
            let statColor = '#fbbf24'; // Default (Reading)
            if(r.status === 'Finished') statColor = '#34d399';
            if(r.status === 'Dropped') statColor = '#f87171';
            if(r.status === 'To Read') statColor = '#94a3b8';

            const stars = '★'.repeat(r.rating || 0) + '☆'.repeat(5 - (r.rating || 0));

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateReading(${r.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteReading(${r.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${r.year || '-'}</div>
                </div>
                
                <div class="reading-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${r.genre}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${r.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${r.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${r.review || 'Tidak ada catatan review.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(r.date)}</span>
                         <span style="font-size:0.9rem; color:#fbbf24; letter-spacing:1px;">${stars}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openReadingDetail(r.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE READING
    function saveReading() {
        const id = document.getElementById('readingId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (readings.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpRTitle').value,
            author: document.getElementById('inpRAuthor').value,
            genre: document.getElementById('inpRGenre').value,
            year: document.getElementById('inpRYear').value,
            
            totalPage: parseFloat(document.getElementById('inpRTotalPage').value) || 0,
            currPage: parseFloat(document.getElementById('inpRCurrPage').value) || 0,
            status: document.getElementById('inpRStatus').value,
            rating: parseInt(document.getElementById('inpRRating').value) || 0,
            
            quote: document.getElementById('inpRQuote').value,
            review: document.getElementById('inpRReview').value,
            link: document.getElementById('inpRLink').value,
            date: document.getElementById('inpRDate').value
        };

        if(!dataObj.title) { alert("Judul buku wajib diisi!"); return; }

        if(id) {
            const idx = readings.findIndex(x => x.id == id);
            readings[idx] = dataObj;
        } else {
            readings.push(dataObj);
        }
        localStorage.setItem('myReadings', JSON.stringify(readings));
        closeReadingModal();
        renderReading();
        renderDashboard();
    }

    // 4. DETAIL VIEW (CLEAN & SEPARATED)
    let currentReadingId = null;
    function openReadingDetail(id) {
        const r = readings.find(x => x.id === id);
        if(!r) return;
        currentReadingId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = readingCategoryAssets["Lainnya"]; }; } };

        setImg('viewRCover', getReadingImage(r.genre));
        setTxt('viewRTitle', r.title);
        setTxt('viewRAuthor', r.author);
        setTxt('viewRGenre', r.genre);
        setTxt('viewRStatus', r.status);
        
        // Status Badge Style
        const statB = document.getElementById('viewRStatus');
        if(statB) {
            if(r.status === 'Finished') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
            else statB.style.cssText = "color:#fbbf24; border-color:#fbbf24; background:rgba(251, 191, 36, 0.2)";
        }

        // Hitung Progress %
        let percent = 0;
        if(r.totalPage > 0) {
            percent = (r.currPage / r.totalPage) * 100;
            if(percent > 100) percent = 100;
        }
        
        setTxt('viewRPageBadge', `${r.currPage} / ${r.totalPage} Halaman`);
        document.getElementById('viewRProgressTxt').innerText = percent.toFixed(0) + "%";
        document.getElementById('viewRProgressBar').style.width = percent + "%";

        // Rating Stars
        const stars = '★'.repeat(r.rating || 0) + '☆'.repeat(5 - (r.rating || 0));
        setTxt('viewRRating', stars);

        setTxt('viewRQuote', r.quote ? `"${r.quote}"` : 'Belum ada kutipan favorit.');
        setTxt('viewRReview', r.review);

        const lnk = document.getElementById('viewRLink');
        if(lnk) { if(r.link) { lnk.href = r.link; lnk.style.display='inline'; } else { lnk.style.display='none'; } }

        setTxt('viewRCreated', "Start Date: " + (r.date ? formatDate(r.date) : '-'));
        setTxt('viewRUpdated', "Last Update: " + r.updatedAt);

        document.getElementById('readingModalTitle').innerText = "Detail Book";
        document.getElementById('readingForm').classList.add('hidden');
        document.getElementById('readingDetailView').classList.remove('hidden');
        document.getElementById('readingFormActions').classList.add('hidden');
        document.getElementById('readingDetailActions').classList.remove('hidden');
        document.getElementById('readingModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deleteReading(id, e) {
        e.stopPropagation();
        if(confirm("Hapus buku ini?")) {
            readings = readings.filter(x => x.id !== id);
            localStorage.setItem('myReadings', JSON.stringify(readings));
            renderReading();
            renderDashboard();
        }
    }
    function duplicateReading(id, e) {
        e.stopPropagation();
        const origin = readings.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            readings.push(copy);
            localStorage.setItem('myReadings', JSON.stringify(readings));
            renderReading();
            renderDashboard();
        }
    }
    function openReadingModal() {
        document.getElementById('readingForm').reset();
        document.getElementById('readingId').value = '';
        document.getElementById('viewRProgressTxt').innerText = "0%";
        document.getElementById('readingModalTitle').innerText = "New Book Entry";
        document.getElementById('readingForm').classList.remove('hidden');
        document.getElementById('readingDetailView').classList.add('hidden');
        document.getElementById('readingFormActions').classList.remove('hidden');
        document.getElementById('readingDetailActions').classList.add('hidden');
        document.getElementById('readingModalOverlay').classList.add('active');
    }
    function closeReadingModal() { document.getElementById('readingModalOverlay').classList.remove('active'); }
    function editReading() {
        const r = readings.find(x => x.id === currentReadingId);
        if(!r) return;
        document.getElementById('readingId').value = r.id;
        document.getElementById('inpRTitle').value = r.title;
        document.getElementById('inpRAuthor').value = r.author;
        document.getElementById('inpRGenre').value = r.genre;
        document.getElementById('inpRYear').value = r.year;
        document.getElementById('inpRTotalPage').value = r.totalPage;
        document.getElementById('inpRCurrPage').value = r.currPage;
        document.getElementById('inpRStatus').value = r.status;
        document.getElementById('inpRRating').value = r.rating;
        document.getElementById('inpRQuote').value = r.quote;
        document.getElementById('inpRReview').value = r.review;
        document.getElementById('inpRLink').value = r.link;
        document.getElementById('inpRDate').value = r.date;

        document.getElementById('readingModalTitle').innerText = "Edit Book";
        document.getElementById('readingDetailView').classList.add('hidden');
        document.getElementById('readingForm').classList.remove('hidden');
        document.getElementById('readingDetailActions').classList.add('hidden');
        document.getElementById('readingFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR HABIT BUILDER ---

    // 1. ASSETS KATEGORI HABIT
    const habitCategoryAssets = {
        "Kesehatan": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        "Olahraga": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        "Produktivitas": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        "Mindfulness": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
        "Belajar": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        "Keuangan": "https://images.unsplash.com/photo-1579621970565-56522981030e?w=800&q=80",
        "Sosial": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
        "Kreativitas": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
        "Pagi Hari": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
        "Malam Hari": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    };

    function getHabitImage(cat) {
        return habitCategoryAssets[cat] || habitCategoryAssets["Lainnya"];
    }

    // Populate Dropdown
    const haCatSelect = document.getElementById('inpHaCat');
    if(haCatSelect) {
        haCatSelect.innerHTML = '';
        Object.keys(habitCategoryAssets).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.innerText = cat;
            haCatSelect.appendChild(opt);
        });
    }

    let habits = JSON.parse(localStorage.getItem('myHabits')) || [];

    // 2. RENDER HABIT (Clean Card: Desc Only)
    function renderHabit() {
        const container = document.getElementById('habitContainer');
        const searchTerm = document.getElementById('inpSearchHabit') ? document.getElementById('inpSearchHabit').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpHabitFilter') ? document.getElementById('inpHabitFilter').value : "streak_high";
        
        container.innerHTML = '';
        let filtered = habits.filter(h => h.name.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'streak_high') filtered.sort((a,b) => b.streak - a.streak);
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'freq_daily') filtered = filtered.filter(h => h.freq === 'Harian');
        if(filterVal === 'freq_weekly') filtered = filtered.filter(h => h.freq === 'Mingguan');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada kebiasaan yang dibangun.</div>';
            return;
        }

        filtered.forEach(h => {
            const card = document.createElement('div');
            card.className = 'habit-card';
            
            // Image Logic with Fallback
            const bgImage = getHabitImage(h.category || 'Lainnya');
            
            let statColor = '#6ee7b7'; // Active
            if(h.status === 'Paused') statColor = '#fbbf24';
            if(h.status === 'Archived') statColor = '#9ca3af';

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateHabit(${h.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteHabit(${h.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${h.freq}</div>
                </div>
                
                <div class="habit-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${h.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${h.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${h.name}</h3>
                    
                    <p style="font-size:0.9rem; color:#f1f5f9; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${h.reason || 'Tidak ada motivasi tertulis.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-clock"></i> ${h.time || '-'}</span>
                         <span style="font-size:0.9rem; color:#fbbf24; font-weight:bold;"><i class="ph ph-fire"></i> ${h.streak} Hari</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openHabitDetail(h.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE HABIT
    function saveHabit() {
        const id = document.getElementById('habitId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (habits.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            name: document.getElementById('inpHaName').value,
            reason: document.getElementById('inpHaReason').value,
            category: document.getElementById('inpHaCat').value,
            freq: document.getElementById('inpHaFreq').value,
            
            time: document.getElementById('inpHaTime').value,
            trigger: document.getElementById('inpHaTrigger').value,
            streak: parseInt(document.getElementById('inpHaStreak').value) || 0,
            status: document.getElementById('inpHaStatus').value
        };

        if(!dataObj.name) { alert("Nama kebiasaan wajib diisi!"); return; }

        if(id) {
            const idx = habits.findIndex(x => x.id == id);
            habits[idx] = dataObj;
        } else {
            habits.push(dataObj);
        }
        localStorage.setItem('myHabits', JSON.stringify(habits));
        closeHabitModal();
        renderHabit();
        renderDashboard();
    }

    // 4. DETAIL VIEW (SAFE & CLEAN)
    let currentHabitId = null;
    function openHabitDetail(id) {
        const h = habits.find(x => x.id === id);
        if(!h) return;
        currentHabitId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = habitCategoryAssets["Lainnya"]; }; } };

        setImg('viewHaCover', getHabitImage(h.category));
        setTxt('viewHaName', h.name);
        setTxt('viewHaFreq', h.freq);
        
        // Status Badge
        const statB = document.getElementById('viewHaStatus');
        if(statB) {
            statB.innerText = h.status;
            if(h.status === 'Active') statB.style.cssText = "color:#6ee7b7; border-color:#6ee7b7; background:rgba(16, 185, 129, 0.2)";
            else statB.style.cssText = "color:#9ca3af; border-color:#9ca3af; background:rgba(156, 163, 175, 0.2)";
        }
        
        const catB = document.getElementById('viewHaCat');
        if(catB) catB.innerText = h.category;

        setTxt('viewHaTime', h.time);
        setTxt('viewHaStreakBadge', h.streak + " Hari");
        
        setTxt('viewHaTrigger', h.trigger);
        setTxt('viewHaReason', h.reason ? `"${h.reason}"` : 'Tidak ada motivasi.');

        setTxt('viewHaCreated', "Started: " + h.createdAt);
        setTxt('viewHaUpdated', "Last Update: " + h.updatedAt);

        document.getElementById('habitModalTitle').innerText = "Detail Habit";
        document.getElementById('habitForm').classList.add('hidden');
        document.getElementById('habitDetailView').classList.remove('hidden');
        document.getElementById('habitFormActions').classList.add('hidden');
        document.getElementById('habitDetailActions').classList.remove('hidden');
        document.getElementById('habitModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deleteHabit(id, e) {
        e.stopPropagation();
        if(confirm("Hapus kebiasaan ini?")) {
            habits = habits.filter(x => x.id !== id);
            localStorage.setItem('myHabits', JSON.stringify(habits));
            renderHabit();
            renderDashboard();
        }
    }
    function duplicateHabit(id, e) {
        e.stopPropagation();
        const origin = habits.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), name: origin.name + " (Copy)", createdAt: new Date().toLocaleString() };
            habits.push(copy);
            localStorage.setItem('myHabits', JSON.stringify(habits));
            renderHabit();
            renderDashboard();
        }
    }
    function openHabitModal() {
        document.getElementById('habitForm').reset();
        document.getElementById('habitId').value = '';
        document.getElementById('habitModalTitle').innerText = "New Habit";
        document.getElementById('habitForm').classList.remove('hidden');
        document.getElementById('habitDetailView').classList.add('hidden');
        document.getElementById('habitFormActions').classList.remove('hidden');
        document.getElementById('habitDetailActions').classList.add('hidden');
        document.getElementById('habitModalOverlay').classList.add('active');
    }
    function closeHabitModal() { document.getElementById('habitModalOverlay').classList.remove('active'); }
    function editHabit() {
        const h = habits.find(x => x.id === currentHabitId);
        if(!h) return;
        document.getElementById('habitId').value = h.id;
        document.getElementById('inpHaName').value = h.name;
        document.getElementById('inpHaReason').value = h.reason;
        document.getElementById('inpHaCat').value = h.category;
        document.getElementById('inpHaFreq').value = h.freq;
        document.getElementById('inpHaTime').value = h.time;
        document.getElementById('inpHaTrigger').value = h.trigger;
        document.getElementById('inpHaStreak').value = h.streak;
        document.getElementById('inpHaStatus').value = h.status;

        document.getElementById('habitModalTitle').innerText = "Edit Habit";
        document.getElementById('habitDetailView').classList.add('hidden');
        document.getElementById('habitForm').classList.remove('hidden');
        document.getElementById('habitDetailActions').classList.add('hidden');
        document.getElementById('habitFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR SERTIFIKASI (CERTIFICATION) ---

    // 1. ASSETS PENERBIT SERTIFIKAT
    const certIssuerAssets = {
        "Google": "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
        "Microsoft": "https://images.unsplash.com/photo-1633419461186-7d40a23933a7?w=800&q=80",
        "AWS": "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
        "Coursera": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        "Udemy": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        "Dicoding": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        "LinkedIn": "https://images.unsplash.com/photo-1611944212129-2999044c58bd?w=800&q=80",
        "Adobe": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
        "Cisco": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        "Oracle": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "Kampus Merdeka": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        "BNSP": "https://images.unsplash.com/photo-1569091791842-7cf9646cb190?w=800&q=80",
        "Bootcamp": "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1570616969692-54d6a5d085b1?w=800&q=80"
    };

    function getCertImage(issuer) {
        return certIssuerAssets[issuer] || certIssuerAssets["Lainnya"];
    }

    // Populate Dropdown
    const ceIssuerSelect = document.getElementById('inpCeIssuer');
    if(ceIssuerSelect) {
        ceIssuerSelect.innerHTML = '';
        Object.keys(certIssuerAssets).sort().forEach(iss => {
            const opt = document.createElement('option');
            opt.value = iss; opt.innerText = iss;
            ceIssuerSelect.appendChild(opt);
        });
    }

    let certifications = JSON.parse(localStorage.getItem('myCertifications')) || [];

    // 2. RENDER CERTIFICATION (Clean Card: Desc/ID Only)
    function renderCertification() {
        const container = document.getElementById('certContainer');
        const searchTerm = document.getElementById('inpSearchCert') ? document.getElementById('inpSearchCert').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpCertFilter') ? document.getElementById('inpCertFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = certifications.filter(c => c.name.toLowerCase().includes(searchTerm) || c.issuer.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => new Date(b.issueDate) - new Date(a.issueDate));
        if(filterVal === 'issuer_google') filtered = filtered.filter(c => c.issuer === 'Google');
        if(filterVal === 'stat_active') filtered = filtered.filter(c => c.status === 'Aktif');
        if(filterVal === 'stat_expired') filtered = filtered.filter(c => c.status === 'Kadaluarsa');
        if(filterVal === 'expiring_soon') {
            const today = new Date();
            filtered = filtered.filter(c => {
                if(!c.expDate) return false;
                const exp = new Date(c.expDate);
                const diffTime = exp - today;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays > 0 && diffDays <= 30; // 30 hari lagi
            });
        }

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada sertifikasi.</div>';
            return;
        }

        filtered.forEach(c => {
            const card = document.createElement('div');
            card.className = 'cert-card';
            
            // Image Fallback
            const bgImage = getCertImage(c.issuer);
            
            let statColor = '#fbbf24'; // Aktif (Gold)
            if(c.status === 'Kadaluarsa') statColor = '#ef4444'; // Merah
            if(c.status === 'Lifetime') statColor = '#34d399'; // Hijau

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1570616969692-54d6a5d085b1?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateCertification(${c.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteCertification(${c.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${c.issuer}</div>
                </div>
                
                <div class="cert-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">CREDENTIAL</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${c.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${c.name}</h3>
                    
                    <p style="font-size:0.9rem; color:#d1d5db; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${c.desc || c.credId || 'Tidak ada deskripsi.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;">Issued: ${formatDate(c.issueDate)}</span>
                         <span style="font-size:0.8rem; color:#fbbf24;">${c.expDate ? 'Exp: ' + formatDate(c.expDate) : 'No Expiry'}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openCertDetail(c.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE CERTIFICATION
    function saveCertification() {
        const id = document.getElementById('certId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (certifications.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            name: document.getElementById('inpCeName').value,
            desc: document.getElementById('inpCeDesc').value,
            issuer: document.getElementById('inpCeIssuer').value,
            credId: document.getElementById('inpCeCredId').value,
            
            issueDate: document.getElementById('inpCeIssueDate').value,
            expDate: document.getElementById('inpCeExpDate').value,
            status: document.getElementById('inpCeStatus').value,
            
            link: document.getElementById('inpCeLink').value,
            notes: document.getElementById('inpCeNotes').value
        };

        if(!dataObj.name) { alert("Nama sertifikasi wajib diisi!"); return; }

        if(id) {
            const idx = certifications.findIndex(x => x.id == id);
            certifications[idx] = dataObj;
        } else {
            certifications.push(dataObj);
        }
        localStorage.setItem('myCertifications', JSON.stringify(certifications));
        closeCertModal();
        renderCertification();
        renderDashboard();
    }

    // 4. DETAIL VIEW (SAFE & CLEAN)
    let currentCertId = null;
    function openCertDetail(id) {
        const c = certifications.find(x => x.id === id);
        if(!c) return;
        currentCertId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = certIssuerAssets["Lainnya"]; }; } };

        setImg('viewCeCover', getCertImage(c.issuer));
        setTxt('viewCeName', c.name);
        setTxt('viewCeIssuer', c.issuer);
        setTxt('viewCeCredIdBadge', c.credId || 'No ID');
        
        // Status Badge
        const statB = document.getElementById('viewCeStatus');
        if(statB) {
            statB.innerText = c.status;
            if(c.status === 'Aktif') statB.style.cssText = "color:#fbbf24; border-color:#fbbf24; background:rgba(245, 158, 11, 0.2)";
            else if(c.status === 'Lifetime') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(16, 185, 129, 0.2)";
            else statB.style.cssText = "color:#ef4444; border-color:#ef4444; background:rgba(239, 68, 68, 0.2)";
        }

        setTxt('viewCeIssueDate', formatDate(c.issueDate));
        setTxt('viewCeExpDate', c.expDate ? formatDate(c.expDate) : 'Lifetime');
        
        setTxt('viewCeDesc', c.desc);
        setTxt('viewCeNotes', c.notes);

        const lnk = document.getElementById('viewCeLink');
        if(lnk) { if(c.link) { lnk.href = c.link; lnk.style.display='inline'; } else { lnk.style.display='none'; } }

        setTxt('viewCeCreated', "Created: " + c.createdAt);
        setTxt('viewCeUpdated', "Last Update: " + c.updatedAt);

        document.getElementById('certModalTitle').innerText = "Credential Details";
        document.getElementById('certForm').classList.add('hidden');
        document.getElementById('certDetailView').classList.remove('hidden');
        document.getElementById('certFormActions').classList.add('hidden');
        document.getElementById('certDetailActions').classList.remove('hidden');
        document.getElementById('certModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deleteCertification(id, e) {
        e.stopPropagation();
        if(confirm("Hapus sertifikasi ini?")) {
            certifications = certifications.filter(x => x.id !== id);
            localStorage.setItem('myCertifications', JSON.stringify(certifications));
            renderCertification();
            renderDashboard();
        }
    }
    function duplicateCertification(id, e) {
        e.stopPropagation();
        const origin = certifications.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), name: origin.name + " (Copy)", createdAt: new Date().toLocaleString() };
            certifications.push(copy);
            localStorage.setItem('myCertifications', JSON.stringify(certifications));
            renderCertification();
            renderDashboard();
        }
    }
    function openCertModal() {
        document.getElementById('certForm').reset();
        document.getElementById('certId').value = '';
        document.getElementById('certModalTitle').innerText = "New Credential";
        document.getElementById('certForm').classList.remove('hidden');
        document.getElementById('certDetailView').classList.add('hidden');
        document.getElementById('certFormActions').classList.remove('hidden');
        document.getElementById('certDetailActions').classList.add('hidden');
        document.getElementById('certModalOverlay').classList.add('active');
    }
    function closeCertModal() { document.getElementById('certModalOverlay').classList.remove('active'); }
    function editCertification() {
        const c = certifications.find(x => x.id === currentCertId);
        if(!c) return;
        document.getElementById('certId').value = c.id;
        document.getElementById('inpCeName').value = c.name;
        document.getElementById('inpCeDesc').value = c.desc;
        document.getElementById('inpCeIssuer').value = c.issuer;
        document.getElementById('inpCeCredId').value = c.credId;
        document.getElementById('inpCeIssueDate').value = c.issueDate;
        document.getElementById('inpCeExpDate').value = c.expDate;
        document.getElementById('inpCeStatus').value = c.status;
        document.getElementById('inpCeLink').value = c.link;
        document.getElementById('inpCeNotes').value = c.notes;

        document.getElementById('certModalTitle').innerText = "Edit Credential";
        document.getElementById('certDetailView').classList.add('hidden');
        document.getElementById('certForm').classList.remove('hidden');
        document.getElementById('certDetailActions').classList.add('hidden');
        document.getElementById('certFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR CONTENT CALENDAR ---

    // 1. ASSETS PLATFORM
    const contentPlatformAssets = {
        "Instagram": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "TikTok": "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80",
        "YouTube": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
        "Facebook": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
        "LinkedIn": "https://images.unsplash.com/photo-1611944212129-2999044c58bd?w=800&q=80",
        "Twitter / X": "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=800&q=80",
        "Threads": "https://images.unsplash.com/photo-1555421689-d68471e18963?w=800&q=80",
        "Blog / Website": "https://images.unsplash.com/photo-1499750310159-525446b095b4?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1557838402-e7674383180d?w=800&q=80"
    };

    function getContentImage(plat) {
        return contentPlatformAssets[plat] || contentPlatformAssets["Lainnya"];
    }

    // Populate Dropdown
    const ctPlatSelect = document.getElementById('inpCtPlat');
    if(ctPlatSelect) {
        ctPlatSelect.innerHTML = '';
        Object.keys(contentPlatformAssets).sort().forEach(p => {
            const opt = document.createElement('option');
            opt.value = p; opt.innerText = p;
            ctPlatSelect.appendChild(opt);
        });
    }

    let contents = JSON.parse(localStorage.getItem('myContents')) || [];

    // 2. RENDER CONTENT (Clean Card: Desc/Caption Only)
    function renderContent() {
        const container = document.getElementById('contentContainer');
        const searchTerm = document.getElementById('inpSearchContent') ? document.getElementById('inpSearchContent').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpContentFilter') ? document.getElementById('inpContentFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = contents.filter(c => c.title.toLowerCase().includes(searchTerm) || c.caption.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => new Date(a.date) - new Date(b.date));
        if(filterVal === 'stat_idea') filtered = filtered.filter(c => c.status === 'Ide');
        if(filterVal === 'stat_posted') filtered = filtered.filter(c => c.status === 'Posted');
        if(filterVal === 'plat_tiktok') filtered = filtered.filter(c => c.platform === 'TikTok');
        if(filterVal === 'plat_ig') filtered = filtered.filter(c => c.platform === 'Instagram');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada konten direncanakan.</div>';
            return;
        }

        filtered.forEach(c => {
            const card = document.createElement('div');
            card.className = 'content-card';
            
            // Image Logic Fallback
            const bgImage = getContentImage(c.platform);
            
            let statColor = '#fb923c'; // Warning (Ide/Scripting)
            if(c.status === 'Posted') statColor = '#34d399'; // Green
            if(c.status === 'Scheduled') statColor = '#38bdf8'; // Blue
            if(c.status === 'Shooting' || c.status === 'Editing') statColor = '#db2777'; // Pink

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1557838402-e7674383180d?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateContent(${c.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteContent(${c.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${c.platform}</div>
                </div>
                
                <div class="content-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${c.format}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${c.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${c.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#fbcfe8; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${c.caption || 'Belum ada caption.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-calendar"></i> ${formatDate(c.date)}</span>
                         <span style="font-size:0.8rem; color:#fb923c;">${c.time || '-'}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openContentDetail(c.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE CONTENT
    function saveContent() {
        const id = document.getElementById('contentId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (contents.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpCtTitle').value,
            platform: document.getElementById('inpCtPlat').value,
            format: document.getElementById('inpCtFormat').value,
            status: document.getElementById('inpCtStatus').value,
            
            date: document.getElementById('inpCtDate').value,
            time: document.getElementById('inpCtTime').value,
            
            caption: document.getElementById('inpCtCaption').value,
            tags: document.getElementById('inpCtTags').value,
            link: document.getElementById('inpCtLink').value
        };

        if(!dataObj.title) { alert("Judul konten wajib diisi!"); return; }

        if(id) {
            const idx = contents.findIndex(x => x.id == id);
            contents[idx] = dataObj;
        } else {
            contents.push(dataObj);
        }
        localStorage.setItem('myContents', JSON.stringify(contents));
        closeContentModal();
        renderContent();
        renderDashboard();
    }

    // 4. DETAIL VIEW (SAFE & CLEAN)
    let currentContentId = null;
    function openContentDetail(id) {
        const c = contents.find(x => x.id === id);
        if(!c) return;
        currentContentId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = contentPlatformAssets["Lainnya"]; }; } };

        setImg('viewCtCover', getContentImage(c.platform));
        setTxt('viewCtTitle', c.title);
        setTxt('viewCtFormat', c.format);
        setTxt('viewCtStatus', c.status);
        setTxt('viewCtStatusText', c.status);
        
        // Status Badge Style
        const statB = document.getElementById('viewCtStatus');
        if(statB) {
            if(c.status === 'Posted') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
            else statB.style.cssText = "color:#f472b6; border-color:#f472b6; background:rgba(236, 72, 153, 0.2)";
        }
        
        setTxt('viewCtPlatBadge', c.platform);
        setTxt('viewCtDate', formatDate(c.date));
        setTxt('viewCtTime', c.time);
        
        setTxt('viewCtCaption', c.caption);
        setTxt('viewCtTags', c.tags);

        const lnk = document.getElementById('viewCtLink');
        if(lnk) { if(c.link) { lnk.href = c.link; lnk.style.display='inline'; } else { lnk.style.display='none'; } }

        setTxt('viewCtCreated', "Created: " + c.createdAt);
        setTxt('viewCtUpdated', "Last Update: " + c.updatedAt);

        document.getElementById('contentModalTitle').innerText = "Content Details";
        document.getElementById('contentForm').classList.add('hidden');
        document.getElementById('contentDetailView').classList.remove('hidden');
        document.getElementById('contentFormActions').classList.add('hidden');
        document.getElementById('contentDetailActions').classList.remove('hidden');
        document.getElementById('contentModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deleteContent(id, e) {
        e.stopPropagation();
        if(confirm("Hapus konten ini?")) {
            contents = contents.filter(x => x.id !== id);
            localStorage.setItem('myContents', JSON.stringify(contents));
            renderContent();
            renderDashboard();
        }
    }
    function duplicateContent(id, e) {
        e.stopPropagation();
        const origin = contents.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            contents.push(copy);
            localStorage.setItem('myContents', JSON.stringify(contents));
            renderContent();
            renderDashboard();
        }
    }
    function openContentModal() {
        document.getElementById('contentForm').reset();
        document.getElementById('contentId').value = '';
        document.getElementById('contentModalTitle').innerText = "Plan New Content";
        document.getElementById('contentForm').classList.remove('hidden');
        document.getElementById('contentDetailView').classList.add('hidden');
        document.getElementById('contentFormActions').classList.remove('hidden');
        document.getElementById('contentDetailActions').classList.add('hidden');
        document.getElementById('contentModalOverlay').classList.add('active');
    }
    function closeContentModal() { document.getElementById('contentModalOverlay').classList.remove('active'); }
    function editContent() {
        const c = contents.find(x => x.id === currentContentId);
        if(!c) return;
        document.getElementById('contentId').value = c.id;
        document.getElementById('inpCtTitle').value = c.title;
        document.getElementById('inpCtPlat').value = c.platform;
        document.getElementById('inpCtFormat').value = c.format;
        document.getElementById('inpCtStatus').value = c.status;
        document.getElementById('inpCtDate').value = c.date;
        document.getElementById('inpCtTime').value = c.time;
        document.getElementById('inpCtCaption').value = c.caption;
        document.getElementById('inpCtTags').value = c.tags;
        document.getElementById('inpCtLink').value = c.link;

        document.getElementById('contentModalTitle').innerText = "Edit Content";
        document.getElementById('contentDetailView').classList.add('hidden');
        document.getElementById('contentForm').classList.remove('hidden');
        document.getElementById('contentDetailActions').classList.add('hidden');
        document.getElementById('contentFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR PORTFOLIO DESIGN/ART ---

    // 1. ASSETS TOOLS / KATEGORI
    const portToolAssets = {
        "Figma": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", 
        "Photoshop": "https://images.unsplash.com/photo-1626785774573-4b799312c95d?w=800&q=80",
        "Illustrator": "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
        "Blender 3D": "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80",
        "Procreate": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
        "Adobe XD": "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
        "Sketch": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        "After Effects": "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
        "Manual Art": "https://images.unsplash.com/photo-1544206838-5182046f23d1?w=800&q=80",
        "Photography": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=800&q=80"
    };

    function getPortImage(tool) {
        return portToolAssets[tool] || portToolAssets["Lainnya"];
    }

    // Populate Dropdown
    const poToolSelect = document.getElementById('inpPoTool');
    if(poToolSelect) {
        poToolSelect.innerHTML = '';
        Object.keys(portToolAssets).sort().forEach(t => {
            const opt = document.createElement('option');
            opt.value = t; opt.innerText = t;
            poToolSelect.appendChild(opt);
        });
    }

    let portfolios = JSON.parse(localStorage.getItem('myPortfolios')) || [];

    // 2. RENDER PORTFOLIO (Card: Visual Focused)
    function renderPortfolio() {
        const container = document.getElementById('portContainer');
        const searchTerm = document.getElementById('inpSearchPort') ? document.getElementById('inpSearchPort').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpPortFilter') ? document.getElementById('inpPortFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = portfolios.filter(p => p.title.toLowerCase().includes(searchTerm) || p.tool.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'client_work') filtered = filtered.filter(p => p.type === 'Client Work');
        if(filterVal === 'personal_work') filtered = filtered.filter(p => p.type === 'Personal Project');
        if(filterVal === 'tool_figma') filtered = filtered.filter(p => p.tool === 'Figma');
        if(filterVal === 'tool_ps') filtered = filtered.filter(p => p.tool === 'Photoshop');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada karya yang diunggah.</div>';
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'port-card';
            
            // Image Fallback
            const bgImage = getPortImage(p.tool);
            
            // Client Label
            const clientLabel = p.client ? p.client : 'Personal';
            
            card.innerHTML = `
                <div style="height:200px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicatePortfolio(${p.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deletePortfolio(${p.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${p.tool}</div>
                </div>
                
                <div class="port-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${p.type}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:#fb7185; text-transform:uppercase;">${p.year}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${p.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#fecdd3; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${p.desc || 'Tidak ada deskripsi konsep.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-user"></i> ${clientLabel}</span>
                         <a href="${p.link || '#'}" target="_blank" onclick="event.stopPropagation()" style="font-size:1.2rem; color:#fb7185; cursor:pointer;"><i class="ph ph-arrow-square-out"></i></a>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button') && !e.target.closest('a')) openPortDetail(p.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE PORTFOLIO
    function savePortfolio() {
        const id = document.getElementById('portId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (portfolios.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpPoTitle').value,
            desc: document.getElementById('inpPoDesc').value,
            tool: document.getElementById('inpPoTool').value,
            type: document.getElementById('inpPoType').value,
            
            client: document.getElementById('inpPoClient').value,
            year: document.getElementById('inpPoYear').value,
            
            link: document.getElementById('inpPoLink').value,
            tags: document.getElementById('inpPoTags').value
        };

        if(!dataObj.title) { alert("Judul karya wajib diisi!"); return; }

        if(id) {
            const idx = portfolios.findIndex(x => x.id == id);
            portfolios[idx] = dataObj;
        } else {
            portfolios.push(dataObj);
        }
        localStorage.setItem('myPortfolios', JSON.stringify(portfolios));
        closePortModal();
        renderPortfolio();
        renderDashboard();
    }

    // 4. DETAIL VIEW (ARTISTIC)
    let currentPortId = null;
    function openPortDetail(id) {
        const p = portfolios.find(x => x.id === id);
        if(!p) return;
        currentPortId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = portToolAssets["Lainnya"]; }; } };

        setImg('viewPoCover', getPortImage(p.tool));
        setTxt('viewPoTitle', p.title);
        setTxt('viewPoTool', p.tool);
        setTxt('viewPoType', p.type);
        setTxt('viewPoClient', p.client || 'Personal');
        setTxt('viewPoYear', p.year);
        
        setTxt('viewPoDesc', p.desc);
        
        // Tags Rendering
        const tagContainer = document.getElementById('viewPoTagsContainer');
        if(tagContainer) {
            tagContainer.innerHTML = '';
            if(p.tags) {
                const tags = p.tags.split(',');
                tags.forEach(t => {
                    if(t.trim()) {
                        const span = document.createElement('span');
                        span.style.cssText = "background:rgba(255,255,255,0.1); padding:4px 10px; border-radius:4px; font-size:0.75rem; color:#fecdd3;";
                        span.innerText = "#" + t.trim();
                        tagContainer.appendChild(span);
                    }
                });
            } else {
                tagContainer.innerText = '-';
            }
        }

        const lnk = document.getElementById('viewPoLink');
        if(lnk) { if(p.link) { lnk.href = p.link; lnk.style.display='inline-flex'; } else { lnk.style.display='none'; } }

        setTxt('viewPoCreated', "Added: " + p.createdAt);
        setTxt('viewPoUpdated', "Last Update: " + p.updatedAt);

        document.getElementById('portModalTitle').innerText = "Detail Karya";
        document.getElementById('portForm').classList.add('hidden');
        document.getElementById('portDetailView').classList.remove('hidden');
        document.getElementById('portFormActions').classList.add('hidden');
        document.getElementById('portDetailActions').classList.remove('hidden');
        document.getElementById('portModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deletePortfolio(id, e) {
        e.stopPropagation();
        if(confirm("Hapus karya ini?")) {
            portfolios = portfolios.filter(x => x.id !== id);
            localStorage.setItem('myPortfolios', JSON.stringify(portfolios));
            renderPortfolio();
            renderDashboard();
        }
    }
    function duplicatePortfolio(id, e) {
        e.stopPropagation();
        const origin = portfolios.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            portfolios.push(copy);
            localStorage.setItem('myPortfolios', JSON.stringify(portfolios));
            renderPortfolio();
            renderDashboard();
        }
    }
    function openPortModal() {
        document.getElementById('portForm').reset();
        document.getElementById('portId').value = '';
        document.getElementById('portModalTitle').innerText = "New Masterpiece";
        document.getElementById('portForm').classList.remove('hidden');
        document.getElementById('portDetailView').classList.add('hidden');
        document.getElementById('portFormActions').classList.remove('hidden');
        document.getElementById('portDetailActions').classList.add('hidden');
        document.getElementById('portModalOverlay').classList.add('active');
    }
    function closePortModal() { document.getElementById('portModalOverlay').classList.remove('active'); }
    function editPortfolio() {
        const p = portfolios.find(x => x.id === currentPortId);
        if(!p) return;
        document.getElementById('portId').value = p.id;
        document.getElementById('inpPoTitle').value = p.title;
        document.getElementById('inpPoDesc').value = p.desc;
        document.getElementById('inpPoTool').value = p.tool;
        document.getElementById('inpPoType').value = p.type;
        document.getElementById('inpPoClient').value = p.client;
        document.getElementById('inpPoYear').value = p.year;
        document.getElementById('inpPoLink').value = p.link;
        document.getElementById('inpPoTags').value = p.tags;

        document.getElementById('portModalTitle').innerText = "Edit Karya";
        document.getElementById('portDetailView').classList.add('hidden');
        document.getElementById('portForm').classList.remove('hidden');
        document.getElementById('portDetailActions').classList.add('hidden');
        document.getElementById('portFormActions').classList.remove('hidden');
    }

    // --- LOGIKA FITUR VIDEO IDEAS / SCRIPTING ---

    // 1. ASSETS KATEGORI VIDEO
    const videoCategoryAssets = {
        "Vlog": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
        "Tutorial": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        "Review": "https://images.unsplash.com/photo-1517260739337-6799d239ce83?w=800&q=80",
        "Unboxing": "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
        "Gaming": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
        "Podcast": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
        "Education": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        "Cinematic": "https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=800&q=80",
        "Challenge": "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
    };

    function getVideoImage(cat) {
        return videoCategoryAssets[cat] || videoCategoryAssets["Lainnya"];
    }

    // Populate Dropdown
    const viCatSelect = document.getElementById('inpViCat');
    if(viCatSelect) {
        viCatSelect.innerHTML = '';
        Object.keys(videoCategoryAssets).sort().forEach(c => {
            const opt = document.createElement('option');
            opt.value = c; opt.innerText = c;
            viCatSelect.appendChild(opt);
        });
    }

    let videoIdeas = JSON.parse(localStorage.getItem('myVideoIdeas')) || [];

    // 2. RENDER VIDEO IDEAS (Card Focus: Premise & Hook Teaser)
    function renderVideoIdeas() {
        const container = document.getElementById('videoContainer');
        const searchTerm = document.getElementById('inpSearchVideo') ? document.getElementById('inpSearchVideo').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpVideoFilter') ? document.getElementById('inpVideoFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = videoIdeas.filter(v => v.title.toLowerCase().includes(searchTerm) || v.hook.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'duration_short') filtered = filtered.filter(v => v.duration.includes('Shorts'));
        if(filterVal === 'duration_long') filtered = filtered.filter(v => v.duration.includes('Long') || v.duration.includes('Documentary'));
        if(filterVal === 'stat_raw') filtered = filtered.filter(v => v.status === 'Ide Mentah');
        if(filterVal === 'stat_ready') filtered = filtered.filter(v => v.status === 'Siap Shoot');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada ide video.</div>';
            return;
        }

        filtered.forEach(v => {
            const card = document.createElement('div');
            card.className = 'video-card';
            
            // Image Fallback
            const bgImage = getVideoImage(v.category);
            
            let statColor = '#ef4444'; // Red (Default)
            if(v.status === 'Siap Shoot') statColor = '#22c55e'; // Green
            if(v.status === 'Scripting') statColor = '#fbbf24'; // Yellow

            card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateVideoIdea(${v.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteVideoIdea(${v.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${v.duration}</div>
                </div>
                
                <div class="video-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${v.category}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${v.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${v.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#fca5a5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6; font-style:italic;">
                        "${v.hook || 'Belum ada hook yang ditulis.'}"
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#9ca3af;"><i class="ph ph-wrench"></i> ${v.tools ? 'Gear Set' : 'No Gear'}</span>
                         <span style="font-size:0.8rem; color:#ef4444; font-weight:bold;">CTA: ${v.cta ? 'Yes' : 'No'}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openVideoDetail(v.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE VIDEO IDEA
    function saveVideoIdea() {
        const id = document.getElementById('videoId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (videoIdeas.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpViTitle').value,
            hook: document.getElementById('inpViHook').value,
            category: document.getElementById('inpViCat').value,
            duration: document.getElementById('inpViDur').value,
            
            tools: document.getElementById('inpViTools').value,
            cta: document.getElementById('inpViCTA').value,
            status: document.getElementById('inpViStatus').value,
            link: document.getElementById('inpViLink').value
        };

        if(!dataObj.title) { alert("Premis video wajib diisi!"); return; }

        if(id) {
            const idx = videoIdeas.findIndex(x => x.id == id);
            videoIdeas[idx] = dataObj;
        } else {
            videoIdeas.push(dataObj);
        }
        localStorage.setItem('myVideoIdeas', JSON.stringify(videoIdeas));
        closeVideoModal();
        renderVideoIdeas();
        renderDashboard();
    }

    // 4. DETAIL VIEW (SCRIPT SHEET)
    let currentVideoId = null;
    function openVideoDetail(id) {
        const v = videoIdeas.find(x => x.id === id);
        if(!v) return;
        currentVideoId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = videoCategoryAssets["Lainnya"]; }; } };

        setImg('viewViCover', getVideoImage(v.category));
        setTxt('viewViTitle', v.title);
        setTxt('viewViCat', v.category);
        setTxt('viewViStatus', v.status);
        setTxt('viewViDurBadge', v.duration);
        
        // Hook is King
        setTxt('viewViHook', v.hook ? `"${v.hook}"` : '"Belum ada hook."');
        
        setTxt('viewViCTA', v.cta);
        setTxt('viewViTools', v.tools);

        const lnk = document.getElementById('viewViLink');
        if(lnk) { 
            if(v.link) { 
                lnk.href = v.link; 
                lnk.style.display='inline-block'; 
                lnk.innerText = "Lihat Referensi";
            } else { 
                lnk.style.display='none'; 
            } 
        }

        setTxt('viewViCreated', "Drafted: " + v.createdAt);
        setTxt('viewViUpdated', "Edited: " + v.updatedAt);

        document.getElementById('videoModalTitle').innerText = "Script Detail";
        document.getElementById('videoForm').classList.add('hidden');
        document.getElementById('videoDetailView').classList.remove('hidden');
        document.getElementById('videoFormActions').classList.add('hidden');
        document.getElementById('videoDetailActions').classList.remove('hidden');
        document.getElementById('videoModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deleteVideoIdea(id, e) {
        e.stopPropagation();
        if(confirm("Hapus ide video ini?")) {
            videoIdeas = videoIdeas.filter(x => x.id !== id);
            localStorage.setItem('myVideoIdeas', JSON.stringify(videoIdeas));
            renderVideoIdeas();
            renderDashboard();
        }
    }
    function duplicateVideoIdea(id, e) {
        e.stopPropagation();
        const origin = videoIdeas.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            videoIdeas.push(copy);
            localStorage.setItem('myVideoIdeas', JSON.stringify(videoIdeas));
            renderVideoIdeas();
            renderDashboard();
        }
    }
    function openVideoModal() {
        document.getElementById('videoForm').reset();
        document.getElementById('videoId').value = '';
        document.getElementById('videoModalTitle').innerText = "Drafting Table";
        document.getElementById('videoForm').classList.remove('hidden');
        document.getElementById('videoDetailView').classList.add('hidden');
        document.getElementById('videoFormActions').classList.remove('hidden');
        document.getElementById('videoDetailActions').classList.add('hidden');
        document.getElementById('videoModalOverlay').classList.add('active');
    }
    function closeVideoModal() { document.getElementById('videoModalOverlay').classList.remove('active'); }
    function editVideoIdea() {
        const v = videoIdeas.find(x => x.id === currentVideoId);
        if(!v) return;
        document.getElementById('videoId').value = v.id;
        document.getElementById('inpViTitle').value = v.title;
        document.getElementById('inpViHook').value = v.hook;
        document.getElementById('inpViCat').value = v.category;
        document.getElementById('inpViDur').value = v.duration;
        document.getElementById('inpViTools').value = v.tools;
        document.getElementById('inpViCTA').value = v.cta;
        document.getElementById('inpViStatus').value = v.status;
        document.getElementById('inpViLink').value = v.link;

        document.getElementById('videoModalTitle').innerText = "Edit Script";
        document.getElementById('videoDetailView').classList.add('hidden');
        document.getElementById('videoForm').classList.remove('hidden');
        document.getElementById('videoDetailActions').classList.add('hidden');
        document.getElementById('videoFormActions').classList.remove('hidden');
    }
// --- LOGIKA FITUR WATCHLIST (FILM & SERIES) ---

    // 1. ASSETS GENRE
 

    // Populate Dropdown
   // --- 1. ASSETS GENRE WATCHLIST (REVISI LENGKAP) ---
    const watchGenreAssets = {
        "Action": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
        "Drama": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
        "Sci-Fi": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=800&q=80",
        "Horror": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=800&q=80",
        "Comedy": "https://images.unsplash.com/photo-1517263904808-5dc8b43b18c5?w=800&q=80",
        "Romance": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
        "Anime": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
        "Animation": "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=800&q=80",
        "Documentary": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "Thriller": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&q=80",
        "Fantasy": "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=800&q=80",
        "Adventure": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80",
        "Mystery": "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1517604931442-71053e3e2c28?w=800&q=80"
    };

    // Fungsi Helper Pengambil Gambar
    function getWatchImage(genre) {
        // Jika genre tidak ada di daftar atau kosong, return gambar 'Lainnya'
        return watchGenreAssets[genre] || watchGenreAssets["Lainnya"];
    }

    // --- AUTO-POPULATE DROPDOWN GENRE (Agar Sinkron) ---
    const waGenreSelect = document.getElementById('inpWaGenre');
    if(waGenreSelect) {
        waGenreSelect.innerHTML = ''; // Kosongkan dulu
        // Ambil keys dari object di atas, urutkan abjad A-Z
        Object.keys(watchGenreAssets).sort().forEach(g => {
            const opt = document.createElement('option');
            opt.value = g; 
            opt.innerText = g;
            waGenreSelect.appendChild(opt);
        });
    }

    let watchlist = JSON.parse(localStorage.getItem('myWatchlist')) || [];

    // 2. RENDER WATCHLIST (Clean Card: Rating & Platform)
    // --- 2. RENDER WATCHLIST (REVISI: IMAGE FIX & DESC ADDED) ---
   // --- 2. RENDER WATCHLIST (FIXED IMAGE LOGIC) ---
    function renderWatchlist() {
        const container = document.getElementById('watchContainer');
        const searchTerm = document.getElementById('inpSearchWatch') ? document.getElementById('inpSearchWatch').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpWatchFilter') ? document.getElementById('inpWatchFilter').value : "newest";
        
        // Default safe image if everything else fails
        const safeDefaultImg = "https://images.unsplash.com/photo-1613280194169-6bb2f32a6bfa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2hpbmclMjB0dnxlbnwwfHwwfHx8MA%3D%3D";

        container.innerHTML = '';
        let filtered = watchlist.filter(w => w.title.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'rating_high') filtered.sort((a,b) => b.rating - a.rating);
        if(filterVal === 'stat_watching') filtered = filtered.filter(w => w.status === 'Watching');
        if(filterVal === 'stat_plan') filtered = filtered.filter(w => w.status === 'Plan to Watch');
        if(filterVal === 'type_movie') filtered = filtered.filter(w => w.type === 'Movie');
        if(filterVal === 'type_series') filtered = filtered.filter(w => w.type === 'Series' || w.type === 'Anime');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada tontonan di list.</div>';
            return;
        }

        filtered.forEach(w => {
            const card = document.createElement('div');
            card.className = 'watchlist-card';
            
            // --- ROBUST IMAGE CHECKER ---
            // 1. Check if user provided a custom link AND it's not just empty space
            let imgSrc = safeDefaultImg;
            
            if (w.imgLink && w.imgLink.trim().length > 10) {
                imgSrc = w.imgLink; // Use user's link
            } else {
                // 2. If no custom link, try to get image from Genre helper
                const genreImg = getWatchImage(w.genre);
                if (genreImg) imgSrc = genreImg;
            }
            
            let statColor = '#9ca3af'; 
            if(w.status === 'Watching') statColor = '#fbbf24'; 
            if(w.status === 'Completed') statColor = '#34d399'; 
            if(w.status === 'Dropped') statColor = '#ef4444'; 

            const ratingVal = w.rating > 0 ? `<i class="ph ph-star-fill" style="color:#fbbf24;"></i> ${w.rating}` : '-';

            card.innerHTML = `
                <div style="height:220px; width:100%; position:relative; background:#200505;">
                    <img src="${imgSrc}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='${safeDefaultImg}';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateWatchlist(${w.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteWatchlist(${w.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${w.type}</div>
                </div>
                
                <div class="watchlist-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${w.genre}</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${w.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${w.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#fca5a5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${w.review || 'Belum ada review/catatan.'}
                    </p>
                    
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1);">
                         <span style="font-size:0.8rem; color:#9ca3af;">${w.platform || 'Platform -'}</span>
                         <span style="font-size:1rem; font-weight:bold; color:#fff;">${ratingVal}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openWatchDetail(w.id); };
            container.appendChild(card);
        });
    }
    // 3. SAVE WATCHLIST
    function saveWatchlist() {
        const id = document.getElementById('watchId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (watchlist.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpWaTitle').value,
            type: document.getElementById('inpWaType').value,
            genre: document.getElementById('inpWaGenre').value,
            platform: document.getElementById('inpWaPlat').value,
            status: document.getElementById('inpWaStatus').value,
            
            season: document.getElementById('inpWaSeason').value,
            episode: document.getElementById('inpWaEp').value,
            rating: parseInt(document.getElementById('inpWaRating').value) || 0,
            review: document.getElementById('inpWaReview').value,
            imgLink: document.getElementById('inpWaImg').value
        };

        if(!dataObj.title) { alert("Judul tontonan wajib diisi!"); return; }

        if(id) {
            const idx = watchlist.findIndex(x => x.id == id);
            watchlist[idx] = dataObj;
        } else {
            watchlist.push(dataObj);
        }
        localStorage.setItem('myWatchlist', JSON.stringify(watchlist));
        closeWatchModal();
        renderWatchlist();
        renderDashboard();
    }

    // 4. DETAIL VIEW (CINEMATIC)
    let currentWatchId = null;
    function openWatchDetail(id) {
        const w = watchlist.find(x => x.id === id);
        if(!w) return;
        currentWatchId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        
        // REVISI LOGIKA GAMBAR DETAIL
        const imgEl = document.getElementById('viewWaCover');
        if(imgEl) {
            // Gunakan gambar custom jika ada, kalau tidak gunakan gambar genre
            const imgSrc = w.imgLink && w.imgLink.trim() !== "" ? w.imgLink : getWatchImage(w.genre);
            imgEl.src = imgSrc;
            // Fallback jika error load
            imgEl.onerror = function() { 
                this.src = "https://images.unsplash.com/photo-1613280194169-6bb2f32a6bfa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2hpbmclMjB0dnxlbnwwfHwwfHx8MA%3D%3D"; 
            };
        }

        setTxt('viewWaTitle', w.title);
        setTxt('viewWaType', w.type);
        setTxt('viewWaStatus', w.status);
        setTxt('viewWaPlat', w.platform);
        setTxt('viewWaRatingBadge', w.rating + "/10");
        
        // Status Badge Style
        const statB = document.getElementById('viewWaStatus');
        if(statB) {
            if(w.status === 'Completed') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
            else if(w.status === 'Watching') statB.style.cssText = "color:#fbbf24; border-color:#fbbf24; background:rgba(251, 191, 36, 0.2)";
            else statB.style.cssText = "color:#9ca3af; border-color:#9ca3af; background:rgba(156, 163, 175, 0.2)";
        }

        // Progress Text
        let progTxt = "Movie (Single)";
        if(w.type === 'Series' || w.type === 'Anime') {
            progTxt = `S${w.season || 1} : Eps ${w.episode || 0}`;
            document.getElementById('viewWaSeriesBar').style.display = 'block';
        } else {
            document.getElementById('viewWaSeriesBar').style.display = 'none';
        }
        setTxt('viewWaProgressTxt', progTxt);

        setTxt('viewWaReview', w.review ? `"${w.review}"` : 'Belum ada review.');

        setTxt('viewWaCreated', "Added: " + w.createdAt);
        setTxt('viewWaUpdated', "Last Update: " + w.updatedAt);

        document.getElementById('watchModalTitle').innerText = "Cinema Detail";
        document.getElementById('watchForm').classList.add('hidden');
        document.getElementById('watchDetailView').classList.remove('hidden');
        document.getElementById('watchFormActions').classList.add('hidden');
        document.getElementById('watchDetailActions').classList.remove('hidden');
        document.getElementById('watchModalOverlay').classList.add('active');
    }
    // 5. UTILS
    function deleteWatchlist(id, e) {
        e.stopPropagation();
        if(confirm("Hapus tontonan ini?")) {
            watchlist = watchlist.filter(x => x.id !== id);
            localStorage.setItem('myWatchlist', JSON.stringify(watchlist));
            renderWatchlist();
            renderDashboard();
        }
    }
    function duplicateWatchlist(id, e) {
        e.stopPropagation();
        const origin = watchlist.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Copy)", createdAt: new Date().toLocaleString() };
            watchlist.push(copy);
            localStorage.setItem('myWatchlist', JSON.stringify(watchlist));
            renderWatchlist();
            renderDashboard();
        }
    }
    function openWatchModal() {
        document.getElementById('watchForm').reset();
        document.getElementById('watchId').value = '';
        document.getElementById('watchModalTitle').innerText = "Cinema Entry";
        document.getElementById('watchForm').classList.remove('hidden');
        document.getElementById('watchDetailView').classList.add('hidden');
        document.getElementById('watchFormActions').classList.remove('hidden');
        document.getElementById('watchDetailActions').classList.add('hidden');
        document.getElementById('watchModalOverlay').classList.add('active');
    }
    function closeWatchModal() { document.getElementById('watchModalOverlay').classList.remove('active'); }
    function editWatchlist() {
        const w = watchlist.find(x => x.id === currentWatchId);
        if(!w) return;
        document.getElementById('watchId').value = w.id;
        document.getElementById('inpWaTitle').value = w.title;
        document.getElementById('inpWaType').value = w.type;
        document.getElementById('inpWaGenre').value = w.genre;
        document.getElementById('inpWaPlat').value = w.platform;
        document.getElementById('inpWaStatus').value = w.status;
        document.getElementById('inpWaSeason').value = w.season;
        document.getElementById('inpWaEp').value = w.episode;
        document.getElementById('inpWaRating').value = w.rating;
        document.getElementById('inpWaReview').value = w.review;
        document.getElementById('inpWaImg').value = w.imgLink;

        document.getElementById('watchModalTitle').innerText = "Edit Entry";
        document.getElementById('watchDetailView').classList.add('hidden');
        document.getElementById('watchForm').classList.remove('hidden');
        document.getElementById('watchDetailActions').classList.add('hidden');
        document.getElementById('watchFormActions').classList.remove('hidden');
    }

// --- LOGIKA FITUR PERSONAL CRM ---

    // 1. ASSETS AVATAR (Random Placeholder)
    // Kita gunakan UI Avatars API untuk inisial nama
    function getCrmAvatar(name) {
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0f172a&color=38bdf8&bold=true&size=200`;
    }

    let crmContacts = JSON.parse(localStorage.getItem('myCrmContacts')) || [];

    // 2. RENDER CRM (Profile Card Style)
  // --- 2. RENDER CRM (REVISI: TANGGAL LAST MET JELAS) ---
    function renderCrm() {
        const container = document.getElementById('crmContainer');
        const searchTerm = document.getElementById('inpSearchCrm') ? document.getElementById('inpSearchCrm').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpCrmFilter') ? document.getElementById('inpCrmFilter').value : "newest";
        
        container.innerHTML = '';
        let filtered = crmContacts.filter(c => c.name.toLowerCase().includes(searchTerm) || c.company.toLowerCase().includes(searchTerm) || c.role.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'newest') filtered.sort((a,b) => b.id - a.id);
        if(filterVal === 'cat_client') filtered = filtered.filter(c => c.category === 'Klien');
        if(filterVal === 'cat_mentor') filtered = filtered.filter(c => c.category === 'Mentor');
        
        if(filterVal === 'recent_meet') {
            filtered.sort((a,b) => new Date(b.lastMet) - new Date(a.lastMet));
        }
        
        if(filterVal === 'followup_needed') {
            const today = new Date();
            filtered = filtered.filter(c => {
                if(!c.lastMet) return true; 
                const met = new Date(c.lastMet);
                const diffTime = today - met;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays > 30; 
            });
        }

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Tidak ada kontak ditemukan.</div>';
            return;
        }

        filtered.forEach(c => {
            const card = document.createElement('div');
            card.className = 'crm-card';
            
            const avatar = getCrmAvatar(c.name);
            
            // Logic Hari & Tanggal
            let lastMetTxt = "Belum bertemu";
            let lastMetDateStr = "-";
            let lastMetColor = "#94a3b8"; // Default Grey

            if(c.lastMet) {
                const today = new Date();
                const met = new Date(c.lastMet);
                const diffTime = today - met;
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                
                // Format Tanggal Cantik (ex: 20 Jan 2026)
                lastMetDateStr = met.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

                if(diffDays === 0) lastMetTxt = "Hari Ini";
                else if(diffDays < 0) lastMetTxt = "Terjadwal";
                else lastMetTxt = `${diffDays} hari lalu`;
                
                if(diffDays > 30) lastMetColor = "#f87171"; // Merah (Urgent)
                else if (diffDays <= 7) lastMetColor = "#4ade80"; // Hijau (Aman)
            }

            card.innerHTML = `
                <div style="height:80px; width:100%; background:linear-gradient(135deg, #1e3a8a, #1e293b); position:absolute; top:0; left:0;">
                    <span class="card-source-badge badge-src-crm">CRM</span>
                </div>
                
                <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px; z-index:10;">
                     <button onclick="duplicateCrm(${c.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                     <button onclick="deleteCrm(${c.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                </div>

                <div class="crm-card-body" style="padding-top:40px; position:relative;">
                    <img src="${avatar}" class="crm-avatar">
                    
                    <span class="badge-pill-crm-type" style="align-self:center; margin-bottom:10px;">${c.category}</span>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.2rem; color:white;">${c.name}</h3>
                    <div style="font-size:0.9rem; color:#94a3b8; margin-bottom:1rem;">${c.role || '-'} at ${c.company || '-'}</div>
                    
                    <p style="font-size:0.85rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.5; font-style:italic; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
                        "${c.topic || 'Belum ada catatan interaksi.'}"
                    </p>
                    
                    <div style="margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:#94a3b8; border-top:1px solid rgba(255,255,255,0.05); padding-top:0.8rem;">
                         <span style="display:flex; flex-direction:column; align-items:flex-start;">
                            <span style="font-size:0.7rem; color:#64748b; text-transform:uppercase;">Last Met</span>
                            <span style="color:#cbd5e1; font-weight:300;"><i class="ph ph-calendar-blank"></i> ${lastMetDateStr}</span>
                         </span>
                         <span style="color:${lastMetColor}; font-weight:bold; background:rgba(255,255,255,0.05); padding:5px 8px; border-radius:4px;">${lastMetTxt}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openCrmDetail(c.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE CRM
    function saveCrm() {
        const id = document.getElementById('crmId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (crmContacts.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            name: document.getElementById('inpCrName').value,
            nick: document.getElementById('inpCrNick').value,
            company: document.getElementById('inpCrComp').value,
            role: document.getElementById('inpCrRole').value,
            
            category: document.getElementById('inpCrCat').value,
            dob: document.getElementById('inpCrDob').value,
            
            lastMet: document.getElementById('inpCrLastMet').value,
            via: document.getElementById('inpCrVia').value,
            topic: document.getElementById('inpCrTopic').value,
            
            email: document.getElementById('inpCrEmail').value,
            phone: document.getElementById('inpCrPhone').value,
            link: document.getElementById('inpCrLink').value
        };

        if(!dataObj.name) { alert("Nama kontak wajib diisi!"); return; }

        if(id) {
            const idx = crmContacts.findIndex(x => x.id == id);
            crmContacts[idx] = dataObj;
        } else {
            crmContacts.push(dataObj);
        }
        localStorage.setItem('myCrmContacts', JSON.stringify(crmContacts));
        closeCrmModal();
        renderCrm();
        renderDashboard();
    }

    // 4. DETAIL VIEW
    let currentCrmId = null;
    function openCrmDetail(id) {
        const c = crmContacts.find(x => x.id === id);
        if(!c) return;
        currentCrmId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) el.src = val; };

        setImg('viewCrAvatar', getCrmAvatar(c.name));
        setTxt('viewCrName', c.name);
        setTxt('viewCrRoleComp', `${c.role} @ ${c.company}`);
        setTxt('viewCrCat', c.category);
        
        // Birthday Badge
        const dobEl = document.getElementById('viewCrBirthday');
        if(c.dob) {
            const dob = new Date(c.dob);
            dobEl.innerHTML = `<i class="ph ph-cake"></i> ${dob.toLocaleDateString('id-ID', {day:'numeric', month:'short'})}`;
            dobEl.style.display = 'inline-block';
        } else {
            dobEl.style.display = 'none';
        }

        // Interaction
        setTxt('viewCrLastMetDate', c.lastMet ? formatDate(c.lastMet) : 'Belum pernah');
        setTxt('viewCrVia', c.via);
        setTxt('viewCrTopic', c.topic ? `"${c.topic}"` : 'Tidak ada catatan topik.');

        // Contacts
        setTxt('viewCrEmail', c.email);
        document.getElementById('viewCrEmailLink').href = c.email ? `mailto:${c.email}` : '#';
        
        setTxt('viewCrPhone', c.phone);
        document.getElementById('viewCrPhoneLink').href = c.phone ? `https://wa.me/${c.phone.replace(/^0/,'62').replace(/\D/g,'')}` : '#';

        const lnk = document.getElementById('viewCrLinkedin');
        if(lnk) { if(c.link) { lnk.href = c.link; lnk.style.display='flex'; } else { lnk.style.display='none'; } }

        setTxt('viewCrCreated', "Added: " + c.createdAt);
        setTxt('viewCrUpdated', "Last Update: " + c.updatedAt);

        document.getElementById('crmModalTitle').innerText = "Contact Profile";
        document.getElementById('crmForm').classList.add('hidden');
        document.getElementById('crmDetailView').classList.remove('hidden');
        document.getElementById('crmFormActions').classList.add('hidden');
        document.getElementById('crmDetailActions').classList.remove('hidden');
        document.getElementById('crmModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deleteCrm(id, e) {
        e.stopPropagation();
        if(confirm("Hapus kontak ini?")) {
            crmContacts = crmContacts.filter(x => x.id !== id);
            localStorage.setItem('myCrmContacts', JSON.stringify(crmContacts));
            renderCrm();
            renderDashboard();
        }
    }
    function duplicateCrm(id, e) {
        e.stopPropagation();
        const origin = crmContacts.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), name: origin.name + " (Copy)", createdAt: new Date().toLocaleString() };
            crmContacts.push(copy);
            localStorage.setItem('myCrmContacts', JSON.stringify(crmContacts));
            renderCrm();
            renderDashboard();
        }
    }
    function openCrmModal() {
        document.getElementById('crmForm').reset();
        document.getElementById('crmId').value = '';
        document.getElementById('crmModalTitle').innerText = "Add New Contact";
        document.getElementById('crmForm').classList.remove('hidden');
        document.getElementById('crmDetailView').classList.add('hidden');
        document.getElementById('crmFormActions').classList.remove('hidden');
        document.getElementById('crmDetailActions').classList.add('hidden');
        document.getElementById('crmModalOverlay').classList.add('active');
    }
    function closeCrmModal() { document.getElementById('crmModalOverlay').classList.remove('active'); }
    function editCrm() {
        const c = crmContacts.find(x => x.id === currentCrmId);
        if(!c) return;
        document.getElementById('crmId').value = c.id;
        document.getElementById('inpCrName').value = c.name;
        document.getElementById('inpCrNick').value = c.nick;
        document.getElementById('inpCrComp').value = c.company;
        document.getElementById('inpCrRole').value = c.role;
        document.getElementById('inpCrCat').value = c.category;
        document.getElementById('inpCrDob').value = c.dob;
        document.getElementById('inpCrLastMet').value = c.lastMet;
        document.getElementById('inpCrVia').value = c.via;
        document.getElementById('inpCrTopic').value = c.topic;
        document.getElementById('inpCrEmail').value = c.email;
        document.getElementById('inpCrPhone').value = c.phone;
        document.getElementById('inpCrLink').value = c.link;

        document.getElementById('crmModalTitle').innerText = "Edit Contact";
        document.getElementById('crmDetailView').classList.add('hidden');
        document.getElementById('crmForm').classList.remove('hidden');
        document.getElementById('crmDetailActions').classList.add('hidden');
        document.getElementById('crmFormActions').classList.remove('hidden');
    }
    // --- LOGIKA FITUR EVENT ORGANIZER ---

    // 1. ASSETS JENIS ACARA
    const eventTypeAssets = {
        "Birthday": "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=800&q=80",
        "Wedding": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        "Gathering": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
        "Workshop": "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80",
        "Concert": "https://images.unsplash.com/photo-1459749411177-2a2965e78c48?w=800&q=80",
        "Dinner": "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        "Exhibition": "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
        "Anniversary": "https://images.unsplash.com/photo-1519225468359-3f68d945f585?w=800&q=80",
        "Holiday Party": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
        "Reuni": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
    };

    function getEventImage(type) {
        return eventTypeAssets[type] || eventTypeAssets["Lainnya"];
    }

    // Populate Dropdown
    const evTypeSelect = document.getElementById('inpEvType');
    if(evTypeSelect) {
        evTypeSelect.innerHTML = '';
        Object.keys(eventTypeAssets).sort().forEach(t => {
            const opt = document.createElement('option');
            opt.value = t; opt.innerText = t;
            evTypeSelect.appendChild(opt);
        });
    }

    let events = JSON.parse(localStorage.getItem('myEvents')) || [];

    // 2. RENDER EVENT (Card: Loc & Guests)
    function renderEvent() {
        const container = document.getElementById('eventContainer');
        const searchTerm = document.getElementById('inpSearchEvent') ? document.getElementById('inpSearchEvent').value.toLowerCase() : "";
        const filterVal = document.getElementById('inpEventFilter') ? document.getElementById('inpEventFilter').value : "soonest";
        
        container.innerHTML = '';
        let filtered = events.filter(e => e.name.toLowerCase().includes(searchTerm) || e.loc.toLowerCase().includes(searchTerm));

        // Filter Logic
        if(filterVal === 'soonest') filtered.sort((a,b) => new Date(a.date) - new Date(b.date));
        if(filterVal === 'budget_high') filtered.sort((a,b) => b.budget - a.budget);
        if(filterVal === 'stat_planning') filtered = filtered.filter(e => e.status === 'Concepting' || e.status === 'Booking Vendors');
        if(filterVal === 'stat_ready') filtered = filtered.filter(e => e.status === 'Ready');

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada acara direncanakan.</div>';
            return;
        }

        filtered.forEach(e => {
            const card = document.createElement('div');
            card.className = 'event-card';
            
            // Image Logic
            const bgImage = getEventImage(e.type);
            
            let statColor = '#f472b6'; // Planning
            if(e.status === 'Ready') statColor = '#34d399'; // Green
            if(e.status === 'Completed') statColor = '#94a3b8'; // Grey

            // Format Budget
            const budgetFmt = e.budget ? "Rp " + parseInt(e.budget).toLocaleString() : "Rp -";

            // Hitung Countdown
            const today = new Date();
            const evDate = new Date(e.date);
            const diffTime = evDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            let dayLabel = diffDays > 0 ? `${diffDays} Hari Lagi` : (diffDays === 0 ? 'HARI INI' : 'Selesai');
            let dayColor = diffDays <= 7 && diffDays >= 0 ? '#facc15' : '#fff';

           card.innerHTML = `
                <div style="height:160px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateEvent(${e.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteEvent(${e.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">${e.type}</div>
                </div>
                
                <div class="event-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.1); color:#fff; padding:4px 10px; border-radius:20px;">${e.guests} PAX</span>
                        <span style="font-size:0.7rem; font-weight:700; color:${statColor}; text-transform:uppercase;">${e.status}</span>
                    </div>
                    
                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${e.name}</h3>
                    
                    <p style="font-size:0.9rem; color:#fbcfe8; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${e.vendors || 'Belum ada catatan vendor.'}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="font-size:0.8rem; color:#d8b4fe;"><i class="ph ph-calendar"></i> ${formatDate(e.date)}</span>
                         <span style="font-size:0.75rem; color:${dayColor}; font-weight:bold; background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px;">${dayLabel}</span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openEventDetail(e.id); };
            container.appendChild(card);
        });
    }

    // 3. SAVE EVENT
    function saveEvent() {
        const id = document.getElementById('eventId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (events.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            name: document.getElementById('inpEvName').value,
            type: document.getElementById('inpEvType').value,
            loc: document.getElementById('inpEvLoc').value,
            
            date: document.getElementById('inpEvDate').value,
            time: document.getElementById('inpEvTime').value,
            guests: parseInt(document.getElementById('inpEvGuest').value) || 0,
            status: document.getElementById('inpEvStatus').value,
            
            budget: parseFloat(document.getElementById('inpEvBudget').value) || 0,
            vendors: document.getElementById('inpEvVendors').value
        };

        if(!dataObj.name) { alert("Nama acara wajib diisi!"); return; }

        if(id) {
            const idx = events.findIndex(x => x.id == id);
            events[idx] = dataObj;
        } else {
            events.push(dataObj);
        }
        localStorage.setItem('myEvents', JSON.stringify(events));
        closeEventModal();
        renderEvent();
        renderDashboard();
    }

    // 4. DETAIL VIEW (PARTY TICKET)
    let currentEventId = null;
    function openEventDetail(id) {
        const e = events.find(x => x.id === id);
        if(!e) return;
        currentEventId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = eventTypeAssets["Lainnya"]; }; } };

        setImg('viewEvCover', getEventImage(e.type));
        setTxt('viewEvName', e.name);
        setTxt('viewEvType', e.type);
        setTxt('viewEvLoc', e.loc);
        setTxt('viewEvGuest', e.guests);
        
        // Status Badge Style
        const statB = document.getElementById('viewEvStatus');
        if(statB) {
            statB.innerText = e.status;
            if(e.status === 'Ready') statB.style.cssText = "color:#34d399; border-color:#34d399; background:rgba(52,211,153,0.2)";
            else statB.style.cssText = "color:#e879f9; border-color:#e879f9; background:rgba(232, 121, 249, 0.2)";
        }

        setTxt('viewEvDateBadge', formatDate(e.date));
        setTxt('viewEvTime', e.time);
        
        // Countdown
        const today = new Date();
        const evDate = new Date(e.date);
        const diffTime = evDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setTxt('viewEvCountdown', diffDays > 0 ? `${diffDays} Hari Lagi` : (diffDays === 0 ? 'HARI INI' : 'Selesai'));

        setTxt('viewEvBudget', "Rp " + (e.budget || 0).toLocaleString());
        setTxt('viewEvVendors', e.vendors || "Belum ada vendor.");

        setTxt('viewEvCreated', "Created: " + e.createdAt);
        setTxt('viewEvUpdated', "Last Update: " + e.updatedAt);

        document.getElementById('eventModalTitle').innerText = "Event Detail";
        document.getElementById('eventForm').classList.add('hidden');
        document.getElementById('eventDetailView').classList.remove('hidden');
        document.getElementById('eventFormActions').classList.add('hidden');
        document.getElementById('eventDetailActions').classList.remove('hidden');
        document.getElementById('eventModalOverlay').classList.add('active');
    }

    // 5. UTILS
    function deleteEvent(id, e) {
        e.stopPropagation();
        if(confirm("Hapus acara ini?")) {
            events = events.filter(x => x.id !== id);
            localStorage.setItem('myEvents', JSON.stringify(events));
            renderEvent();
            renderDashboard();
        }
    }
    function duplicateEvent(id, e) {
        e.stopPropagation();
        const origin = events.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), name: origin.name + " (Copy)", createdAt: new Date().toLocaleString() };
            events.push(copy);
            localStorage.setItem('myEvents', JSON.stringify(events));
            renderEvent();
            renderDashboard();
        }
    }
    function openEventModal() {
        document.getElementById('eventForm').reset();
        document.getElementById('eventId').value = '';
        document.getElementById('eventModalTitle').innerText = "Plan Event";
        document.getElementById('eventForm').classList.remove('hidden');
        document.getElementById('eventDetailView').classList.add('hidden');
        document.getElementById('eventFormActions').classList.remove('hidden');
        document.getElementById('eventDetailActions').classList.add('hidden');
        document.getElementById('eventModalOverlay').classList.add('active');
    }
    function closeEventModal() { document.getElementById('eventModalOverlay').classList.remove('active'); }
    function editEvent() {
        const e = events.find(x => x.id === currentEventId);
        if(!e) return;
        document.getElementById('eventId').value = e.id;
        document.getElementById('inpEvName').value = e.name;
        document.getElementById('inpEvType').value = e.type;
        document.getElementById('inpEvLoc').value = e.loc;
        document.getElementById('inpEvDate').value = e.date;
        document.getElementById('inpEvTime').value = e.time;
        document.getElementById('inpEvGuest').value = e.guests;
        document.getElementById('inpEvStatus').value = e.status;
        document.getElementById('inpEvBudget').value = e.budget;
        document.getElementById('inpEvVendors').value = e.vendors;

        document.getElementById('eventModalTitle').innerText = "Edit Event";
        document.getElementById('eventDetailView').classList.add('hidden');
        document.getElementById('eventForm').classList.remove('hidden');
        document.getElementById('eventDetailActions').classList.add('hidden');
        document.getElementById('eventFormActions').classList.remove('hidden');
    }
// --- LOGIKA FITUR MEETING LOG ---

   // =========================================
    // FITUR: MEETING LOG (FULL INTEGRATED FIX)
    // =========================================

    // 1. ASSETS TIPE MEETING
    const meetTypeAssets = {
        "Internal Team": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        "Client Meeting": "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
        "Brainstorming": "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&q=80",
        "Review": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        "Interview": "https://images.unsplash.com/photo-1573497491769-d40747c79366?w=800&q=80",
        "Lainnya": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
    };

    function getMeetImage(type) {
        return meetTypeAssets[type] || meetTypeAssets["Lainnya"];
    }
    
    // Populate Dropdown Form
    const meTypeSelect = document.getElementById('inpMeType');
    if(meTypeSelect) {
        meTypeSelect.innerHTML = '';
        Object.keys(meetTypeAssets).sort().forEach(t => {
            const opt = document.createElement('option');
            opt.value = t; opt.innerText = t;
            meTypeSelect.appendChild(opt);
        });
    }

    // 2. DEFINISI DATA (HANYA SEKALI DEKLARASI)
    let meetings = JSON.parse(localStorage.getItem('myMeetings')) || [];

    // 3. RENDER MEETING (CARD ELEGAN)
    function renderMeeting() {
        const container = document.getElementById('meetContainer');
        if(!container) return;

        const searchEl = document.getElementById('inpSearchMeet');
        const filterEl = document.getElementById('inpMeetFilter');
        const searchTerm = searchEl ? searchEl.value.toLowerCase() : "";
        const filterVal = filterEl ? filterEl.value : "newest";
        
        container.innerHTML = '';
        let filtered = meetings.filter(m => m.title.toLowerCase().includes(searchTerm) || m.attendees.toLowerCase().includes(searchTerm));

        if(filterVal === 'newest') filtered.sort((a,b) => new Date(a.date) - new Date(b.date));
        if(filterVal === 'type_internal') filtered = filtered.filter(m => m.type.includes('Internal'));
        if(filterVal === 'type_client') filtered = filtered.filter(m => m.type.includes('Client'));
        if(filterVal === 'stat_scheduled') filtered = filtered.filter(m => m.status === 'Scheduled');
        if(filterVal === 'stat_completed') filtered = filtered.filter(m => m.status === 'Completed');
        if(filterVal === 'needs_action') filtered = filtered.filter(m => m.action && m.action.length > 5);

        if(filtered.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5); padding:3rem;">Belum ada catatan rapat.</div>';
            return;
        }

        filtered.forEach(m => {
            const card = document.createElement('div');
            card.className = 'meet-card';
            
            const bgImage = getMeetImage(m.type);
            let statColor = '#fbbf24'; 
            if(m.status === 'Completed') statColor = '#94a3b8';
            if(m.status === 'Cancelled') statColor = '#ef4444';

            const dateObj = new Date(m.date);
            const dateStr = dateObj.toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'});
            const descText = m.points || "Belum ada ringkasan diskusi.";

            card.innerHTML = `
                <div style="height:140px; width:100%; position:relative;">
                    <img src="${bgImage}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80';">
                    
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:5px;">
                         <button onclick="duplicateMeeting(${m.id}, event)" style="background:rgba(0,0,0,0.6); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-copy"></i></button>
                         <button onclick="deleteMeeting(${m.id}, event)" style="background:rgba(220, 38, 38, 0.8); color:white; border:none; width:28px; height:28px; border-radius:6px;"><i class="ph ph-trash"></i></button>
                    </div>
                    
                    <div style="position:absolute; bottom:10px; left:10px;">
                        <span class="badge-pill-meet-type">${m.type}</span>
                    </div>
                </div>
                
                <div class="meet-card-body">
                    <div style="text-align:right; margin-bottom:5px; font-size:0.85rem;">
                        <span style="font-weight:bold; color:#fbbf24;">${dateStr}</span>
                        <span style="color:#94a3b8;"> • ${m.time}</span>
                    </div>

                    <h3 style="font-size:1.3rem; margin-bottom:0.3rem; line-height:1.3; color:white;">${m.title}</h3>
                    
                    <p style="font-size:0.9rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:auto; line-height:1.6;">
                        ${descText}
                    </p>
                    
                    <div style="margin-top:1.5rem; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                         <span style="color:${statColor}; font-weight:bold; font-size:0.75rem; text-transform:uppercase;">${m.status}</span>
                         <span style="font-size:0.85rem; color:#94a3b8; display:flex; align-items:center; gap:5px;">
                            <i class="ph ph-map-pin" style="color:#d97706;"></i> ${m.loc || 'Online'}
                         </span>
                    </div>
                </div>
            `;
            card.onclick = (e) => { if(!e.target.closest('button')) openMeetDetail(m.id); };
            container.appendChild(card);
        });
    }

    // 4. SAVE MEETING
    function saveMeeting() {
        const id = document.getElementById('meetId').value;
        const now = new Date().toLocaleString();
        
        const dataObj = {
            id: id ? parseInt(id) : Date.now(),
            createdAt: id ? (meetings.find(x=>x.id==id)?.createdAt || now) : now,
            updatedAt: now,
            
            title: document.getElementById('inpMeTitle').value,
            type: document.getElementById('inpMeType').value,
            loc: document.getElementById('inpMeLoc').value,
            date: document.getElementById('inpMeDate').value,
            time: document.getElementById('inpMeTime').value,
            attendees: document.getElementById('inpMeAttendees').value,
            status: document.getElementById('inpMeStatus').value,
            points: document.getElementById('inpMePoints').value,
            action: document.getElementById('inpMeAction').value,
            link: document.getElementById('inpMeLink').value
        };

        if(!dataObj.title) { alert("Judul rapat wajib diisi!"); return; }

        if(id) {
            const idx = meetings.findIndex(x => x.id == id);
            meetings[idx] = dataObj;
        } else {
            meetings.push(dataObj);
        }
        localStorage.setItem('myMeetings', JSON.stringify(meetings));
        closeMeetModal();
        renderMeeting();
        renderDashboard();
    }

    // 5. OPEN DETAIL (HEADER GAMBAR)
    let currentMeetId = null;
    function openMeetDetail(id) {
        const m = meetings.find(x => x.id === id);
        if(!m) return;
        currentMeetId = id;

        // Helper setters
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val || '-'; };
        const setImg = (id, val) => { const el = document.getElementById(id); if(el) { el.src = val; el.onerror = function() { this.src = meetTypeAssets["Lainnya"]; }; } };

        setImg('viewMeCover', getMeetImage(m.type));
        setTxt('viewMeTitle', m.title);
        setTxt('viewMeType', m.type);
        setTxt('viewMeLoc', m.loc || 'Online');
        setTxt('viewMeAttendees', m.attendees);
        
        const dateObj = new Date(m.date);
        setTxt('viewMeDate', dateObj.toLocaleDateString('id-ID', {weekday:'long', day:'numeric', month:'long', year:'numeric'}));
        setTxt('viewMeTime', m.time);
        
        const statB = document.getElementById('viewMeStatus');
        if(statB) {
            statB.innerText = m.status;
            if(m.status === 'Completed') statB.style.cssText = "color:#94a3b8; border-color:#94a3b8; background:rgba(255,255,255,0.05)";
            else if(m.status === 'Scheduled') statB.style.cssText = "color:#fbbf24; border-color:#fbbf24; background:rgba(217, 119, 6, 0.2)";
            else statB.style.cssText = "color:#ef4444; border-color:#ef4444; background:rgba(220, 38, 38, 0.2)";
        }

        setTxt('viewMePoints', m.points || "Tidak ada notulensi.");
        setTxt('viewMeAction', m.action || "Tidak ada action items.");

        const lnk = document.getElementById('viewMeLink');
        if(lnk) { if(m.link) { lnk.href = m.link; lnk.style.display='flex'; } else { lnk.style.display='none'; } }

        setTxt('viewMeCreated', "Created: " + m.createdAt);
        setTxt('viewMeUpdated', "Last Update: " + m.updatedAt);

        document.getElementById('meetModalTitle').innerText = "Meeting Detail";
        document.getElementById('meetForm').classList.add('hidden');
        document.getElementById('meetDetailView').classList.remove('hidden');
        document.getElementById('meetFormActions').classList.add('hidden');
        document.getElementById('meetDetailActions').classList.remove('hidden');
        
        const overlay = document.getElementById('meetModalOverlay');
        if(overlay) overlay.classList.add('active');
    }

    // 6. UTILS (OPEN/CLOSE/DELETE/DUPLICATE)
    function openMeetModal() {
        document.getElementById('meetForm').reset();
        document.getElementById('meetId').value = '';
        document.getElementById('meetModalTitle').innerText = "Agenda Rapat";
        document.getElementById('meetForm').classList.remove('hidden');
        document.getElementById('meetDetailView').classList.add('hidden');
        document.getElementById('meetFormActions').classList.remove('hidden');
        document.getElementById('meetDetailActions').classList.add('hidden');
        const overlay = document.getElementById('meetModalOverlay');
        if(overlay) overlay.classList.add('active');
    }

    function closeMeetModal() { 
        const overlay = document.getElementById('meetModalOverlay');
        if(overlay) overlay.classList.remove('active'); 
    }

    function editMeeting() {
        const m = meetings.find(x => x.id === currentMeetId);
        if(!m) return;
        document.getElementById('meetId').value = m.id;
        document.getElementById('inpMeTitle').value = m.title;
        document.getElementById('inpMeType').value = m.type;
        document.getElementById('inpMeLoc').value = m.loc;
        document.getElementById('inpMeDate').value = m.date;
        document.getElementById('inpMeTime').value = m.time;
        document.getElementById('inpMeAttendees').value = m.attendees;
        document.getElementById('inpMeStatus').value = m.status;
        document.getElementById('inpMePoints').value = m.points;
        document.getElementById('inpMeAction').value = m.action;
        document.getElementById('inpMeLink').value = m.link;

        document.getElementById('meetModalTitle').innerText = "Edit Agenda";
        document.getElementById('meetDetailView').classList.add('hidden');
        document.getElementById('meetForm').classList.remove('hidden');
        document.getElementById('meetDetailActions').classList.add('hidden');
        document.getElementById('meetFormActions').classList.remove('hidden');
    }

    function deleteMeeting(id, e) {
        e.stopPropagation();
        if(confirm("Hapus catatan rapat ini?")) {
            meetings = meetings.filter(x => x.id !== id);
            localStorage.setItem('myMeetings', JSON.stringify(meetings));
            renderMeeting();
            renderDashboard();
        }
    }

    function duplicateMeeting(id, e) {
        e.stopPropagation();
        const origin = meetings.find(x => x.id === id);
        if(origin) {
            const copy = { ...origin, id: Date.now(), title: origin.title + " (Follow Up)", createdAt: new Date().toLocaleString() };
            meetings.push(copy);
            localStorage.setItem('myMeetings', JSON.stringify(meetings));
            renderMeeting();
            renderDashboard();
        }
    }
    renderWatchlist()
renderIdeas();    // Render kartu Ideas
    renderPlans();    // Render kartu Plans
    renderJournals(); // [PENTING] Render kartu Journal agar tidak hilang saat refresh
    // Panggil Render saat load
    // renderJournals(); (Opsional, atau dipanggil via navigasi)
    renderDashboard();
    renderNotulensi();
    renderLomba(); 
    renderSport();
    renderFood();
renderVacation();
renderWorship();
renderEducation();
renderBusiness();
renderFinance();
renderSubscription();
renderInvestment();
renderSkill();
renderReading();
renderHabit();
renderCertification();
renderContent();
renderPortfolio();
renderVideoIdeas();
renderCrm();
renderEvent();
renderMeeting();
