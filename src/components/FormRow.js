const FormRow = ({ type, name, value, handleChange, labelText }) => {
  let title = ''
  if (name ==='name') {
    title ='名'
  }
  if (name ==='password') {
    title ='密码'
  }
  if (name ==='email') {
    title ='邮件'
  }
  if (name ==='lastName') {
    title='姓'
  }
  if (name ==="location"||name ==="position") {
    title="地址"
  }
  if (name ==="company") {
    title = "公司"
  }
  if (name ==="jobLocation") {
    title = "公司地址"
  }
  if (name ==="search") {
    title = "搜索"
  }
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {title}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};
export default FormRow;
