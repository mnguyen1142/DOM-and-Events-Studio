function launch() {
    const takeOffButton = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const background = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");

    // 2. Takeoff Button
    takeOffButton.addEventListener('click', function(event) {
        // a. Window confirm
        if(window.confirm("Confirm that the shuttle is ready for takeoff.") == true) {
            // b. Flight status
            status.innerHTML = "Shuttle in flight";
            // c. Background color
            background.style.backgroundColor = "blue";
            //d. Shuttle height
            height.innerHTML = 10000;
        }
    })

    const landButton = document.getElementById("landing");

    // 3. Land button
    landButton.addEventListener('click', function(event) {
        // a. Window alert
        window.alert("The shuttle has landed.");
        // b. Flight status
        status.innerHTML = "The shuttle has landed.";
        // c. Background color
        background.style.backgroundColor = "green";
        // d. Shuttle height
        height.innerHTML = 0;

    })

    const abortButton = document.getElementById("missionAbort");

    // 4. Abort button
    abortButton.addEventListener('click', function(event) {
        // a. Window confirm
        if(window.confirm("Confirm that you want to abort the mission.") == true) {
            // b. Flight status
            status.innerHTML = "Mission aborted";
            // c. Background color
            background.style.backgroundColor = "green";
            //d. Shuttle height
            height.innerHTML = 0;
        }
    })

    // 5. Up, Down, Left, Right button
    const upButton = document.getElementById("up");

    upButton.addEventListener('click', function(event) {
        let newHeight = (Number)(height.innerHTML);
        newHeight += 10000;
        height.innerHTML = newHeight;
    })

    const downButton = document.getElementById("down");

    downButton.addEventListener('click', function(event) {
        let newHeight = (Number)(height.innerHTML);
        newHeight -= 10000;
        height.innerHTML = newHeight;
    })

    const shuttle = document.getElementById("rocket");
    const leftButton = document.getElementById("left");

    leftButton.addEventListener('click', function(event) {
        if(shuttle.style.transform == "") {
            shuttle.style.transform = 'translateX(-10px)';
        } else {
            let left = (Number)(shuttle.style.transform.match(/[+\-0-9]+/g));
            left -= 10;
            shuttle.style.transform = 'translateX(' + left + 'px)';
        }

    })

    const rightButton = document.getElementById("right");

    rightButton.addEventListener('click', function(event) {
        if(shuttle.style.transform == "") {
            shuttle.style.transform = 'translateX(10px)';
        } else {
            let right = (Number)(shuttle.style.transform.match(/[+\-0-9]+/g));
            right += 10;
            shuttle.style.transform = 'translateX(' + right + 'px)';
        }

    })

}

window.addEventListener("load", launch);