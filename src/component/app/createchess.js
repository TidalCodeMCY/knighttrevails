export function createChessBoard() {
    // Create a storage container to return
    const container = document.createElement('div');
    container.id = 'gamecontainer';
    // Create a loop to create 81 divs with all dynamic ids so we can customize individuals
    // eslint-disable-next-line no-plusplus
    for (let x = 80; x > -1; x--) {
        const div = document.createElement('div');
        div.id = `location${x}`;
        div.classList.add('gamespace');
        container.appendChild(div);
    }

    return container;
}
