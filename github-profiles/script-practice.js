const APIURL = 'https://api.github.com/users/';


const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");


getUser('florinpop17');

async function getUser(username){
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    console.log(resp.status);
    console.log(respData);
    console.dir(respData);

    createUserCard(respData);

    getRepos(username);
}


async function getRepos(username){
    const resp = await fetch(APIURL + username +'/repos');
    const respData = await resp.json();

    console.log(respData);

    createRepos(respData);
}


function createUserCard(user){
    console.log(user.avatar_url);

    cardHTML = `
    <div class="card">
        <div>
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul class="info">
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>

                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            
            <div id="repos"></div>
        </div>
    </div>
    `;

    main.innerHTML = cardHTML;
}

function createRepos(repos){
    const reposEl = document.getElementById("repos");

    repos.sort((a,b)=>{b.stargazers_count- a.stargazers_count}).slice(0,9).forEach((repo)=>{
        console.log(repo);

        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.innerText =repo.name;
        repoEl.target = "_blank";
        reposEl.appendChild(repoEl);
    });
}



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const user = search.value;
   
    if(user){
        getUser(user);
        search.value = '';
    }

});