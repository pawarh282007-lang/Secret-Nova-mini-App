// Dynamic UI rendering helpers for games and leaderboards
function renderTrendingGames() {
    const container = document.getElementById('trending-games-container');
    if (!container) return;
    
    container.innerHTML = GAME_REGISTRY.map(game => `
        <div class="game-card-item card-3d" onclick="openGameModal('${game.id}')">
            <img src="${game.thumbnail}" alt="${game.name}" class="game-thumb">
            <div class="game-card-info">
                <h4>${game.name}</h4>
                <div class="game-meta-row">
                    <span class="players-count"><i class="fa-solid fa-user-group"></i> ${game.players}</span>
                    <button class="btn-play-sm">Play</button>
                </div>
            </div>
        </div>
    `).join('');
}
