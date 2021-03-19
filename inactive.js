const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

let stage = 0

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}

function stagePrint(stage){
    switch (stage) {
        case 0:
            inactiveFirstStage()
            break
        case 1:
            inactiveSecondStage()
            break
        case 2:
            inactiveThirdStage()
            break
    }
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    console.log(stage)
    const time = (new Date().getTime() - user.lastActivity)/(1000*60)
    stagePrint(stage)

    if (time < 2) {
        stage = (stage +1 ) % 3
    }
    else if (time < 3 && time > 2) {
        stage = (stage +1 ) % 3
    }
    else if (time < 5 && time > 4) {
        stage = (stage +1 ) % 3
    }
    else {
        stage = 0
    }



}, (1000 * 60));