"use strict";

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            playing: true,
            result: '',
            log: [],
            round: 0
        }
    },
    methods: {
        attack() {
            this.round++;
            const playerAttack = Math.ceil(Math.random()*10);
            this.monsterHealth -= playerAttack;
            this.log.push({
                message: `Player attacked Monster (Monster health down ${playerAttack}%)`,
                color: "green"
            });
            if (this.monsterHealth <= 0)
            {
                this.monsterHealth = 0;
                this.playing = false;
                this.result = 'You WIN';
            }
            else
            {
                setTimeout(() => {
                    const monsterAttack = Math.ceil(Math.random()*20);
                    this.playerHealth -= monsterAttack;
                    this.log.push({
                        message: `Monster attacked Player (Player health down ${monsterAttack}%)`,
                        color: "red"
                    });
                    if (this.playerHealth <= 0)
                    {
                        this.playerHealth = 0;
                        this.playing = false;
                        this.result = 'You LOSE';
                    }
                }, 1000);
            }
        },
        specialAttack() {
            this.round++;
            const playerAttack = Math.ceil(Math.random()*13) + 12;
            this.monsterHealth -= playerAttack;
            this.log.push({
                message: `Player attacked Monster (Monster health down ${playerAttack}%)`,
                color: "green"
            });
            if (this.monsterHealth <= 0)
            {
                this.monsterHealth = 0;
                this.playing = false;
                this.result = 'You WIN';
            }
            else
            {
                setTimeout(() => {
                    const monsterAttack = Math.ceil(Math.random()*25) + 12;
                    this.playerHealth -= monsterAttack;
                    this.log.push({
                        message: `Monster attacked Player (Player health down ${monsterAttack}%)`,
                        color: "red"
                    });
                    if (this.playerHealth <= 0)
                    {
                        this.playerHealth = 0;
                        this.playing = false;
                        this.result = 'You LOSE';
                    }
                }, 1000);
            }
        },
        heal() {
            this.round++;
            const playerHeal = Math.ceil(Math.random()*10);
            this.playerHealth += playerHeal;
            this.log.push({
                message: `Player healed (Player health up ${playerHeal}%)`,
                color: "blue"
            });
        },
        surrender() {
            this.log.push({
                message: "Player SURRENDERED",
                color: "red"
            });
            this.playing = false;
            this.result = 'You LOSE';
        },
        restart() {
            this.monsterHealth = this.playerHealth = 100;
            this.playing = true;
            this.round = 0;
            this.result = '';
            this.log = [];
        }
    }
}).mount("#game");