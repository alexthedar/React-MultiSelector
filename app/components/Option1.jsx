const Option1 = (props) => {
  return (
      <div>
        <input type="text"
          onChange={props.update} />
        <h1>{props.txt}</h1>
      </div>
    );
}

export default Option1
