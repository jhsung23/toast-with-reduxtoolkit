import styled from 'styled-components';
import Toast from './Toast';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { createPortal } from 'react-dom';

const ToastContainer = () => {
  const toasts = useSelector((state: RootState) => state.toast);
  const toastElement = document.getElementById('toast') as HTMLElement;

  return createPortal(
    <Ul>
      {toasts.map(({ id, content }) => (
        <Toast key={id} id={id} content={content} />
      ))}
    </Ul>,
    toastElement
  );
};

const Ul = styled.ul`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  position: absolute;
  right: 16px;
  top: 16px;
  bottom: 0;
  padding-bottom: 16px;
  background: transparent;
`;

export default ToastContainer;
