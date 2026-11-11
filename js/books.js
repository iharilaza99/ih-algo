/* ==========================================================================
   GESTION DES DOCUMENTS - IH ALGO
   Ampio na esory eto ireo boky na dokument fa tsy mila mikasika ny HTML ianao.
   ========================================================================== */

const booksData = {
    "recueil": {
        url: "./sources/Recueil TS 2027.pdf",
        cover: "./couverture/cover-recueil.jpg",
        title: "Recueil TS 2027",
        desc: "Recueil complet des annales et exercices corrigés pour la préparation au Baccalauréat.",
        price: "10 000 Ar"
    },
    "resume": {
        url: "./sources/Résumé TS 2027.pdf",
        cover: "./couverture/cover-resume.jpg",
        title: "Résumé TS 2027",
        desc: "Fiches de synthèse et résumés de cours essentiels pour maîtriser toutes les notions clés.",
        price: "20 000 Ar"
    }
    // Raha hanampy boky fahatelo dia apetrao eto fotsiny:
    // ,
    // "chimie": {
    //     url: "./sources/Chimie TS.pdf",
    //     cover: "./couverture/cover-chimie.jpg",
    //     title: "Chimie Terminale S",
    //     desc: "Cours et exercices de chimie.",
    //     price: "12 000 Ar"
    // }
};

let currentBookKey = Object.keys(booksData)[0];

// Famoronana ho azy ny Lisitra eo amin'ny pejy
function renderBooksList() {
    const container = document.getElementById('books-list-container');
    if (!container) return;
    container.innerHTML = "";

    for (const key in booksData) {
        const book = booksData[key];
        const isActive = (key === currentBookKey);

        const cardDiv = document.createElement('div');
        cardDiv.id = `item-${key}`;
        cardDiv.className = `book-card cursor-pointer p-3 rounded-xl border-2 transition duration-300 flex items-center space-x-3 shadow-sm ${isActive ? 'border-indigo-600 bg-indigo-50/60' : 'border-slate-200 bg-white hover:border-indigo-300'}`;
        cardDiv.onclick = () => switchPdf(key);

        cardDiv.innerHTML = `
            <div class="w-10 h-12 bg-slate-200 rounded overflow-hidden flex-shrink-0">
                <img src="${book.cover}" alt="Cover" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="text-sm font-bold text-slate-900 truncate">${book.title}</h4>
                <span class="text-xs font-semibold text-emerald-600">${book.price}</span>
            </div>
        `;
        container.appendChild(cardDiv);
    }
}

// Fiasana rehefa misafidy na manao clique amin'ny boky iray
function switchPdf(key) {
    currentBookKey = key;
    const data = booksData[key];
    if (!data) return;

    document.getElementById('pdf-iframe').src = data.url;
    document.getElementById('download-link').href = data.url;
    document.getElementById('badge-text').innerText = `${data.title}.pdf`;

    document.getElementById('book-cover').src = data.cover;
    document.getElementById('book-title').innerText = data.title;
    document.getElementById('book-desc').innerText = data.desc;
    document.getElementById('book-price').innerText = data.price;

    renderBooksList();
}

function openModal() {
    const data = booksData[currentBookKey];
    document.getElementById('modal-iframe').src = data.url;
    document.getElementById('modal-title').innerHTML = `<i class="fa-solid fa-file-pdf text-red-400 mr-2"></i> ${data.title}`;
    document.getElementById('pdf-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('pdf-modal').classList.add('hidden');
    document.getElementById('modal-iframe').src = '';
}

window.onload = function() {
    switchPdf(currentBookKey);
};