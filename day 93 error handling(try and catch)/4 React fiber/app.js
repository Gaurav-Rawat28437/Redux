// What is React Fiber
// 1. What it is

// 👉 React Fiber = new internal engine of React
// 👉 It controls how rendering happens

// 2. What changed
// Old React ❌
// Whole UI update in one go
// Blocking (UI freeze)
// Fiber React ✅
// UI update in small pieces (units of work)
// Can pause, resume, prioritize
// 3. What about diffing & reconciliation 🧠

// 👉 Still happens in both
// 👉 Fiber just makes it:

// non-blocking
// step-by-step
// 4. Simple idea ⚡

// 👉 Fiber = break big work → do in parts → keep UI smooth

// 5. Analogy 🚗
// Old → finish full work, then respond
// Fiber → do little work, check, continue
// 6. One-line

// 👉 Fiber = new React engine that makes rendering fast, smooth, and non-blocking

// What it is

// 👉 React Fiber = internal reconciliation engine introduced in React 16

// 2. What changed
// Old React ❌
// Whole rendering in one go
// Blocking (UI can freeze)
// Fiber React ✅
// Breaks work into small units (fibers)
// Can pause, resume, cancel
// Supports priority-based updates
// 3. How it works (core idea) 🧠

// 👉 Each component = fiber (unit of work)
// 👉 React:

// compares old vs new (diffing)
// updates DOM (reconciliation)
// 👉 But now done step-by-step (incremental rendering)
// 4. Why it matters ⚡
// Smooth UI (no lag)
// Better performance
// Handles heavy apps easily
// 5. One-line

// 👉 Fiber is a reimplementation of React’s reconciliation that enables incremental, non-blocking rendering with prioritization