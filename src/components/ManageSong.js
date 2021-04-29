import { manageSong } from '../actions';

const handleSubmit = (e) => {
  //e.preventDefault();
  // const title = this.refs.title.value;
  // const duration = this.refs.duration.value;
  // manageSong(title, duration);
  // this.refs.addForm.reset();
}
const AddSong = () => {
  return (
    <div className="add">
      <form ref="addForm" className="add-form" onSubmit={handleSubmit()}>
        <input type="text" ref="title" placeholder="title"/>
        <input type="text" ref="duration" placeholder="duration"/>
        <input type="submit" hidden/>
      </form>
    </div>
  )
}

export default AddSong;