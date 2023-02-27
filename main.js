// DOM Selector 

const allMatchEl = document.getElementById('all-matches')
const resultEl = document.getElementById('result')
const singleResultEl = document.getElementsByClassName('lws-singleResult')[0]


// Initial State 
const initialState = {
    value: 0,
    counter: 1
}


// Creating Reducer Function 

function matchReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + action.payload,

        }
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.payload,
        }
    } else {
        return state;
    }
}


//Create Store
const store = Redux.createStore(matchReducer);

const render = () => {
    const state = store.getState();
    if (state.value < 0) {
        state.value = 0
        singleResultEl.innerText = 0
        return

    } else {

        singleResultEl.innerText = state.value;
    }

    singleResultEl.innerText = state.value;
};

render()

store.subscribe(render)

// Ketbord Enter Press Event 

function add(ele) {
    if (event.key === 'Enter') {
        // console.log(ele.value);          
        const num = parseInt(ele.value)
        store.dispatch({
            type: "increment",
            payload: num
        });

        ele.value = ""
    }

}

function remove(ele) {

    if (event.key === 'Enter') {
        const num = parseInt(ele.value)
        store.dispatch({
            type: "decrement",
            payload: num
        });

        ele.value = ""
    }

}


// const matchDom = () => {

//     const state = store.getState();

//     allMatchEl.innerHTML +=
//         `
//         <div class="match">
//             <div class="wrapper">
//                 <button class="lws-delete">
//                     <img src="./image/delete.svg" alt="" />
//                 </button>
//                 <h3 class="lws-matchName">Match ${state.counter + 1}</h3>
//             </div>
//             <div class="inc-dec">
//                 <div class="incrementForm">
//                     <h4>Increment</h4>
//                     <input
//                         type="number"
//                         name="increment"
//                         class="lws-increment"
//                         onkeydown="add(this)"
//                     />
//                 </div>
//                 <div class="decrementForm">
//                     <h4>Decrement</h4>
//                     <input
//                         type="number"
//                         name="decrement"
//                         class="lws-decrement"
//                         onkeydown="remove(this)"
//                     />
//                 </div>
//             </div>
//             <div class="numbers">
//                 <h2 class="lws-singleResult">00</h2>
//             </div>
//         </div>
//     `

//     store.dispatch({
//         type: "addMatch",
//     });
// }