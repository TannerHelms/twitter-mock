export async function getNews() {
    const res = await fetch(
        'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json',
        {
            next: { revalidate: 5000 }
        }
    );
    return res.json();
}

export async function getUsers() {
    const res = await fetch('https://randomuser.me/api/?results=30&inc=name,login,picture');
    return res.json();
}