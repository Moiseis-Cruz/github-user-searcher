const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `  <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                                <div class="data">
                                                    <h1>${user.name ?? 'Não possui nome cadastrado! 😢'}</h1>
                                                    <p>${user.bio ?? 'Não possui bio cadastrada! 😢'}</p>
                                                    <p>👥️️ ${user.followers} Seguidores</p>
                                                    <p>👤 ${user.following} Seguindo</p>
                                                </div>
                                        </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    <ul class="status">
                                                                        <li>🍴 ${repo.forks}</li>
                                                                        <li>⭐ ${repo.stargazers_count}</li>
                                                                        <li>👀 ${repo.watchers}</li> <li>👨‍💻 ${repo.language}</li>
                                                                    </ul>
                                                                </li>`);
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItems}</ul>
                                            </div>`
        }

        let eventsItems = ''
        user.events.forEach( e => {
            eventsItems += `<li class="events"><span>${e.repo.name}:</span> ${e.type}</li>`
        })

        if(user.events.length > 0) {
            this.userProfile.innerHTML += ` <h2>Eventos:</h2>
                                            <ul class="list-events">${eventsItems}</ul>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export {screen}
