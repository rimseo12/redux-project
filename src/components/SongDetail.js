import { connect } from 'react-redux';

const songDetail = (props) => {
  if(!props.detail) {
    return <div>Please select a song!</div>
  }  
  return (
    <div>
      <h2>Details for:</h2>
      <div>Title: {props.detail.title}</div>
      <div>Duration: {props.detail.duration}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {detail: state.selectedSong }
}

export default connect(mapStateToProps)(songDetail);