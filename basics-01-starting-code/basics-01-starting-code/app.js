const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the couse and learn Vue',
            courseGoalB: 'Master Vue and biuld amazing apps',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const rand = Math.random();
            console.log(rand);
            if (rand < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');