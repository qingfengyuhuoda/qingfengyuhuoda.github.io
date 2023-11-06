interface CountdownState {
    remainingSeconds: number;
    isStopped: boolean;
}

class CountdownTimer {
    private initialSeconds: number;
    private state: CountdownState;
    private timer: number | null;

    constructor(initialSeconds: number) {
        this.initialSeconds=initialSeconds;
        this.state = {
            remainingSeconds: initialSeconds,
            isStopped: true
        };
        this.timer = null;
    }

    startCountdown(): void {
        this.state.isStopped = false;
        this.timer = window.setInterval(() => {
            if (!this.state.isStopped && this.state.remainingSeconds > 0) {
                this.state.remainingSeconds--;
            } else {
                this.stopCountdown();
            }
        }, 1000);
    }

    stopCountdown(): void {
        this.state.isStopped = true;
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    resetCountdown(): void {
        this.stopCountdown();
        this.state.remainingSeconds = this.initialSeconds; // 重置倒计时时间
    }

    getCurrentState(): CountdownState {
        return this.state;
    }
}