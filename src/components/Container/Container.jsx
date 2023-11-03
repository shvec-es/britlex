import s from './Container.module.css';

const Container = ({ clas = '', children }) => {
  return <div className={`${s.container} ${clas}`}>{children}</div>;
};

export default Container;
