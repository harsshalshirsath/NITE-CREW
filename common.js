/**
 * NITE CREW — Shared Client Logic & Authentication Module
 * Multi-Persona Management (Male, Female, Admin), Navigation State, and Real-time Storage
 */

// 1. DEMO CREDENTIALS & PRE-SET PROFILES
const DEMO_ACCOUNTS = {
    male: {
        id: "user-male-201",
        email: "rohan@nitecrew.in",
        password: "Rohan@2026",
        role: "male",
        roleLabel: "Guy View (Member)",
        name: "Rohan Verma",
        age: 24,
        occupation: "UI Engineer",
        area: "Bandra West",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
        karma: "165 KP",
        punctuality: "100%",
        verified: true,
        redirectUrl: "squads.html",
        badge: "🧔 Guy Member"
    },
    female: {
        id: "user-female-101",
        email: "zoya@nitecrew.in",
        password: "Zoya@2026",
        role: "female",
        roleLabel: "Girl View (Women-First Review Authority)",
        name: "Zoya Merchant",
        age: 23,
        occupation: "Architect",
        area: "Lower Parel",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        karma: "185 KP",
        punctuality: "98%",
        verified: true,
        redirectUrl: "pairmatch.html",
        badge: "👑 Women-First Review"
    },
    admin: {
        id: "admin-hq-001",
        email: "admin@nitecrew.in",
        password: "NiteCrewAdmin#2026",
        role: "admin",
        roleLabel: "Platform Administrator (HQ Operations)",
        name: "Executive Admin",
        age: 28,
        occupation: "NITE CREW Ops Lead",
        area: "Mumbai HQ",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        karma: "999 KP",
        punctuality: "100%",
        verified: true,
        redirectUrl: "admin.html",
        badge: "🛡️ Admin Operations"
    }
};

// Global Storage Keys
const STORAGE_USER_KEY = 'nitecrew_auth_session';
const STORAGE_PASS_KEY = 'nitecrew_active_pass';
const STORAGE_PENDING_REQUESTS_KEY = 'nitecrew_pending_requests';
const STORAGE_CUSTOM_CLUBS_KEY = 'nitecrew_custom_clubs';

// Authentication Helpers
function getAuthUser() {
    try {
        const stored = localStorage.getItem(STORAGE_USER_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch(e) {}
    // Default to Rohan (Male Persona) if not logged in
    return DEMO_ACCOUNTS.male;
}

function setAuthUser(accountObj) {
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(accountObj));
}

function login(email, password) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    for (const key of Object.keys(DEMO_ACCOUNTS)) {
        const acc = DEMO_ACCOUNTS[key];
        if (acc.email.toLowerCase() === cleanEmail && acc.password === cleanPass) {
            setAuthUser(acc);
            return { success: true, account: acc };
        }
    }
    return { success: false, message: "Invalid credentials. Please use one of the sample demo accounts." };
}

function logout() {
    localStorage.removeItem(STORAGE_USER_KEY);
    showToast("Logged out successfully.");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 400);
}

function switchPersona(roleKey) {
    if (DEMO_ACCOUNTS[roleKey]) {
        const acc = DEMO_ACCOUNTS[roleKey];
        setAuthUser(acc);
        showToast(`Switched persona to ${acc.name} (${acc.roleLabel})`);
        setTimeout(() => {
            window.location.href = acc.redirectUrl;
        }, 350);
    }
}

// Render Header Persona Badge & Actions
function initGlobalHeaderAuth() {
    const navRight = document.querySelector('.nav-right');
    const user = getAuthUser();

    if (navRight) {
        navRight.innerHTML = `
            <div class="user-persona-header-wrap" id="userPersonaMenu">
                <div class="persona-pill-trigger" onclick="togglePersonaDropdown(event)">
                    <img src="${user.avatar}" alt="${user.name}" class="persona-avatar-tiny" />
                    <div class="persona-info-tiny">
                        <span class="persona-name-tiny">${user.name.split(' ')[0]}</span>
                        <span class="persona-badge-tiny ${user.role}">${user.role === 'admin' ? '🛡️ Admin' : (user.role === 'female' ? '👑 Girl View' : '🧔 Guy View')}</span>
                    </div>
                    <span class="dropdown-chevron">▼</span>
                </div>

                <!-- Floating Persona Dropdown -->
                <div class="persona-dropdown-menu hidden" id="personaDropdownMenu">
                    <div class="pdm-header">
                        <strong>${user.name}</strong>
                        <small>${user.email}</small>
                    </div>
                    
                    <div class="pdm-section-title">SWITCH DEMO PERSONA:</div>
                    <button class="pdm-item ${user.role === 'male' ? 'active' : ''}" onclick="switchPersona('male')">
                        <span>🧔 Guy View (Rohan V.)</span>
                        <small>Member · Bandra West</small>
                    </button>
                    <button class="pdm-item ${user.role === 'female' ? 'active' : ''}" onclick="switchPersona('female')">
                        <span>👩 Girl View (Zoya M.)</span>
                        <small>Women-First Review · Lower Parel</small>
                    </button>
                    <button class="pdm-item ${user.role === 'admin' ? 'active' : ''}" onclick="switchPersona('admin')">
                        <span>🛡️ Admin HQ (Operations)</span>
                        <small>Analytics & Add Venues</small>
                    </button>

                    <div class="pdm-divider"></div>
                    ${user.role === 'admin' ? '<a href="admin.html" class="pdm-action-link">⚙️ Open Admin Dashboard</a>' : ''}
                    <a href="login.html" class="pdm-action-link">🔑 Switch Account / Login</a>
                    <button class="pdm-action-btn pdm-logout" onclick="logout()">Sign Out ✕</button>
                </div>
            </div>

            ${user.role === 'admin' ? `
                <a href="admin.html" class="btn-pixel-primary" style="background: #00F0FF; box-shadow: 0 4px 14px rgba(0, 240, 255, 0.35);">
                    <span>⚙️ Admin Hub</span>
                </a>
            ` : `
                <a href="squads.html" class="btn-pixel-primary">
                    <span>⚡ Browse Squads</span>
                </a>
            `}
        `;
    }

    // If Admin, ensure Admin tab is accessible in desktop nav
    const navCenter = document.getElementById('navLinks');
    if (navCenter && user.role === 'admin') {
        if (!navCenter.querySelector('a[href="admin.html"]')) {
            const adminLink = document.createElement('a');
            adminLink.href = 'admin.html';
            adminLink.className = `nav-link ${window.location.pathname.includes('admin') ? 'active' : ''}`;
            adminLink.style.borderColor = '#00F0FF';
            adminLink.style.color = '#00F0FF';
            adminLink.innerHTML = '⚙️ Admin';
            navCenter.appendChild(adminLink);
        }
    }
}

function togglePersonaDropdown(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('personaDropdownMenu');
    if (menu) menu.classList.toggle('hidden');
}

// Close dropdown on outside click
document.addEventListener('click', (e) => {
    const menu = document.getElementById('personaDropdownMenu');
    const trigger = document.getElementById('userPersonaMenu');
    if (menu && trigger && !trigger.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// Toast Notifications
function showToast(message) {
    let toast = document.getElementById('toastNotification');
    let toastMsg = document.getElementById('toastMessage');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-notification hidden';
        toast.id = 'toastNotification';
        toast.innerHTML = '<span id="toastMessage"></span>';
        document.body.appendChild(toast);
        toastMsg = document.getElementById('toastMessage');
    }

    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3500);
}

// Mobile Nav Toggle
function toggleMobileNav() {
    const nav = document.getElementById('navLinks');
    const btn = document.getElementById('mobileMenuBtn');
    if (nav) nav.classList.toggle('open');
    if (btn) btn.classList.toggle('active');
}

function closeMobileNav() {
    const nav = document.getElementById('navLinks');
    const btn = document.getElementById('mobileMenuBtn');
    if (nav) nav.classList.remove('open');
    if (btn) btn.classList.remove('active');
}

// Auto Initialize Header on Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalHeaderAuth);
} else {
    initGlobalHeaderAuth();
}
