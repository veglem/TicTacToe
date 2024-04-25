let isFirstPlayer = true;

const firstPlayer = [];
const secondPlayer = [];

const addNewClick = (x, y) => {
    let isValid = true;
    firstPlayer.forEach((value, index) => {
        if (value.x === x && value.y === y &&
            index !== 0 && !firstPlayer) {
            isValid = false;
        }
    });
    secondPlayer.forEach((value, index) => {
        if (value.x === x && value.y === y &&
            index !== 0 && firstPlayer) {
            isValid = false;
        }
    });
    if (!isValid) {
        return undefined;
    }
    let deleted = undefined;
    if (isFirstPlayer && firstPlayer.length === 3) {
        deleted = firstPlayer.splice(0, 1);
    }else if (!isFirstPlayer && secondPlayer.length === 3) {
        deleted = secondPlayer.splice(0, 1);
    }
    if (deleted !== undefined) {
        document.getElementById(`${deleted[0].x}-${deleted[0].y}`).innerHTML = '&nbsp;';
    }
    document.getElementById(`${x}-${y}`).innerHTML = isFirstPlayer ? 'x' : 'o';
    if (isFirstPlayer) {
        firstPlayer.push({x: x, y: y});
    } else {
        secondPlayer.push({x: x, y: y});
    }
    isFirstPlayer = !isFirstPlayer;
}

document.getElementById('1-1').onclick = () => {
    addNewClick(1,1);
}

document.getElementById('1-2').onclick = () => {
    addNewClick(1,2);
}

document.getElementById('1-3').onclick = () => {
    addNewClick(1,3);
}


document.getElementById('2-1').onclick = () => {
    addNewClick(2,1);
}

document.getElementById('2-2').onclick = () => {
    addNewClick(2,2);
}

document.getElementById('2-3').onclick = () => {
    addNewClick(2,3);
}


document.getElementById('3-1').onclick = () => {
    addNewClick(3,1);
}

document.getElementById('3-2').onclick = () => {
    addNewClick(3,2);
}

document.getElementById('3-3').onclick = () => {
    addNewClick(3,3);
}