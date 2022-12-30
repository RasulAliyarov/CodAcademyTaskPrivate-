const reduce = (state, action) => {

    console.log(state, action)

    switch (action.type) {
        case "STOP":
            return {
                btn: state.btn = false,
                hours: state.hours,
                seconds: state.seconds,
                minutes: state.minutes,
            }
        case "START":
            if (state.seconds == 60) {
                minutes: state.minutes += 1
                seconds: state.seconds = 0
            }
            if (state.minutes == 60) {
                hours: state.hours += 1
                minutes: state.minutes = 0
            }
            return {
                btn: state.btn = true,
                seconds: state.seconds += 1,
                hours: state.hours += 0,
                minutes: state.minutes += 0,
            }
        case "RESET":
            return {
                hours: state.hours = 0,
                seconds: state.seconds = 0,
                minutes: state.minutes = 0,
                btn: state.btn = false
            }
    }
}

export default reduce