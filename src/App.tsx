import './App.css';
import ToastContainer from './components/toast/ToastContainer';
import useToast from './hooks/useToast';

function App() {
  const toast = useToast();

  const showToast = () => {
    toast('토스트를 만들었습니다 🍞');
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

export default App;
