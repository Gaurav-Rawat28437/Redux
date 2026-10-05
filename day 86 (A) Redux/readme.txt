---------------------Redux--------------------------
🔹 1. State

👉 The data of your application

Stored inside the store
Example: number of cakes
state = 10

👉 Think: “What data I have right now?”

🔹 2. Action

👉 An object that tells what to do

Must have type
Can have payload
{ type: "BUY_CAKE", payload: 2 }

👉 Think: “What action user wants?”

🔹 3. Payload

👉 Extra data sent with action

Helps reducer know how much / what
payload: 2

👉 Think: “How many cakes?”

🔹 4. Action Creator

👉 A function that returns action

function buyCake(qty) {
  return { type: "BUY_CAKE", payload: qty };
}

👉 Why:

Cleaner code
Reusable
🔹 5. Reducer

👉 A function that updates state

Takes (state, action)
Returns new state
function reducer(state = 10, action) {
  if (action.type === "BUY_CAKE") {
    return state - action.payload;
  }
  return state;
}

👉 Rules:

No direct change (immutable)
Pure function
🔹 6. Store

👉 The central place that holds state

const store = createStore(reducer);

👉 Store can:

getState() → get data
dispatch() → send action
subscribe() → listen
🔹 7. Dispatch

👉 Sends action to store

store.dispatch(buyCake(2));

👉 Flow:
Action → Store → Reducer

🔹 8. Subscribe

👉 Runs when state changes

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

👉 Used to:

Update UI
Log changes
🔹 9. Unsubscribe

👉 Stops listening

unsubscribe();

👉 Used when:

No longer need updates
🔄 Final Flow:
Action created
Dispatch called
Reducer updates state
Store saves new state
Subscribe runs
🎯 Final One-line:

👉 Redux = predictable way to manage and update state step-by-step



--------------store------------------
When you create a store:

const store = createStore(reducer);

👉 This store is an object with built-in methods

🔑 Store Object contains:
1. getState()

👉 Returns current state (data)

store.getState();

✔ Example output:

10
2. dispatch()

👉 Sends action to reducer

store.dispatch({ type: "BUY_CAKE", payload: 2 });

✔ Updates state

3. subscribe()

👉 Listens to state changes

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

✔ Runs after every update

4. unsubscribe()

👉 Stops listening

unsubscribe();
🧠 How Store Object looks conceptually:
store = {
  getState: function(){},
  dispatch: function(){},
  subscribe: function(){}
}

👉 You don’t create this manually — Redux gives it

🔄 Store Flow:
Store holds state
dispatch() sends action
Reducer updates state
getState() returns new data
subscribe() runs
🎯 Final One-line:

👉 Store Object = controller of Redux (holds data + controls updates)




----------------------combineReducers------------------

👉 Multiple items in shop

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceReducer
});

👉 Different chefs for different items