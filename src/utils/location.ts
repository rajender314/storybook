import {useHistory } from 'react-router-dom';

export function useLocation() {
  let history = useHistory();

  function navigate(to: string, { replace = false } = {}) {
    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  }

  return {
    navigate,
  };
}
