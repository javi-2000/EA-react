export async function tabFetching () {
    const response = await fetch('./src/database/cards/cards.json')
    return response.json();
}