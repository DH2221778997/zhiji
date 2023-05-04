const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  let title = ''
  if (name ==='status'||name==="searchStatus") {
    title ='状态'
  }
  if (name ==="jobType"|| name ==="searchType") {
    title = "类型"
  }
  if (name === "sort") {
    title ="排序"
  }
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {title}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
