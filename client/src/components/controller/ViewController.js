import { useContext } from 'react';
import { DataContext } from '../context/Context';
import DetailView from '../layouts/DetailView';
import Loading from '../Loading';
import ErrorState from '../ErrorState';
import SelectorView from '../layouts/SelectorView';

function ViewController() {
  const { selectedColor, loading, inErrorState } = useContext(DataContext);

  if (inErrorState) return <ErrorState />;
  if (loading) return <Loading />;

  return selectedColor ? <DetailView /> : <SelectorView />;
}

export default ViewController;
