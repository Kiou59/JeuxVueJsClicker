import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({

        srcGuez: '/./src/img/merguez.png',
        srcs: ['/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png'],
        guezProgress: 10,
        classes: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        classeGuez: 'w-24 h-24 animate-spin',
        timer: -1,
        score: 0,
        level: 3,
        srcChippo: '/./src/img/chipolata.png',
        srcBierre: '/./src/img/kronenbourg.png',
        srcChorizo: '/./src/img/chorizo.png',
        srcGaviscon: '/./src/img/maalox.png',
        srcSalade: '/./src/img/Salade.png',
        timeLeft: 3,
        combo: 0,
        comboMetter: 0,
        classMain: 'blur-sm',
        classPopUp: '',
        hsPopUp: ['Bienvenue sur Merguez clicker!', 'niveau 1', 'niveau 2', 'niveau 3', 'niveau 4', 'niveau 5'],
        hPopUp: '',
        setTime: null,
        scoreStep: [
            [100, 50, 20, 10, -10],
            [500, 200, 10050, -10],
            [1000, 500, 200, 100, -10],
            [2000, 1000, 500, 200, -10],
            [5000, 2000, 1000, 500, -10],
            [1000, 5000, 2000, 1000, -10]
        ]
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        popUpStyle() {
            this.hPopUp = this.hsPopUp[this.level]
        },
        increaseScore() {
            this.setTime = () => {
                if (this.guezProgress < 100) {
                    this.timer += 0.1
                    this.timeLeft -= 0.1
                    console.log(this.timer)
                    if (this.timeLeft < 0) {
                        this.guezProgress -= 1
                    }
                }
            }
        },
        increaseCombo() {
            if (this.comboMetter == 0) {
                this.timer = -1
            } else if (this.comboMetter == 1) {
                this.timer = -0.8
                this.score = (this.score * 1.1)
            } else if (this.comboMetter == 2) {
                this.timer = -0.6
                this.score = (this.score * 1.2)
            } else if (this.comboMetter == 3) {
                this.timer = -0.3
                this.score = (this.score * 1.5)
            } else if (this.comboMetter >= 4) {
                this.timer = 0
                this.score = (this.score * 1.5)
            }
        },
        start() {

            if (this.level == 0) {
                let m = (Math.floor(Math.random() * 25));
                console.log(m);
                this.classMain = '';
                this.classPopUp = 'hidden'
                this.srcs[m] = this.srcGuez;
                this.classes[m] = this.classeGuez;
                this.timer = -1
                setInterval(this.setTime, 100)
                this.guezProgress = 10
            } else if (this.level != 0) {
                this.classMain = '';
                this.classPopUp = 'hidden'
                this.guezProgress = 1
                this.timer = -1
            }
        },
        scoring() {
            this.combo = this.score
            if (this.timer <= 0.8) {
                this.score += this.scoreStep[this.level][0]
                this.timer = 0
                this.timeLeft = 3
                if (this.score == (this.scoreStep[this.level][0])) {
                    this.comboMetter += 1
                    this.increaseCombo()
                }
            } else if (this.timer < 1.0 && this.timer > 0.8) {
                this.score += this.scoreStep[this.level][1]
                this.timer = 0
                this.timeLeft = 3
                this.comboMetter = 0
            } else if (this.timer >= 1.5 && this.timer > 1.0) {
                this.score += this.scoreStep[this.level][2]
                this.timer = 0
                this.timeLeft = 3
                this.comboMetter = 0
            } else if (this.timer >= 2 && this.timer > 1.5) {
                this.score += this.scoreStep[this.level][3]
                this.timer = 0
                this.timeLeft = 3
                this.comboMetter = 0
            } else if (this.timeLeft <= 0) {
                this.score += this.scoreStep[this.level][4]
                this.timer = 0
                this.timeLeft = 3
                this.comboMetter = 0
            }
        },
        levelUp() {
            if (this.guezProgress >= 100) {
                this.classMain = 'blur-sm',
                    this.classPopUp = ''
                this.level += 1
                this.popUpStyle()
                clearInterval(this.setTime)
            }
        },
        gameOver() {
            if (this.guezProgress < 0) {
                alert(`vous avez perdu. votre score est de ${this.score}`)
                this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
            }
        },
        clickGuez(n) {
            this.gameOver()
            if (this.level == 0) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png', '/./src/img/transparent.png']
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    let m = (Math.floor(Math.random() * 25));
                    console.log(m);
                    this.srcs[m] = this.srcGuez;
                    this.classes[m] = this.classeGuez;
                    this.guezProgress += 20;
                    this.levelUp()
                    this.scoring()
                } else if (this.srcs[n] != this.srcGuez) {
                    this.score -= 100;
                    this.guezProgress -= 10
                }
            } else if (this.level == 1) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    let m = (Math.floor(Math.random() * 25));
                    let c = (Math.floor(Math.random() * 25));
                    while (m == c) {
                        m = (Math.floor(Math.random() * 25));
                        c = (Math.floor(Math.random() * 25));
                    }
                    this.srcs[m] = this.srcGuez;
                    this.classes[m] = this.classeGuez;
                    this.srcs[c] = this.srcChippo;
                    this.classes[c] = this.classeGuez;
                    this.guezProgress += 20;
                    this.levelUp()
                    this.scoring()
                } else if (this.srcs[n] != this.srcGuez) {
                    this.score -= 100;
                    this.guezProgress -= 10
                }
            } else if (this.level == 2) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    let m = 0
                    let c = 0
                    let b = 0
                    while (m == c || m == b || c == b) {
                        m = (Math.floor(Math.random() * 25));
                        c = (Math.floor(Math.random() * 25));
                        b = (Math.floor(Math.random() * 25));
                    }
                    this.srcs[m] = this.srcGuez;
                    this.classes[m] = this.classeGuez;
                    this.srcs[c] = this.srcChippo;
                    this.classes[c] = this.classeGuez;
                    this.srcs[b] = this.srcBierre;
                    this.classes[b] = this.classeGuez;
                    this.guezProgress += 20;
                    this.levelUp()
                    this.scoring()
                } else if (this.srcs[n] != this.srcGuez) {
                    this.score -= 100;
                    this.guezProgress -= 10
                }
            } else if (this.level == 3) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    let m = 0
                    let c = 0
                    let b = 0
                    let ch = 0
                    while (m == c || m == b || b == c || m == ch || b == ch || c == ch) {
                        m = (Math.floor(Math.random() * 25));
                        c = (Math.floor(Math.random() * 25));
                        b = (Math.floor(Math.random() * 25));
                        ch = (Math.floor(Math.random() * 25));
                    }
                    this.srcs[m] = this.srcGuez;
                    this.classes[m] = this.classeGuez;
                    this.srcs[c] = this.srcChippo;
                    this.classes[c] = this.classeGuez;
                    this.srcs[b] = this.srcBierre;
                    this.classes[b] = this.classeGuez;
                    this.srcs[ch] = this.srcChorizo;
                    this.classes[ch] = this.classeGuez;
                    this.guezProgress += 20;
                    this.levelUp()
                    this.scoring()
                } else if (this.srcs[n] != this.srcGuez) {
                    this.score -= 100;
                    this.guezProgress -= 10
                }
            } else if (this.level == 4) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    let m = 0
                    let c = 0
                    let b = 0
                    let ch = 0
                    let s = 0
                    while (m == c || m == b || b == c || m == ch || b == ch || c == ch || s == m || s == c || s == b || s == ch) {
                        m = (Math.floor(Math.random() * 25));
                        c = (Math.floor(Math.random() * 25));
                        b = (Math.floor(Math.random() * 25));
                        ch = (Math.floor(Math.random() * 25));
                        s = (Math.floor(Math.random() * 25));
                    }
                    this.srcs[m] = this.srcGuez;
                    this.classes[m] = this.classeGuez;
                    this.srcs[c] = this.srcChippo;
                    this.classes[c] = this.classeGuez;
                    this.srcs[b] = this.srcBierre;
                    this.classes[b] = this.classeGuez;
                    this.srcs[ch] = this.srcChorizo;
                    this.classes[ch] = this.classeGuez;
                    this.srcs[s] = this.srcSalade;
                    this.classes[s] = this.classeGuez;
                    this.guezProgress += 20;
                    this.levelUp()
                    this.scoring()
                } else if (this.srcs[n] != this.srcGuez) {
                    this.score -= 100;
                    this.guezProgress -= 10
                }
            } else if (this.level == 5) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    let m = 0
                    let c = 0
                    let b = 0
                    let ch = 0
                    let s = 0
                    let ma = 0
                    while (m == c || m == b || b == c || m == ch || b == ch || c == ch || s == m || s == c || s == b || s == ch || ma == m || ma == b || ma == c || ma == ch || ma == s) {
                        m = (Math.floor(Math.random() * 25));
                        c = (Math.floor(Math.random() * 25));
                        b = (Math.floor(Math.random() * 25));
                        ch = (Math.floor(Math.random() * 25));
                        s = (Math.floor(Math.random() * 25));
                        ma = (Math.floor(Math.random() * 25));
                    }
                    this.srcs[m] = this.srcGuez;
                    this.classes[m] = this.classeGuez;
                    this.srcs[c] = this.srcChippo;
                    this.classes[c] = this.classeGuez;
                    this.srcs[b] = this.srcBierre;
                    this.classes[b] = this.classeGuez;
                    this.srcs[ch] = this.srcChorizo;
                    this.classes[ch] = this.classeGuez;
                    this.srcs[s] = this.srcSalade;
                    this.classes[s] = this.classeGuez;
                    this.srcs[ma] = this.srcGaviscon;
                    this.classes[ma] = this.classeGuez;
                    this.guezProgress += 20;
                    this.levelUp()
                    this.scoring()
                } else if (this.srcs[n] != this.srcGuez) {
                    this.score -= 100;
                    this.guezProgress -= 10
                }
            }
        }
    }
})