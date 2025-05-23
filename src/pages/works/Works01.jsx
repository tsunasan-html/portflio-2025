import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Works01 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/not-found', { replace: true });
  }, [navigate]);

  return null;
};

export default Works01;
