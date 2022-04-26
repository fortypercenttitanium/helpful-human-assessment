import { useContext } from 'react';
import { DataContext } from '../context/Context';
import DetailView from '../layouts/DetailView';
import Loading from '../layouts/Loading';
import SelectorView from '../layouts/SelectorView';

function ViewController() {
  const { layout, loading, inErrorState } = useContext(DataContext);

  if (inErrorState) return <div>Error!</div>;
  if (loading) return <Loading />;

  switch (layout) {
    case 'detail':
      return <DetailView />;
    default:
      return <SelectorView />;
  }
}

export default ViewController;
