# 토스트 알림을 선언적으로 다루기

원하는 string을 useToast 커스텀 훅을 사용해 쉽게 띄울 수 있는 방법을 고민하고 구현했습니다.

## 실행 예시

## 사용 방법

App을 Provider로 감쌉니다.
store는 redux의 스토어를 의미합니다.

```tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

toast를 띄워야하는 곳에 ToastContainer를 배치합니다.

그리고 toast를 띄워야 하는 상황에서 `useToast`를 호출하여 사용합니다.

```tsx
function App() {
  const toast = useToast();

  const showToast = () => {
    toast('토스트를 만들었습니다 🍞'); // like this
  };

  return (
    <>
      <main className="main">
        <button className="alert-toast-button" onClick={showToast}>
          토스트 알림 띄우기
        </button>
      </main>
      <ToastContainer />
    </>
  );
}
```
