"use strict";
function Crete(kol1, kol2) {
    var pill = {
        ideentfikator: ident,
        position: ["00", "3"],
        kolor: kol1,
        position2: ["00", "4"],
        kolor2: kol2,
        div1: function () {
            var idDiv = "div" + this.position[0] + this.position[1]
            return document.getElementById(idDiv)
        },
        div2: function () {
            var idDiv2 = "div" + this.position2[0] + this.position2[1]
            return document.getElementById(idDiv2)
        },
        pillRender: function () {
            this.div1().classList.add(toKolor(this.kolor))
            tablica[parseInt(this.position[0])][parseInt(this.position[1])] = this.kolor
            this.div1().classList.add("p" + this.ideentfikator)
            this.div2().classList.add(toKolor(this.kolor2))
            tablica[parseInt(this.position2[0])][parseInt(this.position2[1])] = this.kolor2
            this.div2().classList.add("p" + this.ideentfikator)
            gameboard.tableRender()
        },
        pillClear: function () {
            this.div1().classList.remove(toKolor(this.kolor))
            tablica[parseInt(this.position[0])][parseInt(this.position[1])] = 0
            this.div1().classList.remove("p" + this.ideentfikator)
            this.div2().classList.remove(toKolor(this.kolor2))
            tablica[parseInt(this.position2[0])][parseInt(this.position2[1])] = 0
            this.div2().classList.remove("p" + this.ideentfikator)
        },
        moveDown: function () {
            if (parseInt(this.position[0]) == 15) {
                return false
            }
            if (parseInt(this.position2[0]) == 15) {
                return false
            }
            if (tablica[parseInt(this.position[0]) + 1][parseInt(this.position[1])] != 0) {
                return false

            }
            if (this.poziomy == true) {

                if (tablica[parseInt(this.position2[0]) + 1][parseInt(this.position2[1])] != 0) {

                    return false
                }
            }
            this.pillClear()
            var poz1 = parseInt(this.position[0])

            poz1 += 1
            poz1 = poz1.toString()
            if (poz1 < 10) {
                this.position[0] = "0" + poz1
            } else {
                this.position[0] = poz1
            }
            var poz1 = parseInt(this.position2[0])
            poz1 += 1
            poz1 = poz1.toString()
            if (poz1 < 10) {
                this.position2[0] = "0" + poz1
            } else {
                this.position2[0] = poz1
            }
            this.pillRender()
            return true


        },
        naPrawo: function () {
            if (this.poziomy == false) {
                if (tablica[parseInt(this.position[0])][parseInt(this.position[1]) + 1] != 0) {
                    return false

                }

            }

            if (tablica[parseInt(this.position2[0])][parseInt(this.position2[1]) + 1] != 0) {

                return false

            }
            var poz1 = parseInt(this.position[1])
            var poz2 = parseInt(this.position2[1])
            poz1 += 1
            poz1 = poz1.toString()
            poz2 += 1
            poz2 = poz2.toString()

            if (poz2 <= 7) {
                this.pillClear()
                this.position[1] = poz1
                this.position2[1] = poz2
            } else {
                return "placki ziemniaczane"
            }
            this.pillRender()
        },
        naLewo: function () {
            if (this.poziomy == false) {
                if (tablica[parseInt(this.position2[0])][parseInt(this.position2[1]) - 1] != 0) {
                    return false

                }

            }

            if (tablica[parseInt(this.position[0])][parseInt(this.position[1]) - 1] != 0) {

                return false

            }
            var poz1 = parseInt(this.position[1])
            var poz2 = parseInt(this.position2[1])
            poz1 -= 1
            poz1 = poz1.toString()
            poz2 -= 1
            poz2 = poz2.toString()
            if (poz1 >= 0) {
                this.pillClear()
                this.position[1] = poz1
                this.position2[1] = poz2
            } else {
                return "placki ziemniaczane"
            }
            this.pillRender()
        },
        poziomy: true,
        obLewo: function () {
            var poz1 = parseInt(this.position[1])
            var poz2 = parseInt(this.position2[1])
            var rzad2 = parseInt(this.position2[0])
            var rzad1 = parseInt(this.position[0])
            if (rzad2 < 1) {
                return 'racuuuuuchyyyy'
            }
            if (poz2 == 7 && this.poziomy == false) {
                poz2 -= 1
                poz1 -= 1
                this.naLewo()
            }

            if (this.poziomy == true) {
                if (tablica[rzad1 - 1][poz1] != 0) {
                    return "nalesniki"
                }
                this.pillClear()
                this.position2[1] = poz2 - 1
                if (rzad2 < 11) {
                    this.position2[0] = "0" + (rzad2 - 1)
                }
                else {
                    this.position2[0] = rzad2 - 1
                }
                this.poziomy = false
            } else {
                if (tablica[rzad1][poz1 + 1] != 0) {
                    return "nalesniki2"
                }
                this.pillClear()
                this.position[1] = poz1 + 1
                if (rzad2 < 9) {
                    this.position2[0] = "0" + (rzad2 + 1)

                } else {
                    this.position2[0] = rzad2 + 1


                }
                this.poziomy = true
                var temp = this.position
                this.position = this.position2
                this.position2 = temp
                var temp = this.kolor
                this.kolor = this.kolor2
                this.kolor2 = temp
            }
            this.pillRender()
        },
        obPrawo: function () {
            var poz1 = parseInt(this.position[1])
            var poz2 = parseInt(this.position2[1])
            var rzad2 = parseInt(this.position2[0])
            var rzad1 = parseInt(this.position[0])
            if (rzad2 < 1) {
                return 'racuuuuuchyyyy'
            }
            if (poz2 == 7 && this.poziomy == false) {
                poz2 -= 1
                poz1 -= 1
                this.naLewo()
            }

            if (this.poziomy == false) {
                if (tablica[rzad1][poz1 + 1] != 0) {
                    return "nalesniki2"
                }
                this.pillClear()
                this.position2[1] = poz2 + 1
                if (rzad2 < 9) {
                    this.position2[0] = "0" + (rzad2 + 1)
                }
                else {
                    this.position2[0] = rzad2 + 1
                }
                this.poziomy = true
            } else {
                if (tablica[rzad1 - 1][poz1] != 0) {
                    return "nalesniki"
                }
                this.pillClear()
                this.position2[1] = poz2 - 1
                if (rzad1 < 11) {
                    this.position[0] = "0" + (rzad1 - 1)

                } else {
                    this.position[0] = rzad1 - 1


                }
                this.poziomy = false
                var temp = this.position
                this.position = this.position2
                this.position2 = temp
                var temp = this.kolor
                this.kolor = this.kolor2
                this.kolor2 = temp
            }
            this.pillRender()
        },
        loseCheck: function () {
            if (tablica[0][3] == 0 && tablica[0][4] == 0) {
                return "gitara"
            } else {
                gameboard.przegrales()
            }
        },

    }
    pill.loseCheck()
    pill.pillRender()
    return pill
}
function Kolorowanka() {
    return Math.floor((Math.random() * 3) + 1)
}
function toKolor(kolor) {
    if (kolor == 1) {
        return "red"
    }
    if (kolor == 2) {
        return "blue"
    }
    if (kolor == 3) {
        return "green"
    } else {
        return "white"
    }
}
var board = document.getElementById("gameboard")
var tablica = []
var ident = 1
var score = 0
var virus = 4
var win = 0
var koniec = false
var hs = localStorage.getItem("highscore")
var gameboard = {
    boardCrete: function () {
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {
                let div = document.createElement("div")
                div.className = "div"

                if (i < 10) {

                    div.id = "div0" + i + j
                } else {
                    div.id = "div" + i + j
                }
                board.append(div)
            }
        }
    },
    tableCrete: function () {
        for (var i = 0; i < 16; i++) {
            tablica.push(Array(8).fill(0))


        }
    },

    bicie: function () {
        console.log("bicie");

        var doBicia = []
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {

                var z = 1
                while (tablica[i][j] != 0 && tablica[i][j] == tablica[i][j + 1]) {
                    // doBicia.push([i, j])
                    z += 1
                    j += 1
                }
                if (z >= 4) {
                    for (; z > 0; z--) {
                        doBicia.push([i, j - z + 1])
                    }
                }
            }
        }
        for (var j = 0; j < 8; j++) {
            for (var i = 0; i < 16; i++) {
                var z = 1
                if (i == 15) {
                    break
                }
                while (tablica[i][j] != 0 && tablica[i][j] == tablica[i + 1][j]) {
                    // doBicia.push([i, j])
                    z += 1
                    i += 1
                    if (i == 15) {
                        console.log('Dobija do dna przy sprawdzaniu');
                        console.log(z);
                        break
                    }
                }
                if (z >= 4) {
                    for (; z > 0; z--) {
                        doBicia.push([i - z + 1, j])
                    }
                }
            }
        }
        for (var x = 0; x < doBicia.length; x++) {

            var parametry = doBicia[x]
            let kolor = tablica[parametry[0]][parametry[1]]
            tablica[parametry[0]][parametry[1]] = 0
            let ide = this.naID(parametry[0], parametry[1])
            var petka = this.getPetka(ide)
            console.log("bicie petka", petka);
            ide.classList.remove(petka)
            let isVirus = ide.classList.contains("wirus")
            if (ide.classList.contains("wirus")) {
                ide.classList.remove("wirus")
                this.addScore()
                win = win + 1

            }
            if (win == 4) {
                this.wygrales()
            }
            setTimeout(function () {
                if (isVirus) {
                    if (kolor == 1) {
                        ide.style.backgroundImage = "url('img/br_x.png')"
                    } else if (kolor == 2) {
                        ide.style.backgroundImage = "url('img/bl_x.png')"
                    } else {
                        ide.style.backgroundImage = "url('img/yl_x.png')"
                    }
                } else {
                    console.log("zbita fest tableta ohohoh")
                    if (kolor == 1) {
                        ide.style.backgroundImage = "url('img/br_o.png')"
                    } else if (kolor == 2) {
                        ide.style.backgroundImage = "url('img/bl_o.png')"
                    } else {
                        ide.style.backgroundImage = "url('img/yl_o.png')"
                    }
                }


            }, 50)

        }
        this.tableRender()
        if (doBicia.length == 0) {
            return false
        } else {
            return true
        }
    },
    tableRender: function () {
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {
                if (i < 10) {
                    var idDiv = "div0" + i + j
                } else {
                    var idDiv = "div" + i + j
                }
                var divek = document.getElementById(idDiv)
                divek.classList.remove("red")
                divek.classList.remove("blue")
                divek.classList.remove("green")
                divek.classList.remove("white")
                divek.style.backgroundImage = null
                divek.classList.add(toKolor(tablica[i][j]))
                var kolor = tablica[i][j]
                if (kolor == 0) {
                    continue
                }
                var virus = divek.classList.contains("wirus")
                if (virus) {
                    if (kolor == 1) {
                        divek.style.backgroundImage = "url('img/covid_brown.png')"
                    } else if (kolor == 2) {
                        divek.style.backgroundImage = "url('img/covid_blue.png')"
                    } else {
                        divek.style.backgroundImage = "url('img/covid_yellow.png')"
                    }
                    continue
                }
                var czypoj = this.getPetka(divek)
                var z = document.getElementsByClassName(czypoj)
                if (z.length == 2) {
                    czypoj = false
                } else {
                    czypoj = true
                }
                if (czypoj) {
                    if (kolor == 1) {
                        divek.style.backgroundImage = "url('img/br_dot.png')"
                    } else if (kolor == 2) {
                        divek.style.backgroundImage = "url('img/bl_dot.png')"
                    } else {
                        divek.style.backgroundImage = "url('img/yl_dot.png')"
                    }
                    continue
                }
                var normalz = [...z]

                normalz = normalz.filter(e => e.id != divek.id)


                var divek2 = normalz[0]
                var d2poz = this.naIJ(divek2.id)

                var poz = " "
                if (i < d2poz[0]) {


                    poz = "up"
                } else if (i > d2poz[0]) {
                    poz = "down"
                } else if (j > d2poz[1]) {
                    poz = "right"
                } else {

                    poz = "left"
                }
                if (kolor == 1) {
                    divek.style.backgroundImage = "url('img/br_" + poz + ".png')"
                } else if (kolor == 2) {
                    divek.style.backgroundImage = "url('img/bl_" + poz + ".png')"
                } else {
                    divek.style.backgroundImage = "url('img/yl_" + poz + ".png')"
                }

            }
        }
    },

    opadanie: function () {
        console.log("opadanie");

        var isFall = false
        for (var i = 15; i >= 0; i--) {
            for (var j = 7; j >= 0; j--) {
                if (tablica[i][j] == 0) {
                    continue
                }
                var divek = this.naID(i, j)
                if (divek.classList.contains("wirus")) {
                    continue
                }
                var petka = this.getPetka(divek)
                var pt = document.getElementsByClassName(petka)
                if (this.pillCheck(pt) == false) {
                    continue
                };

                isFall = true;
                console.log("opada");

                [...pt].forEach(element => {
                    var kol = this.getKolor(element)
                    // console.log("opadanie kolor", kol);

                    var idek = this.naIJ(element.id)
                    // element.classList.remove("red")
                    // element.classList.remove("blue")
                    // element.classList.remove("green")
                    // element.classList.remove("white")
                    var num = tablica[idek[0]][idek[1]]
                    tablica[idek[0]][idek[1]] = 0
                    var ptk = this.getPetka(element)
                    element.classList.remove(ptk)
                    // console.log("Opadanie petka", ptk);

                    tablica[idek[0] + 1][idek[1]] = num
                    var el2 = this.naID(idek[0] + 1, idek[1])
                    // el2.classList.add(kol)
                    el2.classList.add(ptk)
                });

            }
        }
        this.tableRender()
        return isFall
    },
    komorkaCheck: function (element) {
        var idek = element.id
        var i = parseInt(idek.slice(3, 5))
        var j = parseInt(idek.slice(5, 6))
        if (i == 15) {
            return false
        }
        var petka = this.getPetka(element)
        var divek = this.naID(i + 1, j)
        var ptk = this.getPetka(divek)

        if (petka == ptk && petka != undefined) {
            return true
        }
        if (tablica[i + 1][j] == 0) {
            return true
        }

    },
    pillCheck: function (pierogi) {
        // console.log("pierogi", pierogi);
        var isAllAnFall = [...pierogi].every((e) => this.komorkaCheck(e) == true)
        if (isAllAnFall) {
            return true
        } else {
            return false
        }
    },
    naID: function (i, j) {
        if (i < 10) {
            var idDiv = "div0" + i + j
            return document.getElementById(idDiv)
        } else {
            var idDiv = "div" + i + j
            return document.getElementById(idDiv)
        }
    },
    naIJ: function (idek) {
        var i = parseInt(idek.slice(3, 5))
        var j = parseInt(idek.slice(5, 6))
        return [i, j]
    },
    getPetka: function (element) {
        var clasL = [...element.classList]
        var petka = clasL.find(function (el) {
            return el[0] == "p"
        })
        return petka
    },
    getKolor: function (element) {
        var clasL = [...element.classList]
        var kolor = clasL.find(function (el) {
            return el == "red" || el == "green" || el == "blue"
        })
        return kolor
    },
    Covidziarka: function () {
        var kolor = 0
        for (var x = 4; x > 0; x--) {
            do {
                var i = Math.floor((Math.random() * 10) + 5)
                var j = Math.floor((Math.random() * 8))
                var idek = this.naID(i, j)
            } while (idek.classList.contains("wirus"))
            if (x > 1) {
                kolor = kolor + 1
                tablica[i][j] = kolor
            } else {
                kolor = Math.floor((Math.random() * 3) + 1)
                tablica[i][j] = kolor

            }
            idek.classList.add("wirus")
        }
        this.tableRender()
    },
    addScore: function () {
        score += 1
        virus -= 1
        var divek = document.getElementById("score")
        divek.style.backgroundImage = "url('img/cyfry/" + score + ".png')"
        var vr = document.getElementById("virus")
        vr.style.backgroundImage = "url('img/cyfry/" + virus + ".png')"
    },
    wygrales: function () {
        if (score > hs) {
            localStorage.setItem("highscore", score)
        }
        koniec = true
        var wygranko = document.getElementById("sc")
        wygranko.style.display = "block"

        this.scoreUpload()
    },
    przegrales: function () {
        if (score > hs) {
            localStorage.setItem("highscore", score)
        }
        koniec = true
        var przegranko = document.getElementById("go")
        przegranko.style.display = "block"
        var godr = document.getElementById("godr")
        godr.style.display = "block"
        console.log("obr", obr1)
        clearInterval(obr1)
        clearInterval(obr2)
        clearInterval(obr3)
        this.scoreUpload()
    },
    scoreUpload: function () {
        var divek = document.getElementById("score")
        divek.style.backgroundImage = "url('img/cyfry/" + score + ".png')"
        var hscore = document.getElementById("highscore")
        var scr = localStorage.getItem("highscore")
        if (localStorage.getItem("highscore") == null) {
            hscore.style.backgroundImage = style.backgroundImage = "url('img/cyfry/0.png')"
        } else {
            hscore.style.backgroundImage = "url('img/cyfry/" + scr + ".png')"
        }
        var vr = document.getElementById("virus")
        vr.style.backgroundImage = "url('img/cyfry/" + virus + ".png')"
    }

}
var throwbrd = document.getElementById("throwboard")
var table = []

var throwboard = {
    throwCrete: function () {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 12; j++) {
                let div = document.createElement("div")
                div.className = "div"

                if (j < 10) {

                    div.id = "divek" + i + "0" + j
                } else {
                    div.id = "divek" + i + j
                }
                throwbrd.append(div)
            }
        }
    },
    tabCrete: function () {
        for (var i = 0; i < 8; i++) {
            table.push(Array(12).fill(0))

        }
    },
    throwRender: function () {
        var divek1 = actualtrap.div1()
        divek1.classList.remove("red")
        divek1.classList.remove("blue")
        divek1.classList.remove("green")
        divek1.classList.remove("white")
        divek1.style.backgroundImage = null
        divek1.classList.add(toKolor(actualtrap.kolor1))
        var divek2 = actualtrap.div2()
        divek2.classList.remove("red")
        divek2.classList.remove("blue")
        divek2.classList.remove("green")
        divek2.classList.remove("white")
        divek2.style.backgroundImage = null
        divek2.classList.add(toKolor(actualtrap.kolor2))
        var poz1 = " "
        var poz2 = " "
        if (actualtrap.position1[0] < actualtrap.position2[0]) {


            poz1 = "up"
            poz2 = "down"
        } else if (actualtrap.position1[0] > actualtrap.position2[0]) {
            poz1 = "down"
            poz2 = "up"
        } else if (actualtrap.position1[1] > actualtrap.position2[1]) {
            poz1 = "right"
            poz2 = "left"
        } else {
            poz2 = "right"
            poz1 = "left"
        }
        if (actualtrap.kolor1 == 1) {
            divek1.style.backgroundImage = "url('img/br_" + poz1 + ".png')"
        } else if (actualtrap.kolor1 == 2) {
            divek1.style.backgroundImage = "url('img/bl_" + poz1 + ".png')"
        } else if (actualtrap.kolor1 == 3) {
            divek1.style.backgroundImage = "url('img/yl_" + poz1 + ".png')"
        }
        if (actualtrap.kolor2 == 1) {
            divek2.style.backgroundImage = "url('img/br_" + poz2 + ".png')"
        } else if (actualtrap.kolor2 == 2) {
            divek2.style.backgroundImage = "url('img/bl_" + poz2 + ".png')"
        } else if (actualtrap.kolor2 == 3) {
            divek2.style.backgroundImage = "url('img/yl_" + poz2 + ".png')"
        }

    },
    throwPill: function () {
        var oldtrap = actualtrap
        console.log("OL trap", oldtrap);
        console.log("czas", czas);

        for (var x = 0; x < czas; x++) {
            if (x == 0) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[1] = oldtrap.position1[1]
                    oldtrap.position2[1] = oldtrap.position2[1]
                    oldtrap.pillRender()
                    this.handUp()
                }, 1000 * x)
            }
            if (x == 1) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position2[0] = oldtrap.position1[0] - 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 2) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] - 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 3) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] - 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 4) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.position2[0] = oldtrap.position2[0] - 1
                    oldtrap.pillRender()
                    this.handMid()
                }, 1000 * x)
            }
            if (x == 5) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position2[0] = oldtrap.position2[0] - 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                    this.handDown()
                }, 1000 * x)
            }
            if (x == 6) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position2[0] = oldtrap.position2[0] + 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()

                }, 1000 * x)
            }
            if (x == 7) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] - 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 8) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 9) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position2[0] = oldtrap.position2[0] - 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 10) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position2[0] = oldtrap.position2[0] + 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 11) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] - 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 12) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 13) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position2[0] = oldtrap.position2[0] - 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 14) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position2[0] = oldtrap.position2[0] + 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 15) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] - 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 16) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 17) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position2[0] = oldtrap.position2[0] - 1
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 18) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position2[0] = oldtrap.position2[0] + 2
                    oldtrap.position2[1] = oldtrap.position2[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 19) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] - 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 20) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position1[1] = oldtrap.position1[1] - 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 21) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position2[0] = oldtrap.position2[0] + 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 22) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position2[0] = oldtrap.position2[0] + 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 23) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position2[0] = oldtrap.position2[0] + 1
                    oldtrap.pillRender()
                }, 1000 * x)
            }
            if (x == 24) {
                setTimeout(() => {
                    oldtrap.pillClear()
                    oldtrap.position1[0] = oldtrap.position1[0] + 1
                    oldtrap.position2[0] = oldtrap.position2[0] + 1
                    oldtrap.pillRender()
                    czas = czas - 1
                }, 1000 * x)
            }
        }
        setTimeout(() => {
            oldtrap.pillClear()
            this.throwRender()
            this.handUp()
        }, 1000 * (czas))
        actualtrap = this.narcoticFabric()

        return oldtrap
    },
    narcoticFabric: function () {
        var pilltothrow = {
            position1: [3, 10],
            kolor1: Kolorowanka(),
            position2: [3, 11],
            kolor2: Kolorowanka(),
            div1: function () {
                if (parseInt(this.position1[1]) < 10) {
                    var idDiv = "divek" + this.position1[0] + "0" + this.position1[1]
                } else {
                    var idDiv = "divek" + this.position1[0] + this.position1[1]
                }
                console.log(idDiv);

                return document.getElementById(idDiv)
            },
            div2: function () {
                if (parseInt(this.position2[1]) < 10) {
                    var idDiv2 = "divek" + this.position2[0] + "0" + this.position2[1]
                } else {
                    var idDiv2 = "divek" + this.position2[0] + this.position2[1]
                }
                console.log(idDiv2)
                return document.getElementById(idDiv2)
            },
            pillRender: function () {
                var divek1 = this.div1()
                divek1.style.backgroundImage = null
                var divek2 = this.div2()
                divek2.style.backgroundImage = null
                var poz1 = " "
                var poz2 = " "
                if (this.position1[0] < this.position2[0]) {


                    poz1 = "up"
                    poz2 = "down"
                } else if (this.position1[0] > this.position2[0]) {
                    poz1 = "down"
                    poz2 = "up"
                } else if (this.position1[1] > this.position2[1]) {
                    poz1 = "right"
                    poz2 = "left"
                } else {
                    poz2 = "right"
                    poz1 = "left"
                }
                if (this.kolor1 == 1) {
                    divek1.style.backgroundImage = "url('img/br_" + poz1 + ".png')"
                } else if (this.kolor1 == 2) {
                    divek1.style.backgroundImage = "url('img/bl_" + poz1 + ".png')"
                } else if (this.kolor1 == 3) {
                    divek1.style.backgroundImage = "url('img/yl_" + poz1 + ".png')"
                }
                if (this.kolor2 == 1) {
                    divek2.style.backgroundImage = "url('img/br_" + poz2 + ".png')"
                } else if (this.kolor2 == 2) {
                    divek2.style.backgroundImage = "url('img/bl_" + poz2 + ".png')"
                } else if (this.kolor2 == 3) {
                    divek2.style.backgroundImage = "url('img/yl_" + poz2 + ".png')"
                }
            },
            pillClear: function () {
                this.div1().classList.remove(toKolor(this.kolor1))
                // table[parseInt(this.position1[0])][parseInt(this.position1[1])] = 0
                this.div1().style.backgroundImage = null
                this.div2().classList.remove(toKolor(this.kolor2))
                this.div2().style.backgroundImage = null
                // table[parseInt(this.position2[0])][parseInt(this.position2[1])] = 0

            },

        }
        return pilltothrow
    },
    handUp: function () {
        var h6 = document.getElementById("divek711")
        h6.style.backgroundImage = null
        var h1 = document.getElementById("divek411")
        var h2 = document.getElementById("divek511")
        var h3 = document.getElementById("divek611")
        h1.style.backgroundImage = "url('img/hands/up_1.png')"
        h2.style.backgroundImage = "url('img/hands/up_2.png')"
        h3.style.backgroundImage = "url('img/hands/up_3.png')"
    },
    handMid: function () {
        var h1 = document.getElementById("divek411")
        h1.style.backgroundImage = null
        var h2 = document.getElementById("divek511")
        var h3 = document.getElementById("divek611")
        var h4 = document.getElementById("divek510")
        var h5 = document.getElementById("divek610")
        h2.style.backgroundImage = "url('img/hands/middle12.png')"
        h3.style.backgroundImage = "url('img/hands/middle22.png')"
        h4.style.backgroundImage = "url('img/hands/middle11.png')"
        h5.style.backgroundImage = "url('img/hands/middle21.png')"
    },
    handDown: function () {
        var h2 = document.getElementById("divek511")
        var h4 = document.getElementById("divek510")
        var h5 = document.getElementById("divek610")
        h2.style.backgroundImage = null
        h4.style.backgroundImage = null
        h5.style.backgroundImage = null
        var h3 = document.getElementById("divek611")
        var h6 = document.getElementById("divek711")
        h3.style.backgroundImage = "url('img/hands/down_1.png')"
        h6.style.backgroundImage = "url('img/hands/down_2.png')"
    }

}
function nasluchiwacz(event) {
    console.log(event.keyCode)
    if (event.keyCode == 39) {
        actualpill.naPrawo()
    } else if (event.keyCode == 37) {
        actualpill.naLewo()
    } else if (event.keyCode == 38) {
        actualpill.obLewo()
    } else if (event.keyCode == 16) {
        actualpill.obPrawo()
    } else if (event.keyCode == 40) {
        spadanie()
    }
}

gameboard.boardCrete()
gameboard.tableCrete()
vir1()
vir2()
vir3()
throwboard.throwCrete()
gameboard.Covidziarka()
gameboard.scoreUpload()
var czas = 25
var actualtrap = throwboard.narcoticFabric()
var trap = throwboard.throwPill()
var lock = true
var falling = false

var actualpill = " "
setTimeout(() => {
    actualpill = Crete(trap.kolor1, trap.kolor2)
    document.body.onkeydown = nasluchiwacz
    falling = false
    lock = false
}, 1000 * czas)

var inter = setInterval(function () {
    if (lock) {
        return "ponczusie"
    }
    if (falling) {
        gameboard.bicie()
        if (gameboard.opadanie() == false) {
            ident = ident + 1
            var trap = throwboard.throwPill()
            lock = true
            setTimeout(() => {

                actualpill = Crete(trap.kolor1, trap.kolor2)
                document.body.onkeydown = nasluchiwacz
                falling = false
                lock = false
            }, 1000 * czas)
        }
    } else {
        var isMoved = actualpill.moveDown()
        if (isMoved == false) {
            if (gameboard.bicie()) {
                falling = true
            } else {
                ident = ident + 1
                if (koniec == true) {
                    clearInterval(inter)
                }
                var trap = throwboard.throwPill()
                lock = true
                setTimeout(() => {
                    actualpill = Crete(trap.kolor1, trap.kolor2)
                    document.body.onkeydown = nasluchiwacz
                    falling = false
                    lock = false
                }, 1000 * czas)
            }
        }
    }
}, 1000)
document.body.onkeydown = nasluchiwacz
function spadanie() {
    document.body.onkeydown = "placuszki"
    var temp = setInterval(function () {

        var isMoved = actualpill.moveDown()

        if (isMoved == false) {
            clearInterval(temp)


        }
    }, 100)
}
var obr1
var obr2
var obr3
function vir1() {
    var cat = 0
    let z = 0
    function kat(wart) {
        if (cat += wart <= 360) {
            return cat += wart
        } else {
            return cat += wart - 360
        }
    }

    var virus1 = document.getElementById("virus1")
    var centerX = 160
    var centerY = 500
    var radius = 95

    obr1 = setInterval(() => {
        var a = kat(20)
        var x = centerX + radius * Math.cos(a * Math.PI / 180);
        var y = centerY + radius * Math.sin(a * Math.PI / 180);



        virus1.style.top = `${y}px`
        virus1.style.left = `${x}px`



    }, 1000);
    setInterval(() => {
        if (koniec) {
            if (z != 0) {
                z = 3
            }
        }
        z += 1
        virus1.style.backgroundImage = "url('img/lupa/br/" + z + ".png')"
        if (z >= 3) {
            z = 0
        }

    }, 250)
}
function vir2() {
    let z = 0
    var cat = 120
    function kat2(wart) {
        if (cat += wart <= 360) {
            return cat += wart
        } else {
            return cat += wart - 360
        }
    }

    var virus2 = document.getElementById("virus2")
    var centerX = 160
    var centerY = 500
    var radius = 95

    obr2 = setInterval(() => {
        var a = kat2(20)
        var x = centerX + radius * Math.cos(a * Math.PI / 180);
        var y = centerY + radius * Math.sin(a * Math.PI / 180);



        virus2.style.top = `${y}px`
        virus2.style.left = `${x}px`



    }, 1000);

    setInterval(() => {
        if (koniec) {
            if (z != 0) {
                z = 3
            }
        }
        z += 1
        virus2.style.backgroundImage = "url('img/lupa/bl/" + z + ".png')"
        if (z >= 3) {
            z = 0
        }

    }, 250)


}
function vir3() {
    let z = 0
    var cat = 240
    function kat3(wart) {
        if (cat += wart <= 360) {
            return cat += wart
        } else {
            return cat += wart - 360
        }
    }

    var virus3 = document.getElementById("virus3")
    var centerX = 160
    var centerY = 500
    var radius = 95

    obr3 = setInterval(() => {
        var a = kat3(20)
        var x = centerX + radius * Math.cos(a * Math.PI / 180);
        var y = centerY + radius * Math.sin(a * Math.PI / 180);



        virus3.style.top = `${y}px`
        virus3.style.left = `${x}px`



    }, 1000);
    setInterval(() => {
        if (koniec) {
            if (z != 0) {
                z = 3
            }
        }
        z += 1
        virus3.style.backgroundImage = "url('img/lupa/yl/" + z + ".png')"
        if (z >= 3) {
            z = 0
        }

    }, 250)
}
