import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import toastSlice, { ToastInterface } from '../redux/slices/toastSlice';

const DURATION = 2500;

const useToast = () => {
  const dispatch = useDispatch<AppDispatch>();
  const toastCreator = (content: string) => {
    const toast = implementToast(content);
    dispatch(toastSlice.actions.showToast(toast));
    setTimeout(() => {
      dispatch(toastSlice.actions.removeToast(toast.id));
    }, DURATION);
  };

  return toastCreator;
};

export default useToast;

const implementToast = (content: string): ToastInterface => ({ id: Date.now(), content });
