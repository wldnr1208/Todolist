import CustomButton from "./CustomButton";

function User(props) {
  return (
    <div className="square-style">
      <div>
        <h2>{props.user.name}</h2>
      </div>

      <div className="mytext">{props.user.text}</div>

      <div className="totoalbutton">
        <CustomButton
          color="transparent"
          width="120px"
          height="40px"
          margin="10px"
          border="2px solid red"
          borderRadius="10px"
          onClick={() => {
            props.handleDelete(props.user.id);
          }}
        >
          삭제하기
        </CustomButton>

        <CustomButton
          color="transparent"
          width="120px"
          height="40px"
          border="2px solid green"
          borderRadius="10px"
          onClick={() => {
            props.onChangeHandler(props.user.id);
          }}
        >
          {props.user.isDone ? "취소" : "완료"}
        </CustomButton>
      </div>
    </div>
  );
}

export default User;
