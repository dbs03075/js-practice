const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');



async function getUser(username){
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    console.log(resp);

    if (resp.status === 404){
        alert("Not Found");
        return 0;
    }

    console.log(respData);
    createUserCard(respData);

    getRepos(username);
}


async function getRepos(username){
    const resp = await fetch(APIURL + username + '/repos');
    const respData = await resp.json();

    console.log(resp);
    addReposTocard(respData);
   
}

function createUserCard(user){
//     const card = document.createElement('div');
//     card.classList.add('card');

//     card.innerHTML = `
//     <div>
//         <img src="${user.avatar}" alt="${user.name}" />
//     </div>
//     <div>
//         <h2>${user.name}</h2>
//         <p>${user.bio}</p>
//         <ul>
//             <li>${user.followers}</li>
//             <li>${user.following}</li>

//             <li>${user.public}</li>
//         </ul>
//     </div>
//     `

    const cardHTML  = `
    <div class="card">
        <div >
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



function addReposTocard(repos){
    const reposEl = document.getElementById("repos");
    console.log(repos);
    console.log(repos.sort((a, b)=> b.stargazers_count - a.stargazers_count));
    console.log(repos.sort((a, b)=> b.stargazers_count - a.stargazers_count).slice(0,9));



    // repos.slice(0,9).forEach(..)-> 10개 짜름
    repos.sort((a, b)=> b.stargazers_count - a.stargazers_count).slice(0,9).forEach(repo =>{
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;
        console.log(repoEl);
        console.dir(repoEl);
        reposEl.appendChild(repoEl);
    })
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const user = search.value;
    console.log(search.value);
    if(user){
        getUser(user);
        search.value = "";
    }
})