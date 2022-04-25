import { useContext } from 'react';
import { DataContext } from '../context/Context';
import DetailView from '../layouts/DetailView';
import SelectorView from '../layouts/SelectorView';

function ViewController() {
  const { layout } = useContext(DataContext);

  switch (layout) {
    case 'detail':
      return <DetailView />;
    default:
      return <SelectorView />;
  }
}

export default ViewController;
