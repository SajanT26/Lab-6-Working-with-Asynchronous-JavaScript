function fetchUserProfiles() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                { id: 1, name: 'Sajan Thavarasa', age: 20 },
            ];
            resolve(data);
        }, 2000);
    });
}

function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                { postId: 1, userId: 1, title: 'My Java Post' },
            ];
            resolve(data);
        }, 1750); 
    });
}

function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                { commentId: 1, postId: 1, content: 'This Is A Fun Class' },
            ];
            resolve(data);
        }, 2500); 
    });
}

async function fetchData() {
    try {
        console.log('Fetching profiles...');
        const users = await fetchUserProfiles();
        console.log('User profiles:', users);

        console.log('Fetching user posts...');
        const posts = await fetchPosts();
        console.log('Posts:', posts);

        console.log('Fetching user comments...');
        const comments = await fetchComments();
        console.log('Comments:', comments);
        
        
        return { users, posts, comments };
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

fetchData().then((data) => {
    console.log('All data was successfully collected:', data);
}).catch((error) => {
    console.error('Failed to collect all data:', error);
});
