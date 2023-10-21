import { createChessBoard } from './createchess';
import { addGridNums } from './gridnums';

export function createBoard() {
    // Gets access to the page body element to create the page.
    const page = document.body;
    // Creates a header and an h1 that we can add to then append to the body later.
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.id = 'headcontainer';
    h1.textContent = 'Knight Trevails by Mason Yates';
    // This is all the head information created for the header.
    const start = document.createElement('p');
    start.id = 'start';
    start.textContent = 'Start Location';
    const startInput = document.createElement('input');
    startInput.id = 'startinput';
    startInput.placeholder = 'X , Y';
    const end = document.createElement('p');
    end.id = 'end';
    end.textContent = 'End Location';
    const endInput = document.createElement('input');
    endInput.id = 'endinput';
    endInput.placeholder = 'X , Y';
    /* We append the h1 to the page then the header to the body. The goal is to use the head 
    element to be a container to control the start end location text and inputs */
    page.appendChild(h1);
    header.appendChild(start);
    header.appendChild(end);
    header.appendChild(startInput);
    header.appendChild(endInput);
    page.appendChild(header);
    /* We then create the main which will hold the board elements */
    const main = document.createElement('main');
    main.id = 'maincontainer';
    // We then create the board
    const board = createChessBoard();
    // We then append the board to the main and the main to the body.
    main.appendChild(board);
    page.appendChild(main);
    // We then use this function to add the numbers to the game grid;
    addGridNums();
}
