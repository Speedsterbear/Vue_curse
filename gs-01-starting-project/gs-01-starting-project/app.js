Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
        };
    },
    methods: {
        addGoal() {
            if (this.enteredValue != '') {
                this.goals.push(this.enteredValue);
                this.enteredValue = '';
            }
        }
    }
}).mount('#app');


// const bEl = document.querySelector('button');
// const iEl = document.querySelector('input');
// const lEl = document.querySelector('ul');

// function addGoal(){
// const enteredValue = iEl.value;
// const lItemEl = document.createElement('li')
// lItemEl.textContent = enteredValue;
// lEl.appendChild(lItemEl);
// iEl.value = '';
// }

// bEl.addEventListener('click', addGoal);

