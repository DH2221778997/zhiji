import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Oops! 来到了知识的荒原</h3>
        <p>请求资源不存在</p>
        <Link to='/'>首页</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
