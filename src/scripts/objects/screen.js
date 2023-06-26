const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado! 😢'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada! 😢'}</p>
                                <p>Seguidores: ${user.followers}</p>
                                <p>Seguindo: ${user.following}</p>
                            </div>
        </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a> <div>Forks: 🍴 ${repo.forks} Stars: ⭐ ${repo.stargazers_count} Watchers: 👀 ${repo.watchers} Language: 👨‍💻 ${repo.language}</div></li>`);

        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItems}</ul>
            </div>`
        }
        
        // let userEvents = ''
        // user.events.forEach(e => userEvents += `<li>${e.events}</li>`);
        // let eventsItem = ''
        
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export {screen}

// repositories: [forks: '', stargazers_count: '', watchers: '', language: ''],