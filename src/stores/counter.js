import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
// setup du popUp
classMain: 'blur-sm',
classPopUp: '',
hPopUp: '',
popUpText:'',
// textes du popUp
hsPopUp: ['Bienvenue sur Merguez madness!', 'niveau 1', 'niveau 2', 'niveau 3', 'niveau 4', 'niveau 5'],
popupsText:[`Votre objectif? Les merguez!Cliquez le plus vite possible pour augmenter votre score`,'Votre voisin Francis fait cuire des chipolattas. Ne vous interessez pas à ces saucisses fades',"Le père de Francis, Roger, est tres bavard. Malgré votre désinteret non dissumulé, il tient à vous convaincre que les chips à l'ancienne sont bien meilleures que les ordinaire. Vous devez l'ignorer et rester concentré sur les merguez! ","Horreur! Des chorizos! ils cuisent des chorizos! Cette fete des voisins vous permet de voir le vrai visage de ces dégénérés.",'Non mais là! de la salade?!  Restez cordial mais concentré','',''], 
// setup de la grille
//  tableau de classes initiale de toutes les div
classes: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
// classe de l'item qui apparait
classeGuez: 'animate-spin h-full w-full',
// tableau des sources d'image appliquer à la grille
srcs: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
// sources d'image nécéssaires
        srcGuez: '/./src/img/merguez.png',
        srcChippo: '/./src/img/chipolata.png',
        srcChips: '/./src/img/chips.png',
        srcChorizo: '/./src/img/chorizo.png',
        srcGaviscon: '/./src/img/maalox.png',
        srcSalade: '/./src/img/Salade.png',

// temps
// valeur de progression dans le niveau initialisé à 10 à cause du malus de temp
        guezProgress: 10,
// timer progressif
        timer: -1,
// valeur injecter dans la balise progress du timer
        timeLeft: 3,
// variable null dans laquelle on injecte notre interval qui s'appliquera à timer et timeLeft
        setTime: null,
// score
// stock du score avant ajout de points
        oldScore:0,
        score: 0,
        level: 0,
        comboMetter: 0,
// tableau de point en fonction du niveau
        scoreStep: [
            [100, 50, 20, 10, -10],
            [500, 200, 10050, -10],
            [1000, 500, 200, 100, -10],
            [2000, 1000, 500, 200, -10],
            [5000, 2000, 1000, 500, -10],
            [1000, 5000, 2000, 1000, -10]
        ],
        add:null
    }),
    // getters: {
    //     doubleCount: (state) => state.counter * 2
    // },
    actions: {
        // affiche la pop up, son niveau actuel et le texte en fonction du niveau en cour
        popUpStyle() {
            this.hPopUp = this.hsPopUp[this.level]
            this.popUpText = this.popupsText[this.level]
        },
        // interval qui permet de mesurer temps entre 2 click, malus si trop long
        increaseScore() {
            this.setTime = setInterval(() => {
                if (this.guezProgress < 100) {
                    this.timer += 0.1;
                    this.timeLeft -= 0.1;
                    console.log(this.timer)
                    if (this.timeLeft < 0) {
                        this.guezProgress -= 1;
                    }
                }
            },100)
        },
// boutton de lancement ou relance du jeux check du niveau en cours si premier niveau lancement de la premiere merguez
        start() {
            if (this.level == 0) {
                let m = (Math.floor(Math.random() * 25));
                this.classMain = '';
                this.classPopUp = 'hidden'
                this.srcs[m] = this.srcGuez;
                this.classes[m] = this.classeGuez ;
                this.timer = -1
                this.increaseScore()
                this.guezProgress = 10
            } else if (this.level != 0) {
                this.classMain = '';
                this.classPopUp = 'hidden'
                this.guezProgress = 1
                this.timer = -1
                this.increaseScore()
            }
        },
// scoring : check le temp de réaction 4 valeurs :selon ce temps, pioché dans le tab scorStep[] à l'index correspondant au niveau
        scoring() {
            this.oldScore= this.score
            if (this.timer <= 0.8) {
                this.score += this.scoreStep[this.level][0]
                this.timer = 0
                this.timeLeft = 3
                this.increaseCombo()
                this.comboMetter += 1
// bonus comboMetter si rapide deux fois de suite

            } else if (this.timer < 1.0 && this.timer > 0.8) {
                this.score += this.scoreStep[this.level][1]
                this.timer = 0
                this.timeLeft = 3
// Reinitialisation du comboMetter
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
// Bonnus de temps degressif en fonction du nombre de combo lors d'un click rapide
        increaseCombo() {
            if (this.comboMetter == 0) {
                this.timer = -1
            } else if (this.comboMetter == 1) {
                this.timer = -0.8
                this.score = parseInt((this.score * 1.1))
            } else if (this.comboMetter == 2) {
                this.timer = -0.6
                this.score =parseInt( (this.score * 1.2))
            } else if (this.comboMetter == 3) {
                this.timer = -0.3
                this.score = parseInt((this.score * 1.5))
            } else if (this.comboMetter >= 4) {
                this.timer = 0
                this.score = parseInt((this.score * 1.5))
            }
        },
// arret du timer et apparition du popUp lors de la monté de niveau
// check le niveau d'avancement pour définir la monté de niveau
        levelUp() {
            if (this.guezProgress >= 100) {
                this.classMain = 'blur-sm',
                    this.classPopUp = ''
                this.level += 1
                this.popUpStyle()
                clearInterval(this.setTime)
            }
        },
// si l'avancement deviens négatif game over
        gameOver() {
            if (this.guezProgress < 0) {
                this.classMain = 'blur-sm',
                this.classPopUp = ''
                this.hPopUp=`Vous avez perdu votre score est de ${this.score} point`
                clearInterval(this.setTime)
                this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
            }
        },
        clickGuez(n) {
            this.gameOver()
            if (this.level == 0) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes[n] = ' bg-green-600 ';
                    setTimeout(()=>{if(this.classes[n]!=this.classes[m]){this.classes[n] = ''}else{this.classes[m] = this.classeGuez}},100)
                    let m = (Math.floor(Math.random() * 25));
                    while(m==n){
                        m = (Math.floor(Math.random() * 25));}
                    this.srcs[m] = this.srcGuez ;
                    this.classes[m] = this.classeGuez;

                    

                    this.guezProgress += 20;
                    
                    
                    this.levelUp()
                    this.scoring()
                } else if (this.srcs[n] != this.srcGuez) {
                    this.classes[n] = ' bg-red-600 ';
                    setTimeout(()=>{this.classes[n] = ''},100)
                    this.score -= 100;
                    this.guezProgress -= 10
                }
            } else if (this.level == 1) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes[n] = 'bg-green-600';
                    setTimeout(()=>{if(this.classes[n]!=this.classes[m]){this.classes[n] = ''}else{this.classes[m] = this.classeGuez}},100)
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
                } else if (this.srcs[n] !== this.srcGuez) {
                    this.classes[n] = 'bg-red-600';
                    setTimeout(()=>{if(this.srcs[n] == ''){this.classes[n] = ''}else{this.classes[n] = this.classeGuez}},100)
                    
                    this.score -= 100;
                    this.guezProgress -= 10;
                }
            } else if (this.level == 2) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

                    this.classes[n] = ' bg-green-600 ';
                    setTimeout(()=>{if(this.classes[n]!==this.classes[m]){this.classes[n] = ''}else{this.classes[m] = this.classeGuez}},100)
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
                    this.srcs[b] = this.srcChips;
                    this.classes[b] = this.classeGuez;
                    this.guezProgress += 20;
                    this.levelUp()
                    this.scoring()
                } else if (this.srcs[n] !== this.srcGuez) {
                    this.classes[n] = ' bg-red-600';
                    setTimeout(()=>{if(this.srcs[n] == ''){this.classes[n] = ''}else{this.classes[n] = this.classeGuez}},100)
                    this.score -= 100;
                    this.guezProgress -= 10;
                }
            } else if (this.level == 3) {
                if (this.srcs[n] == this.srcGuez) {
                    this.srcs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                    this.classes = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

                    this.classes[n] = ' bg-green-600 ';
                    setTimeout(()=>{if(this.classes[n]!=this.classes[m]){this.classes[n] = ''}else{this.classes[m] = this.classeGuez}},100)
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
                    this.srcs[b] = this.srcChips;
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
                    this.classes[n] = ' bg-green-600 ';
                    setTimeout(()=>{if(this.classes[n]!=this.classes[m]){this.classes[n] = ''}else{this.classes[m] = this.classeGuez}},100)
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
                    this.srcs[b] = this.srcChips;
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
                    this.classes[n] = ' bg-green-600 ';
                    setTimeout(()=>{if(this.classes[n]!=this.classes[m]){this.classes[n] = ''}else{this.classes[m] = this.classeGuez}},100)
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
                    this.srcs[b] = this.srcChips;
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
                } else if (this.srcs[n] !== this.srcGuez) {
                    this.score -= 100;
                    this.guezProgress -= 10
                }
            }
        }
    }
})