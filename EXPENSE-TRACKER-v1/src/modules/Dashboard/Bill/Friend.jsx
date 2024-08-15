
export const Friend = ({share,friend}) => {

    const myStyle={margin:"10px",padding:"10px"}

  return (
    <div>
        <div className="row" style={myStyle}>
            <div className="col-6">
                <h5>{friend.name}</h5>
                <h6>{friend.id}</h6>
            </div>

            <div className="col-4">
                <div className="row">
                <div className="col-3">
                {share}
                </div>
                <div className="col-3">
                <h6>status </h6>
                <h5>pending</h5>
                </div>
                </div>
            </div>
         </div>
    </div>
  )
}
