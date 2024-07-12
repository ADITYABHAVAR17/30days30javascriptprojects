document.getElementById('searchBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    if (username) {
        fetchGitHubProfile(username);
    }
});

function fetchGitHubProfile(username) {
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => response.json())
        .then(data => { if (data.message === "Not Found") {
            // console.log(data);
            alert("Enter Valid Username")
            }
            else {
                displayProfile(data);
                
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayProfile(data) {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
        <div class="element">
        <a href="${data.html_url}" target="_blank"><img src="${data.avatar_url}" alt="${data.name}'s avatar" width="150"></a>
        <div class="element1">
        <h2>${data.name}</h2>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <p><a href="${data.html_url}" target="_blank">View Profile on GitHub</a></p>
        </div>
        </div>
    `;
}
