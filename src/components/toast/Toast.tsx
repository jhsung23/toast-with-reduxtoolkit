import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toastSlice } from '../../redux/slices';

type Props = {
  id: number;
  content: string;
};

const Toast = ({ id, content }: Props) => {
  const dispatch = useDispatch();

  const closeToast = () => {
    dispatch(toastSlice.actions.removeToast(id));
  };

  return (
    <Container>
      {content}
      <CloseButton onClick={closeToast}>닫기</CloseButton>
    </Container>
  );
};

const Container = styled.li`
  width: 100%;
  min-height: 70px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2efff;
  position: relative;
`;

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 0.3rem;
  cursor: pointer;
`;

export default Toast;
